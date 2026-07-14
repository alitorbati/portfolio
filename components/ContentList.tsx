import path from "path";
import { motion } from "framer-motion";
import { MotionBox, staggerContainer } from "./motion";
import CollectionItem from "./CollectionItem";
import type { Post } from "../types/content";

const item = {
  hidden: { opacity: 0, y: 10 },
  shown: { opacity: 1, y: 0 },
};

interface ContentListProps {
  posts: Post[];
  pathBase: string;
}

const ContentList = (props: ContentListProps) => {
  const { posts, pathBase } = props;

  return (
    <MotionBox
      display="flex"
      // key fixes an issue where template pages don't trigger nested motion
      // animations correctly
      key={pathBase}
      initial="hidden"
      animate="shown"
      variants={staggerContainer}
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
    </MotionBox>
  );
};

export default ContentList;
