export const createUrlParam = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove all special characters except spaces and hyphens
    .replace(/\s+/g, "-") // Replace spaces with single hyphens
    .replace(/-+/g, "-") // Replace multiple consecutive hyphens with a single hyphen
    .trim() // Remove leading/trailing spaces
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
