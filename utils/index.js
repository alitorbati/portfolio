export const sortByDate = (a, b) => {
  // most recent first
  return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
};

export const filterIsVisible = (a) => {
  return a.frontmatter.isVisible;
};
