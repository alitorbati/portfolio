import Link from "next/link";
import { Box, chakra } from "@chakra-ui/react";
import Date from "./Date";
import type { Frontmatter } from "../types/content";

interface PostHeaderProps {
  frontmatter: Frontmatter;
}

const PostHeader = (props: PostHeaderProps) => {
  const { frontmatter } = props;

  return (
    <Box>
      <h1>{frontmatter.title}</h1>
      <chakra.span color="textAccent">{frontmatter.summary}</chakra.span>
      <Box marginBottom={2} />
      <Date value={frontmatter.date} />
      {frontmatter.url ? (
        <>
          {" · "}
          <Link href={frontmatter.url.url} target="_blank" rel="noreferrer">
            {frontmatter.url.title}
          </Link>
        </>
      ) : null}
    </Box>
  );
};

export default PostHeader;
