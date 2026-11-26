import Link from "next/link";
import Navbar from "@/components/Navbar";
import { siteConfig } from "@/data/site";

export const metadata = {
  title: "Contact | LAVIEN VENTURES",
  description: "Get in touch with LAVIEN VENTURES to discuss your project or partnership opportunities.",
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Get in <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have a question or ready to start a project? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a href="mailto:hello@lavenventures.com" className="text-accent-primary hover:text-accent-secondary transition-colors">
                hello@lavenventures.com
              </a>
            </div>
            
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-gray-400">Remote Worldwide</p>
            </div>
          </div>

          {/* Contact Form Placeholder */}
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <h3 className="text-lg font-semibold mb-4">Send us a message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name *"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-accent-primary focus:outline-none transition-colors"
                required
              />
              <input
                type="email"
                placeholder="Your Email *"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-accent-primary focus:outline-none transition-colors"
                required
              />
              <textarea
                rows={4}
                placeholder="Your Message *"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-accent-primary focus:outline-none transition-colors resize-none"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-accent-primary to-accent-secondary text-white transition-all duration-300 hover:scale-105 shadow-lg shadow-accent-primary/30"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/start-project" className="inline-block px-8 py-3 rounded-full font-semibold border-2 border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white transition-all duration-300">
            Or Start a Project →
          </Link>
        </div>
      </div>
    </main>
  );
}
