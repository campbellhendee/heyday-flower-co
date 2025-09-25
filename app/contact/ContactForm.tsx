'use client';

import { BRAND } from '@/lib/constants';
import { useCallback } from 'react';
import React from 'react';

export default function ContactForm() {
  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get('name')?.toString() ?? '';
    const email = fd.get('email')?.toString() ?? '';
    const phone = fd.get('phone')?.toString() ?? '';
    const service = fd.get('service')?.toString() ?? '';
    const date = fd.get('date')?.toString() ?? '';
    const message = fd.get('message')?.toString() ?? '';

    const subject = encodeURIComponent(`Inquiry: ${service || 'Floral'} — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nEvent Date: ${date}\n\n${message}`
    );
    window.location.href = `mailto:${BRAND.email}?subject=${subject}&body=${body}`;
  }, []);

  return (
    <form onSubmit={onSubmit} style={{ display: 'grid', gap: '.8rem', maxWidth: '720px' }}>
      <label>
        Name
        <input required name="name" type="text" placeholder="Your name" style={inputStyle} />
      </label>
      <label>
        Email
        <input required name="email" type="email" placeholder="you@example.com" style={inputStyle} />
      </label>
      <label>
        Phone
        <input name="phone" type="tel" placeholder="(###) ###-####" style={inputStyle} />
      </label>
      <label>
        Service
        <select name="service" style={inputStyle}>
          <option>Weddings</option>
          <option>Corporate Events</option>
          <option>Private Events</option>
          <option>Daily Arrangements</option>
          <option>Other</option>
        </select>
      </label>
      <label>
        Event date
        <input name="date" type="date" style={inputStyle} />
      </label>
      <label>
        Message
        <textarea name="message" placeholder="Tell us a little about your vision" rows={6} style={inputStyle} />
      </label>
      <div>
        <button className="button--primary" type="submit">Send via Email</button>
      </div>
    </form>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  marginTop: '.35rem',
  padding: '.8rem 1rem',
  borderRadius: 12,
  border: '1px solid var(--border)',
  background: 'var(--surface)'
};

