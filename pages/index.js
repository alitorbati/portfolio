import Link from "next/link";
import { Emoji } from "iconoir-react";
import Box from "../components/foundations/Box";
import Flexbox from "../components/foundations/Flexbox";
import Text from "../components/foundations/Text";
import CollectionItem from "../components/CollectionItem";
import { getAllPosts } from "../utils/getAllPosts";
import { paths } from "../components/Navigation";

const Index = (props) => {
  const { features } = props;

  return (
    <Box>
      <Text fontSize={1} fontWeight={600} color="foreground">
        Ali Torbati
      </Text>
      <Box marginBottom={0} />
      <Text color="foreground">
        Software engineer, designer and creative technologist.
      </Text>
      <Box marginBottom={5} />
      <Box>
        Sometimes I share long-form writing as{" "}
        <Link href="/articles">articles</Link>. Undertakings that required a
        team or several distinct technologies are documented as{" "}
        <Link href="/projects">projects</Link>. Smaller{" "}
        <Link href="/sketches">sketches</Link> are code experiments to learn a
        new skill or convey an idea. I get paid to build web stuff, as noted in
        my <Link href="/career">career</Link> highlights. If any of this
        resonates with you, you&apos;re welcome to{" "}
        <Link href="/contact">contact</Link> me <Emoji />
      </Box>
      <Box marginBottom={6} />
      <Text fontWeight={600} color="foreground">
        Featured posts
      </Text>
      <Box marginBottom={3} />
      <Flexbox gap={3} flexDirection={["column", "row"]}>
        {features.map((feature, index) => {
          const path = paths.find(
            (path) => path.href.replace("/", "") === feature.category
          );

          return (
            <Box
              key={index}
              borderRadius={1}
              border={1}
              padding={3}
              style={{ flex: "1" }}
            >
              {path.icon} {path.name}
              <Box marginBottom={5} />
              <CollectionItem
                href={feature.href}
                frontmatter={feature.frontmatter}
              />
            </Box>
          );
        })}
      </Flexbox>
    </Box>
  );
};

export async function getStaticProps() {
  const allArticles = await getAllPosts("articles");
  const allProjects = await getAllPosts("projects");
  const allSketches = await getAllPosts("sketches");
  const featuredArticle = allArticles.find((p) => p.frontmatter.featured);
  const featuredProject = allProjects.find((p) => p.frontmatter.featured);
  const featuredSketch = allSketches.find((p) => p.frontmatter.featured);

  const features = [
    {
      category: "articles",
      href: `/articles/${featuredArticle.slug}`,
      frontmatter: featuredArticle.frontmatter,
    },
    {
      category: "projects",
      href: `/projects/${featuredProject.slug}`,
      frontmatter: featuredProject.frontmatter,
    },
    {
      category: "sketches",
      href: `/sketches/${featuredSketch.slug}`,
      frontmatter: featuredSketch.frontmatter,
    },
  ];

  return {
    props: {
      features,
    },
  };
}

export default Index;
