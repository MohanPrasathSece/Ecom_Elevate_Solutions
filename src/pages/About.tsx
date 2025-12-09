import React from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  TrendingUp,
  Award,
  Globe,
  UserCheck,
  Zap,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const About: React.FC = () => {
  const missionVision = [
    {
      title: "Our Mission",
      description: "To empower businesses of all sizes to achieve exceptional growth on Amazon through data-driven strategies, expert management, and unwavering commitment to client success. We believe every business deserves the opportunity to thrive in the competitive e-commerce landscape.",
      icon: Target
    },
    {
      title: "Our Vision",
      description: "To become the most trusted and results-oriented Amazon growth partner globally, known for transforming businesses through innovative strategies, transparent practices, and measurable results that exceed expectations.",
      icon: Eye
    }
  ];

  const achievements = [
    { label: "Clients", value: "15+" },
    { label: "ROAS", value: "2x" },
    { label: "Years Experience", value: "5+" },
    { label: "Client Satisfaction", value: "98%" }
  ];

  const coreValues = [
    {
      title: "Innovation",
      description: "Constantly evolving strategies to stay ahead in the dynamic e-commerce landscape",
      icon: Zap
    },
    {
      title: "Transparency",
      description: "Clear communication, honest reporting, and no hidden fees",
      icon: UserCheck
    },
    {
      title: "Results-Driven",
      description: "Focused on measurable outcomes and sustainable business growth",
      icon: TrendingUp
    },
    {
      title: "Client Success",
      description: "Your success is our success - we grow when you grow",
      icon: Award
    }
  ];

  const whyChoose = [
    "Comprehensive account health and day-to-day management",
    "Expertise in product positioning and listing optimization",
    "Focus on increasing ROI, visibility, and conversions",
    "Affordable & transparent pricing",
    "End-to-end Amazon support",
    "Serving India, USA, UAE, UK, and more"
  ];

  const certifications = [
    "Amazon Advertising Certified",
    "Google Ads Certified",
    "Meta Blueprint Certified",
    "E-commerce Growth Specialists"
  ];

  const teamStats = [
    { label: "Team Members", value: "15+" },
    { label: "Combined Years Experience", value: "50+" },
    { label: "Certifications", value: "10+" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 min-h-[40vh] flex flex-col justify-center items-center text-center bg-black/50 relative overflow-hidden">
        {/* Decorative background elements matching Home */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/20 blur-[100px] rounded-full"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            About Ecomm Elevate Solutions
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100 font-medium">
            Your trusted partner for <span className="text-white">Amazon growth</span> and <span className="text-white">e-commerce success</span>
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {missionVision.map((item, index) => (
            <GlassCard key={index} className="p-8 h-full">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-blue-500/10 mr-4">
                  <item.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">{item.title}</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Achievements Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Achievements</h2>
            <p className="text-muted-foreground">Numbers that speak for themselves</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((stat, index) => (
              <GlassCard key={index} className="text-center p-6 border-white/10" hover={false}>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-blue-200 uppercase tracking-wider">{stat.label}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <GlassCard key={index} className="text-center p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-accent/20">
                    <value.icon className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose AMZCOZ & Certifications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">
          {/* Why Choose */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Why Choose Ecomm Elevate Solutions?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're not just another Amazon agency. We're your growth partners, committed to your success with proven strategies and transparent practices.
            </p>
            <ul className="space-y-4">
              {whyChoose.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-base text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-center space-x-2 text-blue-300">
              <Globe className="w-5 h-5" />
              <span className="font-medium">Global Reach: Serving clients in India, USA, UAE, UK, and beyond</span>
            </div>
          </div>

          {/* Certifications and Experts Image Placeholder/Card */}
          <div className="space-y-8">
            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Certifications & Expertise</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center p-3 rounded-lg bg-white/5 border border-white/10">
                    <Award className="w-5 h-5 text-yellow-500 mr-3" />
                    <span className="text-sm font-medium text-gray-200">{cert}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard className="p-6 text-center bg-blue-600/10 border-blue-500/20">
              <h3 className="text-xl font-bold text-white mb-2">GST Registration Details</h3>
              <p className="text-blue-200">GSTIN: 27BDKPS0531A1ZW</p>
              <p className="text-xs text-blue-300/80 mt-1">Registered under Goods and Services Tax, Government of India.</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Meet The Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Meet Our Expert Team</h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            Passionate professionals dedicated to your success. Our team consists of certified Amazon specialists, advertising experts, content creators, and e-commerce strategists with years of hands-on experience.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {teamStats.map((stat, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to Accelerate Your Amazon Growth?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Book a free strategy session and discover how we can help you achieve your goals
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-xl shadow-blue-500/20"
          >
            <Link to="/contact" className="flex items-center">
              Book Strategy Session
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
