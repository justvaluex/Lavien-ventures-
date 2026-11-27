import { siteConfig } from "@/data/site";

export default function sitemap() {
  const baseUrl = "https://laven-ventures.vercel.app";
  
  const staticPages = [
    "", // homepage
    "/about",
    "/services",
    "/ventures",
    "/case-studies",
    "/contact",
    "/start-project",
    "/privacy",
    "/terms",
  ];
  
  const serviceSlugs = [
    "website-development",
    "shopify-ecommerce",
    "mobile-app-coordination",
    "ai-automation",
    "business-automation",
    "social-media-management",
    "digital-marketing",
    "digital-advertising",
    "business-consulting",
    "branding",
  ];
  
  const services = serviceSlugs.map(slug => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  
  return [
    ...staticPages.map(page => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly" as const,
      priority: page === "" ? 1 : 0.8,
    })),
    ...services,
  ];
}
