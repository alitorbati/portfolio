import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Box from "../../components/Box";
import Text from "../../components/Text";
import Date from "../../components/Date";

const PostPage = (props) => {
  const { mdxSource } = props;
  const { compiledSource, frontmatter } = mdxSource;

  return (
    <Box>
      <Text color="accent">
        <Date value={frontmatter.date} />
      </Text>
      {frontmatter.url ? (
        <>
          {" · "}
          <a href={frontmatter.url} target="_blank" rel="noreferrer">
            View live project
          </a>
        </>
      ) : null}
      <h1>{frontmatter.title}</h1>
      <Text>{frontmatter.summary}</Text>
      <div className="markdown-container">
        <MDXRemote compiledSource={compiledSource} frontmatter={frontmatter} />
      </div>
      <Text color="foreground">■</Text>
    </Box>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts", "projects"));
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
    path.join("posts", "projects", `${slug}.md`),
    "utf-8"
  );
  const mdxSource = await serialize(source, { parseFrontmatter: true });

  return {
    props: {
      mdxSource,
    },
  };
}

export default PostPage;
