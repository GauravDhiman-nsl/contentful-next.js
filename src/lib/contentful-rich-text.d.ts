declare module '@contentful/rich-text-plain-text-renderer' {
  import { Document } from '@contentful/rich-text-types';
  export function documentToPlainTextString(document: Document): string;
}