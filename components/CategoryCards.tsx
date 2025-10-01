import Link from 'next/link';
import Image from 'next/image';

const categories = [
  {
    href: '/weddings',
    title: 'Weddings',
    description: 'Timeless florals for your forever moments',
    image: '/images/gallery/corporate/corporate-010.jpg'
  },
  {
    href: '/occasions',
    title: 'Occasions',
    description: 'Intimate celebrations designed with intention',
    image: '/images/gallery/private/private-001.jpg'
  },
  {
    href: '/events',
    title: 'Events',
    description: 'Elevated installations for brands and businesses',
    image: '/images/gallery/corporate/corporate-001.jpg'
  }
];

export default function CategoryCards() {
  return (
    <section className="container" aria-label="Our Services">
      <div
        style={{
          display: 'grid',
          gap: 'calc(var(--gutter) * 1.5)',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          marginBlock: 'clamp(3rem, 6vw, 4rem)'
        }}
      >
        {categories.map((cat) => (
          <Link
            key={cat.href}
            href={cat.href}
            className="category-card"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              display: 'block',
              overflow: 'hidden',
              borderRadius: 'var(--radius)',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              transition:
                'transform var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)'
            }}
          >
            <div style={{ position: 'relative', height: 'clamp(200px, 55vw, 280px)', overflow: 'hidden' }}>
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                quality={100}
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '.5rem' }}>{cat.title}</h3>
              <p style={{ margin: 0, fontSize: '1.05rem' }}>{cat.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
