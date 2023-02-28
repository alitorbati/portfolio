import path from "path";
import { sortByDate } from "../../utils/sortByDate";
import { getAllPosts } from "../../utils/getAllPosts";
import Flexbox from "../../components/foundations/Flexbox";
import CollectionItem from "../../components/CollectionItem";

const Projects = (props) => {
  const { posts } = props;

  return (
    <Flexbox flexDirection="column" gap={5}>
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
    </Flexbox>
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
