"use client";

import { useMemo, useState } from 'react';
import GalleryGrid, { Pic as GridPic } from '@/components/GalleryGrid';
import { weddings } from '@/lib/galleries/weddings';
import { daily } from '@/lib/galleries/daily';
import { corporate } from '@/lib/galleries/corporate';
import { privateEvents } from '@/lib/galleries/private';

type Cat = 'All' | 'Weddings' | 'Occasions' | 'Events';

export default function GalleryClient() {
  const [filter, setFilter] = useState<Cat>('All');

  const all = useMemo(() => {
    const w = weddings.map(p => ({ ...p, _cat: 'Weddings' as const }));
    const o = daily.map(p => ({ ...p, _cat: 'Occasions' as const }));
    const e = [...corporate, ...privateEvents].map(p => ({ ...p, _cat: 'Events' as const }));
    return [...w, ...o, ...e];
  }, []);

  const filtered: GridPic[] = useMemo(() => {
    if (filter === 'All') return all;
    return all.filter((p: any) => p._cat === filter);
  }, [all, filter]);

  const tabs: Cat[] = ['All', 'Weddings', 'Occasions', 'Events'];

  return (
    <>
      <section className="container" style={{ marginTop: '2rem' }}>
        <h1>Gallery</h1>
        <p>Selected work across weddings, occasions, and events.</p>
        <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginTop: '1rem' }}>
          {tabs.map(t => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={filter === t ? 'button--primary' : 'btn'}
              aria-pressed={filter === t}
            >
              {t}
            </button>
          ))}
        </div>
      </section>
      <GalleryGrid pics={filtered} />
      <section className="container" style={{ margin: '2rem 0 3rem' }}>
        <div className="cta">
          <a className="button--primary" href="/contact">Start a Conversation</a>
        </div>
      </section>
    </>
  );
}

