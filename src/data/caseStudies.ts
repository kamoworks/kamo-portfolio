export interface CaseStudy {
  id: number;
  title: string;
  client: string;
  category: string;
  industry: string;
  duration: string;
  gradient: string;
  image?: string;

  // Client Profile
  companySize: string;
  marketPosition: string;
  competitionLevel: string;

  // Project Details
  challenge: string;
  approach: string[];
  execution: string[];

  // Results
  metrics: string[];
  results: string[];
  timeline: string;

  // Social Proof
  clientFeedback?: string;
  link?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Multi-Billion Dollar ETF Fund",
    client: "Defiance ETFs",
    category: "Financial Services",
    industry: "Exchange Traded Funds",
    duration: "24 months",
    gradient: "from-upwork-green via-teal-500 to-emerald-600",
    companySize: "Multi-billion dollar AUM",
    marketPosition: "Established but limited online presence",
    competitionLevel: "Extremely high (dominated by major players)",

    challenge: "Multi-billion dollar ETF fund had minimal online presence with only 3,000 monthly visitors in an extremely competitive investment landscape. Established players dominated search results across all key financial services terms. Client needed to establish thought leadership and capture organic search traffic without massive paid advertising budgets.",

    approach: [
      "Conducted comprehensive competitive analysis of top-ranking ETF providers",
      "Implemented 24-month strategic content plan with systematic keyword research",
      "Created high-authority content targeting financial advisors and institutional investors",
      "Developed consistent publishing schedule focusing on thematic ETF investing trends",
      "Integrated financial industry expertise with SEO best practices",
      "Built authoritative backlink profile through strategic partnerships"
    ],

    execution: [
      "Published 96+ long-form articles (1,500-2,500 words each)",
      "Targeted 500+ high-value financial keywords",
      "Created content covering: market analysis, ETF strategy, portfolio construction, thematic investing",
      "Optimized all content for E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)",
      "Implemented technical SEO improvements across site architecture"
    ],

    metrics: ["1,067% Traffic Growth", "15K+ Keywords", "$20K+ Leads"],

    results: [
      "1,067% organic traffic growth (3,000 to 35,000 monthly visitors)",
      "15,000+ ranking keywords achieved",
      "Strong SERP feature presence (featured snippets, knowledge panels)",
      "Established market authority in competitive ETF space",
      "Reduced customer acquisition cost by 60% through organic channels",
      "Generated consistent qualified leads without paid advertising"
    ],

    timeline: "24 months",
    clientFeedback: "Quality work completed on time, demonstrating systematic, research-driven approach to content strategy.",
    link: "https://www.defianceetfs.com"
  },

  {
    id: 2,
    title: "US Digital Marketing Agency",
    client: "Defiance Analytics",
    category: "B2B Marketing",
    industry: "Digital Marketing Services",
    duration: "12 months",
    gradient: "from-upwork-green via-teal-500 to-emerald-600",
    companySize: "Boutique agency (specialized services)",
    marketPosition: "Strong network, zero organic presence",
    competitionLevel: "High (saturated B2B marketing space)",

    challenge: "US-based digital marketing agency had built strong client relationships through networking and referrals but struggled with zero organic visibility in a saturated B2B marketing space. Agency relied entirely on paid channels and personal connections for client acquisition, limiting scalability. Needed to establish thought leadership in specialized niches: cold email marketing, AI strategies, and wealth data analytics.",

    approach: [
      "Developed comprehensive SEO strategy targeting specialized B2B services",
      "Created thought leadership content positioning agency as industry experts",
      "Focused on long-tail keywords with high commercial intent",
      "Built content around unique service offerings (cold email, AI, wealth data)",
      "Implemented consistent publishing schedule with expert-level insights",
      "Optimized for service-specific search queries"
    ],

    execution: [
      "Published 48+ expert-level articles across specialized topics",
      "Targeted 200+ niche B2B marketing keywords",
      "Created comprehensive guides on: cold email compliance, AI marketing automation, wealth data strategies",
      "Developed case study content showcasing agency results",
      "Built internal linking structure to boost topical authority"
    ],

    metrics: ["300+ Monthly Visitors", "600+ Keywords", "Zero to Hero"],

    results: [
      "300+ monthly organic visitors from zero baseline",
      "600+ keyword rankings established",
      "Strong SERP presence across target service terms",
      "Sustained month-over-month growth trajectory",
      "Reduced dependency on paid acquisition channels",
      "Generated inbound leads from organic search"
    ],

    timeline: "12 months",
    clientFeedback: "It was really a great pleasure to work with Kamo on this project. Always with enthusiasm and positivity. He is very hard working and really went even beyond expectations with our needs. He comes highly recommended to anyone who needs his service.",
    link: "https://www.defianceanalytics.com"
  },

  {
    id: 3,
    title: "Life Sciences ETF Launch",
    client: "Emerald Advisors",
    category: "Healthcare Investment",
    industry: "Life Sciences Investment Funds",
    duration: "3 months",
    gradient: "from-upwork-green via-teal-500 to-emerald-600",
    companySize: "30-year established firm, first ETF launch",
    marketPosition: "Strong scientific credentials, new to ETF market",
    competitionLevel: "High (regulated healthcare sector)",

    challenge: "30-year investment firm launching their first ETF needed to reach institutional investors in the highly regulated healthcare sector. Required compliance-safe messaging that emphasized scientific expertise while meeting SEC/FINRA requirements. Needed to differentiate 'innovation starts small' philosophy in biotech investment from mainstream healthcare ETFs.",

    approach: [
      "Developed educational email campaign emphasizing team's scientific credentials",
      "Created compliance-safe messaging highlighting proprietary research methodology",
      "Targeted institutional investor databases with personalized outreach",
      "Focused on 'innovation starts small' positioning for early-stage biotech exposure",
      "Built nurture sequences for long sales cycles typical in institutional investing"
    ],

    execution: [
      "Crafted 8 unique email sequences for different investor segments",
      "Developed compliance-checked templates meeting regulatory requirements",
      "Created educational content explaining life sciences investment thesis",
      "Personalized outreach to 25,330 institutional contacts",
      "Implemented A/B testing for subject lines and messaging approaches"
    ],

    metrics: ["$9K+ Opportunities", "97% Deliverability", "6% CTR"],

    results: [
      "$9,000+ in qualified investment opportunities generated",
      "25,330 emails sent across campaign",
      "97% deliverability rate (exceptional for financial services)",
      "6% click-through rate (3x industry average)",
      "9 qualified institutional investor opportunities",
      "Average opportunity size: $1,000+ AUM"
    ],

    timeline: "3 months",
    link: "https://www.emeraldetfs.com/about-us/"
  },

  {
    id: 4,
    title: "AI Infrastructure ETF Launch",
    client: "Vista Shares",
    category: "Technology Finance",
    industry: "Thematic ETF (AI Infrastructure)",
    duration: "2 months",
    gradient: "from-upwork-green via-teal-500 to-emerald-600",
    companySize: "New fund launch",
    marketPosition: "Crowded thematic investing space",
    competitionLevel: "Extremely high (AI theme saturation)",

    challenge: "New AI infrastructure ETF needed differentiation from mainstream tech-heavy AI funds in an extremely crowded thematic investing space. Most AI ETFs concentrated on big tech (NVIDIA, Microsoft, Google), leaving gap for infrastructure/supply chain exposure. Needed to position 'Pure Exposure' strategy to financial advisors seeking diversification from concentrated tech positions.",

    approach: [
      "Developed 'Pure Exposure' messaging strategy focusing on AI supply chain",
      "Created differentiation from concentrated big-tech AI ETF competitors",
      "Built compliance-focused campaign targeting financial advisors and institutions",
      "Emphasized infrastructure companies (semiconductors, data centers, networking)",
      "Positioned fund as diversification tool vs. concentrated tech exposure"
    ],

    execution: [
      "Developed 6 unique messaging tracks for different advisor types",
      "Created educational content explaining AI infrastructure investment thesis",
      "Built targeted contact lists of 10,343 financial advisors and institutions",
      "Implemented compliance review for all FINRA/SEC requirements",
      "Designed visual comparisons showing holdings differentiation"
    ],

    metrics: ["$11K+ AUM", "75% Open Rate", "Pure Exposure"],

    results: [
      "$11,000+ in investment opportunities generated",
      "10,343 targeted emails sent",
      "75% open rate (exceptionally high for B2B financial)",
      "3% click-through rate",
      "11 qualified leads worth $11,000+ combined AUM",
      "Strong engagement from independent RIAs and wealth advisors"
    ],

    timeline: "2 months",
    clientFeedback: "Successfully positioned unique value proposition with hard-working, enthusiastic approach that delivered results beyond client expectations.",
    link: "https://www.vistashares.com/about-us/"
  }
];
