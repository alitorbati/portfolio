import Link from "next/link";
import Box from "./foundations/Box";
import Text from "./foundations/Text";
import Date from "./Date";

const PostHeader = (props) => {
  const { frontmatter } = props;

  return (
    <Box>
      <h1>{frontmatter.title}</h1>
      <Text color="textAccent">{frontmatter.summary}</Text>
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
