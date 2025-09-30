import Link from 'next/link';
import { BRAND } from '@/lib/constants';

export default function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <div className="brand" style={{ fontSize: '1.2rem' }}>{BRAND.name}</div>
          <p>{BRAND.region}</p>
        </div>
        <nav aria-label="Footer">
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '.5rem' }}>
            <li><Link href="/" className="footer-link">Home</Link></li>
            <li><Link href="/weddings" className="footer-link">Weddings</Link></li>
            <li><Link href="/corporate" className="footer-link">Corporate Events</Link></li>
            <li><Link href="/private" className="footer-link">Private Events</Link></li>
            <li><Link href="/daily" className="footer-link">Daily Arrangements</Link></li>
            <li><Link href="/contact" className="footer-link">Contact</Link></li>
          </ul>
        </nav>
        <div>
          <p><a className="footer-link" href={BRAND.emailHref}>Email Us</a></p>
          <p style={{ marginTop: '.5rem' }}><a className="footer-link" href={BRAND.phoneHref}>Call {BRAND.phoneHuman}</a></p>
        </div>
      </div>
      <div className="container footer-bottom">
        <div>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</div>
      </div>
    </footer>
  );
}
