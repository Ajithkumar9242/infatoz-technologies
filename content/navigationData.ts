export interface NavItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export interface NavMenu {
  title: string;
  href?: string;
  groups?: NavGroup[];
}

export const navigationData: NavMenu[] = [
  {
    title: "About Us",
    groups: [
      {
        title: "Corporate Overview",
        items: [
          {
            label: "About Infatoz",
            href: "#about",
            description: "Our mission to translate digital ideas into measurable enterprise impact.",
          },
          {
            label: "Leadership & Standards",
            href: "#about",
            description: "Experienced technology leaders delivering precision software engineering.",
          },
          {
            label: "Core Values & Trust",
            href: "#why-choose-us",
            description: "Built on Trust. Driven by Results. Long-term engineering partnership.",
          },
          {
            label: "Engineering Workflow",
            href: "#workflow",
            description: "5-stage engineering lifecycle from Discovery to Global Scale.",
          },
        ],
      },
    ],
  },
  {
    title: "Capabilities",
    groups: [
      {
        title: "Digital Development",
        items: [
          { label: "Web Design & CMS", href: "#services" },
          { label: "Custom Web Applications", href: "#services" },
          { label: "Mobile App Development", href: "#services" },
          { label: "E-Commerce Systems", href: "#services" },
        ],
      },
      {
        title: "Enterprise Solutions",
        items: [
          { label: "ERP & Business Automation", href: "#services" },
          { label: "Products & Platforms", href: "#case-studies", badge: "Attendance Master" },
          { label: "System Integration", href: "#services" },
        ],
      },
      {
        title: "AI & Cloud Architecture",
        items: [
          { label: "AI & Cognitive Automation", href: "#services" },
          { label: "Cloud Development & DevOps", href: "#services" },
          { label: "Data Management & Migration", href: "#services" },
        ],
      },
      {
        title: "Design & Growth",
        items: [
          { label: "UI/UX Design Systems", href: "#services" },
          { label: "Digital Growth Strategy", href: "#services" },
        ],
      },
    ],
  },
  {
    title: "Industries",
    groups: [
      {
        title: "Industry Verticals",
        items: [
          { label: "Financial Services & BFSI", href: "#why-choose-us" },
          { label: "Retail & E-Commerce", href: "#why-choose-us" },
          { label: "Manufacturing & Logistics", href: "#why-choose-us" },
          { label: "Healthcare & Life Sciences", href: "#why-choose-us" },
          { label: "Education & EdTech", href: "#why-choose-us" },
        ],
      },
    ],
  },
  {
    title: "Success Stories",
    href: "#case-studies",
  },
  {
    title: "Insights",
    groups: [
      {
        title: "Thought Leadership",
        items: [
          {
            label: "Client Endorsements",
            href: "#testimonials",
            description: "Real-world client outcomes and strategic transformation results.",
          },
          {
            label: "Latest Thinking & Articles",
            href: "#insights",
            description: "Industry analysis on AI, cloud scaling, and modern digital platforms.",
          },
        ],
      },
    ],
  },
  {
    title: "Contact Us",
    href: "#contact",
  },
];
