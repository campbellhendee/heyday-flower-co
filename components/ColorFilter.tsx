'use client';

import { useMemo, useState } from 'react';
import GalleryGrid, { Pic } from './GalleryGrid';

const options = [
  { key: 'all', label: 'All' },
  { key: 'neutral', label: 'Neutral' },
  { key: 'blush', label: 'Blush' },
  { key: 'bold', label: 'Bold' },
  { key: 'greenery', label: 'Greenery' }
] as const;

export default function ColorFilter({ pics }: { pics: Pic[] }) {
  const [filter, setFilter] = useState<'all'|'neutral'|'blush'|'bold'|'greenery'>('all');
  const filtered = useMemo(() => {
    if (filter === 'all') return pics;
    return pics.filter(p => p.color === filter);
  }, [pics, filter]);

  return (
    <div>
      <div className="container" style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', margin: '1rem 0' }}>
        {options.map(o => (
          <button
            key={o.key}
            onClick={() => setFilter(o.key)}
            className={o.key === filter ? 'button--primary' : 'btn'}
            aria-pressed={o.key === filter}
          >
            {o.label}
          </button>
        ))}
      </div>
      <GalleryGrid pics={filtered} />
    </div>
  );
}
