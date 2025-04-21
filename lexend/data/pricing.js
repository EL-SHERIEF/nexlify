export const pricingTiers = [
  {
    id: 1,
    title: "AI Starters",
    description: "Perfect for individuals building AI-driven projects.",
    price: "$29 USD",
    priceInfo: "per user, up to 2 users",
    buttonLabel: "Free trial",

    features: [
      "AI-Powered Data Analysis",
      "Real-Time Model Monitoring",
      "Pre-Built AI Templates",
      "Basic Workflow Automation",
      "24/7 Email Support",
    ],
  },
  {
    id: 2,
    title: "AI Pro",
    description: "Ideal for teams scaling AI solutions with advanced integrations.",
    price: "$59 USD",
    priceInfo: "per user",
    buttonLabel: "Try free",

    features: [
      "Advanced AI Model Training",
      "API and Third-Party Integrations",
      "Unlimited Collaborative Workspaces",
      "AI-Driven Insights Dashboard",
      "Priority Chat and Email Support",
    ],
    popular: true,
    imageUrl: "/assets/images/template/money.svg",
    imageAlt: "money",
    darkImageUrl: "/assets/images/template/money-dark.svg",
    darkImageAlt: "money-dark",
  },
];
export const tiers = [
  {
    id: 1,
    plan: "Basic plan",
    price: "$49",
    priceSuffix: "/ mo",
    description: "Billed annually.",
    features: [
      "Up to 10 individual users",
      "Basic reporting and analytics",
      "Basic Workflow Automation",
      "20GB individual data each user",
      "Basic chat and email support",
    ],
    icon: "unicon-sub-volume",
    buttonText: "Get started",

    highlight: false,
  },
  {
    id: 2,
    plan: "Business plan",
    price: "$79",
    priceSuffix: "/ mo",
    description: "Billed annually.",
    features: [
      "Access to all <b>Basic</b> features",
      "200+ integrations",
      "Unlimited Collaborative Workspaces",
      "AI-Driven Insights Dashboard",
      "Priority Chat and Email Support",
    ],
    icon: "unicon-course",
    buttonText: "Start a free trial",

    highlight: true,
  },
  {
    id: 3,
    plan: "Enterprise plan",
    price: "$199",
    priceSuffix: "/ mo",
    description: "Billed annually.",
    features: [
      "Access to all <b>Business</b> features",
      "Unlimited files uploads",
      "Real-time team collaboration",
      "SSO support and custom user roles",
      "Bulk send & Forms",
    ],
    icon: "unicon-building",
    buttonText: "Book a demo",

    highlight: false,
  },
];

export const pricingPlans = [
  {
    title: "Starter",
    price: "$49",
    description: "For creating impressive tools that generate results.",
    features: [
      "Up to 10 individual users",
      "Basic reporting and analytics",
      "Basic Workflow Automation",
      "20GB individual data each user",
      "Basic chat and email support",
    ],
    linkText: "Get started",

    additionalClasses: "",
  },
  {
    title: "Pro",
    price: "$79",
    description: "Ideal for teams scaling AI solutions with advanced integrations.",
    features: [
      "Access to all Starter features",
      "200+ integrations",
      "Unlimited Collaborative Workspaces",
      "AI-Driven Insights Dashboard",
      "Priority Chat and Email Support",
    ],
    linkText: "Start a free trial",

    additionalClasses:
      "bg-gradient-45 from-secondary to-transparent dark:from-gray-700 sm:rounded-top-end-0 lg:rounded-top-start-0 lg:rounded-top-end-1-5",
    badge: "Popular",
  },
];

export const tiers2 = [
  {
    name: "Free",
    price: "$0",
    description: "Build a <b>hobby site</b> with every basic features.",
    details: "Free Forever!",
    buttonClass: "btn-secondary",
    features: [
      "Use on 1 website",
      "Personal License",
      "20 Basic Elements",
      "Basic Dynamic Data",
      "Basic Design Library",
      "Basic support",
    ],
  },
  {
    name: "Pro",
    price: "$79",
    description: "Build <b>one website</b> with every pro feature.",
    details: "Billed annually.",
    buttonClass: "btn-primary",
    features: [
      "Use on 1 website",
      "Personal License",
      "100 Pro Elements",
      "Full Dynamic Data",
      "Full Design Library",
      "Priority support",
    ],
    offer: "Save $25",
  },
  {
    name: "Agency",
    price: "$199",
    description: "Build <b>unlimited websites</b> with every pro feature",
    details: "Billed annually.",
    buttonClass: "btn-secondary",
    features: [
      "Use on unlimited websites",
      "Commercial License",
      "100 Pro Elements",
      "Full Dynamic Data",
      "Full Design Library",
      "Priority support",
    ],
  },
];

export const tiers3 = [
  {
    title: "AI Starters",
    description: "For creating impressive tools that generate results.",
    price: "$19 USD",
    yearlyPrice: "$12 USD",
    priceDetails: "Seat per month, 2 seats max",
    linkText: "Free trial",
    linkSubtext: "No credit card required",
    features: [
      "AI-Powered Data Analysis",
      "Real-Time Model Monitoring",
      "Pre-Built AI Templates",
      "Basic Workflow Automation",
      "24/7 Email Support",
    ],
    isPopular: false,
  },
  {
    title: "AI Pro",
    description: "Ideal for teams scaling AI solutions with advanced integrations.",
    price: "$59 USD",
    yearlyPrice: "$32 USD",
    priceDetails: "Seat cost per month",
    linkText: "Start a free trial",
    linkSubtext: "No credit card required",
    features: [
      "Advanced AI Model Training",
      "API and Third-Party Integrations",
      "Unlimited Collaborative Workspaces",
      "AI-Driven Insights Dashboard",
      "Priority Chat and Email Support",
    ],
    isPopular: true,
  },
  {
    title: "Enterprise",
    description: "For large companies with complex Tool workflows.",
    price: "Let’s talk",
    yearlyPrice: "Let’s talk",
    priceDetails: "Per‑seat or per‑tool pricing",
    linkText: "Contact sales",
    linkSubtext: "Respond within 24 hrs max",
    features: [
      "Unlimited files uploads",
      "AI-Powered Data Analysis",
      "User performance",
      "SSO support and custom user roles",
      "Bulk send & Forms*",
    ],
    isPopular: false,
  },
];

export const pricingPlans3 = [
  {
    title: "Starter",
    description: "For individuals, freelancers",
    price: 49,
    features: [
      "Fast and Reliable",
      "Discover Data Everywhere",
      "Enrich Data with Context",
      "Risk Management",
      "Privacy Compliance",
      "Third-Party Management",
    ],
    included: [true, true, false, false, false, false],
    link: "/sign-up",
    buttonClass: "btn-ghost-tertiary",
  },
  {
    title: "Pro",
    description: "For startups, agencies",
    price: 89,
    features: [
      "Fast and Reliable",
      "Discover Data Everywhere",
      "Enrich Data with Context",
      "Risk Management",
      "Privacy Compliance",
      "Third-Party Management",
    ],
    included: [true, true, true, true, false, false],
    link: "/sign-up",
    buttonClass: "btn-primary",
  },
  {
    title: "AI Pro",
    description: "For large business, companies",
    price: 249,
    features: [
      "Fast and Reliable",
      "Discover Data Everywhere",
      "Enrich Data with Context",
      "Risk Management",
      "Privacy Compliance",
      "Third-Party Management",
    ],
    included: [true, true, true, true, true, true],
    link: "/page-contact-2",
    buttonClass: "btn-ghost-tertiary",
  },
];

export const pricingPlans4 = [
  {
    title: "FREE",
    description: "Free now and forever",
    descriptionYearly: "Free now and forever",
    price: 0,
    buttonText: "Get started",
    buttonClass:
      "btn btn-md btn-ghost-tertiary border border-dark dark:border-white dark:border-opacity-15 rounded-pill",
    features: [
      "Fast and Reliable",
      "Discover Data Everywhere",
      "Enrich Data with Context",
      "Risk Management",
    ],
  },
  {
    title: "Go PRO",
    description: "One month only",
    descriptionYearly: "One year only",
    price: 24,
    buttonText: "Try for free",
    buttonClass:
      "btn btn-md btn-primary border border-dark dark:border-white dark:border-opacity-15 rounded-pill",
    features: [
      "Fast and Reliable",
      "Discover Data Everywhere",
      "Enrich Data with Context",
      "Risk Management",
      "Privacy Compliance",
      "Third-Party Management",
    ],
  },
];

export const pricingPlans5 = [
  {
    title: "Starter",
    description: "For individuals, freelancers",
    price: 24,
    duration: "/ month",
    billed: "Billed once yearly",
    features: ["Fast and Reliable", "Discover Data Everywhere"],
    cta: {
      text: "Try for free",
      link: "/sign-up",
    },
    bgColor: "bg-gray-300 bg-opacity-15 text-white",
  },
  {
    title: "Pro",
    description: "For startups, agencies",
    price: 48,
    duration: "/ month",
    billed: "Billed once yearly",
    features: [
      "Fast and Reliable",
      "Discover Data Everywhere",
      "Enrich Data with Context",
      "Risk Management",
    ],
    cta: {
      text: "Try for free",
      link: "/sign-up",
    },
    bgColor: "bg-secondary text-dark shadow-xs",
  },
  {
    title: "AI Pro",
    description: "For large business, companies",
    price: 64,
    duration: "/ month",
    billed: "Billed once yearly",
    features: [
      "Fast and Reliable",
      "Discover Data Everywhere",
      "Enrich Data with Context",
      "Risk Management",
      "Privacy Compliance",
      "Third-Party Management",
    ],
    cta: {
      text: "Get in touch",
      link: "/page-contact-2",
    },
    bgColor: "bg-gray-300 bg-opacity-15 text-white",
  },
];
