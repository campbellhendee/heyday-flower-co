import HeroRotator from '@/components/HeroRotator';
import GalleryGrid from '@/components/GalleryGrid';
import { dailyHero } from '@/lib/heroes';
import { daily } from '@/lib/galleries/daily';

export const metadata = {
  title: 'Occasions',
  description:
    'Thoughtful florals for birthdays, anniversaries, sympathy, and refined daily environments.'
};

export default function Page() {
  return (
    <>
      <HeroRotator
        images={dailyHero}
        eyebrow="Occasions"
        title="Everyday moments, beautifully considered"
        sub="Daily arrangements and special-occasion florals for homes and hospitality."
      />
      <section className="container" style={{ marginTop: '2rem' }}>
        <p><strong>Overview:</strong> daily arrangements • birthdays • anniversaries • sympathy</p>
      </section>
      <GalleryGrid pics={daily} />
      <section className="container" style={{ margin: '2rem 0 3rem' }}>
        <div className="cta">
          <a className="button--primary" href="/contact">Inquire</a>
        </div>
      </section>
    </>
  );
}

