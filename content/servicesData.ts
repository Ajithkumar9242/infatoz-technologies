export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: "Development" | "Enterprise" | "Design & Marketing" | "Cloud & AI";
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  deliverables: string[];
  ctaUrl: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "web-design-cms",
    number: "01",
    title: "Web Design & CMS Development",
    category: "Development",
    shortDescription: "Modern, responsive, and user-friendly websites using WordPress, Framer, and other CMS platforms for strong online presence and lead generation.",
    fullDescription: "We engineer high-performance web experiences with clean information architecture, rapid load times, custom editorial workflows, and enterprise-grade SEO foundations that convert visitors into valuable business leads.",
    technologies: ["WordPress", "Framer", "Next.js", "Webflow", "Tailwind CSS"],
    deliverables: ["Custom Headless CMS", "SEO Architecture", "Responsive Multi-device UI", "Lead Capture Automation"],
    ctaUrl: "https://infatoz.com/web-design-cms-development-services/",
  },
  {
    id: "custom-web-app",
    number: "02",
    title: "Custom Web Application Development",
    category: "Development",
    shortDescription: "Custom frontend and full-stack web applications using modern technologies like React, Vue, MERN, Python, and PHP for scalable and secure business solutions.",
    fullDescription: "From complex customer portals to distributed administrative dashboards, we develop robust, test-driven web applications built to scale effortlessly with your transaction volume and organizational complexity.",
    technologies: ["React", "Vue.js", "Node.js", "Python / Django", "TypeScript", "PostgreSQL"],
    deliverables: ["Microservices Architecture", "Custom Admin Consoles", "Role-Based Access Control", "RESTful & GraphQL APIs"],
    ctaUrl: "https://infatoz.com/custom-web-application-development/",
  },
  {
    id: "mobile-app-development",
    number: "03",
    title: "Mobile App Development",
    category: "Development",
    shortDescription: "High-performance Android and iOS apps built with Flutter and React Native to transform business operations into mobile-friendly experiences.",
    fullDescription: "We deliver unified cross-platform mobile solutions that feel natively responsive, integrate with hardware peripherals (biometrics, GPS, cameras), and provide uninterrupted offline capabilities for field operations.",
    technologies: ["Flutter", "React Native", "iOS / Swift", "Android / Kotlin", "Firebase"],
    deliverables: ["iOS & Android Deployments", "Offline Data Sync", "Push Notification Pipelines", "Hardware Integration"],
    ctaUrl: "https://infatoz.com/mobile-app-development/",
  },
  {
    id: "erp-automation-systems",
    number: "04",
    title: "ERP Software & Business Automation",
    category: "Enterprise",
    shortDescription: "Customized ERP software to automate business processes such as inventory, billing, HR, CRM, accounting, and manufacturing operations.",
    fullDescription: "We streamline fragmented business workflows into unified, real-time enterprise management systems utilizing Frappe Framework and bespoke automation modules that eliminate manual errors.",
    technologies: ["Frappe Framework", "ERPNext", "Python", "MariaDB", "Redis", "Celery"],
    deliverables: ["Unified Inventory & Warehousing", "Automated Invoicing & GST", "Human Resource & Payroll", "Operational Analytics"],
    ctaUrl: "https://infatoz.com/erp-software-business-automation-systems/",
  },
  {
    id: "ecommerce-development",
    number: "05",
    title: "E-Commerce Development",
    category: "Enterprise",
    shortDescription: "Powerful online stores using Shopify, WooCommerce, Magento, or custom development to sell products securely and scale your business digitally.",
    fullDescription: "We craft high-conversion commerce ecosystems featuring multi-currency checkouts, seamless payment gateway integrations, automated logistics tracking, and personalized cart workflows.",
    technologies: ["Shopify Plus", "WooCommerce", "Stripe", "Razorpay", "Next.js Commerce"],
    deliverables: ["Custom Storefront Theme", "Checkout Flow Optimization", "Catalog Management", "ERP & Warehouse Sync"],
    ctaUrl: "https://infatoz.com/e-commerce-development/",
  },
  {
    id: "ui-ux-design-branding",
    number: "06",
    title: "UI/UX Design & Branding",
    category: "Design & Marketing",
    shortDescription: "Intuitive user interfaces, attractive designs, and professional branding services including logos, creatives, and marketing materials.",
    fullDescription: "Our human-centered design practice uncovers friction points through user research, building comprehensive Figma design systems, interactive prototypes, and distinctive visual identities.",
    technologies: ["Figma", "Design Systems", "User Testing", "Interactive Prototyping", "Brand Guidelines"],
    deliverables: ["Component Libraries", "Clickable Prototypes", "Brand Guidelines & Assets", "WCAG 2.2 AA Compliance Audit"],
    ctaUrl: "https://infatoz.com/ui-ux-design-branding/",
  },
  {
    id: "digital-marketing-growth",
    number: "07",
    title: "Digital Marketing & Growth Services",
    category: "Design & Marketing",
    shortDescription: "SEO, SMO, Google Ads, and Meta Ads to increase brand visibility, website traffic, and customer engagement.",
    fullDescription: "We implement data-driven acquisition engines targeting high-intent prospective buyers through technical search optimization, targeted pay-per-click campaigns, and conversion rate optimization (CRO).",
    technologies: ["Google Ads", "Meta Ads Manager", "Google Analytics 4", "Semrush", "Tag Manager"],
    deliverables: ["Technical Search Engine Optimization", "B2B Lead Generation Funnels", "Conversion Rate Audits", "ROAS Performance Dashboards"],
    ctaUrl: "https://infatoz.com/digital-marketing-growth-services/",
  },
  {
    id: "ai-applications-automation",
    number: "08",
    title: "AI Application Development & Automation",
    category: "Cloud & AI",
    shortDescription: "AI-powered systems including chatbots, recommendation engines, document processing, and business intelligence solutions.",
    fullDescription: "We integrate state-of-the-art LLMs, semantic search algorithms, and custom predictive models into your production operations to reduce routine operational overhead and reveal strategic intelligence.",
    technologies: ["OpenAI API", "LangChain", "Vector Databases", "Python", "Hugging Face", "FastAPI"],
    deliverables: ["Enterprise Customer Chatbots", "Automated Document Extraction", "Predictive Analytics Models", "Internal Knowledge Retrieval"],
    ctaUrl: "https://infatoz.com/ai-application-development-automation/",
  },
  {
    id: "cloud-dev-maintenance",
    number: "09",
    title: "Cloud Application Development & Maintenance",
    category: "Cloud & AI",
    shortDescription: "Cloud-based application hosting, migration, maintenance, and security using AWS, Azure, and Google Cloud platforms.",
    fullDescription: "We design resilient multi-cloud architectures with automated CI/CD pipelines, container orchestration, proactive infrastructure health monitoring, and disaster recovery protocol guarantees.",
    technologies: ["Amazon Web Services", "Microsoft Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
    deliverables: ["Zero-Downtime CI/CD Pipelines", "Automated Backup & Failover", "Cloud Cost Optimization", "24/7 Threat Monitoring"],
    ctaUrl: "https://infatoz.com/cloud-application-development-maintenance/",
  },
  {
    id: "data-management-migration",
    number: "10",
    title: "Data Management & Migration",
    category: "Enterprise",
    shortDescription: "Safe migration and optimization of business data from legacy systems to modern cloud platforms.",
    fullDescription: "Our data engineering team coordinates zero-data-loss migrations from legacy on-premises databases and fragmented spreadsheets into structured, clean, and cloud-native databases.",
    technologies: ["PostgreSQL", "MySQL", "MongoDB", "ETL Pipelines", "Data Warehousing"],
    deliverables: ["Legacy Schema Transformation", "Data Cleansing & Validation", "Zero-Loss Migration Protocols", "Governance & Audit Trails"],
    ctaUrl: "https://infatoz.com/data-management-migration/",
  },
];
