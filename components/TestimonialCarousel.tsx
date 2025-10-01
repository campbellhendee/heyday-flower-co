"use client";

import { useEffect, useState, useRef } from 'react';

const testimonials = [
  {
    quote:
      'Heyday transformed our wedding into an enchanted garden. Every detail was perfection.',
    author: 'Sarah & Michael',
    context: 'River Oaks Wedding'
  },
  {
    quote:
      'Their weekly arrangements elevate our entire office. Clients always comment on the florals.',
    author: 'Amanda Chen',
    context: 'CEO, Pinnacle Group'
  },
  {
    quote:
      'Working with Heyday is effortless. They understand our brand and deliver consistently.',
    author: 'David Park',
    context: 'Four Seasons Houston'
  }
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  return (
    <section
      className="testimonials"
      style={{
        background:
          'linear-gradient(180deg, transparent, color-mix(in srgb, var(--accent) 8%, var(--bg)))',
        padding: 'clamp(3rem, 6vw, 5rem) 0'
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container">
        <div style={{ maxWidth: '48rem', margin: '0 auto', textAlign: 'center' }}>
          <h2
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              marginBottom: '2rem',
              color: 'var(--accent-deep)'
            }}
          >
            Kind Words
          </h2>
          <div style={{ position: 'relative', minHeight: '200px' }}>
            {testimonials.map((t, i) => (
              <blockquote
                key={i}
                style={{
                  position: 'absolute',
                  width: '100%',
                  opacity: i === current ? 1 : 0,
                  transform: i === current ? 'translateY(0)' : 'translateY(10px)',
                  transition:
                    'opacity var(--duration-slow) var(--ease-out), transform var(--duration-slow) var(--ease-out)',
                  margin: 0
                }}
              >
                <p
                  style={{
                    fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                    lineHeight: '1.6',
                    fontStyle: 'italic',
                    fontFamily: 'var(--font-fraunces)',
                    marginBottom: '1.5rem'
                  }}
                >
                  "{t.quote}"
                </p>
                <footer>
                  <cite style={{ fontStyle: 'normal' }}>
                    <strong style={{ display: 'block', marginBottom: '.25rem' }}>
                      {t.author}
                    </strong>
                    <span style={{ color: 'var(--ink-2)', fontSize: '.95rem' }}>{t.context}</span>
                  </cite>
                </footer>
              </blockquote>
            ))}
          </div>
          <div
            style={{ display: 'flex', gap: '.5rem', justifyContent: 'center', marginTop: '2rem' }}
          >
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{
                  width: i === current ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  border: 'none',
                  background: i === current ? 'var(--accent-deep)' : 'var(--border)',
                  transition: 'all var(--duration-base) var(--ease-out)',
                  cursor: 'pointer'
                }}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

