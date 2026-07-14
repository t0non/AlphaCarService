import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    // explicitly allow AI bots as requested by SEO strategy
    host: 'https://alphacarservicebh.com',
    sitemap: 'https://alphacarservicebh.com/sitemap.xml',
  };
}
