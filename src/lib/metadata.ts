import type { Metadata } from 'next';

interface PageMetadataParams {
  title: string;
  description: string;
  image?: string;
  route?: string;
}

export function generatePageMetadata({
  title,
  description,
  image,
  route = '',
}: PageMetadataParams): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: route || '/',
    },
    openGraph: {
      title,
      description,
      url: route || '/',
      ...(image && {
        images: [{ url: image, type: 'image/jpeg', width: 1200, height: 630, alt: title }],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      ...(image && { images: [image] }),
    },
  };
}
