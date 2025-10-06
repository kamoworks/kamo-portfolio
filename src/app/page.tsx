"use client";

import { useState } from "react";
import {
  ArrowRight,
  Menu,
  X,
  BarChart3,
  Mail,
  TrendingUp,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Star,
  Calendar,
  Award,
  Target,
  Zap,
  Shield
} from "lucide-react";
import { Linkedin } from "lucide-react";
import Link from "next/link";
import { caseStudies } from "@/data/caseStudies";
import { testimonials } from "@/data/testimonials";
import { pricingTiers } from "@/data/pricing";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/98 backdrop-blur-md border-b-2 border-brand-gray-200 touch-manipulation shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="#" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <div className="w-11 h-11 bg-brand-green rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white font-black text-2xl">K</span>
              </div>
              <span className="font-black text-2xl text-brand-navy">Kamo</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#work" className="text-brand-navy-light hover:text-brand-navy transition-colors font-semibold">Work</Link>
              <Link href="#services" className="text-brand-navy-light hover:text-brand-navy transition-colors font-semibold">Services</Link>
              <Link href="#testimonials" className="text-brand-navy-light hover:text-brand-navy transition-colors font-semibold">Testimonials</Link>
              <Link href="#contact" className="text-brand-navy-light hover:text-brand-navy transition-colors font-semibold">Contact</Link>
              <Link
                href="https://calendly.com/kamooliphant/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-green text-white px-7 py-3 rounded-full hover:bg-brand-green-dark transition-all hover:scale-105 shadow-md font-bold"
              >
                Start Project
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b-2 border-brand-gray-200 shadow-lg">
            <div className="px-6 py-4 space-y-4">
              <Link href="#work" onClick={() => setMobileMenuOpen(false)} className="block text-brand-navy-light hover:text-brand-navy font-semibold">Work</Link>
              <Link href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-brand-navy-light hover:text-brand-navy font-semibold">Services</Link>
              <Link href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="block text-brand-navy-light hover:text-brand-navy font-semibold">Testimonials</Link>
              <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-brand-navy-light hover:text-brand-navy font-semibold">Contact</Link>
              <Link
                href="https://calendly.com/kamooliphant/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand-green text-white px-6 py-3 rounded-full hover:bg-brand-green-dark transition-colors font-bold"
              >
                Start Project
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-white">
        {/* Background Gradients */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-brand-green/5 via-brand-gray-50 to-transparent opacity-60" />
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl hidden md:block" />
          <div className="absolute top-1/2 -left-40 w-80 h-80 bg-brand-navy/5 rounded-full blur-3xl hidden md:block" />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="max-w-5xl">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.95] tracking-tight">
              <span className="block text-brand-navy">Your Biggest</span>
              <span className="block text-brand-navy">Competitor Just</span>
              <span className="block text-brand-navy">Hired a <span className="gradient-text">Content Expert</span></span>
            </h1>

            <p className="text-2xl md:text-3xl text-brand-navy-light mb-12 max-w-3xl font-semibold leading-tight">
              They're dominating search and stealing your market share. I help ambitious leaders reclaim their competitive edge.
            </p>

            <div className="flex flex-col items-start gap-4">
              <Link
                href="https://calendly.com/kamooliphant/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 bg-brand-green text-white px-12 py-6 rounded-full hover:bg-brand-green-dark transition-all hover:scale-105 text-2xl font-black shadow-xl hover:shadow-2xl glow-on-hover overflow-hidden"
              >
                <span className="relative z-10">Schedule Strategy Call</span>
                <ArrowRight size={28} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link
                href="#work"
                className="group text-brand-navy-light hover:text-brand-navy text-lg font-bold underline underline-offset-4 decoration-2 transition-all hover:underline-offset-8"
              >
                <span className="inline-flex items-center gap-2">
                  See case studies
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 pt-8 border-t-2 border-brand-gray-200">
              <div className="flex flex-wrap items-center gap-8 text-base text-brand-navy-light">
                <div className="flex items-center gap-2 group cursor-default hover:scale-105 transition-transform">
                  <div className="w-10 h-10 bg-brand-green/10 rounded-full flex items-center justify-center group-hover:bg-brand-green/20 transition-colors">
                    <Shield size={20} className="text-brand-green group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="font-semibold group-hover:text-brand-navy transition-colors">100% On-Time Delivery</span>
                </div>
                <div className="flex items-center gap-2 group cursor-default hover:scale-105 transition-transform">
                  <div className="w-10 h-10 bg-brand-green/10 rounded-full flex items-center justify-center group-hover:bg-brand-green/20 transition-colors">
                    <Target size={20} className="text-brand-green group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="font-semibold group-hover:text-brand-navy transition-colors">80%+ Repeat Clients</span>
                </div>
                <div className="flex items-center gap-2 group cursor-default hover:scale-105 transition-transform">
                  <div className="w-10 h-10 bg-brand-green/10 rounded-full flex items-center justify-center group-hover:bg-brand-green/20 transition-colors">
                    <Zap size={20} className="text-brand-green group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="font-semibold group-hover:text-brand-navy transition-colors">24hr Response Time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="work" className="py-20 px-6 bg-gradient-to-br from-brand-gray-50 via-white to-brand-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <div className="inline-block mb-4">
              <span className="px-5 py-2 bg-brand-green/10 text-brand-green rounded-full text-sm font-black uppercase tracking-wide border-2 border-brand-green/20 hover:scale-105 transition-transform cursor-default">
                Client Success Stories
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-6 text-brand-navy leading-tight">
              Proven Results That Speak
            </h2>
            <p className="text-xl md:text-2xl text-brand-navy-light max-w-3xl mx-auto font-semibold leading-relaxed">
              Real campaigns. Real results. Real revenue.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className="group bg-white rounded-2xl overflow-hidden border-2 border-brand-gray-200 hover:border-brand-green hover:shadow-2xl transition-all duration-300 flex flex-col md:hover:scale-[1.02]"
              >
                {/* Header with Gradient Accent - Fixed Height */}
                <div className="relative p-6 lg:p-8 border-b-2 border-brand-gray-100 bg-gradient-to-br from-white to-brand-gray-50/30">
                  {/* Top Badge Row */}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-0 mb-6">
                    <span className="inline-block px-4 py-2 bg-brand-green/10 text-brand-green rounded-lg text-sm font-black uppercase tracking-wide border-2 border-brand-green/30 w-fit">
                      {study.category}
                    </span>
                    <div className="text-left sm:text-right">
                      <div className="text-xs font-bold text-brand-gray-600 uppercase tracking-wide mb-1">Duration</div>
                      <div className="text-sm text-brand-navy font-black">{study.duration}</div>
                    </div>
                  </div>

                  {/* Title & Client */}
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-brand-navy mb-3 leading-tight group-hover:text-brand-green transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-base lg:text-lg text-brand-navy-light font-bold flex items-center gap-2">
                    <span className="w-2 h-2 bg-brand-green rounded-full flex-shrink-0"></span>
                    {study.client}
                  </p>
                </div>

                {/* Metrics Banner - Fixed Height */}
                <div className="p-4 lg:p-6 bg-gradient-to-r from-brand-green/5 via-brand-green/10 to-brand-green/5 border-b-2 border-brand-gray-100">
                  <div className="flex flex-wrap gap-2 lg:gap-3 justify-center">
                    {study.metrics.map((metric, i) => (
                      <div key={i} className="px-3 lg:px-4 py-2 lg:py-2.5 bg-brand-green text-white rounded-xl text-xs lg:text-sm font-black shadow-md md:hover:shadow-lg md:hover:scale-105 transition-all duration-200 cursor-default">
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Challenge & Results Section - Flex Grow */}
                <div className="p-6 lg:p-8 space-y-6 bg-white flex-grow flex flex-col">
                  {/* Challenge */}
                  <div>
                    <h4 className="text-xs font-black text-brand-gray-600 uppercase mb-3 lg:mb-4 flex items-center gap-2 tracking-wide">
                      <div className="w-6 h-6 bg-brand-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Target size={14} className="text-brand-green" />
                      </div>
                      The Challenge
                    </h4>
                    <p className="text-brand-navy-light leading-relaxed font-medium text-sm lg:text-base">
                      {study.challenge}
                    </p>
                  </div>

                  {/* Results Section */}
                  <div className="pt-6 border-t-2 border-brand-gray-100 flex-grow">
                    <h4 className="text-xs font-black text-brand-gray-600 uppercase mb-3 lg:mb-4 flex items-center gap-2 tracking-wide">
                      <div className="w-6 h-6 bg-brand-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={14} className="text-brand-green" />
                      </div>
                      Key Results Delivered
                    </h4>
                    <ul className="space-y-2.5 lg:space-y-3">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-2 lg:gap-3 text-brand-navy-light font-medium text-sm lg:text-base">
                          <div className="mt-1 flex-shrink-0 w-5 h-5 bg-brand-green/10 rounded-md flex items-center justify-center">
                            <ChevronRight size={14} className="text-brand-green" />
                          </div>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* View Project Link - Always at Bottom */}
                  {study.link && (
                    <div className="pt-6 border-t-2 border-brand-gray-100 mt-auto">
                      <a
                        href={study.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-brand-navy hover:text-brand-green font-bold group/link transition-all text-sm lg:text-base"
                      >
                        <ExternalLink size={18} className="group-hover/link:scale-110 transition-transform flex-shrink-0" />
                        <span>View Live Project</span>
                        <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform flex-shrink-0" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="mb-16 bg-white rounded-2xl p-8 md:p-12 border-2 border-brand-gray-200 shadow-lg">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { value: "80%+", label: "Client Retention", sublabel: "Long-term partnerships" },
                { value: "1,067%", label: "Peak Growth", sublabel: "Traffic increase achieved" },
                { value: "$40K+", label: "Revenue Generated", sublabel: "Qualified leads & opportunities" },
                { value: "95%", label: "Job Success", sublabel: "Upwork verified rating" }
              ].map((stat, i) => (
                <div key={i} className="group cursor-default">
                  <div className="text-5xl md:text-6xl font-black text-brand-navy mb-2 group-hover:text-brand-green transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-base font-bold text-brand-navy-light mb-1">{stat.label}</div>
                  <div className="text-sm text-brand-gray-600 font-medium">{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-xl md:text-2xl text-brand-navy-light font-bold mb-6">
              Ready to generate similar results for your business?
            </p>
            <Link
              href="https://calendly.com/kamooliphant/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 bg-brand-green text-white px-12 py-6 rounded-full hover:bg-brand-green-dark transition-all hover:scale-105 text-xl md:text-2xl font-black shadow-xl hover:shadow-2xl glow-on-hover overflow-hidden"
            >
              <span className="relative z-10">Schedule Free Strategy Call</span>
              <Calendar size={24} className="relative z-10 group-hover:rotate-12 transition-transform" />
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <p className="text-sm text-brand-gray-600 mt-4 font-medium">
              30-minute call • No obligations • Get your custom growth roadmap
            </p>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-white via-brand-gray-50/30 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Header with Value Proposition */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="px-5 py-2 bg-brand-green/10 text-brand-green rounded-full text-sm font-black uppercase tracking-wide border-2 border-brand-green/20 hover:scale-105 transition-transform cursor-default">
                Our Proven System
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-6 text-brand-navy leading-tight">
              How We Work Together
            </h2>
            <p className="text-xl md:text-2xl text-brand-navy-light max-w-3xl mx-auto font-semibold leading-relaxed mb-4">
              A systematic process that delivers results without wasting your time
            </p>
            <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto font-medium">
              Minimal meetings. Maximum results. Most clients see measurable improvement by Month 3.
            </p>
          </div>

          {/* Timeline Workflow */}
          <div className="relative mb-16">
            {/* Desktop Timeline Connector */}
            <div className="hidden lg:block absolute top-24 left-[5%] right-[5%] h-1.5 bg-gradient-to-r from-brand-green via-brand-green to-brand-green opacity-20 -z-10"></div>
            <div className="hidden lg:block absolute top-24 left-[5%] w-0 h-1.5 bg-gradient-to-r from-brand-green to-brand-green animate-pulse" style={{width: '90%'}}></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery & Strategy",
                  timeline: "Week 1",
                  description: "Deep dive into your business goals, competitive landscape, and target audience DNA. We identify content gaps and untapped opportunities.",
                  deliverables: [
                    "Competitive analysis report",
                    "Custom content strategy",
                    "Success metrics definition",
                    "Keyword & topic roadmap"
                  ],
                  involvement: "2-3 hours total",
                  icon: Target,
                  color: "brand-green"
                },
                {
                  step: "02",
                  title: "Foundation Building",
                  timeline: "Week 2-4",
                  description: "We build your content infrastructure. Initial pieces go live, SEO foundations are set, and analytics tracking begins.",
                  deliverables: [
                    "Initial content creation",
                    "SEO optimization",
                    "Channel setup",
                    "Analytics implementation"
                  ],
                  involvement: "1 hour/week",
                  icon: TrendingUp,
                  color: "brand-green"
                },
                {
                  step: "03",
                  title: "Execution & Growth",
                  timeline: "Month 2+",
                  description: "Consistent content delivery on autopilot. Weekly updates keep you informed. Your only job: approve and watch traffic grow.",
                  deliverables: [
                    "Consistent content delivery",
                    "Performance monitoring",
                    "Strategy optimization",
                    "Weekly progress updates"
                  ],
                  involvement: "30 min/week",
                  icon: Zap,
                  color: "brand-green"
                },
                {
                  step: "04",
                  title: "Results & Scaling",
                  timeline: "Month 3+",
                  description: "Traffic compounds, leads flow in, and you dominate search results. Monthly reviews show ROI and identify scaling opportunities.",
                  deliverables: [
                    "Traffic & lead growth",
                    "Monthly ROI reporting",
                    "Scaling recommendations",
                    "Market authority metrics"
                  ],
                  involvement: "1 hour/month",
                  icon: BarChart3,
                  color: "brand-green"
                }
              ].map((phase, i) => {
                const Icon = phase.icon;
                return (
                  <div key={i} className="relative group">
                    <div className="relative bg-white rounded-2xl p-6 lg:p-8 border-2 border-brand-gray-200 hover:border-brand-green hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                      {/* Progress Indicator Dot */}
                      <div className="hidden lg:block absolute -top-1.5 left-1/2 -translate-x-1/2 w-4 h-4 bg-brand-green rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform z-10"></div>

                      {/* Step Number Badge */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-brand-green to-brand-green-dark rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <span className="text-white font-black text-2xl">{phase.step}</span>
                        </div>
                        <Icon size={36} className="text-brand-navy/20 group-hover:text-brand-green transition-colors" />
                      </div>

                      {/* Content */}
                      <div className="mb-4">
                        <h3 className="text-2xl lg:text-3xl font-black text-brand-navy mb-2 leading-tight group-hover:text-brand-green transition-colors">
                          {phase.title}
                        </h3>
                        <div className="inline-block px-3 py-1.5 bg-brand-green/10 text-brand-green rounded-lg text-sm font-black uppercase tracking-wide border border-brand-green/30">
                          {phase.timeline}
                        </div>
                      </div>

                      <p className="text-brand-navy-light leading-relaxed mb-6 font-medium flex-grow">
                        {phase.description}
                      </p>

                      {/* Deliverables - Expandable Section */}
                      <div className="mb-6 p-4 bg-brand-gray-50 rounded-xl border border-brand-gray-200">
                        <h4 className="text-xs font-black text-brand-gray-600 uppercase mb-3 tracking-wide flex items-center gap-2">
                          <CheckCircle2 size={14} className="text-brand-green" />
                          What You Get
                        </h4>
                        <ul className="space-y-2">
                          {phase.deliverables.map((deliverable, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-brand-navy-light font-medium">
                              <ChevronRight size={16} className="text-brand-green flex-shrink-0 mt-0.5" />
                              <span>{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Time Commitment Badge */}
                      <div className="mt-auto p-4 bg-white rounded-xl border-2 border-brand-green/20 group-hover:border-brand-green transition-colors">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-xs font-bold text-brand-gray-600 uppercase tracking-wide mb-1">Your Time Investment</div>
                            <div className="text-lg font-black text-brand-navy">{phase.involvement}</div>
                          </div>
                          <div className="w-10 h-10 bg-brand-green/10 rounded-full flex items-center justify-center">
                            <Calendar size={20} className="text-brand-green" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Results Timeline Expectation */}
          <div className="mb-12 bg-gradient-to-r from-brand-green/5 via-brand-green/10 to-brand-green/5 rounded-2xl p-8 md:p-12 border-2 border-brand-green/20">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-5xl font-black text-brand-navy mb-4">
                When You'll See Results
              </h3>
              <p className="text-lg text-brand-navy-light font-semibold max-w-2xl mx-auto">
                Strategic content compounds over time. Here's the typical trajectory:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  period: "Month 1",
                  focus: "Foundation Phase",
                  expectations: [
                    "Content goes live",
                    "SEO indexing begins",
                    "Analytics tracking active",
                    "Initial engagement data"
                  ],
                  indicator: "🌱",
                  status: "Building"
                },
                {
                  period: "Month 2-3",
                  focus: "Traction Phase",
                  expectations: [
                    "Search rankings improve",
                    "Traffic growth visible",
                    "First qualified leads",
                    "Performance patterns emerge"
                  ],
                  indicator: "📈",
                  status: "Growing"
                },
                {
                  period: "Month 4+",
                  focus: "Scale Phase",
                  expectations: [
                    "Consistent lead flow",
                    "Market authority established",
                    "Compounding ROI",
                    "Scaling opportunities clear"
                  ],
                  indicator: "🚀",
                  status: "Dominating"
                }
              ].map((timeline, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border-2 border-brand-gray-200 hover:border-brand-green hover:shadow-lg transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-xs font-bold text-brand-gray-600 uppercase tracking-wide">Timeline</div>
                      <div className="text-2xl font-black text-brand-navy">{timeline.period}</div>
                    </div>
                    <div className="text-4xl">{timeline.indicator}</div>
                  </div>

                  <div className="mb-4">
                    <div className="inline-block px-3 py-1.5 bg-brand-green/10 text-brand-green rounded-lg text-sm font-black uppercase">
                      {timeline.status}
                    </div>
                  </div>

                  <h4 className="text-lg font-black text-brand-navy mb-3">{timeline.focus}</h4>

                  <ul className="space-y-2">
                    {timeline.expectations.map((expectation, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-brand-navy-light font-medium">
                        <CheckCircle2 size={16} className="text-brand-green flex-shrink-0 mt-0.5" />
                        <span>{expectation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Reinforcement */}
          <div className="bg-white rounded-2xl p-8 border-2 border-brand-gray-200 mb-12">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              {[
                { icon: Shield, label: "No Long-Term Contracts", sublabel: "Cancel anytime" },
                { icon: Target, label: "100% On-Time Delivery", sublabel: "Every milestone met" },
                { icon: Zap, label: "24hr Response Time", sublabel: "Always accessible" },
                { icon: Award, label: "80%+ Client Retention", sublabel: "Results speak" }
              ].map((trust, i) => {
                const TrustIcon = trust.icon;
                return (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-14 h-14 bg-brand-green/10 rounded-full flex items-center justify-center mb-3">
                      <TrustIcon size={24} className="text-brand-green" />
                    </div>
                    <div className="font-black text-brand-navy mb-1">{trust.label}</div>
                    <div className="text-sm text-brand-gray-600 font-medium">{trust.sublabel}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <p className="text-xl md:text-2xl text-brand-navy-light font-bold mb-6">
              Ready to start your content transformation?
            </p>
            <Link
              href="https://calendly.com/kamooliphant/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 bg-brand-green text-white px-12 py-6 rounded-full hover:bg-brand-green-dark transition-all hover:scale-105 text-xl md:text-2xl font-black shadow-xl hover:shadow-2xl glow-on-hover overflow-hidden"
            >
              <span className="relative z-10">Schedule Free Strategy Call</span>
              <ArrowRight size={28} className="relative z-10 group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <p className="text-sm text-brand-gray-600 mt-4 font-medium">
              30-minute call • No obligations • Get a custom roadmap
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="services" className="py-20 px-6 bg-gradient-to-br from-white via-brand-gray-50/30 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-5 py-2 bg-brand-green/10 text-brand-green rounded-full text-sm font-black uppercase tracking-wide border-2 border-brand-green/20">
                Investment Options
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-6 text-brand-navy leading-tight">
              Transparent Pricing
            </h2>
            <p className="text-xl md:text-2xl text-brand-navy-light max-w-3xl mx-auto font-semibold leading-relaxed">
              No hidden fees, no surprises—just results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-center mb-16">
            {pricingTiers.map((tier, index) => (
              <div
                key={tier.id}
                className={`relative bg-white rounded-2xl p-8 border-2 transition-all ${
                  tier.popular
                    ? 'border-brand-green shadow-2xl md:scale-110 md:py-12 z-10'
                    : 'border-brand-gray-200 shadow-md hover:shadow-lg'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-brand-green text-white rounded-lg text-sm font-black uppercase shadow-lg">
                    RECOMMENDED
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-black mb-3 text-brand-navy">{tier.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-6xl font-black text-brand-navy">${tier.price}</span>
                    <span className="text-brand-gray-600 font-semibold">/{tier.period}</span>
                  </div>
                  <p className="text-brand-navy-light font-semibold leading-relaxed">{tier.tagline}</p>
                </div>

                <div className="mb-8">
                  <h4 className="text-xs font-bold text-brand-gray-600 uppercase mb-4 tracking-wide">What's Included:</h4>
                  <ul className="space-y-3">
                    {tier.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                        <span className="text-brand-navy-light text-sm font-medium leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8 p-4 bg-brand-gray-50 rounded-xl border border-brand-gray-200">
                  <h4 className="text-xs font-bold text-brand-gray-600 uppercase mb-2 tracking-wide">Expected ROI:</h4>
                  <p className="text-sm text-brand-navy-light font-medium leading-relaxed">{tier.typicalROI}</p>
                </div>

                <Link
                  href={tier.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-full font-bold transition-all text-center inline-block text-lg ${
                    tier.popular
                      ? 'bg-brand-green text-white hover:bg-brand-green-dark shadow-lg hover:shadow-xl'
                      : 'border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white'
                  }`}
                >
                  {tier.ctaText}
                </Link>

                <p className="text-xs text-brand-gray-600 text-center mt-4 font-medium">No contracts • Cancel anytime</p>
              </div>
            ))}
          </div>

          {/* Pricing Context */}
          <div className="bg-brand-gray-50 rounded-2xl p-10 md:p-16 border-2 border-brand-gray-200">
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-6xl font-black mb-4 text-brand-navy">Compare the Real Cost</h3>
              <p className="text-xl text-brand-gray-600 font-semibold">See how much you actually save annually</p>
            </div>

            <div className="grid md:grid-cols-5 gap-6 items-stretch">
              {/* Agency Option */}
              <div className="md:col-span-1 p-6 bg-white rounded-xl border-2 border-red-300 relative flex flex-col justify-between">
                <div>
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full uppercase">Expensive</div>
                  <div className="text-5xl font-black text-brand-navy mb-1 mt-4">$72K</div>
                  <div className="text-xs text-brand-gray-600 mb-4 font-bold uppercase">/year</div>
                  <div className="text-base font-black text-brand-navy mb-2">Marketing Agency</div>
                  <div className="text-xs text-brand-gray-600 font-medium">Slow response, junior staff, inconsistent quality</div>
                </div>
              </div>

              {/* Full-Time Option */}
              <div className="md:col-span-1 p-6 bg-white rounded-xl border-2 border-orange-300 relative flex flex-col justify-between">
                <div>
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full uppercase">Very Expensive</div>
                  <div className="text-5xl font-black text-brand-navy mb-1 mt-4">$144K</div>
                  <div className="text-xs text-brand-gray-600 mb-4 font-bold uppercase">/year</div>
                  <div className="text-base font-black text-brand-navy mb-2">Full-Time Hire</div>
                  <div className="text-xs text-brand-gray-600 font-medium">Salary + benefits + overhead + management</div>
                </div>
              </div>

              {/* Kamo Option - DOMINANT */}
              <div className="md:col-span-3 p-10 bg-brand-green rounded-2xl border-4 border-brand-green-dark shadow-2xl relative flex flex-col justify-between transform md:scale-105">
                <div>
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-brand-navy text-white text-sm font-black rounded-lg uppercase shadow-lg">🏆 Best Value</div>
                  <div className="text-center mt-2 mb-6">
                    <div className="text-7xl md:text-8xl font-black text-white mb-2">$24K</div>
                    <div className="text-lg text-white/90 mb-4 font-bold uppercase tracking-wide">/year</div>
                    <div className="text-3xl font-black text-white mb-4">Partner with Kamo</div>
                    <div className="text-lg text-white/95 font-semibold leading-relaxed mb-6">Expert strategy + execution + proven ROI + direct access</div>
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t-2 border-white/30">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-4xl font-black text-white mb-1">Save $48K-$120K</div>
                    <div className="text-sm text-white/90 font-bold uppercase tracking-wide">Annually vs alternatives</div>
                  </div>
                  <div className="flex justify-center gap-2">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-white font-bold text-sm">67% Less than agencies</div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-white font-bold text-sm">83% Less than full-time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-gradient-to-br from-brand-gray-50 via-white to-brand-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-5 py-2 bg-brand-green/10 text-brand-green rounded-full text-sm font-black uppercase tracking-wide border-2 border-brand-green/20">
                Client Testimonials
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-6 text-brand-navy leading-tight">
              What Clients Say
            </h2>
            <p className="text-xl md:text-2xl text-brand-navy-light font-semibold leading-relaxed max-w-3xl mx-auto">
              Verified reviews from real projects • Top Rated Plus on Upwork
            </p>
          </div>

          {/* Featured Testimonial */}
          {testimonials.filter(t => t.featured).map((testimonial) => (
            <div key={testimonial.id} className="mb-12 bg-white rounded-2xl p-10 md:p-16 shadow-xl border-2 border-brand-green relative">
              <div className="absolute -top-4 left-8 px-6 py-2 bg-brand-green text-white text-sm font-black rounded-lg uppercase shadow-lg">
                ⭐ Featured Review
              </div>

              {/* Large Quote */}
              <div className="text-center mb-8">
                <p className="text-2xl md:text-4xl font-bold text-brand-navy leading-relaxed italic mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-center gap-2 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={24} className="fill-upwork-yellow text-upwork-yellow" />
                  ))}
                </div>
                <div className="text-lg font-bold text-brand-navy-light">{testimonial.role}</div>
              </div>

              {/* Result Highlight */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8 border-t-2 border-brand-gray-200">
                <div className="text-center">
                  <div className="text-xs font-bold text-brand-gray-600 uppercase mb-2 tracking-wide">Project Type</div>
                  <div className="text-base font-bold text-brand-navy">{testimonial.projectType}</div>
                </div>
                <div className="hidden md:block w-px h-12 bg-brand-gray-300"></div>
                <div className="text-center">
                  <div className="text-xs font-bold text-brand-gray-600 uppercase mb-2 tracking-wide">Result</div>
                  <div className="text-2xl font-black text-brand-green">{testimonial.result}</div>
                </div>
              </div>
            </div>
          ))}

          {/* Other Testimonials - Smaller Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.filter(t => !t.featured).map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl p-6 shadow-md border-2 border-brand-gray-200 hover:shadow-lg hover:border-brand-green transition-all">
                {/* Quote */}
                <p className="text-brand-navy-light mb-4 leading-relaxed font-medium italic text-sm">"{testimonial.quote}"</p>

                {/* Result */}
                <div className="mb-4 p-3 bg-brand-gray-50 rounded-lg">
                  <div className="text-xs font-bold text-brand-gray-600 uppercase mb-1 tracking-wide">Result</div>
                  <div className="text-lg font-black text-brand-green">{testimonial.result}</div>
                </div>

                {/* Attribution */}
                <div className="pt-4 border-t border-brand-gray-200">
                  <div className="text-sm font-bold text-brand-navy">{testimonial.role}</div>
                  <div className="text-xs text-brand-gray-600 font-medium">{testimonial.industry}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Upwork Stats */}
          <div className="mt-16">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-8">
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-brand-navy-light">
                <span className="flex items-center gap-2 font-semibold">
                  <Star size={20} className="text-upwork-yellow fill-upwork-yellow" />
                  5.0★ Rating
                </span>
                <span className="hidden md:inline text-brand-gray-300">•</span>
                <span className="flex items-center gap-2 font-semibold">
                  <Shield size={20} className="text-brand-green" />
                  95% Job Success
                </span>
                <span className="hidden md:inline text-brand-gray-300">•</span>
                <span className="flex items-center gap-2 font-semibold">
                  <Award size={20} className="text-brand-green" />
                  Top Rated Plus
                </span>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://www.upwork.com/freelancers/~01f404915ba3409e35"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-green text-white px-8 py-4 rounded-full hover:bg-brand-green-dark transition-all hover:scale-105 text-lg font-bold shadow-lg"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
                </svg>
                View Upwork Profile
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-white via-brand-gray-50/30 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-5 py-2 bg-brand-green/10 text-brand-green rounded-full text-sm font-black uppercase tracking-wide border-2 border-brand-green/20">
                Get In Touch
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-brand-navy mb-6 leading-tight">
              Let's Start Growing
            </h2>
            <p className="text-xl md:text-2xl text-brand-navy-light max-w-3xl mx-auto font-semibold leading-relaxed">
              Tell me about your business goals. I'll show you how strategic content marketing can get you there.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-brand-gray-200 h-full">
                <h3 className="text-2xl font-black text-brand-navy mb-6">Get in Touch</h3>

                <div className="space-y-6 mb-8">
                  <a
                    href="mailto:kamooliphant@gmail.com"
                    className="flex items-center gap-4 text-brand-navy-light hover:text-brand-green transition-colors group"
                  >
                    <div className="w-12 h-12 bg-brand-green rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-brand-gray-600 uppercase tracking-wide">Email</div>
                      <div className="font-bold">kamooliphant@gmail.com</div>
                    </div>
                  </a>

                  <a
                    href="https://linkedin.com/in/kamo-oliphant888"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-brand-navy-light hover:text-brand-green transition-colors group"
                  >
                    <div className="w-12 h-12 bg-brand-green rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                      <Linkedin size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-brand-gray-600 uppercase tracking-wide">LinkedIn</div>
                      <div className="font-bold">Connect with me</div>
                    </div>
                  </a>

                  <a
                    href="https://calendly.com/kamooliphant/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-brand-navy-light hover:text-brand-green transition-colors group"
                  >
                    <div className="w-12 h-12 bg-brand-green rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                      <Calendar size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-brand-gray-600 uppercase tracking-wide">Schedule</div>
                      <div className="font-bold">Book a 30-min call</div>
                    </div>
                  </a>
                </div>

                <div className="pt-6 border-t-2 border-brand-gray-200">
                  <h4 className="text-xs font-bold text-brand-gray-600 uppercase mb-3 tracking-wide">Response Time</h4>
                  <div className="flex items-center gap-2 text-brand-navy">
                    <Zap size={18} className="text-brand-green" />
                    <span className="font-bold">Within 24 hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-brand-gray-50 via-white to-brand-gray-50">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-5 py-2 bg-brand-green/10 text-brand-green rounded-full text-sm font-black uppercase tracking-wide border-2 border-brand-green/20">
                FAQs
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-6 text-brand-navy leading-tight">
              Common Questions
            </h2>
            <p className="text-xl md:text-2xl text-brand-navy-light font-semibold leading-relaxed">
              Everything you need to know before we start
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "How quickly can we start seeing results?",
                a: "SEO campaigns typically show meaningful traction within 3-4 months. Email campaigns generate leads within weeks. Every project includes detailed tracking so you see progress from day one."
              },
              {
                q: "What makes you different from agencies?",
                a: "You work directly with me—no account managers, no junior staff. I've delivered 1,067% traffic growth and $20K+ in qualified leads for clients. You get expert-level strategy and execution at a fraction of agency cost."
              },
              {
                q: "Do you work with my industry?",
                a: "I've driven results across financial services, B2B tech, healthcare investing, and digital marketing. If you target business decision-makers, I can help you dominate your space."
              },
              {
                q: "What if I'm not satisfied?",
                a: "No long-term contracts. Cancel anytime. I maintain 80%+ client retention because I deliver results, not excuses."
              },
              {
                q: "How involved do I need to be?",
                a: "Minimal. You provide subject matter expertise and final approvals. I handle strategy, execution, and optimization. Expect 2-4 hours per month for check-ins and approvals."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-8 border-2 border-brand-gray-200 hover:border-brand-green transition-all">
                <h3 className="text-xl font-black text-brand-navy mb-3">{faq.q}</h3>
                <p className="text-brand-navy-light leading-relaxed font-medium">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-brand-navy border-t-2 border-brand-navy-dark">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-brand-green rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white font-black text-2xl">K</span>
              </div>
              <div>
                <div className="font-black text-xl text-white">Kamo Oliphant</div>
                <div className="text-sm text-white/70 font-medium">Content Marketing Expert</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <span className="flex items-center gap-2 text-white/90">
                <Shield size={16} className="text-brand-green" />
                <span className="font-semibold">100% On-Time Delivery</span>
              </span>
              <span className="flex items-center gap-2 text-white/90">
                <Star size={16} className="text-upwork-yellow" />
                <span className="font-semibold">5.0★ Average Rating</span>
              </span>
              <span className="flex items-center gap-2 text-white/90">
                <Target size={16} className="text-brand-green" />
                <span className="font-semibold">80%+ Repeat Clients</span>
              </span>
            </div>
          </div>

          <div className="pt-8 border-t border-white/20 text-center">
            <p className="text-white/70 text-sm font-medium">
              © 2025 Kamo Oliphant. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
