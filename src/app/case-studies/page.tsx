import Link from "next/link";
import Navbar from "@/components/Navbar";
import { siteConfig } from "@/data/site";

export const metadata = {
  title: "Case Studies | LAVIEN VENTURES",
  description: "Client success stories and case studies.",
};

export default function CaseStudies() {
  return (
    <main className="min-h-screen bg-bg text-ink font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-ink">
              Case <span className="hero-gradient-text">Studies</span>
            </h1>
            <p className="text-xl text-muted mb-8">
              Client success stories and case studies.
            </p>
          </div>
        </div>
      </section>

      {/* Empty State */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <svg className="w-20 h-20 text-muted mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            
            <h2 className="text-2xl font-bold text-ink mb-4">
              Case Studies Coming Soon
            </h2>
            
            <p className="text-lg text-muted mb-8">
              We&apos;re working on showcasing our client success stories. Check back soon for detailed case studies of how we&apos;ve helped businesses achieve their goals.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/start-project" className="btn-primary inline-block">
              Start Your Project
            </Link>
            
            <Link href="/book" className="btn-secondary inline-block">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
