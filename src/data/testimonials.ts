export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company?: string;
  rating: number;

  // Project Context
  projectType: string;
  projectDuration: string;
  industry: string;

  // Results
  result: string;
  metrics?: string[];

  // Additional Context
  verified: boolean;
  featured?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "It was really a great pleasure to work with Kamo on this project. Always with enthusiasm and positivity. He is very hard working and really went even beyond expectations with our needs. He comes highly recommended to anyone who needs his service.",
    author: "Marketing Director",
    role: "Professional Services Firm",
    rating: 5.0,
    projectType: "Strategic Website Development & Lead Generation Campaign",
    projectDuration: "8 months",
    industry: "B2B Digital Marketing",
    result: "150%+ lead increase",
    metrics: [
      "150%+ lead increase over project duration",
      "Complete website content overhaul",
      "Integrated marketing system implementation",
      "Sustained partnership over 8-month period"
    ],
    verified: true,
    featured: true
  },

  {
    id: 2,
    quote: "Kamo took our project, did quality work and completed it on time with good communication along the way. Great job...will hire again.",
    author: "Operations Manager",
    role: "Growing Service Business",
    rating: 5.0,
    projectType: "Small Business Content Strategy & Partnership",
    projectDuration: "5 days",
    industry: "Service Business",
    result: "Repeat client relationship",
    metrics: [
      "Quality work delivered on deadline",
      "Effective communication throughout",
      "Repeat client relationship established",
      "Foundation for ongoing partnership"
    ],
    verified: true
  },

  {
    id: 3,
    quote: "Kamo was great to work with. He was very proactive, communicated extremely well and I highly commend him.",
    author: "CEO",
    role: "Established Business",
    rating: 5.0,
    projectType: "Professional Website Copy Enhancement",
    projectDuration: "2 months",
    industry: "Professional Services",
    result: "Enhanced brand messaging",
    metrics: [
      "Professional website copy enhancement",
      "Improved brand messaging consistency",
      "Enhanced user engagement",
      "Proactive communication throughout project"
    ],
    verified: true
  },

  {
    id: 4,
    quote: "Great writing skills, I am very pleased with the results.",
    author: "Business Owner",
    role: "New Business Launch",
    rating: 4.9,
    projectType: "Website Content Strategy & SEO Optimization",
    projectDuration: "1 month",
    industry: "E-commerce",
    result: "Launch-ready in 1 month",
    metrics: [
      "Complete site content delivered on schedule",
      "Launch-ready website in 1 month",
      "Professional content establishing market credibility",
      "SEO-optimized foundation for future growth"
    ],
    verified: true
  }
];

export const testimonialStats = {
  averageRating: 5.0,
  totalProjects: "50+",
  repeatClientRate: "80%+",
  onTimeDelivery: "100%",
  clientSatisfaction: "5.0★"
};
