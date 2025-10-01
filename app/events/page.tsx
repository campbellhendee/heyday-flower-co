import HeroRotator from '@/components/HeroRotator';
import GalleryGrid from '@/components/GalleryGrid';
import { corporateHero } from '@/lib/heroes';
import { corporate } from '@/lib/galleries/corporate';
import { privateEvents } from '@/lib/galleries/private';

export const metadata = {
  title: 'Events',
  description:
    'Brand-forward installations for launches, dinners, and private celebrations — tailored to your logistics.'
};

export default function Page() {
  const pics = [...corporate, ...privateEvents];
  return (
    <>
      <HeroRotator
        images={corporateHero}
        eyebrow="Events"
        title="Concept-driven florals for remarkable moments"
        sub="Corporate activations, dinners, and private events — produced with precision."
      />
      <section className="container" style={{ marginTop: '2rem' }}>
        <p><strong>Overview:</strong> corporate • launches • dinners • private events</p>
      </section>
      <GalleryGrid pics={pics} />
      <section className="container" style={{ margin: '2rem 0 3rem' }}>
        <div className="cta">
          <a className="button--primary" href="/contact">Inquire</a>
        </div>
      </section>
    </>
  );
}

