const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://blogplatform-backend-mecfinityai.vercel.app/api';

// Helper function to handle API responses
const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
  }
  return response.json();
};

// API service for blogs
export const blogApi = {
  // Get all published blogs
  getPublishedBlogs: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/blogs/published`);
      return handleResponse(response);
    } catch (error) {
      console.error('Error fetching published blogs:', error);
      throw error;
    }
  },

  // Get blog by slug
  getBlogBySlug: async (slug) => {
    try {
      const response = await fetch(`${API_BASE_URL}/blogs/slug/${slug}`);
      return handleResponse(response);
    } catch (error) {
      console.error('Error fetching blog by slug:', error);
      throw error;
    }
  }
};

// Transform API blog data to match existing blog structure
export const transformBlogData = (apiBlog) => {
  return {
    id: apiBlog._id,
    title: apiBlog.title,
    slug: apiBlog.slug,
    image: apiBlog.imageUrl,
    shortDesc: apiBlog.excerpt,
    metaDescription: apiBlog.metaDescription,
    metaKeywords: apiBlog.metaKeywords,
    html: apiBlog.content || apiBlog.html || '', // Fallback to html field if content doesn't exist
    author: apiBlog.author?.name || 'Admin',
    category: apiBlog.categoryId?.name || 'General',
    tags: apiBlog.tags || [],
    publishDate: apiBlog.publishDate,
    isFeatured: apiBlog.isFeatured || false,
    status: apiBlog.status
  };
};
