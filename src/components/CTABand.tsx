import Link from "next/link";

interface CTABandProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
}

export default function CTABand({ title, subtitle, ctaText, ctaHref }: CTABandProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 dark-section">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          {title}
        </h2>
        <p className="text-xl text-white/80 mb-8">
          {subtitle}
        </p>
        <Link href={ctaHref} className="btn-primary inline-block">
          {ctaText}
        </Link>
      </div>
    </section>
  );
}
