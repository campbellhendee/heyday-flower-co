import HeroRotator from '@/components/HeroRotator';
import ServicesGrid from '@/components/ServicesGrid';
import { homeHero } from '@/lib/heroes';

export default function Page() {
  return (
    <>
      <HeroRotator
        images={homeHero}
        eyebrow="Heyday Flower Co"
        title="Floral artistry for celebrations and spaces"
        sub="Custom blooms crafted for weddings, events, and refined daily environments."
      />
      <section className="container" style={{ marginTop: '2rem' }}>
        <p style={{ maxWidth: '60ch' }}>
          Thoughtful palettes, architectural stems, and intentional placement. We create work
          that feels effortless and elevated—tailored to your setting.
        </p>
      </section>
      <ServicesGrid />
      <section className="container" style={{ marginBottom: '3rem' }}>
        <div className="cta">
          <h2 style={{ margin: 0 }}>Let’s design your floral story</h2>
          <p style={{ margin: '.4rem 0 1rem', color: 'var(--ink-2)' }}>
            Weddings, brand events, private gatherings, and ongoing arrangements.
          </p>
          <a className="button--primary" href="/contact">Start Inquiry</a>
        </div>
      </section>
    </>
  );
}

