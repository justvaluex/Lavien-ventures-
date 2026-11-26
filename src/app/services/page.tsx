import Link from "next/link";
import Navbar from "@/components/Navbar";
import { siteConfig, services } from "@/data/site";

export const metadata = {
  title: "Services | LAVIEN VENTURES",
  description: "Comprehensive services including web development, AI automation, digital marketing, branding, and strategic consulting.",
};

export default function Services() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From concept to launch, we handle everything you need to build and scale your business.
          </p>
        </div>

        <div className="space-y-16">
          {services.map((category, catIndex) => (
            <div key={catIndex}>
              <h2 className="text-3xl font-bold mb-8 text-accent-primary">{category.category}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((service, svcIndex) => (
                  <Link
                    key={svcIndex}
                    href={`/services/${service.id}`}
                    className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-accent-primary/50 hover:bg-white/10 transition-all duration-300"
                  >
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-accent-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{service.desc}</p>
                    <span className="text-sm text-accent-primary font-medium flex items-center">
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
        </div>

        <div className="mt-16 text-center">
          <Link href="/contact" className="inline-block px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-accent-primary to-accent-secondary text-white transition-all duration-300 hover:scale-105 shadow-lg shadow-accent-primary/30">
            Discuss Your Project
          </Link>
        </div>
      </div>
    </main>
  );
}
