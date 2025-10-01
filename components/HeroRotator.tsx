'use client';

import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';

type HeroImage = { src: string; alt: string; position?: string; quality?: number };
type Props = {
  images: HeroImage[];
  eyebrow: string;
  title: string;
  sub: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export default function HeroRotator({ images, eyebrow, title, sub, ctaHref = '/contact', ctaLabel = 'Start Inquiry' }: Props) {
  const [index, setIndex] = useState(0);
  const [auto, setAuto] = useState(true);
  const isReduced = useMemo(() => typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches, []);
  const timer = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);
  const multiple = images.length > 1;

  useEffect(() => {
    if (isReduced || !auto || !multiple) return;
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3000);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [images.length, auto, isReduced, multiple]);

  // Keyboard navigation (Left/Right arrows)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!multiple) return;
      if (e.key === 'ArrowRight') {
        setAuto(false);
        setIndex((i) => (i + 1) % images.length);
      } else if (e.key === 'ArrowLeft') {
        setAuto(false);
        setIndex((i) => (i - 1 + images.length) % images.length);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [images.length, multiple]);

  const prev = () => {
    if (!multiple) return;
    setAuto(false);
    setIndex((i) => (i - 1 + images.length) % images.length);
  };
  const next = () => {
    if (!multiple) return;
    setAuto(false);
    setIndex((i) => (i + 1) % images.length);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartX.current || !multiple) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  return (
    <section
      className="hero"
      aria-label={title}
      onMouseEnter={() => setAuto(false)}
      onMouseLeave={() => setAuto(true)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{ touchAction: 'pan-y' }}
    >
      {images.map((img, i) => (
        <div key={img.src} className={`hero__img ${i === index ? 'hero__img--active' : ''}`}>
          <Image
            src={img.src}
            alt={img.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            quality={img.quality ?? 90}
            style={{ objectFit: 'cover', objectPosition: img.position || '50% 50%' }}
          />
        </div>
      ))}
      <div className="hero__overlay" />
      <div className="hero__inner container">
        <div className="hero__copy">
          <span className="hero__eyebrow">{eyebrow}</span>
          <h1 className="hero__title">{title}</h1>
          <p className="hero__sub">{sub}</p>
          <p className="hero__cta"><a className="button--primary" href={ctaHref}>{ctaLabel}</a></p>
        </div>
      </div>
      {/* Subtle prev/next controls */}
      {multiple && (
        <div className="hero__nav-desktop">
          <button
            type="button"
            className="hero__nav hero__nav--prev"
            aria-label="Previous slide"
            onClick={prev}
          >
            ‹
          </button>
          <button
            type="button"
            className="hero__nav hero__nav--next"
            aria-label="Next slide"
            onClick={next}
          >
            ›
          </button>
        </div>
      )}
      {multiple && (
        <div className="hero__dots" aria-hidden="true">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`hero__dot ${i === index ? 'hero__dot--active' : ''}`}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => { setAuto(false); setIndex(i); }}
            />
          ))}
        </div>
      )}

      {multiple && (
        <div className="hero__swipe-indicator">
          <span>Swipe for more</span>
        </div>
      )}
    </section>
  );
}
