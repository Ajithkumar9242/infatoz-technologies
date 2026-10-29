export interface CaseStudyItem {
  id: string;
  industry: string;
  title: string;
  outcomeSummary: string;
}

export const caseStudiesData: CaseStudyItem[] = [
  {
    id: "retail-cloud-integration",
    industry: "Retail & E-commerce",
    title: "Seamless Cloud Integration",
    outcomeSummary: "Smooth transition to hybrid cloud infrastructure, improving scalability and reducing downtime.",
  },
  {
    id: "financial-system-modernization",
    industry: "Financial Services",
    title: "Core System Modernization",
    outcomeSummary: "Migrated legacy systems to cloud-based architecture for better speed, security, and reliability.",
  },
  {
    id: "manufacturing-it-support",
    industry: "Manufacturing",
    title: "24/7 IT Infrastructure Support",
    outcomeSummary: "Implemented proactive monitoring and on-site support, ensuring zero production downtime.",
  },
  {
    id: "logistics-ai-automation",
    industry: "Logistics",
    title: "AI-Driven Process Automation",
    outcomeSummary: "Integrated AI solutions for route optimization and inventory tracking efficiency.",
  },
];
