import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import Link from "next/link";
import { sortByDate } from "../../utils";
import Box from "../../components/Box";
import Flexbox from "../../components/Flexbox";

const Articles = (props) => {
  const { posts } = props;

  return (
    <Flexbox flexDirection="column" gap={5}>
      {posts.map((post) => {
        const href = path.join("articles", post.slug);

        return (
          <Box key={post.frontmatter.title}>
            <Link href={href}>{post.frontmatter.title}</Link>
            <Box />
            {post.frontmatter.summary}
          </Box>
        );
      })}
    </Flexbox>
  );
};

export default Articles;

export async function getStaticProps() {
  const filesPath = path.join("posts", "articles");
  const files = fs.readdirSync(filesPath);
  const allPosts = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(".md", "");
      const sourcePath = path.join("posts", "articles", file);
      const source = fs.readFileSync(sourcePath, "utf-8");
      const mdxSource = await serialize(source, { parseFrontmatter: true });
      const { frontmatter } = mdxSource;
      return { slug, frontmatter };
    })
  );
  const posts = allPosts.sort(sortByDate);

  return {
    props: {
      posts,
    },
  };
}
