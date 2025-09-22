import { sortByDate } from "../../utils/sortByDate";
import { getAllPosts } from "../../utils/getAllPosts";
import { getContentCategories, isValidCategory } from "../../utils/getContentCategories";
import ContentList from "../../components/ContentList";

const CategoryPage = (props) => {
  const { posts, category } = props;
  return <ContentList posts={posts} pathBase={category} />;
};

export default CategoryPage;

export async function getStaticPaths() {
  const categories = getContentCategories();
  
  const paths = categories.map((category) => ({
    params: { category },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { category } = params;
  
  // Validate that this is a real category
  if (!isValidCategory(category)) {
    return {
      notFound: true,
    };
  }

  try {
    const allPosts = await getAllPosts(category);
    const posts = allPosts.sort(sortByDate);

    return {
      props: {
        posts,
        category,
      },
    };
  } catch (error) {
    console.error(`Error loading posts for category ${category}:`, error);
    return {
      notFound: true,
    };
  }
}