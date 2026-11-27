import Link from "next/link";
import Navbar from "@/components/Navbar";
import { siteConfig, serviceGroups } from "@/data/site";

export const metadata = {
  title: "Services | LAVIEN VENTURES",
  description: "Comprehensive services including web development, AI automation, digital marketing, branding, and strategic consulting.",
};

export default function Services() {
  return (
    <main className="min-h-screen bg-bg text-ink font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-ink">
              Our <span className="hero-gradient-text">Services</span>
            </h1>
            <p className="text-xl text-muted mb-8">
              From concept to launch, we handle everything you need to build and scale your business.
            </p>
            
            <Link href="/start-project" className="btn-primary inline-block">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* Service Groups */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-7xl mx-auto">
          {Object.entries(serviceGroups).map(([group, groupServices]) => (
            <div key={group} className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-accent">{group}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {groupServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="card-light group p-6 hover:border-accent transition-all duration-300"
                  >
                    <h3 className="font-semibold text-ink group-hover:text-accent transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted">{service.shortDescription}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How We Work Strip */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-12 text-center text-ink accent-underline">How We Work</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Discover", desc: "Understand your goals" },
              { step: "2", title: "Design", desc: "Create the vision" },
              { step: "3", title: "Build", desc: "Execute flawlessly" },
              { step: "4", title: "Scale", desc: "Grow sustainably" },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold hero-gradient-text mb-4 opacity-80">
                  {step.step}
                </div>
                <h3 className="font-semibold text-ink mb-2">{step.title}</h3>
                <p className="text-sm text-muted">{step.desc}</p>
                
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Band */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 dark-section">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Let&apos;s discuss how we can help bring your vision to life.
          </p>
          <Link href="/start-project" className="btn-primary inline-block">
            Start Your Project
          </Link>
        </div>
      </section>
    </main>
  );
}
