import { BlogPost } from '@/types/blog';

// Static blog posts - currently empty, ready for CMS content
// Posts will be fetched from GHL API or RSS feed when configured
export const staticBlogPosts: BlogPost[] = [];

// Export function to get static blog posts
export function getStaticBlogPosts(): BlogPost[] {
  return staticBlogPosts;
}
