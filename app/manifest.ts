import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Heyday Flower Co',
    short_name: 'Heyday',
    description: 'Floral artistry for celebrations and spaces',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2d3a34',
    icons: [
      { src: '/icon.svg', sizes: '512x512', type: 'image/svg+xml' },
      { src: '/apple-icon.svg', sizes: '180x180', type: 'image/svg+xml' }
    ]
  };
}
