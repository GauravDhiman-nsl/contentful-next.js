import { Asset, UnresolvedLink } from 'contentful';
export function isAsset(value: Asset | UnresolvedLink<'Asset'> | undefined): value is Asset {
  return !!(value && (value as Asset).fields?.file);
}

export function getAssetData(
  asset: Asset<undefined, string> | UnresolvedLink<'Asset'> | undefined,
  fallbackAlt?: string
) {
  if (!isAsset(asset)) return undefined;
  const file = asset.fields.file;
  const details = file?.details as { image?: { width: number; height: number } };
  return {
    url: file?.url ? `https:${file.url}` : undefined,
    width: details?.image?.width,
    height: details?.image?.height,
    alt: asset.fields.description || fallbackAlt || '',
  };
}
