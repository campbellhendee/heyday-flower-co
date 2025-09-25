import type { MetadataRoute } from 'next';

const base =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://example.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['/', '/weddings', '/corporate', '/private', '/daily', '/contact'];
  const now = new Date().toISOString();
  return paths.map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: p === '/' ? 1 : 0.7
  }));
}
