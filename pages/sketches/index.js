import { sortByDate } from "../../utils/sortByDate";
import { getAllPosts } from "../../utils/getAllPosts";
import ContentList from "../../components/ContentList";

const Sketches = (props) => {
  const { posts } = props;
  return <ContentList posts={posts} pathBase="sketches" />;
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
