export interface PricingTier {
  id: number;
  name: string;
  slug: string;
  price: number;
  period: string;
  tagline: string;
  description: string;
  popular: boolean;

  // Target Audience
  idealFor: string[];
  bestFor: string;

  // Deliverables
  features: string[];
  detailedDeliverables?: {
    category: string;
    items: string[];
  }[];

  // Expected Outcomes
  expectedTimeline: {
    period: string;
    outcome: string;
  }[];

  typicalROI: string;

  // CTA
  ctaText: string;
  ctaUrl: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: 1,
    name: "Growth Starter",
    slug: "growth-starter",
    price: 750,
    period: "month",
    tagline: "Perfect for businesses testing strategic content marketing",
    description: "Build foundation for organic growth with consistent, strategic content that attracts your ideal customers.",
    popular: false,

    idealFor: [
      "Early-stage companies ($1M-$5M revenue)",
      "Businesses new to content marketing",
      "Companies with limited marketing budgets",
      "Organizations wanting to prove ROI before scaling",
      "Startups building initial online presence"
    ],

    bestFor: "Companies ready to commit to 6-12 month content strategy for sustainable results.",

    features: [
      "4 high-quality blog posts (1,500+ words)",
      "Complete SEO optimization",
      "Monthly content calendar",
      "Performance tracking & analytics",
      "Email support & monthly check-in",
      "Meta descriptions, headers, internal linking",
      "Basic competitor monitoring",
      "Content performance insights"
    ],

    detailedDeliverables: [
      {
        category: "Content Creation",
        items: [
          "4 expert-level blog articles (1,500-2,500 words each)",
          "Comprehensive keyword research and targeting",
          "SEO-optimized headlines and meta descriptions",
          "Strategic internal and external linking"
        ]
      },
      {
        category: "Strategy & Planning",
        items: [
          "Monthly content calendar aligned with business goals",
          "Topic research targeting your ideal customers",
          "Competitor content monitoring",
          "Content performance analysis"
        ]
      },
      {
        category: "Support",
        items: [
          "Email support (24-hour response time)",
          "Monthly strategy check-in call",
          "Performance reports with insights",
          "Recommendations for optimization"
        ]
      }
    ],

    expectedTimeline: [
      {
        period: "Months 1-3",
        outcome: "Foundation building, initial rankings"
      },
      {
        period: "Months 4-6",
        outcome: "Traffic growth acceleration, lead generation begins"
      },
      {
        period: "Months 7-12",
        outcome: "Sustained growth, 150-300% traffic increase typical"
      }
    ],

    typicalROI: "150-300% traffic increase within 12 months. First qualified leads typically within 4-6 months. Foundation for sustainable organic growth.",

    ctaText: "Start Building Authority",
    ctaUrl: "https://calendly.com/kamooliphant/30min"
  },

  {
    id: 2,
    name: "Business Accelerator",
    slug: "business-accelerator",
    price: 1250,
    period: "month",
    tagline: "Complete growth solution for scaling companies",
    description: "Dominate your market through integrated multi-channel content marketing that generates consistent qualified leads.",
    popular: true,

    idealFor: [
      "Growing companies ($5M-$25M revenue)",
      "Businesses with proven product-market fit",
      "Organizations ready to scale lead generation",
      "Companies competing in saturated markets",
      "Firms needing multi-channel presence"
    ],

    bestFor: "Best ROI for established businesses ready to scale. Most clients see positive ROI within 90 days.",

    features: [
      "Everything in Growth Starter",
      "20 LinkedIn + 15 social posts",
      "Monthly email newsletter campaign",
      "Bi-weekly strategy calls",
      "Priority support & faster turnaround",
      "Social media content calendar",
      "LinkedIn profile optimization",
      "Quarterly strategy review"
    ],

    detailedDeliverables: [
      {
        category: "Everything in Growth Starter PLUS",
        items: [
          "All Growth Starter deliverables included",
          "Priority support with faster turnaround times"
        ]
      },
      {
        category: "Social Media Marketing",
        items: [
          "20 LinkedIn posts (professional thought leadership)",
          "15 additional social media posts (Twitter, Facebook, Instagram)",
          "Social media content calendar",
          "LinkedIn profile optimization",
          "Engagement strategy across platforms"
        ]
      },
      {
        category: "Email Marketing",
        items: [
          "Monthly email newsletter campaign (design + copy)",
          "List segmentation strategy",
          "Email template design",
          "Performance tracking and optimization"
        ]
      },
      {
        category: "Strategic Partnership",
        items: [
          "Bi-weekly strategy calls (30-45 minutes)",
          "Monthly competitor analysis report",
          "Quarterly strategy review and planning",
          "Integrated campaigns across all channels"
        ]
      }
    ],

    expectedTimeline: [
      {
        period: "Months 1-2",
        outcome: "Multi-channel presence established"
      },
      {
        period: "Months 3-6",
        outcome: "Lead generation from multiple sources"
      },
      {
        period: "Months 6-12",
        outcome: "Measurable revenue impact and sustained growth"
      }
    ],

    typicalROI: "Multi-channel lead generation with 3-5x ROI typical. Most clients see positive return within first quarter.",

    ctaText: "Accelerate Growth Now",
    ctaUrl: "https://calendly.com/kamooliphant/30min"
  },

  {
    id: 3,
    name: "Premium Authority",
    slug: "premium-authority",
    price: 2000,
    period: "month",
    tagline: "Maximum impact for market domination",
    description: "Establish undisputed industry authority with cutting-edge AI-enhanced systems and complete marketing department capabilities.",
    popular: false,

    idealFor: [
      "Established companies ($25M+ revenue)",
      "Market leaders defending position",
      "Businesses with aggressive growth targets",
      "Organizations in highly competitive spaces",
      "Companies ready for maximum marketing investment"
    ],

    bestFor: "Premium clients seeking comprehensive marketing partnership. Single client often covers annual investment with 5-10x ROI typical.",

    features: [
      "Everything in Business Accelerator",
      "Cold email campaigns (500+ contacts)",
      "AI-enhanced content systems",
      "Video content scripts & multimedia",
      "Weekly calls & dedicated partnership",
      "Custom AI workflow development",
      "Priority 24-hour response time",
      "Unlimited revisions"
    ],

    detailedDeliverables: [
      {
        category: "Everything in Business Accelerator PLUS",
        items: [
          "All Business Accelerator deliverables included",
          "Priority 24-hour response time",
          "Unlimited revisions and optimization"
        ]
      },
      {
        category: "Advanced Lead Generation",
        items: [
          "Cold email campaigns (500+ targeted contacts monthly)",
          "Advanced list building and segmentation",
          "Compliance-focused messaging for regulated industries",
          "Multi-sequence nurture campaigns"
        ]
      },
      {
        category: "AI & Innovation",
        items: [
          "AI-enhanced content systems and automation",
          "Custom AI workflow development for your needs",
          "Team training on AI tools and best practices",
          "Quality control systems for AI output"
        ]
      },
      {
        category: "Multimedia Content",
        items: [
          "Video content scripts and strategy",
          "Multimedia content development",
          "Advanced content formats (interactive, visual)",
          "Cross-platform content optimization"
        ]
      },
      {
        category: "Strategic Partnership",
        items: [
          "Weekly strategy calls (dedicated time)",
          "Quarterly executive briefings",
          "Advanced analytics and attribution modeling",
          "Competitor intelligence and market monitoring",
          "White-glove service and support"
        ]
      }
    ],

    expectedTimeline: [
      {
        period: "Months 1-3",
        outcome: "Comprehensive system implementation"
      },
      {
        period: "Months 4-6",
        outcome: "Aggressive lead generation begins"
      },
      {
        period: "Months 6-12",
        outcome: "Market authority established with significant revenue impact"
      }
    ],

    typicalROI: "Comprehensive marketing partnership delivering 5-10x ROI. Single client acquisition often covers annual investment.",

    ctaText: "Dominate Your Market",
    ctaUrl: "https://calendly.com/kamooliphant/30min"
  }
];

export const pricingFAQ = [
  {
    question: "Why show pricing publicly?",
    answer: "Transparency builds trust with serious prospects, filters out unqualified leads early, and demonstrates confidence in the value I deliver. Industry research shows transparent pricing increases B2B conversion."
  },
  {
    question: "Are there long-term contracts?",
    answer: "No. All packages are month-to-month unless you prefer quarterly/annual billing (which includes discounts: 10% quarterly, 15% annual). You can evaluate results monthly and adjust or cancel anytime."
  },
  {
    question: "How does pricing compare to alternatives?",
    answer: "Marketing agencies: $2,000-$4,000/month for basic services. In-house content marketer: $5,000-$8,000/month (salary + benefits). Freelance writers: $500-$1,500 per article (no strategy). You get: Expert-level strategy + execution + proven results for less."
  },
  {
    question: "Can I upgrade or downgrade?",
    answer: "Yes, absolutely. Most clients start with Growth Starter or Business Accelerator, then scale up or down based on results and budget. I'll recommend the best fit for your current situation."
  },
  {
    question: "What if I need something custom?",
    answer: "The three standard packages cover 90% of needs, but I create custom solutions for unique requirements. Examples: product launch campaigns, rebranding support, entering new markets, executive ghostwriting."
  }
];

export const pricingComparisonContext = {
  agencyCost: "$2,000-$4,000/month",
  inHouseCost: "$5,000-$8,000/month (salary + benefits)",
  freelancerCost: "$500-$1,500 per article (no strategy)",
  ourAdvantage: "Expert-level strategy + execution + proven results at fraction of the cost"
};
