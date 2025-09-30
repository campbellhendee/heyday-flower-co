import HeroRotator from '@/components/HeroRotator';
import { privateHero } from '@/lib/heroes';
import GalleryGrid from '@/components/GalleryGrid';
import { privateEvents } from '@/lib/galleries/private';

export const metadata = {
  title: 'Private Events',
  description:
    'Tablescapes and entry moments designed for dinners, showers, and milestone celebrations.'
};

export default function Page() {
  return (
    <>
      <HeroRotator
        images={privateHero}
        eyebrow="Private Events"
        title="Intimate gatherings with couture details"
        sub="Tablescapes and entry moments designed for dinners, showers, and milestone celebrations."
      />
      <section className="container" style={{ marginTop: '2rem' }}>
        <p><strong>Overview:</strong> tablescapes • entry moments • bar installs</p>
      </section>
      <GalleryGrid pics={privateEvents} />
      <section className="container" style={{ margin: '2rem 0 3rem' }}>
        <div className="cta">
          <a className="button--primary" href="/contact">Start Inquiry</a>
        </div>
      </section>
    </>
  );
}

