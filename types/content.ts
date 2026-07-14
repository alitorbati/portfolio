export interface FrontmatterUrl {
  url: string;
  title: string;
}

export interface Frontmatter {
  title: string;
  summary: string;
  date: string;
  featured?: boolean;
  imgUrl?: string;
  videoUrl?: string;
  url?: FrontmatterUrl;
}

export interface Post {
  slug: string;
  frontmatter: Frontmatter;
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
