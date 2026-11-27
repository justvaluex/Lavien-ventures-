import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Privacy Policy | LAVIEN VENTURES",
  description: "Privacy policy for LAVIEN VENTURES. Learn how we collect, use, and protect your information.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-bg text-ink font-sans">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-ink">
          Privacy Policy
        </h1>
        
        <p className="text-lg text-muted mb-8">
          Last updated: November 26, 2026
        </p>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-accent font-medium mb-8">
            ⚠️ <strong>Note:</strong> This is a template. Please have it reviewed by legal counsel before publishing.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 text-ink">1. Information We Collect</h2>
          <p className="text-muted mb-4">
            We collect information that you provide directly to us when you use our contact forms, start a project inquiry, or communicate with us. This may include:
          </p>
          <ul className="list-disc list-inside text-muted mb-4 space-y-2">
            <li>Name and contact information</li>
            <li>Company name and details</li>
            <li>Project requirements and descriptions</li>
            <li>Communication history</li>
          </ul>
          
          <h2 className="text-2xl font-bold mb-4 text-ink">2. How We Use Your Information</h2>
          <p className="text-muted mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc list-inside text-muted mb-4 space-y-2">
            <li>Provide our services</li>
            <li>Communicate with you about your projects</li>
            <li>Respond to your inquiries</li>
            <li>Improve our services</li>
          </ul>
          
          <h2 className="text-2xl font-bold mb-4 text-ink">3. Information Sharing</h2>
          <p className="text-muted mb-4">
            We do not sell your personal information. We may share your information with:
          </p>
          <ul className="list-disc list-inside text-muted mb-4 space-y-2">
            <li>Service providers who help us operate our business</li>
            <li>Professional advisors (legal, financial) when necessary</li>
            <li>Business partners when you explicitly consent</li>
          </ul>
          
          <h2 className="text-2xl font-bold mb-4 text-ink">4. Data Security</h2>
          <p className="text-muted mb-4">
            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 text-ink">5. Your Rights</h2>
          <p className="text-muted mb-4">
            You have the right to:
          </p>
          <ul className="list-disc list-inside text-muted mb-4 space-y-2">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt out of marketing communications</li>
          </ul>
          
          <h2 className="text-2xl font-bold mb-4 text-ink">6. Contact Us</h2>
          <p className="text-muted mb-4">
            If you have questions about this Privacy Policy, please contact us at:
          </p>
          <p className="text-muted">
            Email: hello@lavenventures.com
          </p>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border">
          <Link href="/terms" className="text-accent hover:text-accent-hover transition-colors">
            Read Terms of Service →
          </Link>
        </div>
      </div>
    </main>
  );
}
