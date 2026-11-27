interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  accentWord?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  accentWord,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center mb-16" : "mb-12"}>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-ink accent-underline">
        {title.split(" ").map((word, idx) => (
          <span key={idx}>
            {accentWord && word === accentWord ? (
              <span className="hero-gradient-text">{word}</span>
            ) : (
              word + " "
            )}
          </span>
        ))}
      </h2>
      
      {subtitle && (
        <p className="text-xl text-muted max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
