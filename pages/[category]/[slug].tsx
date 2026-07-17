import fs from "fs";
import path from "path";
import type { GetStaticPaths, GetStaticProps } from "next";
import { serialize } from "next-mdx-remote/serialize";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import rehypeShiki from "@shikijs/rehype";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import Post from "../../components/Post";
import {
  remarkCollectHeadings,
  remarkShiftHeadings,
} from "../../utils/remarkHeadings";
import { remarkColocatedAssets } from "../../utils/remarkColocatedAssets";
import { resolveFrontmatterAssets } from "../../utils/postAssets";
import { transformerTitle } from "../../utils/shikiTitle";
import { getAllPaths } from "../../utils/getAllPaths";
import { getAllPosts } from "../../utils/getAllPosts";
import {
  getContentCategories,
  isValidCategory,
} from "../../utils/getContentCategories";
import { sortByDate } from "../../utils/sortByDate";
import { getOlderNewer } from "../../utils/getOlderNewer";
import type { Frontmatter, Heading, Post as PostType } from "../../types/content";

type PostMdxSource = MDXRemoteSerializeResult<Record<string, unknown>, Frontmatter>;

interface PostPageProps {
  mdxSource: PostMdxSource;
  headings: Heading[];
  olderPost: PostType | null;
  newerPost: PostType | null;
  category: string;
  slug: string;
}

const PostPage = (props: PostPageProps) => {
  const { mdxSource, headings, olderPost, newerPost, category } = props;
  const { compiledSource, frontmatter } = mdxSource;

  return (
    <Post
      category={category}
      olderPost={olderPost}
      newerPost={newerPost}
      compiledSource={compiledSource}
      frontmatter={frontmatter}
      headings={headings}
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
    // Each post is a folder holding an index.md next to its colocated assets.
    const postDir = path.join("posts", category, slug);
    const sourcePath = path.join(postDir, "index.md");

    // Check if file exists
    if (!fs.existsSync(sourcePath)) {
      return {
        notFound: true,
      };
    }

    const source = fs.readFileSync(sourcePath, "utf-8");

    // Filled in during the serialize below: remarkCollectHeadings pushes the
    // post's outline out of the same parse that renders it.
    const headings: Heading[] = [];
    const mdxSource = await serialize<Record<string, unknown>, Frontmatter>(
      source,
      {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [
            remarkGfm,
            [remarkCollectHeadings, { into: headings }],
            remarkShiftHeadings,
            // Publish colocated body assets (images, <Video>) to public/ and
            // rewrite their refs to served URLs.
            [remarkColocatedAssets, { postDir, category, slug }],
          ],
          rehypePlugins: [
            rehypeSlug,
            [
              rehypeShiki,
              {
                // Dual themes: the light theme is applied inline and the dark
                // theme is emitted as CSS variables; a `.dark` rule in globalCss
                // swaps to them to follow the next-themes color mode.
                themes: { light: "one-light", dark: "github-dark" },
                defaultColor: "light",
                transformers: [transformerTitle()],
              },
            ],
          ],
        },
      }
    );

    // Publish colocated cover image/video (frontmatter) to public/ as well.
    resolveFrontmatterAssets(mdxSource.frontmatter, postDir, category, slug);

    // Get prev/next posts for navigation
    const allPosts = await getAllPosts(category);
    const posts = allPosts.sort(sortByDate);
    const currentIndex = posts.findIndex((post) => post.slug === slug);
    const { olderPost, newerPost } = getOlderNewer(posts, currentIndex);

    return {
      props: {
        mdxSource,
        headings,
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
