import { MDXRemote } from "next-mdx-remote";
import Box from "./foundations/Box";
import Text from "./foundations/Text";
import PostHeader from "./PostHeader";
import PostNavigation from "./PostNavigation";

const Post = (props) => {
  const { compiledSource, frontmatter, olderPost, newerPost } = props;

  return (
    <Box>
      <PostHeader frontmatter={frontmatter} />
      <Box marginBottom={6} />
      <div className="markdown-container">
        <MDXRemote compiledSource={compiledSource} frontmatter={frontmatter} />
      </div>
      <Box marginBottom={4} />
      <Text>■</Text>
      <Box marginBottom={6} />
      <PostNavigation olderPost={olderPost} newerPost={newerPost} />
    </Box>
  );
};

export default Post;
