import Link from "next/link";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  accentWord?: string;
}

export default function PageHero({
  title,
  subtitle,
  ctaText,
  ctaHref,
  accentWord,
}: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-surface border-b border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-ink">
            {title.split(" ").map((word, idx) => (
              <span key={idx}>
                {accentWord && word === accentWord ? (
                  <span className="hero-gradient-text">{word}</span>
                ) : (
                  word + " "
                )}
              </span>
            ))}
          </h1>
          
          {subtitle && (
            <p className="text-xl text-muted mb-8">{subtitle}</p>
          )}
          
          {ctaText && ctaHref && (
            <Link href={ctaHref} className="btn-primary inline-block">
              {ctaText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
