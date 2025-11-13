'use client';
import { Entry } from 'contentful';
import { BlogPostSkeleton } from '@/lib/types';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import { CardImage, CardLink, ContentWrapper, Excerpt, Title } from '../styles';
import { getAssetData } from '@/lib/contentful';

interface PostCardProps {
  post: Entry<BlogPostSkeleton, undefined, string>;
  highlightedTitle?: React.ReactNode;
}

export default function PostCard({ post, highlightedTitle }: PostCardProps) {
  const { title, slug, image, description } = post.fields;
    const plainText = description ? documentToPlainTextString(description).trim() : '';
const excerpt = plainText
  ? plainText.slice(0, 100) + '...'
  : 'Read more...';                      
  const imageData = getAssetData(image, title);

  return (
    <CardLink href={`/blog/${slug}`}>
      {imageData?.url && (
        <CardImage
          src={imageData.url}
          alt={imageData.alt}
          width={imageData.width || 400}
          height={imageData.height || 200}
          loading="lazy"
        />
      )}
      <ContentWrapper>
        <Title>{highlightedTitle || title}</Title>
        <Excerpt>{excerpt}</Excerpt>
      </ContentWrapper>
    </CardLink>
  );
}
