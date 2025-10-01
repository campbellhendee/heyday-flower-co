import HeroRotator from '@/components/HeroRotator';
import { weddingsHero } from '@/lib/heroes';
import ColorFilter from '@/components/ColorFilter';
import { weddings } from '@/lib/galleries/weddings';

export const metadata = {
  title: 'Weddings',
  description:
    'Romantic blooms, lush installations, and intentional details from welcome party to farewell brunch.',
  openGraph: {
    images: ['/images/gallery/corporate/corporate-010.jpg']
  }
};

export default function Page() {
  return (
    <>
      <HeroRotator
        images={weddingsHero}
        eyebrow="Weddings"
        title="Timeless florals for the modern couple"
        sub="Romantic blooms, lush installations, and intentional details from welcome party to farewell brunch."
      />
      <section className="container" style={{ marginTop: '2rem' }}>
        <p><strong>Overview:</strong> bouquets • ceremony installs • reception design</p>
      </section>

      <ColorFilter pics={weddings} />

      <section className="container" style={{ margin: '2rem 0 3rem' }}>
        <h2>How we work</h2>
        <p>Inquiry → Design → Production → Day-of</p>
        <div className="cta" style={{ marginTop: '1rem' }}>
          <a className="button--primary" href="/contact">Start Inquiry</a>
        </div>
      </section>
    </>
  );
}
