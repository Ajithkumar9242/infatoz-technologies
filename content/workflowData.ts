export interface WorkflowStep {
  step: string;
  name: string;
  title: string;
  description: string;
  duration: string;
}

export const workflowData: WorkflowStep[] = [
  {
    step: "01",
    name: "Discover",
    title: "Understanding Strategy",
    description: "We understand your business goals, challenges, and requirements to define the right strategy.",
    duration: "Step 01",
  },
  {
    step: "02",
    name: "Design",
    title: "Architecture & UX",
    description: "Our team creates intuitive designs and scalable solution architecture tailored to your needs.",
    duration: "Step 02",
  },
  {
    step: "03",
    name: "Develop",
    title: "Scalable Engineering",
    description: "We build secure, high‑performance applications using modern technologies and best practices.",
    duration: "Step 03",
  },
  {
    step: "04",
    name: "Test & Deploy",
    title: "Quality & Reliability",
    description: "Rigorous testing ensures quality and reliability before smooth deployment to production.",
    duration: "Step 04",
  },
  {
    step: "05",
    name: "Support & Scale",
    title: "Continuous Growth",
    description: "We provide continuous support, improvements, and scaling to help your business grow.",
    duration: "Step 05",
  },
];
