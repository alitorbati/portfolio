import Link from "next/link";
import Box from "../components/Box";
import Text from "../components/Text";
import Flexbox from "../components/Flexbox";

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
      ) : null}
      {newerPost ? (
        <Box style={{ textAlign: "right" }}>
          <Text>Newer</Text>
          <br />
          <Link href={newerPost.slug}>{newerPost.frontmatter.title}</Link>
        </Box>
      ) : null}
    </Flexbox>
  );
};

export default PostNavigation;
