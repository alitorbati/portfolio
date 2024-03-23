import { MDXRemote } from "next-mdx-remote";
import Box from "./foundations/Box";
import Text from "./foundations/Text";
import PostHeader from "./PostHeader";
import PostNavigation from "./PostNavigation";
import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, y: 10 },
  shown: { opacity: 1, y: 0 },
};

const Post = (props) => {
  const { compiledSource, frontmatter, olderPost, newerPost } = props;

  return (
    <Box
      as={motion.div}
      initial="hidden"
      animate="shown"
      transition={{ staggerChildren: 0.1 }}
    >
      <Box as={motion.div} variants={item} marginBottom={6}>
        <PostHeader frontmatter={frontmatter} />
      </Box>
      <motion.div className="markdown-container" variants={item}>
        <MDXRemote compiledSource={compiledSource} frontmatter={frontmatter} />
      </motion.div>
      <Box marginBottom={4} />
      <Text>■</Text>
      <Box marginBottom={6} />
      <PostNavigation olderPost={olderPost} newerPost={newerPost} />
    </Box>
  );
};

export default Post;
