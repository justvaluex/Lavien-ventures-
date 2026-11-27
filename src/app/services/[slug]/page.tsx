import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import FAQ from "@/components/FAQ";
import { services, siteConfig } from "@/data/site";

// Service data with full details
const serviceDetails: Record<string, {
  title: string;
  description: string;
  promise: string;
  deliverables: string[];
  whoItIsFor: string[];
  processSteps: string[];
  faqs: { question: string; answer: string }[];
  relatedServices: string[];
}> = {
  "website-development": {
    title: "Website Development",
    description: "Modern, responsive websites that convert visitors into customers",
    promise: "We build fast, secure, and conversion-optimized websites that represent your brand perfectly.",
    deliverables: [
      "Business websites",
      "Landing pages",
      "Web applications",
      "Booking platforms",
      "Customer portals",
      "API integrations",
      "Database-driven apps",
      "Redesigns",
      "Maintenance and support"
    ],
    whoItIsFor: [
      "Startups needing a professional online presence",
      "Small businesses going digital",
      "Enterprises requiring custom web applications",
      "Brands needing website redesigns"
    ],
    processSteps: [
      "Discovery & requirements gathering",
      "Wireframing & prototyping",
      "Design & development",
      "Testing & launch"
    ],
    faqs: [
      {
        question: "How long does a typical website project take?",
        answer: "Most websites take 4-8 weeks depending on complexity. Simple sites can be done in 2-3 weeks, while complex web applications may take 12+ weeks."
      },
      {
        question: "Will I be able to update the website myself?",
        answer: "Yes! We implement user-friendly CMS solutions that make it easy for you to update content without technical knowledge."
      },
      {
        question: "Do you offer ongoing maintenance?",
        answer: "Absolutely. We provide ongoing maintenance packages including security updates, backups, performance monitoring, and content updates."
      }
    ],
    relatedServices: ["shopify-ecommerce", "branding", "digital-marketing"]
  },
  "shopify-ecommerce": {
    title: "Shopify & E-Commerce",
    description: "Turn your products into a digital storefront that drives sales",
    promise: "We build high-converting Shopify stores optimized for sales, user experience, and seamless operations.",
    deliverables: [
      "Store setup and customization",
      "Product setup",
      "Payment and app integration",
      "Conversion and product page optimization",
      "E-commerce strategy",
      "Marketing integration"
    ],
    whoItIsFor: [
      "Brands launching their first online store",
      "Existing retailers migrating to Shopify",
      "DTC brands scaling their e-commerce",
      "Businesses needing store optimization"
    ],
    processSteps: [
      "Strategy & planning",
      "Store design & development",
      "Product migration & optimization",
      "Testing & launch"
    ],
    faqs: [
      {
        question: "Can you migrate my existing store to Shopify?",
        answer: "Yes! We specialize in seamless migrations from other platforms with zero downtime and preserved SEO rankings."
      },
      {
        question: "Do you handle product photography?",
        answer: "We coordinate professional product photography as part of our setup process to ensure your products look their best."
      }
    ],
    relatedServices: ["website-development", "digital-advertising", "branding"]
  },
  // Add remaining services similarly...
};

export function generateStaticParams() {
  return services.flatMap(category => 
    category.items.map(service => ({
      slug: service.slug
    }))
  );
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = params;
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
              const relatedService = services.flatMap(cat => cat.items).find(s => s.slug === relatedSlug);
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
