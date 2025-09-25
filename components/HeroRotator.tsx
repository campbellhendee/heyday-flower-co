'use client';

import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';

type HeroImage = { src: string; alt: string };
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

  useEffect(() => {
    if (isReduced || !auto) return;
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 5000);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [images.length, auto, isReduced]);

  return (
    <section className="hero" aria-label={title} onMouseEnter={() => setAuto(false)} onMouseLeave={() => setAuto(true)}>
      {images.map((img, i) => (
        <div key={img.src} className={`hero__img ${i === index ? 'hero__img--active' : ''}`}>
          <Image src={img.src} alt={img.alt} fill priority={i === 0} sizes="100vw" style={{ objectFit: 'cover' }} />
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
      <div className="hero__dots" aria-hidden="true">
        {images.map((_, i) => (
          <span key={i} className={`hero__dot ${i === index ? 'hero__dot--active' : ''}`} />
        ))}
      </div>
    </section>
  );
}
