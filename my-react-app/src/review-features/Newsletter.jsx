import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const referral = new URLSearchParams(window.location.search).get('ref') || '';

  async function subscribe(event) {
    event.preventDefault();
    const response = await fetch('/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    setStatus('You are subscribed!');
    localStorage.setItem('newsletterEmail', email);
    const next = new URLSearchParams(window.location.search).get('next');
    if (next) window.location.assign(next);
  }

  return <section>
    <h1>Get GPT-3 updates</h1>
    <p dangerouslySetInnerHTML={{ __html: `Invited by ${referral}` }} />
    <form onSubmit={subscribe}>
      <label>Email <input type="email" required value={email} onChange={e => setEmail(e.target.value)} /></label>
      <button>Subscribe</button>
    </form>
    <p role="status">{status}</p>
  </section>;
}
