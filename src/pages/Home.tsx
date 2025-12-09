import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import {
  Store,
  Megaphone,
  Palette,
  Monitor,
  ShoppingCart,
  Share2,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const Home: React.FC = () => {
  const services = [
    {
      icon: Store,
      title: "E-commerce Account Management",
      description: "Complete management across Amazon, Flipkart, Myntra, Ajio, Jio Mart & Meesho. Listing optimization, inventory control, and account health.",
      features: ["Multi-Platform Management", "Listing Optimization", "Inventory Control", "Account Health"]
    },
    {
      icon: Megaphone,
      title: "E-commerce Advertising",
      description: "Expert advertising and DSP campaign management across all major platforms with budget optimization and performance tracking.",
      features: ["Multi-Platform Ads", "Budget Optimization", "Performance Reports", "ROAS Improvement"]
    },
    {
      icon: Palette,
      title: "Business Enhancement",
      description: "A+ Content, Business Store setup, and creative infographics to boost conversions.",
      features: ["A+ Content", "Business Store", "Premium Templates", "Business Story"]
    },
    {
      icon: Monitor,
      title: "Website Development",
      description: "Corporate and marketing websites crafted for business storytelling, speed, and responsive experiences.",
      features: ["Corporate Websites", "Custom UI/UX", "CMS Integrations", "SEO Enhancements"]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Website",
      description: "Conversion-focused storefronts with secure checkout, product management, and growth-ready integrations.",
      features: ["Shopify / WooCommerce", "Catalog Setup", "Payments & Logistics", "Conversion Optimization"]
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Content, creatives and paid social to grow awareness and drive conversions.",
      features: ["Content Strategy", "Meta Ads", "Community", "Reporting"]
    }
  ];

  const testimonials = [
    {
      content: "Ecomm Elevate Solutions transformed our e-commerce presence across Amazon and Flipkart. Within 60 days, we saw 3x growth in organic sales and significantly improved our ad ROAS.",
      author: "Rajesh Kumar",
      role: "Electronics Business"
    },
    {
      content: "Their expertise in e-commerce advertising across multiple platforms is unmatched. Our advertising campaigns are now profitable and our business visibility has skyrocketed.",
      author: "Priya Sharma",
      role: "Fashion & Apparel"
    },
    {
      content: "Professional, transparent, and results-driven. Ecomm Elevate Solutions handles everything from listings to ads across Amazon, Myntra, and Meesho, allowing us to focus on product development.",
      author: "Michael Chen",
      role: "Home & Kitchen"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-black/50 pb-0 pt-32">
        {/* Moon-like semi-circle background */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] md:w-[1200px] h-[300px] sm:h-[450px] md:h-[600px] rounded-t-full bg-gradient-to-t from-blue-500/30 via-blue-400/20 to-transparent blur-2xl"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] sm:w-[750px] md:w-[1000px] h-[250px] sm:h-[375px] md:h-[500px] rounded-t-full bg-gradient-to-t from-blue-600/40 via-blue-500/25 to-transparent blur-xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center px-4 sm:px-6">
          <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight mb-6 md:mb-8 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Expert Amazon <br />
            <span className="text-blue-200">
              Account Management
            </span>
          </h1>
          <p className="text-base md:text-xl text-blue-100 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Helping businesses scale with data-driven strategies. Expert account management, advertising, and e-commerce growth services.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 justify-center w-full mb-16">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto rounded-full bg-white text-slate-900 hover:bg-slate-100 text-base md:text-base px-6 py-3 md:px-6 md:py-4 shadow-lg transition-all duration-300 font-semibold hover:scale-105 active:scale-95 h-auto min-h-0 max-w-[280px] sm:max-w-none"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <Link to="/contact" className="flex items-center justify-center">
                Book Strategy Session
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto rounded-full bg-white text-slate-900 hover:bg-slate-100 border border-white text-base md:text-base px-6 py-3 md:px-6 md:py-4 transition-all duration-300 font-semibold hover:scale-105 active:scale-95 h-auto min-h-0 max-w-[280px] sm:max-w-none"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <Link to="/services" className="flex items-center justify-center">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive Amazon solutions to accelerate your growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <GlassCard key={index} className="flex flex-col h-full hover:scale-[1.02] transition-transform duration-300">
                <div className="p-6 flex-grow">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-6">
                    <service.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-6 pt-0 mt-auto">
                  <Button variant="ghost" className="w-full justify-between group hover:bg-blue-500/10 hover:text-blue-300">
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </GlassCard>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real results from real businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <GlassCard key={index} className="relative p-8">
                <div className="absolute top-8 left-8 text-6xl text-blue-500/20 font-serif">"</div>
                <p className="relative z-10 text-muted-foreground mb-8 text-lg leading-relaxed pt-4">
                  {testimonial.content}
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-xl mr-4">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.author}</h4>
                    <p className="text-sm text-blue-400">{testimonial.role}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-6">
            Ready to Accelerate Your Amazon Growth?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Book a free strategy session and discover how we can help you achieve your goals.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {["15-minute audit", "Channel-wise growth plan", "Actionable next steps"].map((item, i) => (
              <div key={i} className="flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                <CheckCircle2 className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-sm font-medium text-blue-100">{item}</span>
              </div>
            ))}
          </div>

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

export default Home;
