export type TechCategory =
  | "Cloud and DevOps"
  | "Frontend and Mobile"
  | "Backend and ERP"
  | "Data and AI";

export interface TechnologyItem {
  name: string;
  category: TechCategory;
  role: string;
  badge: string;
}

export interface TechGroup {
  name: TechCategory;
  description: string;
  technologies: TechnologyItem[];
}

export const techEcosystemData: TechnologyItem[] = [
  {
    name: "Google Cloud",
    category: "Cloud and DevOps",
    role: "Enterprise Cloud Hosting, BigQuery Analytics & Kubernetes Engine",
    badge: "Cloud Infrastructure",
  },
  {
    name: "Amazon Web Services",
    category: "Cloud and DevOps",
    role: "Resilient Serverless Compute, S3 Storage & VPC Security Architecture",
    badge: "Cloud Infrastructure",
  },
  {
    name: "Microsoft Azure",
    category: "Cloud and DevOps",
    role: "Hybrid Cloud Integration, Active Directory & Enterprise DevOps",
    badge: "Enterprise Cloud",
  },
  {
    name: "React Native",
    category: "Frontend and Mobile",
    role: "Cross-Platform Mobile Application Development for iOS & Android",
    badge: "Mobile Engineering",
  },
  {
    name: "Flutter",
    category: "Frontend and Mobile",
    role: "Compiled Native Mobile, Desktop & Embedded Application Ecosystems",
    badge: "Mobile Engineering",
  },
  {
    name: "Shopify Plus",
    category: "Frontend and Mobile",
    role: "Omnichannel Commerce Engines, High-Volume Checkout & App Extensions",
    badge: "E-Commerce",
  },
  {
    name: "Node.js",
    category: "Backend and ERP",
    role: "Asynchronous High-Throughput Event-Driven Microservice Architectures",
    badge: "Backend Ecosystem",
  },
  {
    name: "Frappe Framework",
    category: "Backend and ERP",
    role: "Rapid Python-driven ERP Engineering, DocType Systems & Accounting",
    badge: "Enterprise ERP",
  },
  {
    name: "OpenAI",
    category: "Data and AI",
    role: "State-of-the-Art Language Models, Cognitive Automation & Vector Embeddings",
    badge: "AI & Automation",
  },
  {
    name: "Python",
    category: "Data and AI",
    role: "Data Engineering, Machine Learning Pipelines & Robust Web Backends",
    badge: "Data & Backend",
  },
];

export const techEcosystemGroups: TechGroup[] = [
  {
    name: "Cloud and DevOps",
    description: "Enterprise multi-cloud architecture, scalable serverless infrastructure, and automated DevOps.",
    technologies: [
      techEcosystemData[0], // Google Cloud
      techEcosystemData[1], // AWS
      techEcosystemData[2], // Azure
    ],
  },
  {
    name: "Frontend and Mobile",
    description: "Cross-platform mobile applications, compiled native UI frameworks, and omnichannel commerce.",
    technologies: [
      techEcosystemData[3], // React Native
      techEcosystemData[4], // Flutter
      techEcosystemData[5], // Shopify Plus
    ],
  },
  {
    name: "Backend and ERP",
    description: "High-throughput asynchronous microservices and rapid Python-driven ERP automation systems.",
    technologies: [
      techEcosystemData[6], // Node.js
      techEcosystemData[7], // Frappe Framework
    ],
  },
  {
    name: "Data and AI",
    description: "State-of-the-art cognitive language models, machine learning pipelines, and robust data engineering.",
    technologies: [
      techEcosystemData[8], // OpenAI
      techEcosystemData[9], // Python
    ],
  },
];
