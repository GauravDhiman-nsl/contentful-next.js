import { createClient } from 'contentful';

const isPreview = process.env.CONTENTFUL_PREVIEW === 'true';

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: isPreview
    ? process.env.CONTENTFUL_PREVIEW_TOKEN!
    : process.env.CONTENTFUL_ACCESS_TOKEN!,
  host: isPreview ? 'preview.contentful.com' : 'cdn.contentful.com',
});
