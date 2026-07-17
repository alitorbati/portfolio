import { MDXRemote } from "next-mdx-remote";
import { motion } from "framer-motion";
import { Box, chakra } from "@chakra-ui/react";
import { MotionBox, staggerContainer } from "./motion";
import PostHeader from "./PostHeader";
import PostNavigation from "./PostNavigation";
import TableOfContents from "./TableOfContents";
import ImageRow from "./ImageRow";
import Notice from "./Notice";
import Video from "./Video";
import YouTube from "./YouTube";
import type { Frontmatter, Heading, Post as PostType } from "../types/content";

// The components a post can reference by name in its markdown. This is the only
// place MDX is rendered, so it's the only place the map needs to exist.
const components = { ImageRow, Notice, Video, YouTube };

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
          components={components}
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
