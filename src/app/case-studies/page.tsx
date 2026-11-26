import Link from "next/link";
import Navbar from "@/components/Navbar";
import { siteConfig } from "@/data/site";

export const metadata = {
  title: "Case Studies | LAVIEN VENTURES",
  description: "Explore our successful projects and see how we've helped businesses achieve their goals.",
};

export default function CaseStudies() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Case <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">Studies</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real results for real businesses. Explore how we&apos;ve helped our clients achieve their goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Placeholder Case Study */}
          <div className="p-8 rounded-xl bg-white/5 border border-white/10 hover:border-accent-primary/50 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4">NOBLEPAY Launch</h2>
            <p className="text-gray-400 mb-4">
              Digital payments platform serving 50,000+ users across Africa with seamless transaction processing.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-accent-primary/20 text-accent-primary rounded-full text-sm">Fintech</span>
              <span className="px-3 py-1 bg-accent-primary/20 text-accent-primary rounded-full text-sm">Mobile App</span>
              <span className="px-3 py-1 bg-accent-primary/20 text-accent-primary rounded-full text-sm">Payments</span>
            </div>
            <Link href="#" className="text-accent-primary hover:text-accent-secondary font-medium">
              Read Case Study →
            </Link>
          </div>

          {/* Coming Soon */}
          <div className="p-8 rounded-xl bg-white/5 border border-dashed border-white/20 flex items-center justify-center min-h-[300px]">
            <div className="text-center">
              <svg className="h-12 w-12 text-gray-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">More Case Studies Coming Soon</h3>
              <p className="text-gray-400 max-w-md">
                We&apos;re building our portfolio of success stories. Check back soon for more examples of how we help businesses thrive.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link href="/contact" className="inline-block px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-accent-primary to-accent-secondary text-white transition-all duration-300 hover:scale-105 shadow-lg shadow-accent-primary/30">
            Start Your Success Story
          </Link>
        </div>
      </div>
    </main>
  );
}
