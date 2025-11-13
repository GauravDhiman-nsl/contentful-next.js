import { contentfulClient } from '@/lib/contentfulServer';
import LiveSearch from '@/components/ui/SearchBar';
import BlogLayout from '@/components/blog/BlogLayout';
import type { BlogPostSkeleton } from '@/lib/types';


const POSTS_FETCH_LIMIT = 100;

async function getAllBlogPosts() {
  try {
    const { items } = await contentfulClient.getEntries<BlogPostSkeleton>({
      content_type: 'blogPost',
      order: ['-sys.createdAt'],
      limit: POSTS_FETCH_LIMIT,
      include: 1,
      select: [
        'fields.title',
        'fields.slug',
        'fields.image',
        'fields.description',
      ],
    });

    if (!items || items.length === 0) {
      console.warn('No blog posts found.');
      return [];
    }
    return items;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export const revalidate = 60; 

export default async function BlogListPage() {
  const posts = await getAllBlogPosts();

  return (
    <BlogLayout>
      <LiveSearch posts={posts} />
    </BlogLayout>
  );
}
