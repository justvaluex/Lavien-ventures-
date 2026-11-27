export interface Service {
  slug: string;
  title: string;
  group: 'Build' | 'Automate' | 'Grow' | 'Brand & Strategy';
  shortDescription: string;
  longDescription: string;
  deliverables: string[];
  whoItIsFor: string[];
  processSteps: string[];
  faqs: { question: string; answer: string }[];
}

export interface NavLink {
  href: string;
  label: string;
}

export interface Audience {
  title: string;
  desc: string;
}

export interface Advantage {
  title: string;
  desc: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

export interface Venture {
  name: string;
  description: string;
  status: 'Active' | 'In Progress' | 'Planning';
  industry: string[];
  link?: string;
}

// Navigation links
export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/ventures", label: "Ventures" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];

// Services (10 total, grouped as specified)
export const services: Service[] = [
  // BUILD GROUP
  {
    slug: "website-development",
    title: "Website Development",
    group: "Build",
    shortDescription: "Modern, responsive websites that convert visitors into customers",
    longDescription: "We build fast, secure, and conversion-optimized websites that represent your brand perfectly and drive business results.",
    deliverables: [
      "Business websites",
      "Landing pages",
      "Web applications",
      "Booking platforms",
      "Customer portals",
      "API integrations",
      "Database-driven apps",
      "Redesigns",
      "Maintenance and support"
    ],
    whoItIsFor: [
      "Startups needing a professional online presence",
      "Small businesses going digital",
      "Enterprises requiring custom web applications",
      "Brands needing website redesigns"
    ],
    processSteps: [
      "Discovery & requirements gathering",
      "Wireframing & prototyping",
      "Design & development",
      "Testing & launch"
    ],
    faqs: [
      {
        question: "How long does a typical website project take?",
        answer: "Most websites take 4-8 weeks depending on complexity. Simple sites can be done in 2-3 weeks, while complex web applications may take 12+ weeks."
      },
      {
        question: "Will I be able to update the website myself?",
        answer: "Yes! We implement user-friendly CMS solutions that make it easy for you to update content without technical knowledge."
      },
      {
        question: "Do you offer ongoing maintenance?",
        answer: "Absolutely. We provide ongoing maintenance packages including security updates, backups, performance monitoring, and content updates."
      }
    ]
  },
  {
    slug: "shopify-ecommerce",
    title: "Shopify & E-Commerce",
    group: "Build",
    shortDescription: "Turn your products into a digital storefront that drives sales",
    longDescription: "We build high-converting Shopify stores optimized for sales, user experience, and seamless operations.",
    deliverables: [
      "Store setup and customization",
      "Product setup",
      "Payment and app integration",
      "Conversion and product page optimization",
      "E-commerce strategy",
      "Marketing integration"
    ],
    whoItIsFor: [
      "Brands launching their first online store",
      "Existing retailers migrating to Shopify",
      "DTC brands scaling their e-commerce",
      "Businesses needing store optimization"
    ],
    processSteps: [
      "Strategy & planning",
      "Store design & development",
      "Product migration & optimization",
      "Testing & launch"
    ],
    faqs: [
      {
        question: "Can you migrate my existing store to Shopify?",
        answer: "Yes! We specialize in seamless migrations from other platforms with zero downtime and preserved SEO rankings."
      },
      {
        question: "Do you handle product photography?",
        answer: "We coordinate professional product photography as part of our setup process to ensure your products look their best."
      }
    ]
  },
  {
    slug: "mobile-app-coordination",
    title: "Mobile App Coordination",
    group: "Build",
    shortDescription: "End-to-end coordination for native iOS and Android apps",
    longDescription: "We manage the entire mobile app development lifecycle, from concept to App Store launch, coordinating expert teams.",
    deliverables: [
      "App strategy & planning",
      "UI/UX design oversight",
      "Development team coordination",
      "Quality assurance management",
      "App Store submission",
      "Post-launch support"
    ],
    whoItIsFor: [
      "Startups building their first app",
      "Businesses expanding to mobile",
      "Companies needing app modernization",
      "Enterprises with complex app needs"
    ],
    processSteps: [
      "Requirements & strategy",
      "Team selection & onboarding",
      "Development oversight",
      "Launch & iteration"
    ],
    faqs: [
      {
        question: "Do you develop apps in-house?",
        answer: "We coordinate with top-tier development teams who specialize in your specific technology stack and requirements."
      },
      {
        question: "How do you ensure quality?",
        answer: "We implement rigorous QA processes and testing protocols throughout development to ensure a polished final product."
      }
    ]
  },

  // AUTOMATE GROUP
  {
    slug: "ai-automation",
    title: "AI Automation",
    group: "Automate",
    shortDescription: "Eliminate repetitive work with intelligent AI systems",
    longDescription: "We implement AI solutions that automate workflows, reduce manual tasks, and free your team to focus on strategic work.",
    deliverables: [
      "AI customer support and chatbots",
      "Lead qualification",
      "Automated email workflows",
      "Appointment and CRM automation",
      "Document processing",
      "Data extraction",
      "Sales automation",
      "AI content workflows"
    ],
    whoItIsFor: [
      "Businesses drowning in manual tasks",
      "Teams looking to scale without hiring",
      "Companies wanting to improve response times",
      "Organizations seeking efficiency gains"
    ],
    processSteps: [
      "Workflow audit & identification",
      "Solution design & selection",
      "Implementation & integration",
      "Training & optimization"
    ],
    faqs: [
      {
        question: "What kind of AI solutions do you implement?",
        answer: "We implement practical AI solutions tailored to your needs, from chatbots and automated workflows to advanced data processing and predictive analytics."
      },
      {
        question: "How do you ensure AI doesn't replace humans?",
        answer: "Our approach focuses on augmenting human work, not replacing it. We identify repetitive tasks that drain productivity and automate those specifically."
      }
    ]
  },
  {
    slug: "business-automation",
    title: "Business Automation",
    group: "Automate",
    shortDescription: "Streamline operations with automated workflows",
    longDescription: "We streamline your business operations by implementing automated workflows that save time, reduce errors, and improve consistency.",
    deliverables: [
      "CRM implementation",
      "Lead management",
      "Automated follow-ups",
      "Customer onboarding",
      "Invoice workflows",
      "Internal notifications",
      "Data sync",
      "Reporting dashboards",
      "API integrations"
    ],
    whoItIsFor: [
      "Growing businesses with manual processes",
      "Teams overwhelmed by administrative tasks",
      "Companies needing better data flow",
      "Organizations seeking operational efficiency"
    ],
    processSteps: [
      "Process mapping & analysis",
      "Tool selection & setup",
      "Workflow automation",
      "Testing & training"
    ],
    faqs: [
      {
        question: "Which tools do you use for automation?",
        answer: "We use best-in-class tools like Zapier, Make, HubSpot, Salesforce, and custom integrations based on your specific needs and budget."
      }
    ]
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    group: "Automate",
    shortDescription: "Strategic social media that builds community and drives engagement",
    longDescription: "We manage your social media presence strategically, creating engaging content and building communities that drive business results.",
    deliverables: [
      "Platform strategy",
      "Content creation",
      "Community management",
      "Engagement",
      "Analytics",
      "Paid social",
      "Influencer partnerships",
      "Crisis management"
    ],
    whoItIsFor: [
      "Brands needing consistent social presence",
      "Companies wanting to grow their audience",
      "Businesses needing crisis management",
      "Organizations seeking community building"
    ],
    processSteps: [
      "Strategy & platform selection",
      "Content calendar & creation",
      "Community engagement",
      "Performance optimization"
    ],
    faqs: [
      {
        question: "Which platforms do you manage?",
        answer: "We manage all major platforms including Instagram, Facebook, LinkedIn, Twitter/X, TikTok, and Pinterest based on where your audience lives."
      }
    ]
  },

  // GROW GROUP
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    group: "Grow",
    shortDescription: "Turn attention into customers with strategic campaigns",
    longDescription: "We create and execute digital marketing strategies that attract qualified leads and convert them into paying customers.",
    deliverables: [
      "Social and content strategy",
      "Digital advertising",
      "Facebook/Instagram and Google ads",
      "Lead generation",
      "Email marketing",
      "Conversion optimization",
      "Analytics"
    ],
    whoItIsFor: [
      "Businesses needing more leads",
      "Brands wanting to increase visibility",
      "Companies optimizing conversion rates",
      "Organizations seeking measurable ROI"
    ],
    processSteps: [
      "Market research & strategy",
      "Campaign creation & launch",
      "Performance monitoring",
      "Optimization & scaling"
    ],
    faqs: [
      {
        question: "How do you measure success?",
        answer: "We track KPIs aligned with your goals, from lead volume and cost per acquisition to conversion rates and lifetime value."
      }
    ]
  },
  {
    slug: "digital-advertising",
    title: "Digital Advertising",
    group: "Grow",
    shortDescription: "Targeted ad campaigns that drive qualified traffic",
    longDescription: "We create and manage targeted advertising campaigns across all major platforms to drive qualified traffic and conversions.",
    deliverables: [
      "Campaign strategy",
      "Audience targeting",
      "Ad creative",
      "A/B testing",
      "Budget optimization",
      "Performance tracking",
      "Multi-platform campaigns",
      "Retargeting"
    ],
    whoItIsFor: [
      "Businesses needing immediate traffic",
      "Brands launching new products",
      "Companies optimizing ad spend",
      "Organizations seeking scale"
    ],
    processSteps: [
      "Audience research & targeting",
      "Creative development",
      "Campaign launch & monitoring",
      "Optimization & scaling"
    ],
    faqs: [
      {
        question: "Which platforms do you advertise on?",
        answer: "We run campaigns across Google Ads, Facebook/Instagram, LinkedIn, TikTok, and programmatic display networks based on your target audience."
      }
    ]
  },
  {
    slug: "business-consulting",
    title: "Business Consulting",
    group: "Grow",
    shortDescription: "Strategic guidance to accelerate growth and execution",
    longDescription: "We provide strategic consulting to help you navigate challenges, identify opportunities, and execute your vision effectively.",
    deliverables: [
      "Business strategy",
      "Startup strategy",
      "Product strategy",
      "Technology strategy",
      "Digital transformation",
      "Business model development",
      "Go-to-market"
    ],
    whoItIsFor: [
      "Founders needing strategic direction",
      "Executives facing complex challenges",
      "Companies undergoing transformation",
      "Organizations planning growth"
    ],
    processSteps: [
      "Discovery & assessment",
      "Strategy development",
      "Implementation planning",
      "Execution support"
    ],
    faqs: [
      {
        question: "What type of consulting do you provide?",
        answer: "We provide strategic consulting across business, product, technology, and go-to-market domains, tailored to your specific challenges and goals."
      }
    ]
  },

  // BRAND & STRATEGY GROUP
  {
    slug: "branding",
    title: "Branding",
    group: "Brand & Strategy",
    shortDescription: "Memorable identities that stand out in the market",
    longDescription: "We create distinctive brand identities that resonate with your audience and differentiate you in the marketplace.",
    deliverables: [
      "Logo design",
      "Brand identity",
      "Strategy",
      "Visual identity",
      "Marketing materials",
      "Social branding",
      "Collateral",
      "Positioning",
      "Guidelines"
    ],
    whoItIsFor: [
      "Startups launching their brand",
      "Companies rebranding",
      "Businesses needing visual consistency",
      "Organizations establishing market position"
    ],
    processSteps: [
      "Brand discovery & research",
      "Strategy & positioning",
      "Identity design",
      "Guidelines & rollout"
    ],
    faqs: [
      {
        question: "What's included in a branding package?",
        answer: "Our branding packages include strategy, logo design, visual identity system, brand guidelines, and core marketing materials."
      }
    ]
  }
];

// Audiences
export const audiences: Audience[] = [
  { title: "Entrepreneurs", desc: "Turning ideas into reality" },
  { title: "Startups/MVPs", desc: "From concept to market launch" },
  { title: "Small Businesses", desc: "Going digital and scaling" },
  { title: "Established Companies", desc: "Modernizing operations" },
  { title: "Organizations", desc: "Tech transformation" },
];

// Advantages
export const advantages: Advantage[] = [
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

// Process steps
export const processSteps: ProcessStep[] = [
  { step: "1", title: "Discover", desc: "Understand your goals" },
  { step: "2", title: "Design", desc: "Create the vision" },
  { step: "3", title: "Build", desc: "Execute flawlessly" },
  { step: "4", title: "Scale", desc: "Grow sustainably" },
];

// Ventures (placeholder data - will need your input)
export const ventures: Venture[] = [
  {
    name: "NOBLEPAY",
    description: "Digital payments and financial technology platform focused on making payments, mobile recharge, and bill payment more accessible across African markets.",
    status: "Active",
    industry: ["Fintech", "Payments", "Africa"],
    link: "#"
  },
  // PLACEHOLDER - NEEDS YOUR INPUT
  {
    name: "[Placeholder Venture]",
    description: "Sample venture card - please replace with actual venture details",
    status: "In Progress",
    industry: ["Technology"],
    link: "#"
  }
];

// Site config
export const siteConfig = {
  name: "LAVIEN VENTURES",
  tagline: "We Build What Moves Business Forward",
  description: "Turn ideas into functioning businesses through technology, automation, branding, marketing, and strategic consulting.",
};

// Footer links
export const footerLinks = {
  services: [
    { href: "/services/website-development", label: "Website Development" },
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

// Group services by category for homepage
export const serviceGroups = {
  Build: services.filter(s => s.group === 'Build'),
  Automate: services.filter(s => s.group === 'Automate'),
  Grow: services.filter(s => s.group === 'Grow'),
  'Brand & Strategy': services.filter(s => s.group === 'Brand & Strategy'),
};
