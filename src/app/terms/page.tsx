import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Terms of Service | LAVIEN VENTURES",
  description: "Terms of service for LAVIEN VENTURES. Learn about our terms and conditions.",
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-bg text-ink font-sans">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-ink">
          Terms of Service
        </h1>
        
        <p className="text-lg text-muted mb-8">
          Last updated: November 26, 2026
        </p>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-accent font-medium mb-8">
            ⚠️ <strong>Note:</strong> This is a template. Please have it reviewed by legal counsel before publishing.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 text-ink">1. Agreement to Terms</h2>
          <p className="text-muted mb-4">
            By accessing and using LAVIEN VENTURES&apos; services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 text-ink">2. Services</h2>
          <p className="text-muted mb-4">
            LAVIEN VENTURES provides web development, e-commerce solutions, automation, marketing, branding, and consulting services. We reserve the right to modify or discontinue any service at any time.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 text-ink">3. Client Responsibilities</h2>
          <p className="text-muted mb-4">
            Clients agree to:
          </p>
          <ul className="list-disc list-inside text-muted mb-4 space-y-2">
            <li>Provide accurate and complete information</li>
            <li>Make timely payments as agreed</li>
            <li>Provide necessary access and credentials</li>
            <li>Review and provide feedback in a timely manner</li>
          </ul>
          
          <h2 className="text-2xl font-bold mb-4 text-ink">4. Payment Terms</h2>
          <p className="text-muted mb-4">
            Payment terms are specified in individual project agreements. Late payments may incur additional fees and may result in project delays.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 text-ink">5. Intellectual Property</h2>
          <p className="text-muted mb-4">
            Upon full payment, clients receive ownership of custom work created specifically for their project. Pre-existing materials and tools remain the property of LAVIEN VENTURES.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 text-ink">6. Limitation of Liability</h2>
          <p className="text-muted mb-4">
            LAVIEN VENTURES shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 text-ink">7. Termination</h2>
          <p className="text-muted mb-4">
            Either party may terminate the agreement with written notice. Upon termination, client pays for all work completed up to the termination date.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 text-ink">8. Governing Law</h2>
          <p className="text-muted mb-4">
            These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which LAVIEN VENTURES operates.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 text-ink">9. Changes to Terms</h2>
          <p className="text-muted mb-4">
            We reserve the right to modify these terms at any time. Continued use of services after changes constitutes acceptance of new terms.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 text-ink">10. Contact</h2>
          <p className="text-muted mb-4">
            For questions about these Terms of Service, please contact us at:
          </p>
          <p className="text-muted">
            Email: hello@lavenventures.com
          </p>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border">
          <Link href="/privacy" className="text-accent hover:text-accent-hover transition-colors">
            Read Privacy Policy →
          </Link>
        </div>
      </div>
    </main>
  );
}
