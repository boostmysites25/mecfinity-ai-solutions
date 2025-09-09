import { useQuery } from '@tanstack/react-query';
import { blogApi, transformBlogData } from '../services/api';
import { blogs as localBlogs } from '../data/blogs';
import { createUrlParam } from '../utils/helper';

// Query keys for better cache management
export const blogQueryKeys = {
  all: ['blogs'],
  published: () => [...blogQueryKeys.all, 'published'],
  bySlug: (slug) => [...blogQueryKeys.all, 'slug', slug],
};

// Hook to get all published blogs
export const usePublishedBlogs = () => {
  return useQuery({
    queryKey: blogQueryKeys.published(),
    queryFn: async () => {
      try {
        const response = await blogApi.getPublishedBlogs();
        // Transform API data to match existing blog structure
        const transformedBlogs = response.blogs.map(transformBlogData);
        return {
          blogs: transformedBlogs,
          totalCount: response.totalCount,
          currentPage: response.currentPage,
          totalPages: response.totalPages
        };
      } catch (error) {
        // Fallback to local data if API fails
        console.warn('API failed, using local blog data:', error.message);
        return {
          blogs: localBlogs,
          totalCount: localBlogs.length,
          currentPage: 1,
          totalPages: 1
        };
      }
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
    retry: 1, // Reduced retry since we have fallback
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};

// Hook to get a single blog by slug
export const useBlogBySlug = (slug) => {
  return useQuery({
    queryKey: blogQueryKeys.bySlug(slug),
    queryFn: async () => {
      try {
        const response = await blogApi.getBlogBySlug(slug);
        return transformBlogData(response.blog || response);
      } catch (error) {
        // Fallback to local data if API fails
        console.warn('API failed, using local blog data:', error.message);
        const localBlog = localBlogs.find(blog => 
          blog.slug === slug || createUrlParam(blog.title) === slug
        );
        if (!localBlog) {
          throw new Error('Blog not found');
        }
        return localBlog;
      }
    },
    enabled: !!slug, // Only run query if slug is provided
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 15 * 60 * 1000, // 15 minutes
    retry: 1, // Reduced retry since we have fallback
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};
