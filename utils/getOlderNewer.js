export function getOlderNewer(posts, currentIndex) {
  const isCurrentLast = currentIndex === posts.length - 1;
  const isCurrentFirst = currentIndex === 0;
  const olderIndex = isCurrentLast ? null : currentIndex + 1;
  const newerIndex = isCurrentFirst ? null : currentIndex - 1;
  const olderPost = typeof olderIndex === "number" ? posts[olderIndex] : null;
  const newerPost = typeof newerIndex === "number" ? posts[newerIndex] : null;
  return { olderPost, newerPost };
}
