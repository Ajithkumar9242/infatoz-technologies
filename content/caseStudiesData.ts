export interface CaseStudyItem {
  id: string;
  industry: string;
  title: string;
  challenge: string;
  solution: string;
  outcomePillar: string;
  outcomeSummary: string;
  tags: string[];
}

export const caseStudiesData: CaseStudyItem[] = [
  {
    id: "retail-cloud-integration",
    industry: "Retail & E-commerce",
    title: "Seamless Cloud Integration",
    challenge: "Surging multi-channel order volumes led to checkout slowdowns, database locks, and inventory sync errors during peak retail campaigns.",
    solution: "Architected a hybrid cloud infrastructure with automated auto-scaling microservices, real-time cache layers, and unified headless inventory pipelines.",
    outcomePillar: "Scalability & Uptime",
    outcomeSummary: "Smooth transition to hybrid cloud infrastructure, improving scalability and reducing downtime.",
    tags: ["Cloud Migration", "Shopify Plus", "Auto-scaling", "High Availability"],
  },
  {
    id: "financial-system-modernization",
    industry: "Financial Services",
    title: "Core System Modernization",
    challenge: "Fragile legacy monolithic systems created security risks, slow transactional queries, and heavy operational latency in reporting.",
    solution: "Migrated core banking and compliance workflows into modular, encrypted cloud-native architecture with role-based audit verification.",
    outcomePillar: "Speed & Security",
    outcomeSummary: "Migrated legacy systems to cloud-based architecture for better speed, security, and reliability.",
    tags: ["Security Modernization", "Data Encryption", "Cloud Native", "BFSI Compliance"],
  },
  {
    id: "manufacturing-it-support",
    industry: "Manufacturing",
    title: "24/7 IT Infrastructure Support",
    challenge: "Unplanned hardware and network interruptions across shop-floor assembly stations threatened tight production deadlines and logistics fulfillment.",
    solution: "Deployed proactive 24/7 remote sensor telemetry, automated incident triage, and continuous on-site IT support protocols.",
    outcomePillar: "Zero Production Downtime",
    outcomeSummary: "Implemented proactive monitoring and on-site support, ensuring zero production downtime.",
    tags: ["24/7 IT Support", "ERP Systems", "IoT Monitoring", "Zero Downtime"],
  },
  {
    id: "logistics-ai-automation",
    industry: "Logistics & Supply Chain",
    title: "AI-Driven Process Automation",
    challenge: "Manual dispatch scheduling and disconnected warehouse tracking resulted in delayed delivery cycles and inflated operational fleet expenses.",
    solution: "Engineered an AI-powered dispatch and route optimization algorithm with automated barcode verification and predictive stock re-ordering.",
    outcomePillar: "Operational Efficiency",
    outcomeSummary: "Integrated AI solutions for route optimization and inventory tracking efficiency.",
    tags: ["AI Automation", "Route Optimization", "Predictive Analytics", "Mobile Fleet App"],
  },
];
