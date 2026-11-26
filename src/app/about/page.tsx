import Link from "next/link";
import Navbar from "@/components/Navbar";
import { siteConfig } from "@/data/site";

export const metadata = {
  title: "About Us | LAVIEN VENTURES",
  description: "Learn about LAVIEN VENTURES - your venture studio partner for turning ideas into successful businesses.",
};

export default function About() {
  return (
    <main className="min-h-screen bg-bg text-ink font-sans">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-ink">
            About <span className="hero-gradient-text">{siteConfig.name}</span>
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            We&apos;re more than a service provider. We&apos;re your venture studio partner, building businesses alongside you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 accent-underline">Our Mission</h2>
            <p className="text-muted leading-relaxed mb-6">
              To help entrepreneurs and businesses turn ideas into functioning businesses through technology, automation, branding, marketing, and strategic consulting.
            </p>
            <p className="text-muted leading-relaxed">
              Your idea doesn&apos;t need another advisor. It needs a path to execution. That&apos;s what we provide.
            </p>
          </div>
          
          <div className="card-light p-8">
            <h3 className="text-2xl font-bold mb-4 text-ink">Why Choose Us?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-accent mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-ink">Skin in the game - we build our own ventures</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-accent mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-ink">End-to-end expertise from ideation to scale</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-accent mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-ink">Strategic partnerships that create mutual value</span>
              </li>
            </ul>
          </div>
        </div>

        <Link href="/contact" className="inline-block btn-primary">
          Get in Touch
        </Link>
      </div>
    </main>
  );
}
