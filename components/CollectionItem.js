import Link from "next/link";
import Box from "./foundations/Box";

const CollectionItem = (props) => {
  const { frontmatter, href } = props;

  return (
    <Box>
      <Link href={href}>{frontmatter.title}</Link>
      <Box />
      {frontmatter.summary}
    </Box>
  );
};

export default CollectionItem;
