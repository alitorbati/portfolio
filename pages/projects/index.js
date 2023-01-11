import path from "path";
import { sortByDate } from "../../utils/sortByDate";
import { getAllPosts } from "../../utils/getAllPosts";
import Grid from "../../components/foundations/Grid";
import CollectionItem from "../../components/CollectionItem";

const Projects = (props) => {
  const { posts } = props;

  return (
    <Grid gap={5} gridTemplateColumns={["1fr", "repeat(2, 1fr)"]}>
      {posts.map((post) => {
        const href = path.join("projects", post.slug);

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

export default Projects;

export async function getStaticProps() {
  const allPosts = await getAllPosts("projects");
  const posts = allPosts.sort(sortByDate);

  return {
    props: {
      posts,
    },
  };
}
