import path from "path";
import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";

export async function getAllPosts(dir) {
  const filesPath = path.join("posts", dir);
  const files = fs.readdirSync(filesPath);
  const allPosts = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(".md", "");
      const sourcePath = path.join("posts", dir, file);
      const source = fs.readFileSync(sourcePath, "utf-8");
      const mdxSource = await serialize(source, { parseFrontmatter: true });
      const { frontmatter } = mdxSource;
      return { slug, frontmatter };
    })
  );
  return allPosts;
}
