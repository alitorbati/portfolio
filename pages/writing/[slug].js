import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Box from "../../components/Box";
import Text from "../../components/Text";
import Date from "../../components/Date";

const Callout = (props) => {
  return (
    <Box
      paddingX={4}
      marginY={5}
      backgroundColor="hint"
      borderRadius="5px"
      border={0} // border forces proper margin
    >
      {props.children}
    </Box>
  );
};

const PostPage = (props) => {
  const { mdxSource } = props;
  const { compiledSource, frontmatter } = mdxSource;

  return (
    <Box>
      <Text color="accent">
        <Date value={frontmatter.date} />
      </Text>
      <h1>{frontmatter.title}</h1>
      <Text>{frontmatter.summary}</Text>
      <div className="markdown-container">
        <MDXRemote
          compiledSource={compiledSource}
          frontmatter={frontmatter}
          components={{
            Callout,
          }}
        />
      </div>
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
  const mdxSource = await serialize(source, { parseFrontmatter: true });

  return {
    props: {
      mdxSource,
    },
  };
}

export default PostPage;
