export interface Service {
  id: number;
  title: string;
  slug: string;
  icon: string;

  // Pain Points
  painPoint: string;
  painPointDetails: string[];

  // Target Audience
  whoThisIsFor: {
    description: string;
    criteria: string[];
  };

  // Solution
  solution: string;
  approach: string[];

  // Deliverables
  deliverables: string[];
  deliverablesByType?: {
    category: string;
    items: string[];
  }[];

  // Process
  process: {
    step: string;
    description: string;
  }[];

  // Outcomes
  outcomes: string[];
  typicalResults: {
    metric: string;
    value: string;
  }[];

  // Timeline
  timeline: {
    phase: string;
    duration: string;
    description: string;
  }[];
}

export const services: Service[] = [
  {
    id: 1,
    title: "Digital Marketing Strategy",
    slug: "digital-marketing-strategy",
    icon: "BarChart3",

    painPoint: "Fragmented marketing efforts waste budgets and confuse customers",
    painPointDetails: [
      "Disconnected campaigns across multiple channels with no cohesive strategy",
      "Wasted spend and conflicting messaging",
      "Marketing teams can't demonstrate ROI",
      "Budget cuts and executive skepticism"
    ],

    whoThisIsFor: {
      description: "Mid-market B2B companies ready to scale systematically",
      criteria: [
        "Mid-market B2B companies ($5M-$50M revenue)",
        "Professional services firms (finance, legal, consulting)",
        "SaaS companies seeking predictable lead generation",
        "Companies with marketing budgets over $50K annually",
        "Organizations frustrated with agency relationships"
      ]
    },

    solution: "I develop integrated marketing strategies that amplify every dollar invested through coordinated multi-channel campaigns. Rather than treating SEO, email, social, and content as separate initiatives, I create unified systems where each channel reinforces the others.",

    approach: [
      "Comprehensive marketing audit and competitive analysis",
      "Multi-channel campaign development for maximum market reach",
      "Integrated content calendar across all marketing channels",
      "Data-driven optimization for improved ROI and performance",
      "Brand positioning strategies that differentiate from competitors"
    ],

    deliverables: [
      "Comprehensive marketing audit and competitive analysis",
      "Multi-channel campaign development for maximum market reach",
      "Integrated content calendar across all marketing channels",
      "Data-driven optimization for improved ROI and performance",
      "Brand positioning strategies that differentiate from competitors",
      "Performance analytics and reporting for strategic decisions",
      "Quarterly strategy reviews and optimization sessions",
      "Marketing tech stack recommendations and implementation"
    ],

    process: [
      {
        step: "Discovery",
        description: "Deep dive into business goals, target audience, current challenges"
      },
      {
        step: "Audit",
        description: "Analyze existing marketing efforts, competitive landscape, market position"
      },
      {
        step: "Strategy",
        description: "Develop integrated 6-12 month marketing roadmap"
      },
      {
        step: "Implementation",
        description: "Execute campaigns with consistent monitoring"
      },
      {
        step: "Optimization",
        description: "Regular performance reviews and strategic adjustments"
      }
    ],

    outcomes: [
      "Build cohesive digital presence that consistently attracts ideal customers",
      "Scale with business growth objectives through systematic approach",
      "Reduce customer acquisition costs by 30-50% within 12 months",
      "Demonstrate clear marketing ROI to executive stakeholders",
      "Create predictable, scalable lead generation system"
    ],

    typicalResults: [
      { metric: "Cost per lead reduction", value: "40-60%" },
      { metric: "Marketing-qualified leads", value: "2-3x increase" },
      { metric: "Conversion rate improvement", value: "25-40%" },
      { metric: "Clear attribution", value: "All marketing spend" }
    ],

    timeline: [
      {
        phase: "Foundation",
        duration: "Weeks 1-2",
        description: "Audit, strategy development, roadmap creation"
      },
      {
        phase: "Implementation",
        duration: "Months 1-3",
        description: "Campaign launch, initial optimization, momentum building"
      },
      {
        phase: "Optimization",
        duration: "Months 4-6",
        description: "Data-driven refinement, scaling successful channels"
      },
      {
        phase: "Scaling",
        duration: "Months 7-12",
        description: "Sustained growth, expansion, ROI maximization"
      }
    ]
  },

  {
    id: 2,
    title: "Content Strategy & Creation",
    slug: "content-strategy-creation",
    icon: "Sparkles",

    painPoint: "Generic content gets ignored in saturated markets",
    painPointDetails: [
      "Random blog posts hoping something works",
      "No strategic framework connecting content to business goals",
      "Struggle to maintain consistency",
      "SEO efforts yield minimal results",
      "Leadership questions content ROI"
    ],

    whoThisIsFor: {
      description: "B2B companies needing thought leadership and organic visibility",
      criteria: [
        "B2B companies needing thought leadership positioning",
        "Financial services firms requiring compliance-safe content",
        "Companies with expertise but poor content execution",
        "Organizations with inconsistent content production",
        "Businesses losing search visibility to competitors"
      ]
    },

    solution: "I build strategic, multi-platform content that establishes authority and drives consistent engagement across all channels. Every piece of content serves specific business goals: awareness, consideration, or conversion. Content is optimized for both search engines and human readers.",

    approach: [
      "Comprehensive keyword research targeting high-intent searches",
      "Competitive content gap analysis",
      "Topic cluster development for topical authority",
      "Technical SEO optimization (meta tags, schema markup, internal linking)",
      "Backlink strategy through strategic content partnerships"
    ],

    deliverables: [
      "SEO-optimized blogs and articles for organic traffic growth (1,500-2,500 words)",
      "Newsletter and email content for audience nurturing",
      "Social media content across all major platforms (LinkedIn, Twitter, Facebook)",
      "Video scripts and multimedia content development",
      "Case studies and success stories",
      "Whitepapers and comprehensive industry guides",
      "Website copy and landing page optimization",
      "Content calendar with strategic publishing schedule"
    ],

    deliverablesByType: [
      {
        category: "Awareness Stage",
        items: ["Educational blogs", "Industry insights", "Trend analysis"]
      },
      {
        category: "Consideration Stage",
        items: ["Comparison guides", "Case studies", "Expert interviews"]
      },
      {
        category: "Decision Stage",
        items: ["ROI calculators", "Implementation guides", "Customer stories"]
      }
    ],

    process: [
      {
        step: "Content Audit",
        description: "Analyze existing content and identify gaps"
      },
      {
        step: "Keyword Research",
        description: "Comprehensive topic and keyword research"
      },
      {
        step: "Calendar Development",
        description: "Strategic editorial calendar creation"
      },
      {
        step: "Content Creation",
        description: "Expert-level content production with SEO optimization"
      },
      {
        step: "Performance Tracking",
        description: "Continuous monitoring and improvement"
      }
    ],

    outcomes: [
      "Transform content into lead-generation engine that consistently attracts qualified prospects",
      "Establish market dominance through thought leadership positioning",
      "Generate 200-500% increase in organic traffic within 12 months",
      "Build email subscriber list for ongoing nurture campaigns",
      "Reduce dependency on paid advertising"
    ],

    typicalResults: [
      { metric: "Organic traffic growth", value: "300-1,000%" },
      { metric: "Ranking keywords", value: "15,000+" },
      { metric: "Qualified leads monthly", value: "50-100+" },
      { metric: "Content ROI", value: "5-10x" }
    ],

    timeline: [
      {
        phase: "Foundation",
        duration: "Month 1",
        description: "Content audit, keyword research, calendar development"
      },
      {
        phase: "Initial Content",
        duration: "Months 2-3",
        description: "First rankings, baseline traffic growth"
      },
      {
        phase: "Momentum",
        duration: "Months 4-6",
        description: "Measurable traffic increase, early lead generation"
      },
      {
        phase: "Results",
        duration: "Months 7-12",
        description: "300-1,000% traffic growth typical"
      }
    ]
  },

  {
    id: 3,
    title: "Email Marketing",
    slug: "email-marketing",
    icon: "Mail",

    painPoint: "Generic email campaigns get ignored, deleted, or marked as spam",
    painPointDetails: [
      "Random newsletters with poor targeting",
      "Low open rates and minimal engagement",
      "Compliance concerns in regulated industries",
      "Sales teams can't nurture leads effectively",
      "Wasted effort with no measurable ROI"
    ],

    whoThisIsFor: {
      description: "Businesses with databases and long sales cycles",
      criteria: [
        "Financial services firms needing compliance-safe campaigns",
        "B2B companies with long sales cycles",
        "Businesses with large contact databases underutilized",
        "Companies struggling with email deliverability",
        "Organizations needing lead nurturing automation"
      ]
    },

    solution: "I create personalized, compliance-safe email messaging that builds trust and drives conversions through strategic sequencing. Every campaign is designed for specific audience segments with clear conversion goals. Compliance requirements are built into templates from the start.",

    approach: [
      "Audience segmentation and targeting strategy",
      "Campaign strategy and messaging development",
      "Template design and compliance review",
      "Technical setup: SPF, DKIM, DMARC authentication",
      "Deliverability monitoring and optimization"
    ],

    deliverables: [
      "High-converting cold email campaigns with premium deliverability",
      "Educational newsletter sequences that nurture long-term relationships",
      "Compliance-focused messaging for regulated industries",
      "Automated lead nurturing systems that convert prospects",
      "A/B testing for continuous optimization",
      "Email template design and development",
      "List segmentation and audience targeting",
      "Deliverability optimization and reputation management"
    ],

    deliverablesByType: [
      {
        category: "Cold Outreach",
        items: ["Initial contact with qualified prospects"]
      },
      {
        category: "Nurture Sequences",
        items: ["Multi-touch education for consideration stage"]
      },
      {
        category: "Newsletter Programs",
        items: ["Ongoing relationship building with subscribers"]
      },
      {
        category: "Re-engagement",
        items: ["Win-back campaigns for dormant contacts"]
      }
    ],

    process: [
      {
        step: "Segmentation",
        description: "Audience analysis and targeting"
      },
      {
        step: "Strategy",
        description: "Campaign planning and messaging development"
      },
      {
        step: "Compliance",
        description: "Template design and regulatory review"
      },
      {
        step: "Technical Setup",
        description: "Domain authentication, deliverability optimization"
      },
      {
        step: "Launch & Optimize",
        description: "Campaign execution with continuous improvement"
      }
    ],

    outcomes: [
      "Generate qualified leads consistently while building authority and trust",
      "Convert prospects into long-term clients through strategic nurturing",
      "Achieve 70-80% open rates (vs. 20% industry average)",
      "Maintain 95%+ deliverability across campaigns",
      "Build predictable pipeline through automated sequences"
    ],

    typicalResults: [
      { metric: "Deliverability rate", value: "95-97%" },
      { metric: "Click-through rate", value: "3-6%" },
      { metric: "Qualified opportunities", value: "$9K-$11K per campaign" },
      { metric: "Sales cycle reduction", value: "40-60%" }
    ],

    timeline: [
      {
        phase: "Setup",
        duration: "Week 1",
        description: "Segmentation, technical configuration, compliance review"
      },
      {
        phase: "Launch",
        duration: "Weeks 2-4",
        description: "Initial campaigns, monitoring, optimization"
      },
      {
        phase: "Optimization",
        duration: "Months 2-3",
        description: "A/B testing, refinement, scaling"
      },
      {
        phase: "Scale",
        duration: "Months 4+",
        description: "Automated sequences, consistent lead generation"
      }
    ]
  },

  {
    id: 4,
    title: "AI & Innovation Solutions",
    slug: "ai-innovation",
    icon: "TrendingUp",

    painPoint: "Businesses risk falling behind in rapidly evolving AI landscape",
    painPointDetails: [
      "Competitors adopting AI while you're still deciding",
      "Untrained team members using AI tools incorrectly",
      "Generic AI content damaging brand reputation",
      "AI-powered search (ChatGPT, Perplexity) changing how customers find you",
      "Missed opportunities for efficiency and scale"
    ],

    whoThisIsFor: {
      description: "Forward-thinking businesses ready for competitive edge",
      criteria: [
        "Forward-thinking businesses ready for competitive edge",
        "Companies spending $10K+ monthly on content creation",
        "Organizations with content teams needing AI training",
        "Businesses struggling to scale content production",
        "Companies preparing for AI-powered search dominance"
      ]
    },

    solution: "I implement expert-guided AI systems that multiply capabilities and reduce costs while maintaining brand quality. Rather than replacing human expertise, I build AI-enhanced workflows where technology handles repetitive tasks while expert editors ensure strategic alignment and quality control.",

    approach: [
      "Current workflow audit and opportunity identification",
      "AI tool selection based on specific needs",
      "Custom prompt engineering for brand consistency",
      "Team training and comprehensive documentation",
      "Quality control system implementation",
      "Ongoing optimization and expansion"
    ],

    deliverables: [
      "AI-enhanced content systems with expert editorial optimization",
      "Google + AI search visibility strategies for future-proof rankings",
      "Custom AI workflow development for your specific needs",
      "AI video generation and script development for scalable content",
      "Intelligent chatbots and automated response systems",
      "Team training on effective AI tool usage",
      "AI prompt libraries for consistent brand voice",
      "Quality control systems ensuring AI output meets standards"
    ],

    deliverablesByType: [
      {
        category: "Content Generation",
        items: ["Claude", "ChatGPT", "Jasper integration"]
      },
      {
        category: "Video Creation",
        items: ["Synthesia", "Runway", "Descript workflows"]
      },
      {
        category: "Automation",
        items: ["Make.com", "Zapier", "n8n systems"]
      },
      {
        category: "Analytics",
        items: ["Custom AI analysis for marketing data"]
      }
    ],

    process: [
      {
        step: "Workflow Audit",
        description: "Identify AI opportunities in current processes"
      },
      {
        step: "Tool Selection",
        description: "Choose optimal AI platforms for your needs"
      },
      {
        step: "Prompt Engineering",
        description: "Develop custom prompts for brand consistency"
      },
      {
        step: "Team Training",
        description: "Comprehensive AI usage training and documentation"
      },
      {
        step: "Quality Control",
        description: "Implement systems ensuring AI output quality"
      }
    ],

    outcomes: [
      "Stay ahead of rapid technological changes while saving resources",
      "Scale operations beyond traditional limitations",
      "Reduce content production costs by 60-70%",
      "Increase content output by 5-10x without quality loss",
      "Future-proof marketing for AI-powered search era",
      "Build competitive moats through technology adoption"
    ],

    typicalResults: [
      { metric: "Content production volume", value: "5-10x increase" },
      { metric: "Content creation costs", value: "60-70% reduction" },
      { metric: "Time-to-market", value: "40-50% faster" },
      { metric: "Quality maintained", value: "Or improved" }
    ],

    timeline: [
      {
        phase: "Assessment",
        duration: "Week 1",
        description: "Workflow audit, opportunity identification"
      },
      {
        phase: "Implementation",
        duration: "Weeks 2-4",
        description: "Tool setup, prompt engineering, initial training"
      },
      {
        phase: "Training",
        duration: "Month 2",
        description: "Team enablement, documentation, quality control"
      },
      {
        phase: "Scale",
        duration: "Months 3+",
        description: "Full AI-enhanced operations, continuous optimization"
      }
    ]
  }
];
