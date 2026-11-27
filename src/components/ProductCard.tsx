import Link from "next/link";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  slug: string;
}

export default function ProductCard({ name, description, price, slug }: ProductCardProps) {
  return (
    <div className="card-light p-6">
      <div className="aspect-video bg-muted/20 rounded-lg mb-4 flex items-center justify-center">
        <span className="text-muted text-sm">Product Image</span>
      </div>
      <h3 className="font-semibold text-ink mb-2">{name}</h3>
      <p className="text-sm text-muted mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-accent">{price}</span>
        <Link 
          href={`/store/${slug}`}
          className="btn-primary text-sm"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
