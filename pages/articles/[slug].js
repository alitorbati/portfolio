import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import rehypeHighlight from "rehype-highlight";
import Post from "../../components/Post";
import { getAllPaths } from "../../utils/getAllPaths";
import { getAllPosts } from "../../utils/getAllPosts";
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
  const paths = await getAllPaths("articles");

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(props) {
  // individual
  const { slug } = props.params;
  const sourcePath = path.join("posts", "articles", `${slug}.md`);
  const source = fs.readFileSync(sourcePath, "utf-8");
  const mdxSource = await serialize(source, {
    parseFrontmatter: true,
    mdxOptions: {
      rehypePlugins: [rehypeHighlight],
    },
  });

  // prev/next
  const allPosts = await getAllPosts("articles");
  const posts = allPosts.sort(sortByDate);
  const currentIndex = posts.findIndex((post) => post.slug === slug);
  const { olderPost, newerPost } = getOlderNewer(posts, currentIndex);

  return {
    props: {
      mdxSource,
      olderPost,
      newerPost,
    },
  };
}

export default PostPage;
