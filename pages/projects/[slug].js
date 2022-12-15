import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import rehypeHighlight from "rehype-highlight";
import Post from "../../components/Post";
import { sortByDate } from "../../utils/sortByDate";

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
  const files = fs.readdirSync(path.join("posts", "projects"));
  const paths = files.map((filename) => {
    const slug = filename.replace(".md", "");
    return { params: { slug } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(props) {
  // individual
  const { slug } = props.params;
  const sourcePath = path.join("posts", "projects", `${slug}.md`);
  const source = fs.readFileSync(sourcePath, "utf-8");
  const mdxSource = await serialize(source, {
    parseFrontmatter: true,
    mdxOptions: {
      rehypePlugins: [rehypeHighlight],
    },
  });

  // prev/next
  const filesPath = path.join("posts", "projects");
  const files = fs.readdirSync(filesPath);
  const allPosts = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(".md", "");
      const sourcePath = path.join("posts", "projects", file);
      const source = fs.readFileSync(sourcePath, "utf-8");
      const mdxSource = await serialize(source, { parseFrontmatter: true });
      const { frontmatter } = mdxSource;
      return { slug, frontmatter };
    })
  );
  const posts = allPosts.sort(sortByDate);
  const currentIndex = posts.findIndex((post) => post.slug === slug);
  const isCurrentLast = currentIndex === posts.length - 1;
  const isCurrentFirst = currentIndex === 0;
  const olderIndex = isCurrentLast ? null : currentIndex + 1;
  const newerIndex = isCurrentFirst ? null : currentIndex - 1;
  const olderPost = typeof olderIndex === "number" ? posts[olderIndex] : null;
  const newerPost = typeof newerIndex === "number" ? posts[newerIndex] : null;

  return {
    props: {
      mdxSource,
      olderPost,
      newerPost,
    },
  };
}

export default PostPage;
