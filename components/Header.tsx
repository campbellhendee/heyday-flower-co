'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/weddings', label: 'Weddings' },
  { href: '/corporate', label: 'Corporate Events' },
  { href: '/private', label: 'Private Events' },
  { href: '/daily', label: 'Daily Arrangements' },
  { href: '/contact', label: 'Contact' }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav">
        <Link href="/" className="brand" aria-label="Heyday Flower Co">
          Heyday Flower Co
        </Link>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '.25rem', flexWrap: 'wrap' }}>
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="btn">
              {n.label}
            </Link>
          ))}
          <Link href="/contact" className="button--primary">Start Inquiry</Link>
        </div>
      </div>
    </header>
  );
}
