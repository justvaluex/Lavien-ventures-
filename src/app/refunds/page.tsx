import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Refund Policy | LAVIEN VENTURES",
  description: "Refund policy for digital products and services.",
};

export default function Refunds() {
  return (
    <main className="min-h-screen bg-bg text-ink font-sans">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-ink">
          Refund Policy
        </h1>
        
        <p className="text-lg text-accent font-medium mb-8">
          ⚠️ <strong>Note:</strong> This is a template. Please have it reviewed by legal counsel before publishing.
        </p>
        
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4 text-ink">Digital Products</h2>
          <p className="text-muted mb-4">
            Due to the nature of digital products, all sales are final. Once you download or access a digital product, no refunds will be issued.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 text-ink">Services</h2>
          <p className="text-muted mb-4">
            For services, refunds may be considered on a case-by-case basis if the work has not yet begun. If work has commenced, refunds will be prorated based on work completed.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 text-ink">Contact Us</h2>
          <p className="text-muted mb-4">
            If you have questions about our refund policy, please contact us at hello@lavenventures.com
          </p>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border">
          <Link href="/contact" className="text-accent hover:text-accent-hover transition-colors">
            Contact Us →
          </Link>
        </div>
      </div>
    </main>
  );
}
