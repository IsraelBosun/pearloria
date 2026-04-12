import ContactForm from '../components/ContactForm';
import { HeroAnimate, FadeUp, FadeIn, StaggerContainer, StaggerItem } from '../components/animations';

export const metadata = {
  title: 'Contact — Pearloria',
  description: 'Get in touch with Pearloria. Chat on WhatsApp, send an email, or book a consultation for your business registration needs.',
};

const contactDetails = [
  {
    label: 'WhatsApp',
    value: '07072613455',
    sub: 'Quick questions & direct assistance',
    href: 'https://wa.me/2347072613455',
    external: true,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'pearloriaenterprise@gmail.com',
    sub: 'We respond within 24 hours',
    href: 'mailto:pearloriaenterprise@gmail.com',
    external: false,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HeroAnimate delay={0}>
            <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-4">Get in Touch</p>
          </HeroAnimate>
          <HeroAnimate delay={0.12}>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
              We're Here to Guide You
            </h1>
          </HeroAnimate>
          <HeroAnimate delay={0.22}>
            <p className="text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
              Have questions about registering your business or staying compliant? We're ready to help you navigate the process clearly and professionally.
            </p>
          </HeroAnimate>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-slate-50" id="consultation">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-12">

            {/* Left: contact details */}
            <div className="md:col-span-2 space-y-8">
              <FadeUp>
                <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Contact Pearloria</h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Reach out through any channel below. WhatsApp is the fastest way to get a response.
                </p>
              </FadeUp>

              <StaggerContainer className="space-y-4">
                {contactDetails.map((c, i) => (
                  <StaggerItem key={i}>
                    <a
                      href={c.href}
                      target={c.external ? '_blank' : undefined}
                      rel={c.external ? 'noopener noreferrer' : undefined}
                      className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-md transition-all group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0 group-hover:bg-emerald-100 transition-colors">
                        {c.icon}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-sm">{c.label}</p>
                        <p className="text-emerald-600 font-semibold text-sm mt-0.5 break-all">{c.value}</p>
                        <p className="text-slate-400 text-xs mt-1">{c.sub}</p>
                      </div>
                    </a>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <FadeUp delay={0.15}>
                <a
                  href="https://wa.me/2347072613455"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-emerald-600 text-white font-bold py-3.5 rounded-xl hover:bg-emerald-700 transition-colors text-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat With Us on WhatsApp
                </a>
              </FadeUp>

              <FadeUp delay={0.2}>
                <div className="p-5 bg-emerald-50 rounded-2xl border border-emerald-100">
                  <p className="text-emerald-700 font-semibold text-sm mb-1">Business Support You Can Trust</p>
                  <p className="text-emerald-600 text-xs leading-relaxed">
                    Pearloria helps entrepreneurs properly register and structure their businesses with CAC and other regulatory bodies. Whether you're starting, upgrading, or handling compliance — we're ready to help.
                  </p>
                </div>
              </FadeUp>
            </div>

            {/* Right: Form */}
            <FadeUp delay={0.1} className="md:col-span-3">
              <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">Book a Consultation</h3>
                <p className="text-slate-500 text-sm mb-7">
                  Fill in the form below and we'll get back to you within 24 hours with expert advice tailored to your situation.
                </p>
                <ContactForm />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Legal info */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-8">
            <h2 className="text-2xl font-extrabold text-slate-900">Legal Information</h2>
          </FadeUp>
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            <StaggerItem>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 h-full">
                <h3 className="font-bold text-slate-900 mb-3">Privacy Policy</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-3">
                  Pearloria collects name, email, phone, and business information submitted through forms. This information is used solely to respond to inquiries and provide services.
                </p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  We do <strong>not</strong> sell, rent, or share your personal information with third parties except where necessary to process official filings with the Corporate Affairs Commission or other regulatory bodies.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 h-full">
                <h3 className="font-bold text-slate-900 mb-3">Terms & Conditions</h3>
                <div className="space-y-3 text-sm text-slate-500 leading-relaxed">
                  <p><strong className="text-slate-700">Client Responsibilities:</strong> Clients must ensure all information provided is accurate and truthful. Pearloria is not responsible for delays caused by incorrect information.</p>
                  <p><strong className="text-slate-700">Service Processing:</strong> Timelines may depend on regulatory agencies such as CAC and other government bodies.</p>
                  <p><strong className="text-slate-700">Payments:</strong> All payments made for services are considered non-refundable service fees unless otherwise stated.</p>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
