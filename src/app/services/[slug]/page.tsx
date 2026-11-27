import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import FAQ from "@/components/FAQ";
import { services, siteConfig } from "@/data/site";

// Service data with full details - mapped from services array
const serviceDetails: Record<string, {
  title: string;
  description: string;
  promise: string;
  deliverables: string[];
  whoItIsFor: string[];
  processSteps: string[];
  faqs: { question: string; answer: string }[];
  relatedServices: string[];
}> = {};

// Build the serviceDetails object from services array
services.forEach(service => {
  serviceDetails[service.slug] = {
    title: service.title,
    description: service.shortDescription,
    promise: service.longDescription,
    deliverables: service.deliverables,
    whoItIsFor: service.whoItIsFor,
    processSteps: service.processSteps,
    faqs: service.faqs,
    relatedServices: [] // Will be populated based on group
  };
});

// Set related services based on group
services.forEach(service => {
  const related = services
    .filter(s => s.group === service.group && s.slug !== service.slug)
    .slice(0, 3)
    .map(s => s.slug);
  
  if (serviceDetails[service.slug]) {
    serviceDetails[service.slug].relatedServices = related;
  }
});

export function generateStaticParams() {
  return services.map(service => ({
    slug: service.slug
  }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return async () => {
    const { slug } = await params;
    const service = serviceDetails[slug];
    
    if (!service) {
      return {};
    }
    
    return {
      title: `${service.title} | LAVIEN VENTURES`,
      description: service.description,
      openGraph: {
        title: `${service.title} | LAVIEN VENTURES`,
        description: service.description,
        type: "website",
      },
    };
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceDetails[slug];
  
  if (!service) {
    notFound();
  }
  
  return (
    <main className="min-h-screen bg-bg text-ink font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-ink">
              {service.title}
            </h1>
            <p className="text-xl text-muted mb-6">{service.description}</p>
            <p className="text-lg font-medium text-accent mb-8">{service.promise}</p>
            
            <Link href={`/start-project?service=${slug}`}>
              <Button size="lg">Get Started</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center accent-underline">What&apos;s Included</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.deliverables.map((deliverable, index) => (
              <div key={index} className="card-light p-6">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-ink mb-2">{deliverable}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It&apos;s For */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center accent-underline">Who It&apos;s For</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {service.whoItIsFor.map((audience, index) => (
              <div key={index} className="flex items-start space-x-3">
                <svg className="h-6 w-6 text-accent mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-ink">{audience}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center accent-underline">Our Process</h2>
          
          <div className="space-y-8 max-w-3xl mx-auto">
            {service.processSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div className="pt-2">
                  <h3 className="font-semibold text-ink text-lg">{step}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center accent-underline">Frequently Asked Questions</h2>
          <FAQ items={service.faqs} />
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center accent-underline">Related Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.relatedServices.map((relatedSlug) => {
              const relatedService = services.find(s => s.slug === relatedSlug);
              if (!relatedService) return null;
              
              return (
                <Link key={relatedSlug} href={`/services/${relatedSlug}`} className="card-light p-6 group">
                  <h3 className="font-semibold text-ink group-hover:text-accent transition-colors mb-2">
                    {relatedService.title}
                  </h3>
                  <p className="text-sm text-muted">{relatedService.shortDescription}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Band */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 dark-section">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/80 mb-12">
            Let&apos;s discuss how we can help bring your vision to life.
          </p>
          <Link href={`/start-project?service=${slug}`}>
            <Button size="lg">Start Your Project</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
