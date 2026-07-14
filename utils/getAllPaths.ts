import path from "path";
import fs from "fs";

export interface SlugPath {
  params: { slug: string };
}

export async function getAllPaths(dir: string): Promise<SlugPath[]> {
  const files = fs.readdirSync(path.join("posts", dir));
  const paths = files.map((filename) => {
    const slug = filename.replace(".md", "");
    return { params: { slug } };
  });
  return paths;
}
