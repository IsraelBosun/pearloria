import Link from 'next/link';
import EbookForm from './components/EbookForm';

function CheckIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function ArrowRight({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}

const services = [
  {
    emoji: '🏢',
    title: 'Business Name Registration',
    desc: 'Register your enterprise with CAC and gain the legal recognition needed to operate, open accounts, and secure contracts.',
    href: '/services#business-name',
  },
  {
    emoji: '⚖️',
    title: 'LTD Registration',
    desc: 'Incorporate a Limited Liability Company that separates your personal assets from business liabilities.',
    href: '/services#ltd',
  },
  {
    emoji: '⬆️',
    title: 'Upgrade BN to LTD',
    desc: 'Transition your registered Business Name into a full Limited Liability Company for bigger opportunities.',
    href: '/services#upgrade',
  },
  {
    emoji: '🤝',
    title: 'NGO / Inc. Trustees',
    desc: 'Register NGOs, churches, foundations, and associations as Incorporated Trustees with CAC.',
    href: '/services#ngo',
  },
  {
    emoji: '📋',
    title: 'Annual Returns Filing',
    desc: 'Stay compliant with mandatory yearly CAC filings and avoid penalties or being struck off the register.',
    href: '/services#annual-returns',
  },
  {
    emoji: '™️',
    title: 'Trademark & Copyright',
    desc: 'Legally protect your brand name, logo, slogan, and creative works from unauthorized use.',
    href: '/services#trademark',
  },
  {
    emoji: '🏦',
    title: 'TIN & SCUML Registration',
    desc: 'Obtain your Tax Identification Number and meet anti-money laundering compliance requirements.',
    href: '/services#tin',
  },
  {
    emoji: '💬',
    title: 'Business Advisory',
    desc: 'Expert pre-registration guidance, compliance reviews, and structure advisory to set your business up right.',
    href: '/services#advisory',
  },
];

const features = [
  {
    title: 'Expert Guidance — Not Guesswork',
    desc: 'Professional consultation before any process begins. You choose the right structure for your goals before spending money.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Proper Documentation & Full Compliance',
    desc: 'Every service follows official CAC requirements. Your business is properly structured, not just registered.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Transparency — No Hidden Charges',
    desc: 'Clear pricing before payment, honest timelines, and no surprise fees. You always know exactly what you are paying for.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: 'Ongoing Support After Registration',
    desc: 'Post-registration guidance, compliance reminders, and annual returns support. We stay with you beyond your certificate.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

const steps = [
  {
    number: '01',
    title: 'Book a Consultation',
    desc: 'Start with a free consultation to understand your goals and determine the right business structure for your needs.',
  },
  {
    number: '02',
    title: 'We Handle the Process',
    desc: 'We prepare all accurate documentation and handle every filing with CAC and relevant regulatory bodies on your behalf.',
  },
  {
    number: '03',
    title: 'Receive Your Certificate',
    desc: 'Get your registration documents and enjoy ongoing support to keep your business compliant and growing.',
  },
];

const testimonials = [
  {
    quote:
      'Pearloria made my business registration stress-free. Everything was explained clearly, and the process was seamless.',
    author: 'Sarah O.',
    role: 'Small Business Owner',
  },
  {
    quote:
      'From CAC registration to TIN and trademark, Pearloria handled everything professionally. I highly recommend them to any entrepreneur.',
    author: 'Emeka A.',
    role: 'Tech Startup Founder',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-600/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3.5 py-1.5 text-emerald-400 text-xs font-semibold mb-7 tracking-wide uppercase">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
              Nigeria's Trusted Business Registration Service
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
              Register, Structure &{' '}
              <span className="text-emerald-400">Protect Your Business</span>{' '}
              — The Right Way
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-2xl">
              We help entrepreneurs legally register, structure, and protect their businesses with the
              Corporate Affairs Commission and other regulatory bodies in Nigeria. From idea to legally
              structured entity — the right way.
            </p>

            <div className="flex flex-wrap gap-4 mb-14">
              <a
                href="https://wa.me/2347072613455"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 text-white font-bold px-7 py-3.5 rounded-lg hover:bg-emerald-500 transition-colors text-sm"
              >
                Register My Business
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-slate-600 text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-slate-800 transition-colors text-sm"
              >
                Book a Consultation
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-5 text-sm text-slate-400">
              {[
                'CAC Compliant',
                'Trusted by Startups & NGOs',
                'No Hidden Charges',
                'Ongoing Support',
              ].map(badge => (
                <div key={badge} className="flex items-center gap-1.5">
                  <CheckIcon className="w-3.5 h-3.5 text-emerald-400" />
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-emerald-600 text-sm font-semibold uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              End-to-End Registration & Compliance
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              One brand. One process. Total peace of mind. From registration to ongoing compliance, we handle everything.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <Link
                key={i}
                href={s.href}
                className="group p-6 rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-200 bg-white"
              >
                <div className="text-3xl mb-4">{s.emoji}</div>
                <h3 className="font-bold text-slate-900 mb-2 text-[15px] group-hover:text-emerald-700 transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-emerald-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors text-sm"
            >
              View all services <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Pearloria ── */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3">Why Choose Us</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              We Don't Just File Documents
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              We help you build a business with a solid legal foundation — educating, guiding, and supporting you every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <div key={i} className="p-7 rounded-2xl bg-slate-800 border border-slate-700/50">
                <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 mb-5">
                  {f.icon}
                </div>
                <h3 className="font-bold text-white mb-2 text-[15px]">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-emerald-600 text-sm font-semibold uppercase tracking-widest mb-3">The Process</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-slate-500">
              Getting your business properly registered is simple with Pearloria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <div key={i} className="relative text-center">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-emerald-200 -z-10" />
                )}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-600 text-white font-extrabold text-xl mb-6 shadow-lg shadow-emerald-600/20">
                  {step.number}
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-3">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-emerald-600 text-sm font-semibold uppercase tracking-widest mb-3">Client Stories</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-gray-100">
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-700 text-lg leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm">
                    {t.author[0]}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{t.author}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Free Ebook ── */}
      <section className="py-24 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-emerald-100 text-sm font-semibold uppercase tracking-widest mb-4">Free Resource</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            11 Costly Business Mistakes to Avoid in 2026
          </h2>
          <p className="text-emerald-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Learn the most common errors entrepreneurs make — and how to start your business
            correctly, confidently, and compliantly from day one.
          </p>
          <EbookForm />
          <p className="text-emerald-200 text-xs mt-5">No spam. Just valuable business insights from Pearloria.</p>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Ready to Register Your Business the Right Way?
          </h2>
          <p className="text-lg text-slate-500 mb-10 leading-relaxed">
            Let Pearloria handle the process while you focus on building your vision. Get started today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/2347072613455"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 text-white font-bold px-8 py-3.5 rounded-lg hover:bg-emerald-700 transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-slate-200 text-slate-900 font-bold px-8 py-3.5 rounded-lg hover:bg-slate-50 transition-colors text-sm"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
