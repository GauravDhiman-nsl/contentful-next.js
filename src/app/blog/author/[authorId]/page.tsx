import { contentfulClient } from "@/lib/contentfulServer";
import BlogLayout from "@/components/blog/BlogLayout";
import { notFound } from "next/navigation";
import type { BlogPostSkeleton } from "@/lib/types";
import PostList from "@/components/layout/PostList";
import { AllAuthorPosts } from "@/components/styles";

interface AuthorPostsPageProps {
  params: Promise<{ authorId: string }>;
}

async function getPostsByAuthor(authorId: string) {
  try {
    const { items } = await contentfulClient.getEntries<BlogPostSkeleton>({
      content_type: "blogPost",
      "fields.aboutAuthor.sys.id": authorId,
      order: ["-sys.createdAt"],
      include: 2,
    });
    return items || [];
  } catch (error) {
    console.error("Failed to fetch posts for author:", error);
    return [];
  }
}


export default async function AuthorPostsPage({ params }: AuthorPostsPageProps) {
 const resolvedParams = await params;
  const posts = await getPostsByAuthor(resolvedParams.authorId);

  if (!posts.length) notFound();
 let authorName = "Unknown Author";
const firstAuthor = posts[0]?.fields?.aboutAuthor;
if (firstAuthor && "fields" in firstAuthor) {
  authorName = firstAuthor.fields.name ?? "Unknown Author";
}

  return (
    <BlogLayout>
      <AllAuthorPosts>{"All Posts by Author:"} <span> {authorName}</span></AllAuthorPosts>
      <PostList posts={posts} />
    </BlogLayout>
  );
}
