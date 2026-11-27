import Link from "next/link";
import Navbar from "@/components/Navbar";
import { siteConfig } from "@/data/site";

export const metadata = {
  title: "Digital Products | LAVIEN VENTURES",
  description: "Digital products for builders who want to move fast. Templates, guides, toolkits, and more.",
};

// Placeholder product data - replace with real data
const categories = [
  { id: "ebooks", name: "E-books" },
  { id: "templates", name: "Templates" },
  { id: "guides", name: "Guides" },
  { id: "toolkits", name: "Toolkits" },
];

const products = [
  {
    id: "startup-template",
    name: "Startup Launch Template",
    category: "templates",
    price: "$49",
    description: "Complete startup launch template with all essential documents",
    image: "/images/startup-template.jpg",
  },
  {
    id: "marketing-guide",
    name: "Digital Marketing Guide",
    category: "guides",
    price: "$29",
    description: "Comprehensive guide to digital marketing strategies",
    image: "/images/marketing-guide.jpg",
  },
  {
    id: "saas-toolkit",
    name: "SaaS Growth Toolkit",
    category: "toolkits",
    price: "$99",
    description: "Everything you need to grow your SaaS business",
    image: "/images/saas-toolkit.jpg",
  },
];

export default function Store() {
  return (
    <main className="min-h-screen bg-bg text-ink font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-ink">
              Digital <span className="hero-gradient-text">Products</span>
            </h1>
            <p className="text-xl text-muted mb-8">
              Digital products for builders who want to move fast. Templates, guides, toolkits, and more.
            </p>
            
            <Link href="/book" className="btn-primary inline-block mr-4">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                className="px-6 py-3 rounded-full border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300"
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="card-light p-6">
                <div className="aspect-video bg-muted/20 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-muted text-sm">Product Image</span>
                </div>
                <h3 className="font-semibold text-ink mb-2">{product.name}</h3>
                <p className="text-sm text-muted mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-accent">{product.price}</span>
                  <Link 
                    href={`/store/${product.id}`}
                    className="btn-primary text-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 dark-section">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Need more than a product?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Book a consultation to discuss your specific needs.
          </p>
          <Link href="/book" className="btn-primary inline-block">
            Book a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
