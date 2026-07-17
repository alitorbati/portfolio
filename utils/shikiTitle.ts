import type { ShikiTransformer } from "@shikijs/types";

// Matches the `title="..."` part of a fence's info string, e.g.
// ```js title="Before"
const TITLE = /\btitle="([^"]*)"/;

// Render a fence's `title="..."` as a caption on the code block:
//
//   <figure class="code-figure">
//     <figcaption class="code-title">Before</figcaption>
//     <pre class="shiki">...</pre>
//   </figure>
//
// Labels like "Before"/"After" are captions on a block, not sections of the
// document, so they belong here rather than in a heading above the fence, where
// they'd land in the outline and pick up meaningless `#before-1` style anchors.
//
// @shikijs/rehype passes the fence's raw info string through as `meta.__raw`;
// it has no title support of its own.
export const transformerTitle = (): ShikiTransformer => ({
  name: "fence-title",
  root(hast) {
    const title = this.options.meta?.__raw?.match(TITLE)?.[1];
    if (!title) return;

    // At this point the tree is the single <pre> shiki just produced.
    const pre = hast.children[0];
    if (!pre || pre.type !== "element") return;

    hast.children = [
      {
        type: "element",
        tagName: "figure",
        properties: { className: ["code-figure"] },
        children: [
          {
            type: "element",
            tagName: "figcaption",
            properties: { className: ["code-title"] },
            children: [{ type: "text", value: title }],
          },
          pre,
        ],
      },
    ];
  },
});
