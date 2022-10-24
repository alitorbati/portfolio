import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Box from "../../components/Box";
import Text from "../../components/Text";
import Date from "../../components/Date";

const PostPage = (props) => {
  const { frontmatter, content, mdxSource } = props;

  return (
    <Box>
      <Text color="accent">
        <Date value={frontmatter.date} />
      </Text>
      <h1>{frontmatter.title}</h1>
      <Text>{frontmatter.summary}</Text>
      <div className="markdown-container">
        <MDXRemote {...mdxSource} />
      </div>
      <div
        className="markdown-container"
        dangerouslySetInnerHTML={{ __html: marked(content) }}
      />
      <Text color="foreground">■</Text>
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
  const source = fs.readFileSync(
    path.join("posts", "writing", `${slug}.md`),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(source);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontmatter,
      content,
      mdxSource,
    },
  };
}

export default PostPage;
