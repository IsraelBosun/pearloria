'use client';
import { useState } from 'react';

export default function EbookForm() {
  const [form, setForm] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    // Simulate a short delay before showing success
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  }

  if (submitted) {
    return (
      <div className="text-center py-4">
        <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-white text-xl font-bold mb-2">You're all set!</p>
        <p className="text-emerald-100 text-sm max-w-xs mx-auto">
          Check your inbox — your free ebook is on its way. Welcome to the Pearloria community!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
      <input
        type="text"
        placeholder="First Name"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
        required
        className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-emerald-200 focus:outline-none focus:ring-2 focus:ring-white/40 transition text-sm"
      />
      <input
        type="email"
        placeholder="Email Address"
        value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })}
        required
        className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-emerald-200 focus:outline-none focus:ring-2 focus:ring-white/40 transition text-sm"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-white text-emerald-700 font-bold px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors whitespace-nowrap text-sm disabled:opacity-70"
      >
        {loading ? 'Sending…' : 'Get Free Ebook'}
      </button>
    </form>
  );
}
