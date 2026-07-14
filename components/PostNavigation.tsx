import Link from "next/link";
import { Box, Flex, chakra } from "@chakra-ui/react";
import type { Post } from "../types/content";

interface PostNavigationProps {
  category: string;
  olderPost: Post | null;
  newerPost: Post | null;
}

const PostNavigation = (props: PostNavigationProps) => {
  const { category, olderPost, newerPost } = props;

  return (
    <Flex gap={3} justifyContent="space-between">
      {olderPost ? (
        <Box>
          <chakra.span>Older</chakra.span>
          <br />
          <Link href={`/${category}/${olderPost.slug}`}>
            {olderPost.frontmatter.title}
          </Link>
        </Box>
      ) : (
        <Box />
      )}
      {newerPost ? (
        <Box textAlign="right">
          <chakra.span>Newer</chakra.span>
          <br />
          <Link href={`/${category}/${newerPost.slug}`}>
            {newerPost.frontmatter.title}
          </Link>
        </Box>
      ) : (
        <Box />
      )}
    </Flex>
  );
};

export default PostNavigation;
