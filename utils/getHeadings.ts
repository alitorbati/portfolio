import GithubSlugger from "github-slugger";

export interface Heading {
  // Markdown heading depth: 1 for `#`, 2 for `##`.
  level: number;
  text: string;
  slug: string;
}

// Strip the inline markdown that can appear in a heading so the slug and label
// match the rendered text content (which is what rehype-slug hashes).
const stripInline = (text: string): string =>
  text
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/_([^_]+)_/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/\s*#+\s*$/, "")
    .trim();

// Parse a post's markdown into the headings used by the table of contents.
// Every heading is fed through a single slugger in document order so the dedup
// suffixes line up exactly with rehype-slug's ids, but only the top two levels
// are returned for display.
export const getHeadings = (source: string): Heading[] => {
  const slugger = new GithubSlugger();
  const headings: Heading[] = [];
  let inFence = false;

  for (const line of source.split("\n")) {
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;

    const match = line.match(/^(#{1,6})\s+(.*)$/);
    if (!match) continue;

    const level = match[1].length;
    const text = stripInline(match[2]);
    if (!text) continue;

    // Slug every heading to stay in sync with rehype-slug, even the deeper ones
    // we don't display.
    const slug = slugger.slug(text);
    if (level <= 2) {
      headings.push({ level, text, slug });
    }
  }

  return headings;
};
