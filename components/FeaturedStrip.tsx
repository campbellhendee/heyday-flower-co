import Image from 'next/image';

const featured = [
  { src: '/images/gallery/weddings/weddings-003.jpg', alt: 'Luxury bridal bouquet' },
  { src: '/images/gallery/corporate/corporate-005.jpg', alt: 'Executive suite arrangement' },
  { src: '/images/gallery/weddings/weddings-007.jpg', alt: 'Wedding ceremony design' },
  { src: '/images/gallery/private/private-009.jpg', alt: 'Intimate dinner florals' },
  { src: '/images/gallery/daily/daily-002.jpg', alt: 'Lobby installation' },
  { src: '/images/gallery/weddings/weddings-011.jpg', alt: 'Modern wedding design' }
];

export default function FeaturedStrip() {
  return (
    <section className="featured-strip" style={{ marginBlock: 'clamp(3rem, 6vw, 5rem)' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Recent Work</h2>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${featured.length}, minmax(280px, 1fr))`,
          gap: 'var(--gutter)',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          scrollPadding: 'var(--gutter)',
          paddingInline: 'var(--gutter)',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {featured.map((img) => (
          <figure
            key={img.src}
            style={{
              margin: 0,
              scrollSnapAlign: 'start',
              borderRadius: 'var(--radius)',
              overflow: 'hidden',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              aspectRatio: '4/5'
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={400}
              height={500}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              loading="lazy"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}

