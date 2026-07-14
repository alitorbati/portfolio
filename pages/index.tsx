import Link from "next/link";
import { Emoji } from "iconoir-react";
import { motion } from "framer-motion";
import Box from "../components/foundations/Box";
import Flexbox from "../components/foundations/Flexbox";
import Text from "../components/foundations/Text";
import CollectionItem from "../components/CollectionItem";
import { getAllPosts } from "../utils/getAllPosts";
import { paths } from "../components/Navigation";
import type { GetStaticProps } from "next";
import type { Feature, Post } from "../types/content";

const item = {
  hidden: { opacity: 0, y: 10 },
  shown: { opacity: 1, y: 0 },
};

interface IndexProps {
  features: Feature[];
}

const Index = (props: IndexProps) => {
  const { features } = props;

  return (
    <Box>
      <motion.div
        initial="hidden"
        animate="shown"
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.div variants={item}>
          <Text as="h1" marginTop={0} marginBottom={0}>
            Ali Torbati
          </Text>
        </motion.div>
        <motion.div variants={item}>
          <Text as="h2" marginTop={0}>
            Software engineer, designer and creative technologist.
          </Text>
        </motion.div>
        <Box marginBottom={5} />
        <motion.div variants={item}>
          <Box>
            I am a UX Engineer with over ten years of practical experience designing and implementing interfaces. I also teach a university course for students interested in experimental and generative design. I have a highly developed eye and taste for design and UX.
          </Box>
        </motion.div>
        <Box marginBottom={5} />
        <motion.div variants={item}>
          <Box>
            Sometimes I share long-form writing as{" "}
            <Link href="/articles">articles</Link>. Undertakings that required a
            team or several distinct technologies are documented as{" "}
            <Link href="/projects">projects</Link>. Smaller{" "}
            <Link href="/sketches">sketches</Link> are code experiments to learn
            a new skill or convey an idea. I get paid to build web stuff, as
            noted in my <Link href="/career">career</Link>{" "}
            highlights. If any of
            this resonates with you, you&apos;re welcome to{" "}
            <Link href="/contact">contact</Link> me <Emoji />
          </Box>
        </motion.div>
        <Box marginBottom={6} />
        <motion.div variants={item}>
          <Text as={"h2"}>Featured posts</Text>
        </motion.div>
        <Box marginBottom={3} />
        <Flexbox gap={3} flexDirection={["column", "row"]}>
          {features.map((feature, index) => {
            const path = paths.find(
              (path) => path.href.replace("/", "") === feature.category
            );
            return (
              <Box
                as={motion.div}
                variants={item}
                key={index}
                borderRadius={1}
                border={1}
                padding={3}
                style={{ flex: "1" }}
              >
                {path?.icon} {path?.name}
                <Box marginBottom={5} />
                <CollectionItem
                  href={feature.href}
                  frontmatter={feature.frontmatter}
                  isStacked
                />
              </Box>
            );
          })}
        </Flexbox>
      </motion.div>
    </Box>
  );
};

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const findFeatured = (posts: Post[]): Post => {
    const post = posts.find((p) => p.frontmatter.featured);
    if (!post) {
      throw new Error("No featured post found");
    }
    return post;
  };

  const featuredArticle = findFeatured(await getAllPosts("articles"));
  const featuredProject = findFeatured(await getAllPosts("projects"));
  const featuredSketch = findFeatured(await getAllPosts("sketches"));

  const features: Feature[] = [
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
};

export default Index;
