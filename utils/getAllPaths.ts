import path from "path";
import fs from "fs";

export interface SlugPath {
  params: { slug: string };
}

// Each post is a folder (posts/<category>/<slug>/) holding an index.md next to
// its colocated assets; the slug is the folder name.
export async function getAllPaths(dir: string): Promise<SlugPath[]> {
  const base = path.join("posts", dir);
  return fs
    .readdirSync(base, { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isDirectory() &&
        fs.existsSync(path.join(base, entry.name, "index.md"))
    )
    .map((entry) => ({ params: { slug: entry.name } }));
}
