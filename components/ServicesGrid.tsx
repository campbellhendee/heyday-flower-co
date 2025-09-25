import Link from 'next/link';

const services = [
  { href: '/weddings', kicker: 'Weddings', title: 'Timeless florals for the modern couple' },
  { href: '/corporate', kicker: 'Corporate Events', title: 'Brand-forward installations' },
  { href: '/private', kicker: 'Private Events', title: 'Couture details for intimate gatherings' },
  { href: '/daily', kicker: 'Daily Arrangements', title: 'Fresh florals for homes & spaces' }
];

export default function ServicesGrid() {
  return (
    <section className="container" aria-label="Services">
      <div className="services">
        {services.map((s) => (
          <Link key={s.href} href={s.href} className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="card__body">
              <div className="card__kicker">{s.kicker}</div>
              <div className="card__title">{s.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
