import { EntryFieldTypes } from 'contentful';

export interface BlogPostSkeleton {
  contentTypeId: 'blogPost';
  fields: {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    description: EntryFieldTypes.RichText;
    image?: EntryFieldTypes.AssetLink;
  };
}
