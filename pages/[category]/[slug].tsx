import fs from "fs";
import path from "path";
import type { GetStaticPaths, GetStaticProps } from "next";
import { serialize } from "next-mdx-remote/serialize";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import rehypeShiki from "@shikijs/rehype";
import Post from "../../components/Post";
import { getAllPaths } from "../../utils/getAllPaths";
import { getAllPosts } from "../../utils/getAllPosts";
import {
  getContentCategories,
  isValidCategory,
} from "../../utils/getContentCategories";
import { sortByDate } from "../../utils/sortByDate";
import { getOlderNewer } from "../../utils/getOlderNewer";
import type { Frontmatter, Post as PostType } from "../../types/content";

type PostMdxSource = MDXRemoteSerializeResult<Record<string, unknown>, Frontmatter>;

interface PostPageProps {
  mdxSource: PostMdxSource;
  olderPost: PostType | null;
  newerPost: PostType | null;
  category: string;
  slug: string;
}

const PostPage = (props: PostPageProps) => {
  const { mdxSource, olderPost, newerPost, category } = props;
  const { compiledSource, frontmatter } = mdxSource;

  return (
    <Post
      category={category}
      olderPost={olderPost}
      newerPost={newerPost}
      compiledSource={compiledSource}
      frontmatter={frontmatter}
    />
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = getContentCategories();
  const allPaths: { params: { category: string; slug: string } }[] = [];

  // Generate paths for all categories and their posts
  for (const category of categories) {
    try {
      const categoryPaths = await getAllPaths(category);
      const formattedPaths = categoryPaths.map((pathObj) => ({
        params: {
          category,
          slug: pathObj.params.slug,
        },
      }));
      allPaths.push(...formattedPaths);
    } catch (error) {
      console.error(`Error getting paths for category ${category}:`, error);
    }
  }

  return {
    paths: allPaths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  PostPageProps,
  { category: string; slug: string }
> = async ({ params }) => {
  const { category, slug } = params!;

  // Validate that this is a real category
  if (!isValidCategory(category)) {
    return {
      notFound: true,
    };
  }

  try {
    // Load the individual post
    const sourcePath = path.join("posts", category, `${slug}.md`);

    // Check if file exists
    if (!fs.existsSync(sourcePath)) {
      return {
        notFound: true,
      };
    }

    const source = fs.readFileSync(sourcePath, "utf-8");
    const mdxSource = await serialize<Record<string, unknown>, Frontmatter>(
      source,
      {
        parseFrontmatter: true,
        mdxOptions: {
          rehypePlugins: [
            [
              rehypeShiki,
              {
                // Dual themes: the light theme is applied inline and the dark
                // theme is emitted as CSS variables; a `.dark` rule in globalCss
                // swaps to them to follow the next-themes color mode.
                themes: { light: "one-light", dark: "github-dark" },
                defaultColor: "light",
              },
            ],
          ],
        },
      }
    );

    // Get prev/next posts for navigation
    const allPosts = await getAllPosts(category);
    const posts = allPosts.sort(sortByDate);
    const currentIndex = posts.findIndex((post) => post.slug === slug);
    const { olderPost, newerPost } = getOlderNewer(posts, currentIndex);

    return {
      props: {
        mdxSource,
        olderPost,
        newerPost,
        category,
        slug,
      },
    };
  } catch (error) {
    console.error(`Error loading post ${category}/${slug}:`, error);
    return {
      notFound: true,
    };
  }
};

export default PostPage;
