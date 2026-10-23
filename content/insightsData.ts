export interface InsightArticle {
  id: string;
  title: string;
  category: string;
  publishDate: string;
  readTime: string;
  excerpt: string;
  imageUrl: string;
  url: string;
}

export const insightsData: InsightArticle[] = [
  {
    id: "smart-digital-solutions",
    title: "How Infatoz Technologies Helps Different Industries Grow with Smart Digital Solutions",
    category: "Digital Transformation",
    publishDate: "March 20, 2026",
    readTime: "5 min read",
    excerpt: "Exploring how integrated software architecture, smart process automation, and unified data pipelines empower multi-sector enterprises to outpace legacy friction.",
    imageUrl: "https://infatoz.com/wp-content/uploads/2026/03/successful-business-people-with-strategies-scaled.jpg",
    url: "https://infatoz.com/how-infatoz-technologies-helps-different-industries-grow-with-smart-digital-solutions/",
  },
  {
    id: "ecommerce-growth",
    title: "How Infatoz Technologies Empowers E‑Commerce Businesses to Grow Online",
    category: "E-Commerce & Scale",
    publishDate: "March 20, 2026",
    readTime: "4 min read",
    excerpt: "A tactical guide to architecting checkout performance, headless storefront resilience, and automated warehouse synchronization for modern direct-to-consumer brands.",
    imageUrl: "https://infatoz.com/wp-content/uploads/2026/03/black-friday-sales-sign-neon-light-scaled.jpg",
    url: "https://infatoz.com/how-infatoz-technologies-empowers-e-commerce-businesses-to-grow-online/",
  },
  {
    id: "ai-enterprise-automation",
    title: "Next-Generation AI Applications: Moving from Routine Chatbots to Autonomous Enterprise Agents",
    category: "AI & Innovation",
    publishDate: "April 12, 2026",
    readTime: "6 min read",
    excerpt: "Practical insights on structuring enterprise LLM pipelines with deterministic guardrails, retrieval-augmented generation (RAG), and private vector databases.",
    imageUrl: "https://infatoz.com/wp-content/uploads/2026/03/successful-business-people-with-strategies-scaled.jpg",
    url: "https://infatoz.com/ai-application-development-automation/",
  },
];
