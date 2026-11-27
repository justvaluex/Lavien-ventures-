export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://laven-ventures.vercel.app/sitemap.xml",
  };
}
