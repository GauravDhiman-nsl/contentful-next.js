import { EntryFieldTypes, EntrySkeletonType } from 'contentful';

export type BlogPostSkeleton = EntrySkeletonType<
  {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    description: EntryFieldTypes.RichText;
    image?: EntryFieldTypes.AssetLink;
    aboutAuthor?: EntryFieldTypes.EntryLink<AuthorSkeleton>;
  },
  'blogPost'
>;

export type AuthorSkeleton = EntrySkeletonType<
  {
    name: EntryFieldTypes.Text;
    jobTitle: EntryFieldTypes.Text;
    jobDescription: EntryFieldTypes.RichText;
  },
  'author'
>;