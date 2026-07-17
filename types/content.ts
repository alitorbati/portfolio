export interface FrontmatterUrl {
  url: string;
  title: string;
}

export interface Frontmatter {
  title: string;
  summary: string;
  date: string;
  featured?: boolean;
  // Hidden from listings/navigation, but the page still builds and is reachable
  // by direct URL.
  archived?: boolean;
  imgUrl?: string;
  videoUrl?: string;
  url?: FrontmatterUrl;
}

export interface Post {
  slug: string;
  frontmatter: Frontmatter;
}

export interface Heading {
  // Depth as authored in the markdown: 1 for `#`, 2 for `##`. The rendered post
  // shifts every heading down a level (the frontmatter title is the page's h1),
  // but the table of contents keeps the authored numbering.
  level: number;
  text: string;
  slug: string;
}

export interface Feature {
  category: string;
  href: string;
  frontmatter: Frontmatter;
}

export interface ThemeColors {
  textAccent: string;
  text: string;
  background: string;
  backgroundAccent: string;
}

export interface Theme {
  fontSizes: string[];
  space: number[];
  sizes: number[];
  radii: number[];
  colors: ThemeColors;
  borders: string[];
}
