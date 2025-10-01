export const metadata = {
  title: 'About',
  description: 'Philosophy and studio approach.'
};

export default function Page() {
  return (
    <section className="container" style={{ marginTop: '2rem', marginBottom: '3rem', maxWidth: '60rem' }}>
      <h1>About</h1>
      <p>
        Heyday is a studio crafting thoughtful florals for weddings, occasions, and events. Our work blends
        seasonal sourcing with sculptural composition.
      </p>
      <p>
        We design with intention — honoring space, light, and the natural movement of stems. Each project is a
        collaboration, tailored to context and story.
      </p>
      <div style={{ marginTop: '1.5rem' }}>
        <a className="button--primary" href="/contact">Start a Conversation</a>
      </div>
      <div style={{ marginTop: '3rem' }}>
        <h2>Press & Mentions</h2>
        <p style={{ color: 'var(--ink-2)' }}>Placeholder logos</p>
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(3, minmax(0,1fr))' }}>
          <div className="card" style={{ height: 80 }} />
          <div className="card" style={{ height: 80 }} />
          <div className="card" style={{ height: 80 }} />
        </div>
      </div>
    </section>
  );
}

