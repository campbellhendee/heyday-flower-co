'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

// Your existing nav items
const nav = [
  { href: '/', label: 'Home' },
  { href: '/weddings', label: 'Weddings' },
  { href: '/corporate', label: 'Corporate Events' },
  { href: '/private', label: 'Private Events' },
  { href: '/daily', label: 'Daily Arrangements' },
  { href: '/contact', label: 'Contact' }
];

export default function Header() {
  // Tracks header styling when the page is scrolled
  const [scrolled, setScrolled] = useState(false);

  // Tracks whether the dropdown menu is open
  const [open, setOpen] = useState(false);

  // Used to detect outside-clicks to close the dropdown
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Keep your original scroll behavior
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on Escape and outside click (when open)
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };

    const onDocClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('click', onDocClick);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('click', onDocClick);
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav">
        {/* Brand / Logo */}
        <Link href="/" className="brand" aria-label="Heyday Flower Co">
          Heyday Flower Co
        </Link>

        {/* Right side actions: ONLY a hamburger button + dropdown now */}
        <div
          ref={menuRef}
          style={{ marginLeft: 'auto', position: 'relative' }}
          className="nav-actions"
        >
          {/* 3-line (hamburger) button toggling the dropdown */}
          <button
            type="button"
            className={`hamburger ${open ? 'is-active' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-controls="primary-menu"
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
          >
            {/* The three lines */}
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>

          {/* The dropdown itself; rendered only when open */}
          {open && (
            <div
              id="primary-menu"
              className="dropdown"
              role="menu"
              aria-label="Primary"
            >
              <ul className="dropdown-list">
                {/* Nav links moved into the dropdown */}
                {nav.map((n) => (
                  <li key={n.href} role="none">
                    <Link
                      role="menuitem"
                      href={n.href}
                      className="menu-link"
                      // Close the menu when a link is clicked
                      onClick={() => setOpen(false)}
                    >
                      {n.label}
                    </Link>
                  </li>
                ))}

                {/* Optional divider */}
                <li role="none" className="menu-divider" aria-hidden="true" />

                {/* Primary CTA placed at the bottom of the dropdown */}
                <li role="none">
                  <Link
                    role="menuitem"
                    href="/contact"
                    className="menu-link button"
                    onClick={() => setOpen(false)}
                  >
                    Start Inquiry
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}