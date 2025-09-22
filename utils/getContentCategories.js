import fs from "fs";
import path from "path";

/**
 * Get all content categories by scanning the posts directory
 * Returns an array of subdirectory names (e.g., ['articles', 'projects', 'sketches'])
 */
export const getContentCategories = () => {
  const postsDirectory = path.join(process.cwd(), "posts");
  
  try {
    const categories = fs
      .readdirSync(postsDirectory, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name)
      .sort();
    
    return categories;
  } catch (error) {
    console.error("Error reading posts directory:", error);
    return [];
  }
};

/**
 * Check if a category exists in the posts directory
 */
export const isValidCategory = (category) => {
  const categories = getContentCategories();
  return categories.includes(category);
};

/**
 * Get category metadata (for icons, display names, etc.)
 * This can be expanded to include custom metadata per category
 */
export const getCategoryMetadata = (category) => {
  const metadata = {
    articles: {
      name: "Articles",
      icon: "PageFlip",
      description: "Written articles and blog posts"
    },
    projects: {
      name: "Projects",
      icon: "BoxIso", 
      description: "Portfolio projects and case studies"
    },
    sketches: {
      name: "Sketches",
      icon: "Flask",
      description: "Creative sketches and experiments"
    }
  };
  
  return metadata[category] || {
    name: category.charAt(0).toUpperCase() + category.slice(1),
    icon: "Computer", // default icon
    description: `${category} content`
  };
};