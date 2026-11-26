export const siteConfig = {
  name: "LAVIEN VENTURES",
  tagline: "We Build What Moves Business Forward",
  description: "Turn ideas into functioning businesses through technology, automation, branding, marketing, and strategic consulting.",
  metadataBase: new URL("https://laven-ventures.vercel.app"),
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/ventures", label: "Ventures" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  // BUILD CATEGORY
  {
    category: "Build",
    items: [
      { 
        id: "web-development", 
        title: "Web Development", 
        desc: "Modern, responsive websites that convert visitors into customers",
        icon: "code" 
      },
      { 
        id: "e-commerce", 
        title: "E-Commerce", 
        desc: "Shopify stores that drive sales and scale with your business",
        icon: "cart" 
      },
      { 
        id: "mobile-apps", 
        title: "Mobile Apps", 
        desc: "Native experiences for iOS & Android platforms",
        icon: "phone" 
      },
    ]
  },
  // AUTOMATE CATEGORY
  {
    category: "Automate",
    items: [
      { 
        id: "ai-automation", 
        title: "AI Automation", 
        desc: "Eliminate repetitive work with intelligent AI systems",
        icon: "brain" 
      },
      { 
        id: "business-automation", 
        title: "Business Automation", 
        desc: "Streamline operations with automated workflows",
        icon: "cog" 
      },
      { 
        id: "social-media", 
        title: "Social Media", 
        desc: "Strategic social media management and growth",
        icon: "share" 
      },
    ]
  },
  // GROW CATEGORY
  {
    category: "Grow",
    items: [
      { 
        id: "digital-marketing", 
        title: "Digital Marketing", 
        desc: "Turn attention into customers with strategic campaigns",
        icon: "chart" 
      },
      { 
        id: "advertising", 
        title: "Digital Advertising", 
        desc: "Targeted ads across all major platforms",
        icon: "megaphone" 
      },
      { 
        id: "consulting", 
        title: "Consulting", 
        desc: "Strategic guidance for sustainable growth",
        icon: "lightbulb" 
      },
    ]
  },
  // BRAND & STRATEGY CATEGORY
  {
    category: "Brand & Strategy",
    items: [
      { 
        id: "branding", 
        title: "Branding", 
        desc: "Memorable identities that stand out in the market",
        icon: "sparkles" 
      },
      { 
        id: "strategy", 
        title: "Strategy", 
        desc: "Comprehensive business strategy and planning",
        icon: "target" 
      },
    ]
  },
];

export const audiences = [
  { title: "Entrepreneurs", desc: "Turning ideas into reality" },
  { title: "Startups/MVPs", desc: "From concept to market launch" },
  { title: "Small Businesses", desc: "Going digital and scaling" },
  { title: "Established Companies", desc: "Modernizing operations" },
  { title: "Organizations", desc: "Tech transformation" },
];

export const advantages = [
  { 
    title: "Skin in the Game", 
    desc: "We build our own ventures, so we understand the real challenges of building a business from the ground up."
  },
  { 
    title: "End-to-End Expertise", 
    desc: "From ideation to launch to scaling, we have experience at every stage of the business lifecycle."
  },
  { 
    title: "Strategic Partnerships", 
    desc: "We develop joint ventures and partnerships that create mutual value for all parties involved."
  },
];

export const processSteps = [
  { step: "1", title: "Discover", desc: "Understand your goals" },
  { step: "2", title: "Design", desc: "Create the vision" },
  { step: "3", title: "Build", desc: "Execute flawlessly" },
  { step: "4", title: "Scale", desc: "Grow sustainably" },
];

export const trustStats = [
  { label: "Projects Launched", value: "50+" },
  { label: "Clients Served", value: "100+" },
  { label: "Revenue Generated", value: "$10M+" },
  { label: "Team Members", value: "25+" },
];

export const footerLinks = {
  services: [
    { href: "/services/web-development", label: "Web Development" },
    { href: "/services/ai-automation", label: "AI Automation" },
    { href: "/services/digital-marketing", label: "Digital Marketing" },
    { href: "/services/branding", label: "Branding" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/ventures", label: "Ventures" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/contact", label: "Contact" },
  ],
};
