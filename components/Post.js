import { MDXRemote } from "next-mdx-remote";
import styled from "styled-components";
import Box from "./foundations/Box";
import Text from "./foundations/Text";
import PostHeader from "./PostHeader";
import PostNavigation from "./PostNavigation";
import Notice from "./Notice";
import Video from "./Video";
import { motion } from "framer-motion";

const ThreeUp = styled("div")`
  display: flex;
  gap: 20px;
`;

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
        <MDXRemote
          compiledSource={compiledSource}
          frontmatter={frontmatter}
          components={{
            Notice,
            Video,
            ThreeUp,
            h1: (props) => <h2 {...props} />,
            h2: (props) => <h3 {...props} />,
            h3: (props) => <h4 {...props} />,
            h4: (props) => <h5 {...props} />,
          }}
        />
      </motion.div>
      <Box marginBottom={4} />
      <Text>■</Text>
      <Box marginBottom={6} />
      <PostNavigation olderPost={olderPost} newerPost={newerPost} />
    </Box>
  );
};

export default Post;
