import path from "path";
import { sortByDate } from "../../utils/sortByDate";
import { getAllPosts } from "../../utils/getAllPosts";
import Flexbox from "../../components/foundations/Flexbox";
import CollectionItem from "../../components/CollectionItem";

const Sketches = (props) => {
  const { posts } = props;

  return (
    <Flexbox flexDirection="column" gap={5}>
      {posts.map((post) => {
        const href = path.join("sketches", post.slug);

        return (
          <CollectionItem
            key={post.frontmatter.title}
            frontmatter={post.frontmatter}
            href={href}
          />
        );
      })}
    </Flexbox>
  );
};

export default Sketches;

export async function getStaticProps() {
  const allPosts = await getAllPosts("sketches");
  const posts = allPosts.sort(sortByDate);

  return {
    props: {
      posts,
    },
  };
}
