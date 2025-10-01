"use client";

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { weddings } from '@/lib/galleries/weddings';
import { corporate } from '@/lib/galleries/corporate';
import { privateEvents } from '@/lib/galleries/private';
import { daily } from '@/lib/galleries/daily';

type Cat = 'All' | 'Weddings' | 'Occasions' | 'Events';
type Item = { src: string; alt: string; _cat: 'Weddings' | 'Occasions' | 'Events' };

export default function GalleryPage() {
  const [filter, setFilter] = useState<Cat>('All');

  const all: Item[] = useMemo(() => {
    const w = weddings.map((p) => ({ src: p.src, alt: p.alt, _cat: 'Weddings' as const }));
    const o = [
      ...privateEvents.map((p) => ({ src: p.src, alt: p.alt, _cat: 'Occasions' as const })),
      // Include daily work within Occasions for the gallery taxonomy
      ...daily.map((p) => ({ src: p.src, alt: p.alt, _cat: 'Occasions' as const }))
    ];
    const e = corporate.map((p) => ({ src: p.src, alt: p.alt, _cat: 'Events' as const }));
    return [...w, ...o, ...e];
  }, []);

  const filtered = useMemo(() => {
    if (filter === 'All') return all;
    return all.filter((p) => p._cat === filter);
  }, [all, filter]);

  const tabs: Cat[] = ['All', 'Weddings', 'Occasions', 'Events'];

  return (
    <section className="container" aria-label="Gallery">
      <h1 style={{ marginTop: '2rem' }}>Gallery</h1>
      <p style={{ marginBottom: '1rem' }}>Browse selected work across weddings, occasions, and events.</p>

      <div className="gallery-filters" role="tablist" aria-label="Gallery filters">
        {tabs.map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={filter === t}
            className={`gallery-filter ${filter === t ? 'gallery-filter--active' : ''}`}
            onClick={() => setFilter(t)}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filtered.map((p, i) => (
          <figure key={p.src + i} className="gallery-item" data-category={p._cat}>
            <Image
              src={p.src}
              alt={p.alt}
              width={800}
              height={1000}
              loading="lazy"
              sizes="(max-width: 720px) 50vw, (max-width: 1080px) 33vw, 25vw"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </figure>
        ))}
      </div>
    </section>
  );
}

