import Link from "next/link";
import Navbar from "@/components/Navbar";
import { siteConfig, navLinks, services, audiences, advantages, processSteps, footerLinks, serviceGroups } from "@/data/site";

export const metadata = {
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-ink font-sans">
      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="skip-link sr-only focus:not-sr-only">
        Skip to main content
      </a>

      <Navbar />

      {/* Hero Section - Light Background */}
      <section id="main-content" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-bg">
        {/* Soft tinted shape instead of blurred glow */}
        <div className="hero-tinted-shape" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 text-ink">
              {siteConfig.tagline.split(" ").map((word, idx) => (
                <span key={idx}>
                  {word === "Build" ? (
                    <span className="hero-gradient-text">{word}</span>
                  ) : (
                    word + " "
                  )}
                </span>
              ))}
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted max-w-3xl mx-auto mb-12 leading-relaxed">
              We turn ideas into functioning businesses through technology, automation, branding, marketing, and strategic consulting.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/start-project"
                className="btn-primary whitespace-nowrap"
              >
                Start Your Project
              </Link>
              <Link
                href="/ventures"
                className="btn-secondary whitespace-nowrap"
              >
                See What We Build
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Strip - Accent Underline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface border-y border-border">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="philosophy-quote text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-ink">
            "Your idea doesn&apos;t need another advisor. It needs a path to execution."
          </blockquote>
        </div>
      </section>

      {/* Services Grid - Grouped by Category */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-ink accent-underline">
              Our Services
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              From concept to launch, we handle everything you need to build and scale your business.
            </p>
          </div>

          {Object.entries(serviceGroups).map(([group, groupServices]) => (
            <div key={group} className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-accent">{group}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {groupServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="card-light block p-6 group hover:border-accent transition-all duration-300"
                  >
                    <h4 className="font-semibold text-ink group-hover:text-accent transition-colors mb-2">
                      {service.title}
                    </h4>
                    <p className="text-sm text-muted">{service.shortDescription}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Who We Help - Dark Section Band */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 dark-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 accent-underline">
              Who We Help
            </h2>
            <p className="text-xl max-w-2xl mx-auto">
              Whether you&apos;re just starting or scaling an established business, we&apos;ve got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {audiences.map((audience, index) => (
              <div
                key={index}
                className="card-light text-center"
              >
                <h3 className="font-semibold mb-2 text-white">{audience.title}</h3>
                <p className="text-sm text-white/80">{audience.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venture Studio Advantage - White Surface */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-ink accent-underline">
              The Venture Studio Advantage
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              We don&apos;t just advise—we build alongside you with skin in the game.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((adv, index) => (
              <div
                key={index}
                className="card-light p-8"
              >
                <h3 className="text-xl font-bold mb-4 text-ink">{adv.title}</h3>
                <p className="text-muted leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>

          {/* Timeline Graphic - Accent Color */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-surface border border-border shadow-sm">
              <span className="text-muted">Idea</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="var(--color-accent)" width="20" height="20">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
              <span className="text-muted">Launch</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="var(--color-accent)" width="20" height="20">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
              <span className="text-muted">Scale</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Dark Section Band */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 dark-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 accent-underline">
              Our Process
            </h2>
            <p className="text-xl max-w-2xl mx-auto">
              A proven path from concept to execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-5xl font-bold hero-gradient-text mb-4 opacity-80">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                <p className="text-white/80">{step.desc}</p>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="rgba(255,255,255,0.5)" width="24" height="24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar - White Surface */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-border bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Projects Launched", value: "50+" },
              { label: "Clients Served", value: "100+" },
              { label: "Revenue Generated", value: "$10M+" },
              { label: "Team Members", value: "25+" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl sm:text-4xl font-bold hero-gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Dark Section Band */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 dark-section">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="hero-gradient-text">Build?</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-12">
            Let&apos;s discuss how we can help you achieve your goals and bring your vision to life.
          </p>
          <Link
            href="/start-project"
            className="btn-primary inline-block"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </main>
  );
}
