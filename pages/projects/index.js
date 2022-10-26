import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import Link from "next/link";
import { sortByDate, filterIsVisible } from "../../utils";
import Box from "../../components/Box";
import Grid from "../../components/Grid";
import Text from "../../components/Text";

const Projects = (props) => {
  const { posts } = props;

  return (
    <Grid gap={5} gridTemplateColumns={["100%", "repeat(2, 50%)"]}>
      {posts
        .filter(filterIsVisible)
        .sort(sortByDate)
        .map((post) => {
          const href = path.join("projects", post.slug);

          return (
            <Box key={post.frontmatter.title}>
              <Link href={href}>
                <a>{post.frontmatter.title}</a>
              </Link>
              <Box />
              <Text color="accent">{post.frontmatter.summary}</Text>
            </Box>
          );
        })}
    </Grid>
  );
};

export default Projects;

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts", "projects"));
  const posts = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(".md", "");
      const sourcePath = path.join("posts", "projects", file);
      const source = fs.readFileSync(sourcePath, "utf-8");
      const mdxSource = await serialize(source, { parseFrontmatter: true });
      const { frontmatter } = mdxSource;
      return { slug, frontmatter };
    })
  );

  return {
    props: {
      posts,
    },
  };
}
