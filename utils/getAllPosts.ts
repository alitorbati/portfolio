import path from "path";
import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import type { Frontmatter, Post } from "../types/content";

export async function getAllPosts(dir: string): Promise<Post[]> {
  const filesPath = path.join("posts", dir);
  const files = fs.readdirSync(filesPath);
  const allPosts = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(".md", "");
      const sourcePath = path.join("posts", dir, file);
      const source = fs.readFileSync(sourcePath, "utf-8");
      const mdxSource = await serialize<Record<string, unknown>, Frontmatter>(
        source,
        { parseFrontmatter: true }
      );
      const { frontmatter } = mdxSource;
      return { slug, frontmatter };
    })
  );
  // Archived posts are hidden from listings, the featured fallback, and prev/next
  // navigation. Their pages still build (see getAllPaths) and stay reachable.
  return allPosts.filter((post) => !post.frontmatter.archived);
}
