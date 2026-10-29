export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  organization: string;
  quote: string;
  rating: number;
  highlight: string;
  imageUrl?: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "vinishka-srilakshmi",
    name: "Vinishka Srilakshmi",
    role: "Actress, Founder & President",
    organization: "Vinishka Infratech Projects LLP",
    quote: "We, Vinishka Infratech Projects LLP, have been using Infatoz services for the past one and a half years. They provide timely delivery and offer continuous follow-ups regarding day-to-day updates. Mr. Manjunath has been providing great support to deliver the best possible solutions for our company.",
    rating: 5,
    highlight: "1.5+ Years of Reliable IT Partnership & Continuous Support",
    imageUrl: "https://infatoz.com/wp-content/uploads/2025/11/i-determine-my-future-cropped-portrait-of-a-young-businessman-wearing-glasses-.jpg",
  },
  {
    id: "dr-shubhakarachary",
    name: "Dr. Shubhakarachary",
    role: "Principal",
    organization: "Bhandarkars Arts & Science College, Kundapura",
    quote: "Our college recently implemented the Attendance Master Software developed by Infatoz Technologies. It has brought a remarkable improvement in maintaining accurate attendance records and ensuring smooth communication with parents. We look forward to continuing this collaboration.",
    rating: 5,
    highlight: "Remarkable Improvement in Attendance Records & Parent Communication",
    imageUrl: "https://infatoz.com/wp-content/uploads/2025/11/shes-got-confidence-cropped-portrait-of-a-young-businesswoman-wearing-glasses-.jpg",
  },
  {
    id: "prof-mukund",
    name: "Prof. Mukund",
    role: "IT Administrator",
    organization: "Bhandarkars Arts & Science College, Kundapura",
    quote: "We recently implemented the Attendance Master Software developed by Infatoz technologies. It has greatly simplified our attendance process for both staff and students. The support team from Infatoz Technologies team has been very responsive and helpful whenever we needed assistance.",
    rating: 5,
    highlight: "Simplified Operations for Staff & Students with Rapid Response",
    imageUrl: "https://infatoz.com/wp-content/uploads/2025/11/portrait-of-happy-young-man-with-shirt-and-glasses.jpg",
  },
  {
    id: "sangeetha-poojary",
    name: "Sangeetha Poojary",
    role: "Founder & CEO",
    organization: "Nakshgeeth",
    quote: "Thank you Infatoz Technologies. We are very thankful to you for making our dream brand come live in a very perfect way. The way you worked to build our website is really appreciable, as you considered our brand as yours and worked so sincerely to give the best to us. Thank you once again sincerely for everything.",
    rating: 5,
    highlight: "Treated Our Brand As Their Own to Deliver Exceptional Web Presence",
    imageUrl: "https://infatoz.com/wp-content/uploads/2025/11/woman-closeup-selfie-portrait-and-office-with-smile-hand-and-blurred-background-for-social-media-.jpg",
  },
];
