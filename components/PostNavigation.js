import Link from "next/link";
import Box from "../components/foundations/Box";
import Text from "../components/foundations/Text";
import Flexbox from "../components/foundations/Flexbox";

const PostNavigation = (props) => {
  const { olderPost, newerPost } = props;

  return (
    <Flexbox gap={3} justifyContent="space-between">
      {olderPost ? (
        <Box>
          <Text>Older</Text>
          <br />
          <Link href={olderPost.slug}>{olderPost.frontmatter.title}</Link>
        </Box>
      ) : (
        <Box />
      )}
      {newerPost ? (
        <Box css={{ textAlign: "right" }}>
          <Text>Newer</Text>
          <br />
          <Link href={newerPost.slug}>{newerPost.frontmatter.title}</Link>
        </Box>
      ) : (
        <Box />
      )}
    </Flexbox>
  );
};

export default PostNavigation;
