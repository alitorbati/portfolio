import fs from "fs";
import path from "path";
import type { Frontmatter } from "../types/content";

// Post assets are authored colocated with their markdown under posts/, but a
// static export (`output: "export"`) only serves files under public/. This module
// copies referenced assets into public/ at build time and returns the URL the
// browser should use. The generated tree lives under public/post-assets, which is
// gitignored — posts/ is the source of truth.
const PUBLIC_ROOT = "post-assets";

// True for a reference that points at a file sitting next to the post — i.e. not
// an absolute path, a protocol URL, a root-relative path, a fragment, or a data URI.
export function isLocalAsset(ref: string | undefined): ref is string {
  return !!ref && !/^(?:[a-z][a-z0-9+.-]*:|\/\/|\/|#|data:)/i.test(ref);
}

// Copy a colocated asset into public/ and return its served URL. Idempotent:
// re-copying the same file each build is cheap and keeps the output in sync with
// the source. The post's directory layout is preserved under the asset root.
export function publishPostAsset(
  postDir: string,
  category: string,
  slug: string,
  ref: string
): string {
  const rel = ref.replace(/^\.\//, "");
  const dest = path.join("public", PUBLIC_ROOT, category, slug, rel);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(path.join(postDir, rel), dest);
  // Asset filenames may contain spaces or other characters that need escaping in
  // a URL (e.g. "9-Logo comparison.png"). Encode each path segment so the served
  // src resolves; the copied file on disk keeps its original name.
  const encodedRel = rel.split("/").map(encodeURIComponent).join("/");
  return path.posix.join("/", PUBLIC_ROOT, category, slug, encodedRel);
}

// Publish the asset-bearing frontmatter fields (cover image, cover video),
// rewriting each colocated ref to its served URL in place.
export function resolveFrontmatterAssets(
  frontmatter: Frontmatter,
  postDir: string,
  category: string,
  slug: string
): void {
  for (const key of ["imgUrl", "videoUrl"] as const) {
    const ref = frontmatter[key];
    if (isLocalAsset(ref)) {
      frontmatter[key] = publishPostAsset(postDir, category, slug, ref);
    }
  }
}
