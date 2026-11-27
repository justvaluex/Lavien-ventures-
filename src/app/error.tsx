"use client";

import Button from "@/components/Button";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen bg-bg text-ink font-sans flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl sm:text-7xl font-bold mb-6 text-accent">Oops!</h1>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-ink">Something went wrong</h2>
        <p className="text-lg text-muted mb-8">
          We&apos;re sorry, but something went wrong. Our team has been notified and is working to resolve the issue.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="btn-primary"
          >
            Try Again
          </button>
          <Link href="/">
            <Button variant="secondary">Go Home</Button>
          </Link>
        </div>
        
        {process.env.NODE_ENV === "development" && (
          <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
            <h3 className="font-semibold text-red-800 mb-2">Error Details:</h3>
            <pre className="text-sm text-red-700 whitespace-pre-wrap">
              {error.message}
            </pre>
            {error.digest && (
              <pre className="text-sm text-red-700 mt-2 whitespace-pre-wrap">
                Digest: {error.digest}
              </pre>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
