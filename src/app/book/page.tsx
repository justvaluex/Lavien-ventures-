import Link from "next/link";
import Navbar from "@/components/Navbar";
import { siteConfig } from "@/data/site";

export const metadata = {
  title: "Book a Consultation | LAVIEN VENTURES",
  description: "Schedule a consultation with our team to discuss your project needs.",
};

export default function Book() {
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL;

  return (
    <main className="min-h-screen bg-bg text-ink font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-ink">
              Book a <span className="hero-gradient-text">Consultation</span>
            </h1>
            <p className="text-xl text-muted mb-8">
              Schedule a call with our team to discuss your project needs and explore how we can help bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form or External Link */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-3xl mx-auto text-center">
          {bookingUrl ? (
            <>
              <p className="text-lg text-muted mb-8">
                Please use our scheduling tool to book a time that works for you.
              </p>
              
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block mr-4"
              >
                Open Scheduling Tool
              </a>
              
              <Link href="/contact" className="btn-secondary inline-block">
                Contact Us Directly
              </Link>
            </>
          ) : (
            <>
              <p className="text-lg text-muted mb-8">
                Booking functionality is currently being set up. In the meantime, please contact us directly.
              </p>
              
              <Link href="/contact" className="btn-primary inline-block">
                Contact Us
              </Link>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
