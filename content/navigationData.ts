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
    title: "What We Do",
    groups: [
      {
        title: "Digital Development",
        items: [
          { label: "Web Design & CMS", href: "#services" },
          { label: "Web Applications", href: "#services" },
          { label: "Mobile App Development", href: "#services" },
          { label: "E-Commerce Development", href: "#services" },
        ],
      },
      {
        title: "Enterprise Solutions",
        items: [
          { label: "ERP & Business Automation", href: "#services" },
          { label: "Products & Platforms", href: "#case-studies", badge: "Attendance Master" },
          { label: "Business System Integration", href: "#services" },
        ],
      },
      {
        title: "AI & Cloud",
        items: [
          { label: "AI Development & Automation", href: "#services" },
          { label: "Cloud Development & Maintenance", href: "#services" },
          { label: "Data Management & Migration", href: "#services" },
        ],
      },
      {
        title: "Design & Growth",
        items: [
          { label: "UI/UX Design & Branding", href: "#services" },
          { label: "Digital Marketing", href: "#services" },
        ],
      },
    ],
  },
  {
    title: "Who We Are",
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
            label: "Leadership & Team",
            href: "#about",
            description: "Experienced technology leaders delivering precision software engineering.",
          },
          {
            label: "Core Values",
            href: "#why-choose-us",
            description: "Built on Trust. Driven by Results. Long-term partnership focus.",
          },
          {
            label: "Our Workflow",
            href: "#workflow",
            description: "5-stage engineering lifecycle from Discovery to Global Scale.",
          },
        ],
      },
    ],
  },
  {
    title: "Case Studies",
    href: "#case-studies",
  },
  {
    title: "Insights",
    groups: [
      {
        title: "Thought Leadership",
        items: [
          {
            label: "Customer Stories",
            href: "#testimonials",
            description: "Real-world client outcomes and strategic transformation results.",
          },
          {
            label: "News & Tech Articles",
            href: "#insights",
            description: "Industry insights on AI, cloud modernization, and e-commerce growth.",
          },
        ],
      },
    ],
  },
  {
    title: "Careers",
    href: "#contact",
  },
];
