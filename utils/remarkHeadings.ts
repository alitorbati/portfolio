import GithubSlugger from "github-slugger";
import { toString } from "mdast-util-to-string";
import type { Root } from "mdast";
import type { Heading } from "../types/content";

// Posts author their top-level sections as `#` and work down from there, but
// PostHeader already renders the frontmatter title as the page's h1. Shift every
// heading down one level so the rendered outline is correct.
//
// This runs in the mdast rather than in the MDX component map so that everything
// downstream — rehype-slug, the syntax highlighter, the rendered markup — agrees
// on a single notion of depth. h6 has nowhere to go, so it stays put.
export const remarkShiftHeadings = () => (tree: Root) => {
  for (const node of tree.children) {
    if (node.type !== "heading" || node.depth === 6) continue;
    node.depth = (node.depth + 1) as 2 | 3 | 4 | 5 | 6;
  }
};

interface CollectOptions {
  into: Heading[];
}

// Collect the post's outline for the table of contents. Must run before
// remarkShiftHeadings so `level` is the depth as authored.
export const remarkCollectHeadings =
  ({ into }: CollectOptions) =>
  (tree: Root) => {
    const slugger = new GithubSlugger();

    for (const node of tree.children) {
      if (node.type !== "heading") continue;

      const text = toString(node);
      if (!text) continue;

      // Slug every heading in document order, even the deeper ones we don't
      // display, so the dedup suffixes match the ids rehype-slug derives from
      // the same text later in the pipeline.
      const slug = slugger.slug(text);
      if (node.depth <= 2) into.push({ level: node.depth, text, slug });
    }
  };
