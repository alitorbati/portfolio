import fs from "fs";
import path from "path";
import type { GetStaticPaths, GetStaticProps } from "next";
import { serialize } from "next-mdx-remote/serialize";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import rehypeHighlight from "rehype-highlight";
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
  const { mdxSource, olderPost, newerPost } = props;
  const { compiledSource, frontmatter } = mdxSource;

  return (
    <Post
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
          rehypePlugins: [rehypeHighlight],
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
