import type { GetStaticPaths, GetStaticProps } from "next";
import { sortByDate } from "../../utils/sortByDate";
import { getAllPosts } from "../../utils/getAllPosts";
import {
  getContentCategories,
  isValidCategory,
} from "../../utils/getContentCategories";
import ContentList from "../../components/ContentList";
import type { Post } from "../../types/content";

interface CategoryPageProps {
  posts: Post[];
  category: string;
}

const CategoryPage = (props: CategoryPageProps) => {
  const { posts, category } = props;
  return <ContentList posts={posts} pathBase={category} />;
};

export default CategoryPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = getContentCategories();

  const paths = categories.map((category) => ({
    params: { category },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  CategoryPageProps,
  { category: string }
> = async ({ params }) => {
  const { category } = params!;

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
};
