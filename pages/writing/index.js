import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { sortByDate, filterIsVisible } from "../../utils";
import Box from "../../components/Box";
import Flexbox from "../../components/Flexbox";
import Text from "../../components/Text";

const Writing = (props) => {
  const { posts } = props;

  return (
    <Flexbox flexDirection="column" gap={5}>
      {posts
        .filter(filterIsVisible)
        .sort(sortByDate)
        .map((post) => {
          const href = path.join("writing", post.slug);

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
    </Flexbox>
  );
};

export default Writing;

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts", "writing"));
  const posts = files.map((file) => {
    const slug = file.replace(".mdx", "");
    const source = fs.readFileSync(
      path.join("posts", "writing", file),
      "utf-8"
    );
    const { data: frontmatter } = matter(source);
    return { slug, frontmatter };
  });

  return {
    props: {
      posts,
    },
  };
}
