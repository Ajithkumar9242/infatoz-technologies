export interface TechnologyItem {
  name: string;
  category: "Cloud & Infrastructure" | "AI & Frameworks" | "Mobile & Web";
  role: string;
  badge: string;
}

export const techEcosystemData: TechnologyItem[] = [
  {
    name: "Google Cloud",
    category: "Cloud & Infrastructure",
    role: "Enterprise Cloud Hosting, BigQuery Analytics & Kubernetes Engine",
    badge: "Cloud Infrastructure",
  },
  {
    name: "Amazon Web Services",
    category: "Cloud & Infrastructure",
    role: "Resilient Serverless Compute, S3 Storage & VPC Security Architecture",
    badge: "Cloud Infrastructure",
  },
  {
    name: "Microsoft Azure",
    category: "Cloud & Infrastructure",
    role: "Hybrid Cloud Integration, Active Directory & Enterprise DevOps",
    badge: "Enterprise Cloud",
  },
  {
    name: "OpenAI",
    category: "AI & Frameworks",
    role: "State-of-the-Art Language Models, Cognitive Automation & Vector Embeddings",
    badge: "AI & Automation",
  },
  {
    name: "Shopify Plus",
    category: "Mobile & Web",
    role: "Omnichannel Commerce Engines, High-Volume Checkout & App Extensions",
    badge: "E-Commerce",
  },
  {
    name: "Frappe Framework",
    category: "AI & Frameworks",
    role: "Rapid Python-driven ERP Engineering, DocType Systems & Accounting",
    badge: "Enterprise ERP",
  },
  {
    name: "React Native",
    category: "Mobile & Web",
    role: "Cross-Platform Mobile Application Development for iOS & Android",
    badge: "Mobile Engineering",
  },
  {
    name: "Flutter",
    category: "Mobile & Web",
    role: "Compiled Native Mobile, Desktop & Embedded Application Ecosystems",
    badge: "Mobile Engineering",
  },
  {
    name: "Node.js",
    category: "AI & Frameworks",
    role: "Asynchronous High-Throughput Event-Driven Microservice Architectures",
    badge: "Backend Ecosystem",
  },
  {
    name: "Python",
    category: "AI & Frameworks",
    role: "Data Engineering, Machine Learning Pipelines & Robust Web Backends",
    badge: "Data & Backend",
  },
];
