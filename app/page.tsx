import HeroRotator from '@/components/HeroRotator';
import CategoryCards from '@/components/CategoryCards';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import FeaturedStrip from '@/components/FeaturedStrip';
import { homeHero } from '@/lib/heroes';

export default function Page() {
  return (
    <>
      <HeroRotator
        images={homeHero}
        eyebrow="Houston's Premier Florist"
        title="Where nature meets luxury"
        sub="Bespoke floral design for discerning clients who value artistry, quality, and impeccable service."
      />
      <section className="container" style={{ marginTop: '3rem', marginBottom: '2rem' }}>
        <p style={{ maxWidth: '65ch', fontSize: '1.125rem', lineHeight: '1.8' }}>
          From intimate gatherings to grand celebrations, we craft unforgettable floral experiences
          that reflect your unique style and story. Every stem is carefully selected, every arrangement
          thoughtfully composed.
        </p>
      </section>
      <CategoryCards />
      <TestimonialCarousel />
      <FeaturedStrip />
      <section className="container" style={{ marginBottom: '3rem' }}>
        <div className="cta">
          <h2 style={{ margin: 0, fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}>Ready to elevate your next event?</h2>
          <p style={{ margin: '.6rem 0 1.2rem', color: 'var(--ink-2)', fontSize: '1.125rem' }}>
            Let's create something extraordinary together.
          </p>
          <a className="button--primary" href="/contact">Start Your Inquiry</a>
        </div>
      </section>
    </>
  );
}

