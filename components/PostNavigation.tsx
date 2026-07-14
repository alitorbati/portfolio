import Link from "next/link";
import Box from "../components/foundations/Box";
import Text from "../components/foundations/Text";
import Flexbox from "../components/foundations/Flexbox";
import type { Post } from "../types/content";

interface PostNavigationProps {
  olderPost: Post | null;
  newerPost: Post | null;
}

const PostNavigation = (props: PostNavigationProps) => {
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
