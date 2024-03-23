import path from "path";
import Flexbox from "./foundations/Flexbox";
import CollectionItem from "./CollectionItem";
import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, y: 10 },
  shown: { opacity: 1, y: 0 },
};

const ContentList = (props) => {
  const { posts, pathBase } = props;

  return (
    <Flexbox
      as={motion.flex}
      initial="hidden"
      animate="shown"
      transition={{ staggerChildren: 0.1 }}
      flexDirection="column"
      gap={5}
    >
      {posts.map((post) => {
        const href = path.join(pathBase, post.slug);

        return (
          <motion.div key={post.frontmatter.title} variants={item}>
            <CollectionItem frontmatter={post.frontmatter} href={href} />
          </motion.div>
        );
      })}
    </Flexbox>
  );
};

export default ContentList;
