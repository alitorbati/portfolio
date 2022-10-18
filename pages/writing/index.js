import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { sortByDate } from "../../utils";
import Box from "../../components/Box";
import Flexbox from "../../components/Flexbox";
import Text from "../../components/Text";

// const articles = [
//   {
//     title: "Desire Paths and Design Systems",
//     href: "https://building.signalsciences.com/ui-desire-paths/",
//     description:
//       "Support fewer components, manage a consistent API, and provide designers and engineers the tools they need to explore openly and creatively without hacks and unmaintainable code.",
//   },
//   {
//     title: "Death to Complexity: How we Simplified Advanced Search",
//     href: "https://medium.com/@alitorbati/death-to-complexity-how-we-simplified-advanced-search-a9ab2940acf0",
//     description:
//       "A look at the design process that went into reimagining Spokeo’s Advanced Search tools. This was a weeks-long collaboration between the design and front-end teams, with support from backend for some specific API updates.",
//   },
//   {
//     title: "Reducing Visual Noise for a Better User Experience",
//     href: "https://medium.com/@alitorbati/reducing-visual-noise-for-a-better-user-experience-ae3407ff9c99",
//     description:
//       "A critical analysis of what caused confusion on Spokeo’s Person Profiles, and the changes we made to improve our most data-dense product page.",
//   },
// ];

const Writing = (props) => {
  const { posts } = props;

  return (
    <Flexbox flexDirection="column" gap="3">
      {posts.map((post) => {
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
  const posts = files
    .map((filename) => {
      const slug = filename.replace(".md", "");
      const markdownWithMeta = fs.readFileSync(
        path.join("posts", "writing", filename),
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
