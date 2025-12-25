// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Astro Blog";
export const SITE_DESCRIPTION = "Welcome to my website!";

/**
 * Site deployment and build configuration
 */
export const config = {
  /** Site's deploy URL - must start with https:// or http:// */
  url: "https://www.t2del.com/",
  /** Base path for deployment (e.g. "/blog" for GitHub Pages) */
  base: "",
  /** Number of blog posts displayed per page */
  postsPerPage: 6,
  projectsPerPage: 8,
    WP_BLOG_LIST: "https://block.t2del.com/wp-json/wp/v2/posts?_embed",
    WP_BLOG_POST: "https://block.t2del.com/wp-json/wp/v2/posts",
  NUM_POSTS_ON_HOMEPAGE: 4,
  NUM_WORKS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 4,
  NUM_PROJECTS_ON_PROECTS: 8,
};