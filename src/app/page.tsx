import Link from "next/link";
import Navbar from "@/components/Navbar";
import { siteConfig, navLinks, services, audiences, advantages, processSteps, trustStats, footerLinks } from "@/data/site";

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
    <main className="min-h-screen bg-background text-foreground font-sans">
      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="skip-link sr-only focus:not-sr-only">
        Skip to main content
      </a>

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
              {siteConfig.tagline}
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              We turn ideas into functioning businesses through technology, automation, branding, marketing, and strategic consulting.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/start-project"
                className="px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-accent-primary to-accent-secondary text-white transition-all duration-300 hover:scale-105 shadow-lg shadow-accent-primary/30 whitespace-nowrap"
              >
                Start Your Project
              </Link>
              <Link
                href="/ventures"
                className="px-8 py-3 rounded-full font-semibold border-2 border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white transition-all duration-300 whitespace-nowrap"
              >
                See What We Build
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Strip */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-background via-[#0F111A] to-background">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              "Your idea doesn&apos;t need another advisor. It needs a path to execution."
            </span>
          </blockquote>
        </div>
      </section>

      {/* Services Grid - Bento Layout */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From concept to launch, we handle everything you need to build and scale your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((category, catIndex) => (
              <div key={catIndex} className="lg:col-span-1">
                <h3 className="text-xl font-bold mb-4 text-accent-primary">{category.category}</h3>
                <div className="space-y-4">
                  {category.items.map((service, svcIndex) => (
                    <Link
                      key={svcIndex}
                      href={`/services/${service.id}`}
                      className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:border-accent-primary/50 hover:bg-white/10 transition-all duration-300 group"
                    >
                      <h4 className="font-semibold mb-2 group-hover:text-accent-primary transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-sm text-gray-400">{service.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0F111A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Who We Help
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Whether you&apos;re just starting or scaling an established business, we&apos;ve got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {audiences.map((audience, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white/5 border border-white/10 text-center hover:border-accent-primary/50 transition-all duration-300"
              >
                <h3 className="font-semibold mb-2">{audience.title}</h3>
                <p className="text-sm text-gray-400">{audience.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venture Studio Advantage */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              The Venture Studio Advantage
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We don&apos;t just advise—we build alongside you with skin in the game.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((adv, index) => (
              <div
                key={index}
                className="p-8 rounded-xl bg-white/5 border border-white/10 hover:border-accent-primary/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-4">{adv.title}</h3>
                <p className="text-gray-400 leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>

          {/* Timeline Graphic */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-lg">
              <span className="text-gray-400">Idea</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="var(--accent-primary)" width="20" height="20">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
              <span className="text-gray-400">Launch</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="var(--accent-primary)" width="20" height="20">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
              <span className="text-gray-400">Scale</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0F111A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A proven path from concept to execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-5xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent mb-4 opacity-20">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="rgba(99,102,241,0.5)" width="24" height="24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {trustStats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">Build?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help you achieve your goals and bring your vision to life.
          </p>
          <Link
            href="/start-project"
            className="px-12 py-4 rounded-full font-semibold bg-gradient-to-r from-accent-primary to-accent-secondary text-white transition-all duration-300 hover:scale-105 shadow-lg shadow-accent-primary/30 inline-block"
          >
            Start Your Project
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-background border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent mb-4">
                {siteConfig.name}
              </h3>
              <p className="text-gray-400 max-w-md">
                We build what moves business forward. From idea to execution, we help entrepreneurs and businesses build, automate, launch, and grow.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-white">Services</h4>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-400 hover:text-accent-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-white">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-400 hover:text-accent-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
