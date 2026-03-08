import type { Metadata } from 'next';

const APP_URL = 'https://ammaransari.dev';

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
  const fullTitle = `${title} 🤙`;
  const url = `${APP_URL}${route}`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title,
      description,
      url,
      ...(image && {
        images: [{ url: `${APP_URL}${image}`, type: 'image/jpeg' }],
      }),
    },
  };
}
