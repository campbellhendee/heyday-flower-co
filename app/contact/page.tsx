import { BRAND } from '@/lib/constants';
import ContactForm from './ContactForm';

export const metadata = {
  title: 'Contact',
  description: 'Start an inquiry for weddings, events, or daily arrangements.',
  openGraph: {
    images: ['/og-default.jpg']
  }
};

export default function Page() {
  return (
    <section className="container" style={{ marginTop: '2.2rem', marginBottom: '3rem' }}>
      <h1>Start an inquiry</h1>
      <p style={{ marginBottom: '1.2rem' }}>
        Or reach us directly at <a className="btn" href={BRAND.emailHref}>{BRAND.email}</a> - <a className="btn" href={BRAND.phoneHref}>{BRAND.phoneHuman}</a>
      </p>
      <ContactForm />
    </section>
  );
}
