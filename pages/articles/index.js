import path from "path";
import { sortByDate } from "../../utils/sortByDate";
import { getAllPosts } from "../../utils/getAllPosts";
import Flexbox from "../../components/foundations/Flexbox";
import CollectionItem from "../../components/CollectionItem";

const Articles = (props) => {
  const { posts } = props;

  return (
    <Flexbox flexDirection="column" gap={5}>
      {posts.map((post) => {
        const href = path.join("articles", post.slug);

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
