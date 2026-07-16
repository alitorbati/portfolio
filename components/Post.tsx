import { MDXRemote } from "next-mdx-remote";
import { motion } from "framer-motion";
import type { ComponentPropsWithoutRef } from "react";
import { Box, Flex, chakra } from "@chakra-ui/react";
import { MotionBox, staggerContainer } from "./motion";
import PostHeader from "./PostHeader";
import PostNavigation from "./PostNavigation";
import TableOfContents from "./TableOfContents";
import Notice from "./Notice";
import Video from "./Video";
import YouTube from "./YouTube";
import type { Frontmatter, Post as PostType } from "../types/content";
import type { Heading } from "../utils/getHeadings";

interface ImageRowProps extends ComponentPropsWithoutRef<"div"> {
  matchHeight?: boolean;
}

const ImageRow = ({ matchHeight, ...props }: ImageRowProps) => (
  <Flex
    gap={4}
    justifyContent="center"
    flexWrap="wrap"
    {...props}
    className="image-row"
    data-match={matchHeight ? "height" : "width"}
  />
);

const item = {
  hidden: { opacity: 0, y: 10 },
  shown: { opacity: 1, y: 0 },
};

interface PostProps {
  compiledSource: string;
  frontmatter: Frontmatter;
  category: string;
  headings: Heading[];
  olderPost: PostType | null;
  newerPost: PostType | null;
}

const Post = (props: PostProps) => {
  const { compiledSource, frontmatter, category, headings, olderPost, newerPost } =
    props;

  return (
    <MotionBox initial="hidden" animate="shown" variants={staggerContainer}>
      <MotionBox variants={item} marginBottom={6}>
        <PostHeader frontmatter={frontmatter} />
      </MotionBox>
      <TableOfContents headings={headings} />
      <motion.div className="markdown-container" variants={item}>
        <MDXRemote
          compiledSource={compiledSource}
          frontmatter={frontmatter}
          scope={{}}
          components={{
            Notice,
            Video,
            YouTube,
            ImageRow,
            h1: (props: ComponentPropsWithoutRef<"h1">) => <h2 {...props} />,
            h2: (props: ComponentPropsWithoutRef<"h2">) => <h3 {...props} />,
            h3: (props: ComponentPropsWithoutRef<"h3">) => <h4 {...props} />,
            h4: (props: ComponentPropsWithoutRef<"h4">) => <h5 {...props} />,
          }}
        />
      </motion.div>
      <Box marginBottom={4} />
      <chakra.span>■</chakra.span>
      <Box marginBottom={6} />
      <PostNavigation
        category={category}
        olderPost={olderPost}
        newerPost={newerPost}
      />
    </MotionBox>
  );
};

export default Post;
