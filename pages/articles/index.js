import { sortByDate } from "../../utils/sortByDate";
import { getAllPosts } from "../../utils/getAllPosts";
import ContentList from "../../components/ContentList";

const Articles = (props) => {
  const { posts } = props;
  return <ContentList posts={posts} pathBase="articles" />;
};

export default Articles;

export async function getStaticProps() {
  const allPosts = await getAllPosts("articles");
  const posts = allPosts.sort(sortByDate);

  return {
    props: {
      posts,
    },
  };
}
