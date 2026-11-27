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
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-ink">
            Our <span className="hero-gradient-text">Services</span>
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            From concept to launch, we handle everything you need to build and scale your business.
          </p>
        </div>

        {Object.entries(serviceGroups).map(([group, groupServices]) => (
          <div key={group} className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-accent accent-underline">{group}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {groupServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="card-light group p-6"
                >
                  <h3 className="text-xl font-semibold mb-3 text-ink group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted mb-4">{service.shortDescription}</p>
                  <span className="text-sm text-accent font-medium flex items-center">
                    Learn More
                    <svg className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-16 text-center">
          <Link href="/contact" className="inline-block btn-primary">
            Discuss Your Project
          </Link>
        </div>
      </div>
    </main>
  );
}
