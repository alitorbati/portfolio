import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { sortByDate } from "../../utils";
import Box from "../../components/Box";
import Flexbox from "../../components/Flexbox";
import Text from "../../components/Text";

const Projects = (props) => {
  const { posts } = props;

  return (
    <Flexbox flexDirection="column" gap="4">
      {posts.map((post) => {
        const href = `/projects/${post.slug}`;
        return (
          <Box key={post.frontmatter.title}>
            <Link href={href}>
              <a>{post.frontmatter.title}</a>
            </Link>
            <Text as="p" color="accent">
              {post.frontmatter.summary}
            </Text>
          </Box>
        );
      })}
    </Flexbox>
  );
};

export default Projects;

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts", "projects"));
  const posts = files
    .map((filename) => {
      const slug = filename.replace(".md", "");
      const markdownWithMeta = fs.readFileSync(
        path.join("posts", "projects", filename),
        "utf-8"
      );
      const { data: frontmatter } = matter(markdownWithMeta);
      return { slug, frontmatter };
    })
    .filter((post) => {
      return post.frontmatter.isVisible;
    });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
