import { sortByDate } from "../../utils/sortByDate";
import { getAllPosts } from "../../utils/getAllPosts";
import ContentList from "../../components/ContentList";

const Projects = (props) => {
  const { posts } = props;
  return <ContentList posts={posts} pathBase="projects" />;
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
