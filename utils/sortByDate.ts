import type { Post } from "../types/content";

export function sortByDate(a: Post, b: Post): number {
  // most recent first
  return (
    new Date(b.frontmatter.date).getTime() -
    new Date(a.frontmatter.date).getTime()
  );
}
