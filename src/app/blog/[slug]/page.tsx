import { notFound } from "next/navigation";
import { contentfulClient } from "@/lib/contentfulServer";
import type { BlogPostSkeleton } from "@/lib/types";
import BlogLayout from "@/components/blog/BlogLayout";
import BlogPostDetail from "@/components/blog/BlogPostDetail";

interface BlogPostPageProps {
  params: { slug: string };
}

async function getBlogPost(slug: string) {
  try {
    const { items } = await contentfulClient.getEntries<BlogPostSkeleton>({
      content_type: "blogPost",
      "fields.slug": slug,
      limit: 1,
      include: 2,
    });

    if (items.length === 0) return null;
    return items[0];
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

export async function generateStaticParams() {
  const { items } = await contentfulClient.getEntries<BlogPostSkeleton>({
    content_type: "blogPost",
    select: ["fields.slug", "fields.aboutAuthor"],
  });

  return items.map((item) => ({ slug: item.fields.slug }));
}

export const revalidate = 60;

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const resolvedParams = await params;
  const post = await getBlogPost(resolvedParams.slug);

  if (!post) notFound();

  return (
    <BlogLayout>
      <BlogPostDetail post={post} />
    </BlogLayout>
  );
}
