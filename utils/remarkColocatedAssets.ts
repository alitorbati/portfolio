import { visit } from "unist-util-visit";
import type { Root } from "mdast";
import { isLocalAsset, publishPostAsset } from "./postAssets";

interface Options {
  postDir: string;
  category: string;
  slug: string;
}

// URL-bearing attributes on custom MDX components (e.g. <Video source="...">).
const URL_ATTRS = new Set(["src", "source", "poster"]);

// Rewrite colocated asset references in a post body to their served URLs, copying
// each file into public/ as a side effect (see postAssets). Runs on the mdast, so
// it covers both markdown images and URL attributes on MDX JSX elements — the
// paths in the compiled output are the served ones, not the authored relative refs.
export const remarkColocatedAssets =
  ({ postDir, category, slug }: Options) =>
  (tree: Root) => {
    const resolve = (ref: string) =>
      publishPostAsset(postDir, category, slug, ref);

    visit(tree, (node) => {
      const n = node as {
        type: string;
        url?: string;
        attributes?: { type: string; name?: string; value?: unknown }[];
      };

      if (n.type === "image" && isLocalAsset(n.url)) {
        n.url = resolve(n.url);
        return;
      }

      if (n.type === "mdxJsxFlowElement" || n.type === "mdxJsxTextElement") {
        for (const attr of n.attributes ?? []) {
          if (
            attr.type === "mdxJsxAttribute" &&
            attr.name !== undefined &&
            URL_ATTRS.has(attr.name) &&
            typeof attr.value === "string" &&
            isLocalAsset(attr.value)
          ) {
            attr.value = resolve(attr.value);
          }
        }
      }
    });
  };
