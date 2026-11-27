import Link from "next/link";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-bg text-ink font-sans flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl sm:text-7xl font-bold mb-6 hero-gradient-text">404</h1>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-ink">Page Not Found</h2>
        <p className="text-lg text-muted mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button size="lg">Go Home</Button>
          </Link>
          <Link href="/services">
            <Button variant="secondary" size="lg">View Services</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
