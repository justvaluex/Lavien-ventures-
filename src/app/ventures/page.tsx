import Link from "next/link";
import Navbar from "@/components/Navbar";
import { siteConfig } from "@/data/site";

export const metadata = {
  title: "Ventures | LAVIEN VENTURES",
  description: "Explore our portfolio of ventures, startups, and digital products we've built.",
};

export default function Ventures() {
  return (
    <main className="min-h-screen bg-bg text-ink font-sans">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Our <span className="bg-gradient-to-r hero-gradient-text">Ventures</span>
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            We don&apos;t just advise businesses. We build them. Explore our portfolio of ventures and projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Featured Venture */}
          <div className="p-8 rounded-xl bg-surface border-border hover:border-accent transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4">NOBLEPAY</h2>
            <p className="text-muted mb-4">
              Digital payments and financial technology platform focused on making payments, mobile recharge, and bill payment more accessible across African markets.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-accent-primary/20 text-accent rounded-full text-sm">Fintech</span>
              <span className="px-3 py-1 bg-accent-primary/20 text-accent rounded-full text-sm">Payments</span>
              <span className="px-3 py-1 bg-accent-primary/20 text-accent rounded-full text-sm">Africa</span>
            </div>
            <Link href="#" className="text-accent hover:text-accent-secondary font-medium">
              Learn More →
            </Link>
          </div>

          {/* Future Ventures */}
          <div className="p-8 rounded-xl bg-surface border border-dashed border-white/20 flex items-center justify-center min-h-[300px]">
            <div className="text-center">
              <svg className="h-12 w-12 text-gray-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">More Ventures Coming Soon</h3>
              <p className="text-muted max-w-md">
                We&apos;re constantly incubating new ideas and building innovative solutions. Stay tuned for exciting announcements.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link href="/contact" className="inline-block btn-primary transition-all duration-300 hover:scale-105 shadow-lg shadow-accent-primary/30">
            Partner With Us
          </Link>
        </div>
      </div>
    </main>
  );
}
