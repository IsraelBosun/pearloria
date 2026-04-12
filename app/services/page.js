import Link from 'next/link';

export const metadata = {
  title: 'Services — Pearloria',
  description:
    'Explore all Pearloria services: Business Name, LTD, NGO registration, trademark, TIN, SCUML, annual returns, and business advisory in Nigeria.',
};

function ServiceCard({ id, emoji, title, what, who, why, cta = 'Get Started', ctaHref = 'https://wa.me/2347072613455', external = true }) {
  return (
    <div id={id} className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-lg transition-shadow scroll-mt-20">
      <div className="text-4xl mb-5">{emoji}</div>
      <h3 className="text-xl font-extrabold text-slate-900 mb-5">{title}</h3>
      <div className="space-y-4 mb-7">
        <div>
          <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1">What it is</p>
          <p className="text-slate-600 text-sm leading-relaxed">{what}</p>
        </div>
        <div>
          <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1">Who it's for</p>
          <p className="text-slate-600 text-sm leading-relaxed">{who}</p>
        </div>
        <div>
          <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1">Why it matters</p>
          <p className="text-slate-600 text-sm leading-relaxed">{why}</p>
        </div>
      </div>
      {external ? (
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-emerald-600 text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-emerald-700 transition-colors"
        >
          {cta}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      ) : (
        <Link
          href={ctaHref}
          className="inline-flex items-center gap-2 bg-emerald-600 text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-emerald-700 transition-colors"
        >
          {cta}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      )}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-4">Our Services</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
            Everything You Need to Register, Protect & Stay Compliant
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Whether you're starting small, scaling up, or maintaining compliance — we handle the process professionally and efficiently.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <a
              href="https://wa.me/2347072613455"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 text-white font-bold px-7 py-3.5 rounded-lg hover:bg-emerald-500 transition-colors text-sm"
            >
              Start a Registration
            </a>
            <Link
              href="/contact"
              className="border border-slate-600 text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-slate-800 transition-colors text-sm"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Quick nav */}
      <div className="bg-white border-b border-gray-100 sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto">
          <div className="flex gap-1 py-3 whitespace-nowrap">
            {[
              { label: 'Business Registration', href: '#registration' },
              { label: 'Post-Incorporation', href: '#compliance' },
              { label: 'Intellectual Property', href: '#ip' },
              { label: 'Advisory', href: '#advisory' },
            ].map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="px-4 py-1.5 rounded-full text-sm font-medium text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

          {/* Business Registration */}
          <section id="registration" className="scroll-mt-28">
            <div className="mb-10">
              <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">Business Registration</span>
              <h2 className="text-2xl font-extrabold text-slate-900">CAC Pre & Post Incorporation Services</h2>
              <p className="text-slate-500 mt-2 max-w-xl">Legally register and structure your business with the Corporate Affairs Commission.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ServiceCard
                id="business-name"
                emoji="🏢"
                title="Business Name Registration"
                what="Registration of your business name with the Corporate Affairs Commission (CAC), giving your business legal recognition as an Enterprise."
                who="Small business owners, freelancers, side hustlers, and startups starting with a simple structure."
                why="Operating without registration limits credibility and access to opportunities like bank accounts, contracts, and funding."
              />
              <ServiceCard
                id="ltd"
                emoji="⚖️"
                title="Limited Liability Company (LTD) Registration"
                what="Full company incorporation that creates a separate legal entity distinct from its owners, providing liability protection."
                who="Growing businesses, agencies, tech startups, consultants, and entrepreneurs planning to scale."
                why="Protects personal assets, increases business credibility, and allows access to investors and larger contracts."
              />
              <ServiceCard
                id="upgrade"
                emoji="⬆️"
                title="Business Name Upgrade to LTD"
                what="Transitioning your registered Business Name into a Limited Liability Company for a stronger legal structure."
                who="Business owners ready to scale and operate with greater credibility and legal protection."
                why="Upgrading positions your brand for bigger contracts, funding opportunities, and long-term growth."
              />
              <ServiceCard
                id="ngo"
                emoji="🤝"
                title="NGO / Incorporated Trustees Registration"
                what="Registration of Non-Governmental Organizations, churches, associations, and foundations as Incorporated Trustees with CAC."
                who="Non-profits, religious bodies, community groups, and charitable organizations."
                why="Gives your organization legal standing, accountability structure, and eligibility for grants and partnerships."
              />
            </div>
          </section>

          {/* Post-Incorporation */}
          <section id="compliance" className="scroll-mt-28">
            <div className="mb-10">
              <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">Post-Incorporation & Compliance</span>
              <h2 className="text-2xl font-extrabold text-slate-900">Stay Legally Compliant After Registration</h2>
              <p className="text-slate-500 mt-2 max-w-xl">A registered business must also remain compliant. We handle the ongoing requirements.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard
                id="annual-returns"
                emoji="📋"
                title="Filing of Annual Returns"
                what="Mandatory yearly compliance filing with the Corporate Affairs Commission to keep your business in good standing."
                who="All registered Business Names, LTDs, and NGOs operating in Nigeria."
                why="Failure to file can lead to hefty penalties or your company being struck off the CAC register."
              />
              <ServiceCard
                id="scuml"
                emoji="🏦"
                title="SCUML Registration"
                what="Registration required for designated non-financial businesses under anti-money laundering regulations overseen by SCUML."
                who="Consultants, real estate businesses, finance-related businesses, NGOs, and designated non-financial institutions."
                why="Required for opening corporate bank accounts and maintaining full regulatory compliance."
              />
              <ServiceCard
                id="tin"
                emoji="🔢"
                title="All Types of TIN Registration"
                what="Processing and issuance of Tax Identification Number (TIN) through the Federal Inland Revenue Service (FIRS)."
                who="All registered businesses and individuals operating in Nigeria."
                why="TIN is required for tax compliance, government contracts, and opening corporate bank accounts."
              />
            </div>
          </section>

          {/* Intellectual Property */}
          <section id="ip" className="scroll-mt-28">
            <div className="mb-10">
              <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">Intellectual Property</span>
              <h2 className="text-2xl font-extrabold text-slate-900">Protect Your Brand & Creative Works</h2>
              <p className="text-slate-500 mt-2 max-w-xl">Prevent others from copying or exploiting your brand identity and creative output.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ServiceCard
                id="trademark"
                emoji="™️"
                title="Trademark Registration"
                what="Legal protection for your brand name, logo, or slogan under Nigerian intellectual property law."
                who="Business owners, brands, content creators, and startups wanting to secure their brand identity."
                why="Prevents others from copying or using your brand identity without permission, protecting your market position."
              />
              <ServiceCard
                id="copyright"
                emoji="©️"
                title="Copyright & Patent Registration"
                what="Protection for original creative works such as books, designs, music, software, and digital content."
                who="Authors, designers, content creators, educators, and innovators."
                why="Establishes legal ownership, protects your intellectual work, and prevents unauthorized reproduction or use."
              />
            </div>
          </section>

          {/* Advisory */}
          <section id="advisory" className="scroll-mt-28">
            <div className="mb-10">
              <span className="inline-block bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">Advisory Services</span>
              <h2 className="text-2xl font-extrabold text-slate-900">Expert Guidance Before & After Registration</h2>
              <p className="text-slate-500 mt-2 max-w-xl">The right advice at the right time can save you from costly mistakes and missed opportunities.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ServiceCard
                id="structure-advisory"
                emoji="🗺️"
                title="Business Structure Advisory"
                what="Professional guidance on choosing the right legal structure — Business Name, LTD, or NGO — for your vision."
                who="Entrepreneurs unsure of the best legal structure for their business idea or growth goals."
                why="The wrong structure can limit growth, increase tax burden, or expose you to unnecessary risks."
                cta="Book Consultation"
                ctaHref="/contact"
                external={false}
              />
              <ServiceCard
                id="pre-registration"
                emoji="🔎"
                title="Pre-Registration Guidance"
                what="Step-by-step consultation before starting the registration process, ensuring you're fully prepared."
                who="First-time founders and startups who want clarity before committing to registration."
                why="Helps you avoid application rejections, unnecessary delays, and costly errors from the start."
                cta="Book Consultation"
                ctaHref="/contact"
                external={false}
              />
              <ServiceCard
                id="compliance-review"
                emoji="📊"
                title="Compliance Reviews"
                what="Assessment of your business's current compliance status with CAC and other regulatory requirements."
                who="Existing businesses unsure whether they are fully compliant with Nigerian regulatory requirements."
                why="Staying compliant protects your business from penalties, legal disruptions, and reputational damage."
                cta="Book Consultation"
                ctaHref="/contact"
                external={false}
              />
            </div>
          </section>
        </div>
      </div>

      {/* CTA Banner */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Ready to Register or Stay Compliant?
          </h2>
          <p className="text-emerald-100 text-lg mb-8">
            Let Pearloria handle the process while you focus on growing your business.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/2347072613455"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-emerald-700 font-bold px-8 py-3.5 rounded-lg hover:bg-emerald-50 transition-colors text-sm"
            >
              Get Started Now
            </a>
            <Link
              href="/contact"
              className="border-2 border-white/50 text-white font-bold px-8 py-3.5 rounded-lg hover:bg-white/10 transition-colors text-sm"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
