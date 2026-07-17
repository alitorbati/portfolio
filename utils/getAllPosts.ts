import path from "path";
import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import type { Frontmatter, Post } from "../types/content";
import { resolveFrontmatterAssets } from "./postAssets";

export async function getAllPosts(dir: string): Promise<Post[]> {
  const base = path.join("posts", dir);
  // Each post is a folder holding an index.md alongside its colocated assets.
  const slugs = fs
    .readdirSync(base, { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isDirectory() &&
        fs.existsSync(path.join(base, entry.name, "index.md"))
    )
    .map((entry) => entry.name);

  const allPosts = await Promise.all(
    slugs.map(async (slug) => {
      const postDir = path.join(base, slug);
      const source = fs.readFileSync(path.join(postDir, "index.md"), "utf-8");
      const mdxSource = await serialize<Record<string, unknown>, Frontmatter>(
        source,
        { parseFrontmatter: true }
      );
      const { frontmatter } = mdxSource;
      // Cover image/video are authored colocated; publish them to public/ and
      // rewrite to served URLs so the listing cards resolve.
      resolveFrontmatterAssets(frontmatter, postDir, dir, slug);
      return { slug, frontmatter };
    })
  );
  // Archived posts are hidden from listings, the featured fallback, and prev/next
  // navigation. Their pages still build (see getAllPaths) and stay reachable.
  return allPosts.filter((post) => !post.frontmatter.archived);
}
