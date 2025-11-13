import { Entry } from 'contentful';
import PostCard from '@/components/ui/PostCard';
import { ListGrid } from '../styles';
import { BlogPostSkeleton } from '@/lib/types';

interface PostListProps {
  posts: Entry<BlogPostSkeleton, undefined, string>[];
}

export default function PostList({ posts }: PostListProps) {
  return (
    <ListGrid>
      {posts.map((post) => (
        <PostCard key={post.sys.id} post={post} />
      ))}
    </ListGrid>
  );
}
