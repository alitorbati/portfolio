import path from "path";
import fs from "fs";

export async function getAllPaths(dir) {
  const files = fs.readdirSync(path.join("posts", dir));
  const paths = files.map((filename) => {
    const slug = filename.replace(".md", "");
    return { params: { slug } };
  });
  return paths;
}
