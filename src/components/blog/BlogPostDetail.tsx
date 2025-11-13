"use client";
import { useRouter } from "next/navigation";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BlogPostSkeleton } from "@/lib/types";
import { Entry } from "contentful";
import {
  ArticleWrapper,
  BackButton,
  BlogImage,
  RichTextWrapper,
  Title,
} from "../styles";
import { getAssetData } from "@/lib/contentful";

interface BlogPostDetailProps {
  post: Entry<BlogPostSkeleton, undefined, string>;
}

export default function BlogPostDetail({ post }: BlogPostDetailProps) {
  const router = useRouter();
  const { title, description, image } = post.fields;
  const imageData = getAssetData(image, title);
  return (
    <ArticleWrapper>
      <Title>
        <BackButton onClick={() => router.back()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </BackButton>
        {title}
      </Title>
      {imageData?.url && (
        <BlogImage
          src={imageData.url}
          alt={imageData.alt}
          width={imageData.width}
          height={imageData.height}
          priority
        />
      )}
      <RichTextWrapper>
        {documentToReactComponents(description)}
      </RichTextWrapper>
    </ArticleWrapper>
  );
}
