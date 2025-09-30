import HeroRotator from '@/components/HeroRotator';
import { dailyHero } from '@/lib/heroes';
import GalleryGrid from '@/components/GalleryGrid';
import { daily } from '@/lib/galleries/daily';

export const metadata = {
  title: 'Daily Arrangements',
  description:
    'Weekly, biweekly, or monthly — tailored to your environment.',
  openGraph: {
    images: ['/images/hero/daily/daily-hero-001.jpg']
  }
};

export default function Page() {
  return (
    <>
      <HeroRotator
        images={dailyHero}
        eyebrow="Daily Arrangements"
        title="Fresh florals for homes, lobbies, and suites"
        sub="Weekly, biweekly, or monthly — tailored to your environment."
      />
      <section className="container" style={{ marginTop: '2rem' }}>
        <p><strong>Overview:</strong> residences • lobbies • suites — weekly/biweekly/monthly</p>
      </section>
      <GalleryGrid pics={daily} />
      <section className="container" style={{ margin: '2rem 0 3rem' }}>
        <div className="cta">
          <a className="button--primary" href="/contact">Start Inquiry</a>
        </div>
      </section>
    </>
  );
}
