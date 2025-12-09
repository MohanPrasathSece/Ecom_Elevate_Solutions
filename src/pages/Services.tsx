import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import {
  TrendingUp,
  Store,
  Megaphone,
  Palette,
  Monitor,
  ShoppingCart,
  Share2,
  Users,
  Star,
  Globe,
  Smartphone,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      icon: Store,
      title: "Amazon Account Management",
      description: "Comprehensive day-to-day management to keep your Amazon business running smoothly and profitably, including coordination with advertising for growth.",
      features: [
        "Product Listing Optimization",
        "Price Updating & Monitoring",
        "Inventory Management",
        "Negative Feedback Management",
        "A to Z Claims Handling",
        "Pricing Health Monitoring",
        "Storefront Creation/Enhancement",
        "Seller Dashboard Notifications",
        "Case Management & Resolution",
        "Sales Target Estimation"
      ]
    },
    {
      icon: Megaphone,
      title: "Amazon Advertising",
      description: "Data-driven advertising campaigns that maximize ROAS and drive sustainable growth.",
      features: [
        "Spending & Sales Target Estimation",
        "Budget-Level Optimization",
        "Campaign Creation (New & Existing)",
        "Daily Campaign Optimization",
        "Keyword Research & Targeting",
        "Bid Management",
        "Negative Keyword Optimization",
        "Performance Reports & Analysis",
        "DSP Campaign Management"
      ]
    },
    {
      icon: Palette,
      title: "A+ Content & Brand Store",
      description: "Premium visual content that enhances your brand presence and boosts conversions.",
      features: [
        "Basic A+ Content (7-8 templates)",
        "Premium A+ Content (5-6 templates)",
        "Custom Brand-Aligned Creatives",
        "Text + Visual Optimization",
        "Brand Story Development",
        "Fully Optimized Storefront",
        "Mobile-Responsive Design",
        "Conversion-Focused Layout"
      ]
    },
    {
      icon: Star,
      title: "Review & Reputation Management",
      description: "Protect and enhance your brand reputation with proactive review management.",
      features: [
        "Review Monitoring",
        "Response Management",
        "Negative Review Mitigation",
        "Review Request Campaigns",
        "Seller Feedback Management",
        "Rating Improvement Strategies"
      ]
    },
    {
      icon: Globe,
      title: "Google Ads Management",
      description: "Drive external traffic to your Amazon listings with targeted Google Ads campaigns.",
      features: [
        "Search Campaign Setup",
        "Shopping Ads Management",
        "Display Network Campaigns",
        "Remarketing Strategies",
        "Keyword Research",
        "Ad Copy Optimization",
        "Conversion Tracking"
      ]
    },
    {
      icon: Share2,
      title: "Social Media & Meta Ads",
      description: "Build brand awareness and drive sales through strategic social media marketing.",
      features: [
        "Facebook & Instagram Ads",
        "Social Media Content Creation",
        "Community Management",
        "Audience Targeting",
        "Campaign Analytics",
        "Brand Building Strategies"
      ]
    },
    {
      icon: Monitor,
      title: "Website Development",
      description: "Corporate and marketing websites crafted for brand storytelling, speed, and responsive experiences.",
      features: [
        "Corporate & Portfolio Websites",
        "Custom UI/UX Design Systems",
        "CMS & API Integrations",
        "Accessibility & SEO Enhancements",
        "Performance Optimization"
      ]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Website",
      description: "Conversion-focused storefronts with secure checkout, product management, and growth-ready integrations.",
      features: [
        "Shopify / WooCommerce Builds",
        "Product Catalog & Inventory Setup",
        "Payment & Logistics Integrations",
        "Conversion Rate Optimization",
        "Analytics & Marketing Automation"
      ]
    },
    {
      icon: Users,
      title: "Influencer Marketing (UAE & Kuwait)",
      description: "Leverage regional influencers to build trust and accelerate growth in GCC markets.",
      features: [
        "Influencer Shortlisting",
        "Negotiation & Briefs",
        "Content Guidelines",
        "Performance Tracking"
      ]
    },
    {
      icon: Palette,
      title: "Graphic Designing",
      description: "Conversion-focused creatives for storefronts, ads, A+ content and social media.",
      features: [
        "Ad Creatives",
        "A+ Content Modules",
        "Store Banners",
        "Social Media Posts"
      ]
    },
    {
      icon: Star,
      title: "Marketplace Review Management",
      description: "Cross-platform review monitoring, response workflows and reputation enhancement for Flipkart, Meesho, etc.",
      features: [
        "Review Monitoring",
        "Response Playbooks",
        "Escalation Handling",
        "Sentiment Reports"
      ]
    },
    {
      icon: Smartphone,
      title: "FMCG Marketing",
      description: "Retail-ready strategies for FMCG brands across marketplaces and paid channels.",
      features: [
        "Category Strategy",
        "Promo & Pricing Playbooks",
        "Retail Media",
        "Performance Dashboards"
      ]
    }
  ];

  const advertisingDetails = [
    {
      title: "Listing Optimization",
      desc: "Effective advertising begins with high-converting product detail pages. We refine your listings so every click has the best chance to convert."
    },
    {
      title: "Keyword Research",
      desc: "Identify high-converting terms to strengthen discoverability and relevance."
    },
    {
      title: "Compelling Copywriting",
      desc: "Persuasive storytelling that highlights differentiators and buying triggers."
    },
    {
      title: "High-Quality Images",
      desc: "Premium visuals sized for every module to build trust instantly."
    },
    {
      title: "A/B Testing",
      desc: "Iterative testing on titles, creative and bullets to push conversion rates higher."
    }
  ];

  const commandCenter = [
    "Seller Dashboard Oversight",
    "Inventory Alerts",
    "Policy Violations",
    "Performance Metrics",
    "Shipping Issues"
  ];

  const forecasting = [
    "Spend & Sales Planning",
    "Historical Data Analysis",
    "Market Research",
    "Goal Setting",
    "Budget Allocation"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50 min-h-[40vh] flex flex-col justify-center relative overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-blue-100">
            End-to-end Amazon and e-commerce solutions designed to <span className="text-white font-semibold">scale your business</span>.
          </p>
          <div className="flex justify-center gap-8 mt-10">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">3x</div>
              <div className="text-sm text-blue-200">Average ROAS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <GlassCard key={index} className="flex flex-col h-full hover:border-blue-500/30 transition-all duration-300">
              <div className="p-6 flex-grow">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white mb-2">What's Included:</h4>
                  {service.features.slice(0, 5).map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 5 && (
                    <div className="text-xs text-blue-400 pl-6 pt-1">+{service.features.length - 5} more items</div>
                  )}
                </div>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                  <Link to="/contact">Book Strategy Session</Link>
                </Button>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Detailed Advertising Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Amazon Advertising Management</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Profitable Growth with Smarter Ad Spend. We balance automated precision with human expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white">How we optimize for results</h3>
              <div className="space-y-6">
                {advertisingDetails.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold flex-shrink-0">
                      0{i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <GlassCard className="p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Monitor className="w-5 h-5 mr-2 text-blue-400" /> Command Center
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {commandCenter.map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>

              <GlassCard className="p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-green-400" /> Forecasting
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {forecasting.map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg bg-white text-black hover:bg-gray-100">
              <Link to="/contact">Plan My Advertising Roadmap</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Scale?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how our tailored strategies can accelerate your growth.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
          >
            <Link to="/contact" className="flex items-center">
              Book a Strategy Call
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>

    </div>
  );
};

export default Services;
