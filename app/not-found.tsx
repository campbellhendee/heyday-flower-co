export const metadata = {
  title: 'Page Not Found'
};

export default function NotFound() {
  return (
    <section className="container" style={{ padding: '6rem 0' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '.5rem' }}>We couldn’t find that page</h1>
      <p style={{ color: 'var(--ink-2)', marginBottom: '1.5rem' }}>
        The link may be broken or the page may have moved.
      </p>
      <p style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap' }}>
        <a className="button--primary" href="/">Return Home</a>
        <a className="btn" href="/contact">Start Inquiry</a>
      </p>
    </section>
  );
}

