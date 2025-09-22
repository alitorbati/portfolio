import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import rehypeHighlight from "rehype-highlight";
import Post from "../../components/Post";
import { getAllPaths } from "../../utils/getAllPaths";
import { getAllPosts } from "../../utils/getAllPosts";
import { getContentCategories, isValidCategory } from "../../utils/getContentCategories";
import { sortByDate } from "../../utils/sortByDate";
import { getOlderNewer } from "../../utils/getOlderNewer";

const PostPage = (props) => {
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

export async function getStaticPaths() {
  const categories = getContentCategories();
  const allPaths = [];

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
}

export async function getStaticProps({ params }) {
  const { category, slug } = params;

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
    const mdxSource = await serialize(source, {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [rehypeHighlight],
      },
    });

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
}

export default PostPage;