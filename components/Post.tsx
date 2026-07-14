import { MDXRemote } from "next-mdx-remote";
import { motion } from "framer-motion";
import type { ComponentPropsWithoutRef } from "react";
import { Box, Flex, chakra } from "@chakra-ui/react";
import { MotionBox, staggerContainer } from "./motion";
import PostHeader from "./PostHeader";
import PostNavigation from "./PostNavigation";
import Notice from "./Notice";
import Video from "./Video";
import type { Frontmatter, Post as PostType } from "../types/content";

const ThreeUp = (props: ComponentPropsWithoutRef<"div">) => (
  <Flex gap="20px" {...props} />
);

const item = {
  hidden: { opacity: 0, y: 10 },
  shown: { opacity: 1, y: 0 },
};

interface PostProps {
  compiledSource: string;
  frontmatter: Frontmatter;
  category: string;
  olderPost: PostType | null;
  newerPost: PostType | null;
}

const Post = (props: PostProps) => {
  const { compiledSource, frontmatter, category, olderPost, newerPost } = props;

  return (
    <MotionBox initial="hidden" animate="shown" variants={staggerContainer}>
      <MotionBox variants={item} marginBottom={6}>
        <PostHeader frontmatter={frontmatter} />
      </MotionBox>
      <motion.div className="markdown-container" variants={item}>
        <MDXRemote
          compiledSource={compiledSource}
          frontmatter={frontmatter}
          scope={{}}
          components={{
            Notice,
            Video,
            ThreeUp,
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
