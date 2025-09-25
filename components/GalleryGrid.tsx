import Image from 'next/image';

export type Pic = { src: string; alt: string; color?: 'neutral'|'blush'|'bold'|'greenery' };

export default function GalleryGrid({ pics }: { pics: Pic[] }) {
  return (
    <section className="container" aria-label="Portfolio">
      <div className="masonry">
        {pics.map((p, i) => (
          <figure key={p.src + i}>
            <Image
              src={p.src}
              alt={p.alt}
              width={1600}
              height={1000}
              style={{ width: '100%', height: 'auto', display: 'block' }}
              loading="lazy"
              sizes="(max-width: 1080px) 100vw, 33vw"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
