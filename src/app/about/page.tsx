import Link from "next/link";
import Navbar from "@/components/Navbar";
import { siteConfig } from "@/data/site";

export const metadata = {
  title: "About Us | LAVIEN VENTURES",
  description: "Learn about LAVIEN VENTURES - your venture studio partner for turning ideas into successful businesses.",
};

export default function About() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">{siteConfig.name}</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We&apos;re more than a service provider. We&apos;re your venture studio partner, building businesses alongside you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              To help entrepreneurs and businesses turn ideas into functioning businesses through technology, automation, branding, marketing, and strategic consulting.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Your idea doesn&apos;t need another advisor. It needs a path to execution. That&apos;s what we provide.
            </p>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-accent-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Skin in the game - we build our own ventures</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-accent-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>End-to-end expertise from ideation to scale</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-accent-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Strategic partnerships that create mutual value</span>
              </li>
            </ul>
          </div>
        </div>

        <Link href="/contact" className="inline-block px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-accent-primary to-accent-secondary text-white transition-all duration-300 hover:scale-105 shadow-lg shadow-accent-primary/30">
          Get in Touch
        </Link>
      </div>
    </main>
  );
}
