import HeroRotator from '@/components/HeroRotator';
import { corporateHero } from '@/lib/heroes';
import GalleryGrid from '@/components/GalleryGrid';
import { corporate } from '@/lib/galleries/corporate';

export const metadata = {
  title: 'Corporate Events',
  description:
    'Entrances, stages, step-and-repeats, and VIP lounges tailored to your palette.'
};

export default function Page() {
  return (
    <>
      <HeroRotator
        images={corporateHero}
        eyebrow="Corporate Events"
        title="Brand-forward installations for remarkable moments"
        sub="Entrances, stages, step-and-repeats, and VIP lounges tailored to your palette."
      />
      <section className="container" style={{ marginTop: '2rem' }}>
        <p><strong>Overview:</strong> entrances • stages • lounges • step-and-repeats</p>
      </section>
      <GalleryGrid pics={corporate} />
      <section className="container" style={{ margin: '2rem 0 3rem' }}>
        <div className="cta">
          <a className="button--primary" href="/contact">Start Inquiry</a>
        </div>
      </section>
    </>
  );
}

