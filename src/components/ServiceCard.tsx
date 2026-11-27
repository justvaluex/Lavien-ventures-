import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  slug: string;
}

export default function ServiceCard({ title, description, slug }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${slug}`}
      className="card-light group p-6 hover:border-accent transition-all duration-300"
    >
      <h3 className="font-semibold text-ink group-hover:text-accent transition-colors mb-2">
        {title}
      </h3>
      <p className="text-sm text-muted">{description}</p>
    </Link>
  );
}
