import * as React from "react";
import fs from "fs";
import path from "path";
import Box from "../../components/Box";
import Text from "../../components/Text";
import Date from "../../components/Date";
import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";

const Callout = (props) => {
  return (
    <Box
      paddingX={5}
      paddingY={2}
      marginX={[0, 0, 0, -6]}
      marginY={5}
      border={1}
      borderRadius={1}
    >
      {props.children}
    </Box>
  );
};

const PostPage = (props) => {
  const { frontmatter, code } = props;
  const MDXComponent = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <Box>
      <Text color="accent">
        <Date value={frontmatter.date} />
      </Text>
      <h1>{frontmatter.title}</h1>
      <Text color="foreground" fontSize={[0, 1]}>
        {frontmatter.summary}
      </Text>
      <div className="markdown-container">
        <MDXComponent
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
  const sourcePath = path.join("posts", "writing", `${slug}.md`);
  const source = fs.readFileSync(sourcePath, "utf-8");
  // const { data: frontmatter, content } = matter(source);
  const result = await bundleMDX({ source });
  const { frontmatter, code } = result;

  return {
    props: {
      frontmatter,
      code,
    },
  };
}

export default PostPage;
