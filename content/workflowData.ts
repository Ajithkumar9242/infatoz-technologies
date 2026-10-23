export interface WorkflowStep {
  step: string;
  name: string;
  title: string;
  description: string;
  activities: string[];
  duration: string;
}

export const workflowData: WorkflowStep[] = [
  {
    step: "01",
    name: "Discover",
    title: "Understanding Goals & Strategy",
    description: "We understand your business goals, operational challenges, and system requirements to define the right technology strategy and architectural roadmap.",
    activities: ["Stakeholder Discovery Workshops", "Current Tech Stack Audit", "Requirements Traceability Matrix", "Strategic Delivery Blueprint"],
    duration: "Phase 1",
  },
  {
    step: "02",
    name: "Design",
    title: "Intuitive Architecture & UX",
    description: "Our team creates intuitive designs, user journey maps, and scalable solution architecture tailored specifically to your organizational workflows.",
    activities: ["Information Architecture", "Figma Design Systems & Prototypes", "Database & API Schema Design", "Security & Governance Protocols"],
    duration: "Phase 2",
  },
  {
    step: "03",
    name: "Develop",
    title: "Clean, Scalable Engineering",
    description: "We build secure, high-performance applications using modern technologies, modular microservices, clean code standards, and agile sprint delivery.",
    activities: ["Test-Driven Full-Stack Coding", "Clean Microservice Integrations", "Sprint Reviews & Demos", "Continuous Code Auditing"],
    duration: "Phase 3",
  },
  {
    step: "04",
    name: "Test & Deploy",
    title: "Rigorous QA & Production Launch",
    description: "Rigorous automated and manual testing ensures quality, security, and peak reliability before smooth, zero-downtime deployment to production.",
    activities: ["Automated Regression & Load Testing", "Security Vulnerability Scans", "User Acceptance Testing (UAT)", "Zero-Downtime Cloud Deployment"],
    duration: "Phase 4",
  },
  {
    step: "05",
    name: "Support & Scale",
    title: "Continuous Evolution & 24/7 Care",
    description: "We provide continuous support, proactive monitoring, telemetry improvements, and iterative scaling to help your business innovate and grow.",
    activities: ["24/7 Infrastructure Monitoring", "SLA-Backed Incident Resolution", "Performance Optimization", "Feature Roadmap Expansion"],
    duration: "Ongoing",
  },
];
