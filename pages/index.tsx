import Link from "next/link";
import { Smile } from "lucide-react";
import { motion } from "framer-motion";
import { Box, Flex, chakra } from "@chakra-ui/react";
import CollectionItem from "../components/CollectionItem";
import { MotionBox } from "../components/motion";
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
          <chakra.span as="h1" marginTop={0} marginBottom={0}>
            Ali Torbati
          </chakra.span>
        </motion.div>
        <motion.div variants={item}>
          <chakra.span as="h2" marginTop={0}>
            Software engineer, designer and creative technologist.
          </chakra.span>
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
            <Link href="/contact">contact</Link> me <Smile />
          </Box>
        </motion.div>
        <Box marginBottom={6} />
        <motion.div variants={item}>
          <chakra.span as={"h2"}>Featured posts</chakra.span>
        </motion.div>
        <Box marginBottom={3} />
        <Flex gap={3} flexDirection={["column", "row"]}>
          {features.map((feature, index) => {
            const path = paths.find(
              (path) => path.href.replace("/", "") === feature.category
            );
            return (
              <MotionBox
                variants={item}
                key={index}
                borderRadius={1}
                border="1"
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
              </MotionBox>
            );
          })}
        </Flex>
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
