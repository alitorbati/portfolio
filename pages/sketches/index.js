import path from "path";
import { sortByDate } from "../../utils/sortByDate";
import { getAllPosts } from "../../utils/getAllPosts";
import Grid from "../../components/foundations/Grid";
import CollectionItem from "../../components/CollectionItem";

const Sketches = (props) => {
  const { posts } = props;

  return (
    <Grid gap={5} gridTemplateColumns={["1fr", "repeat(2, 1fr)"]}>
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
    </Grid>
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
