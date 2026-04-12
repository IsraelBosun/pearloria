import Link from 'next/link';
import { FadeUp, FadeIn, StaggerContainer, StaggerItem, HeroAnimate, ScaleIn } from '../components/animations';

export const metadata = {
  title: 'About — Pearloria',
  description: 'Learn about Pearloria — our story, mission, and the values that drive our business compliance and registration services in Nigeria.',
};

const values = [
  { emoji: '💡', title: 'Clarity', desc: 'We explain processes clearly, avoiding unnecessary jargon so clients understand every step of the way.' },
  { emoji: '🔍', title: 'Transparency', desc: 'No hidden fees, no misleading promises — just honest guidance and clear expectations from start to finish.' },
  { emoji: '✅', title: 'Compliance', desc: 'We prioritize accuracy and adherence to regulatory requirements, ensuring every registration meets legal standards.' },
  { emoji: '🤝', title: 'Professionalism', desc: 'Every client is handled with respect, confidentiality, and meticulous attention to detail.' },
];

const whyUs = [
  'Expertise in CAC pre & post incorporation services',
  'Strong focus on compliance and long-term business stability',
  'Client-first advisory approach',
  'Reliable documentation and timely filings',
  'Support beyond registration',
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HeroAnimate delay={0}>
            <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-4">About Us</p>
          </HeroAnimate>
          <HeroAnimate delay={0.12}>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
              Legal Clarity. Business Confidence. Structured Growth.
            </h1>
          </HeroAnimate>
          <HeroAnimate delay={0.22}>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Pearloria exists to help entrepreneurs move from ideas to properly structured, legally protected, and compliant institutions.
            </p>
          </HeroAnimate>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <FadeUp>
              <p className="text-emerald-600 text-sm font-semibold uppercase tracking-widest mb-3">Our Story</p>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
                Pearloria Was Created to Solve a Real Problem
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Starting a business or organization in Nigeria should be exciting — not confusing, stressful, or risky. Yet many entrepreneurs make costly mistakes due to improper registration, incomplete documentation, or a lack of compliance guidance.
                </p>
                <p>
                  Pearloria was founded to bridge the gap between business ideas and legal legitimacy. Over time, we observed that many entrepreneurs and organizations operated without proper structure — exposing themselves to penalties, limitations, and missed opportunities.
                </p>
                <p>
                  Rather than simply filing documents, Pearloria was built to educate, guide, and properly structure businesses from the very beginning — and support them as they grow.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.12}>
              <div className="space-y-5">
                <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
                  <p className="text-emerald-600 font-semibold text-sm uppercase tracking-wide mb-3">Our Mission</p>
                  <p className="text-slate-800 text-lg leading-relaxed italic font-medium">
                    "To help entrepreneurs and organizations avoid costly mistakes by providing accurate, transparent, and compliant business registration and advisory services."
                  </p>
                </div>
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <p className="text-slate-500 text-sm leading-relaxed">
                    We believe every business deserves a strong legal foundation — one that protects it today and prepares it for tomorrow. Pearloria is not just about registration — it's about building businesses the right way.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <FadeUp>
              <p className="text-emerald-600 text-sm font-semibold uppercase tracking-widest mb-3">What We Stand For</p>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Our Core Values</h2>
              <p className="text-slate-500 max-w-xl mx-auto">The principles that guide every service, every client interaction, and every decision at Pearloria.</p>
            </FadeUp>
          </div>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <StaggerItem key={i}>
                <div className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-md transition-shadow h-full">
                  <div className="text-3xl mb-5">{v.emoji}</div>
                  <h3 className="font-bold text-slate-900 mb-3">{v.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <FadeUp>
              <p className="text-emerald-600 text-sm font-semibold uppercase tracking-widest mb-3">Why Pearloria</p>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
                Built for Entrepreneurs Who Want It Done Right
              </h2>
              <ul className="space-y-4">
                {whyUs.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeUp>

            <StaggerContainer className="grid grid-cols-1 gap-5" delay={0.1}>
              {[
                { stat: 'CAC', label: 'Fully compliant with Corporate Affairs Commission requirements' },
                { stat: '100%', label: 'Client-focused with no hidden charges or misleading promises' },
                { stat: 'Multi-industry', label: 'Experience handling registrations across diverse industries' },
              ].map((item, i) => (
                <StaggerItem key={i}>
                  <ScaleIn delay={i * 0.06}>
                    <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100 flex items-center gap-5">
                      <div className="text-2xl font-extrabold text-emerald-600 flex-shrink-0 min-w-[70px]">
                        {item.stat}
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.label}</p>
                    </div>
                  </ScaleIn>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900">
        <FadeUp className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Your Business Deserves Structure, Not Shortcuts
          </h2>
          <p className="text-slate-400 mb-10 text-lg">
            Choosing Pearloria means choosing professionalism, clarity, and long-term support.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/2347072613455"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 text-white font-bold px-8 py-3.5 rounded-lg hover:bg-emerald-500 transition-colors text-sm"
            >
              Get Started on WhatsApp
            </a>
            <Link
              href="/contact"
              className="border border-slate-600 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-slate-800 transition-colors text-sm"
            >
              Book a Consultation
            </Link>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
