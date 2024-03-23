import Link from "next/link";
import Box from "./foundations/Box";
import { motion } from "framer-motion";

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
