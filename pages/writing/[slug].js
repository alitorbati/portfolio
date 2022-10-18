import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Box from "../../components/Box";

const PostPage = (props) => {
  const { content } = props;

  return (
    <Box>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>■
    </Box>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts", "writing"));
  const paths = files.map((filename) => {
    const slug = filename.replace(".md", "");
    return { params: { slug } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(props) {
  const { slug } = props.params;
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", "writing", `${slug}.md`),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}

export default PostPage;
