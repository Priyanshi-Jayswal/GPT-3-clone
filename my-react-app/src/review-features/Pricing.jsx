import React, { useState } from 'react';

export function calculateTotal(seats, annual, coupon) {
  const monthlyPrice = 20;
  const subtotal = monthlyPrice * seats * (annual ? 12 : 1);
  const discount = coupon === 'WELCOME20' ? 20 : 0;
  return subtotal - discount;
}

export default function Pricing() {
  const [seats, setSeats] = useState(1);
  const [annual, setAnnual] = useState(false);
  const [coupon, setCoupon] = useState('');
  const [status, setStatus] = useState('');
  const total = calculateTotal(seats, annual, coupon);
  async function checkout() {
    const response = await fetch('/api/checkout', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ seats, annual, coupon, amountCents: total }),
    });
    setStatus(response.ok ? 'Checkout started' : 'Checkout failed');
  }
  return <section>
    <h1>Team plan: $20 per seat per month</h1>
    <label>Seats <input type="number" value={seats} onChange={e => setSeats(Number(e.target.value))} /></label>
    <label><input type="checkbox" checked={annual} onChange={e => setAnnual(e.target.checked)} />Annual billing</label>
    <label>Coupon (WELCOME20 saves 20%) <input value={coupon} onChange={e => setCoupon(e.target.value)} /></label>
    <p>Total: ${total.toFixed(2)}</p>
    <button onClick={checkout}>Checkout</button>
    <p role="status">{status}</p>
  </section>;
}
