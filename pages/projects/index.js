import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import Link from "next/link";
import { sortByDate } from "../../utils";
import Box from "../../components/Box";
import Grid from "../../components/Grid";

const Projects = (props) => {
  const { posts } = props;

  return (
    <Grid gap={5} gridTemplateColumns={["100%", "repeat(2, 50%)"]}>
      {posts.map((post) => {
        const href = path.join("projects", post.slug);

        return (
          <Box key={post.frontmatter.title}>
            <Link href={href}>{post.frontmatter.title}</Link>
            <Box />
            {post.frontmatter.summary}
          </Box>
        );
      })}
    </Grid>
  );
};

export default Projects;

export async function getStaticProps() {
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

  return {
    props: {
      posts,
    },
  };
}
