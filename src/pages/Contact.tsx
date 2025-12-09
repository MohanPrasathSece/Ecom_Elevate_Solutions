import React, { useState } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "@/services/emailService";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    platform: "",
    storeLink: "",
    category: "",
    requirements: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // FAQ Data
  const faqs = [
    {
      question: "How long does it take to see results?",
      answer: "Most clients see initial improvements within 30-60 days, with significant growth by 90 days."
    },
    {
      question: "What is included in the free audit?",
      answer: "Comprehensive analysis of your listings, advertising, pricing strategy, and growth opportunities."
    },
    {
      question: "Do you work with new sellers?",
      answer: "Yes! We work with businesses at all stages, from launch to established brands looking to scale."
    },
    {
      question: "What are your pricing models?",
      answer: "We offer flexible pricing based on your needs. Contact us for a customized quote."
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendEmail({
        name: formData.name,
        email: formData.email,
        subject: `Start Project: ${formData.serviceType} Inquiry`,
        message: `
          Name: ${formData.name}
          Phone: ${formData.phone}
          Service Type: ${formData.serviceType}
          Platform: ${formData.platform}
          Store Link: ${formData.storeLink}
          Category: ${formData.category}
          
          Requirements:
          ${formData.requirements}
        `
      });

      setShowConfirmation(true);
      toast({
        title: "Inquiry Sent!",
        description: "We'll be in touch within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        platform: "",
        storeLink: "",
        category: "",
        requirements: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50 text-center min-h-[40vh] flex flex-col justify-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-sm text-blue-300 uppercase tracking-widest mb-4 font-semibold">Get in Touch</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Accelerate Your <br className="hidden md:block" /> Amazon Growth?
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto">
            Book a free strategy session and discover how we can help you achieve your goals
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left Column: Contact Details & Info */}
          <div className="lg:col-span-1 space-y-8">
            <GlassCard className="p-8 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-blue-400 mt-1 mr-3" />
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="text-white font-medium">+91 80072 08742</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-blue-400 mt-1 mr-3" />
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-white font-medium">adnan@amzcoz.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-blue-400 mt-1 mr-3" />
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="text-white font-medium">Pune, Maharashtra<br />India</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-blue-400 mt-1 mr-3" />
                    <div>
                      <p className="text-sm text-gray-400">Business Hours</p>
                      <div className="text-white font-medium text-sm">
                        <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-xl font-bold text-white mb-4">Included In Every Session</h3>

              <div className="space-y-6">
                <div>
                  <div className="text-blue-400 font-bold text-lg mb-1">01</div>
                  <h4 className="text-white font-semibold mb-1">Free Growth Audit</h4>
                  <p className="text-sm text-gray-400">Comprehensive review of your current online presence</p>
                </div>
                <div>
                  <div className="text-blue-400 font-bold text-lg mb-1">02</div>
                  <h4 className="text-white font-semibold mb-1">Growth Strategy Session</h4>
                  <p className="text-sm text-gray-400">Personalized roadmap to scale your business</p>
                </div>
              </div>
            </GlassCard>

            {/* Global Reach */}
            <div className="mt-8">
              <h3 className="text-lg font-bold text-white mb-4 text-center lg:text-left">We Serve Globally</h3>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <div className="flex items-center space-x-2 bg-white/5 px-3 py-2 rounded-full border border-white/10">
                  <span className="text-lg">🇮🇳</span> <span className="text-sm text-white">India</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/5 px-3 py-2 rounded-full border border-white/10">
                  <span className="text-lg">🇺🇸</span> <span className="text-sm text-white">USA</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/5 px-3 py-2 rounded-full border border-white/10">
                  <span className="text-lg">🇦🇪</span> <span className="text-sm text-white">UAE</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/5 px-3 py-2 rounded-full border border-white/10">
                  <span className="text-lg">🇬🇧</span> <span className="text-sm text-white">UK</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-2">
            <GlassCard className="p-8 md:p-10">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">Request Your Free Consultation</h2>
                <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" value={formData.name} onChange={(e) => handleChange("name", e.target.value)} required placeholder="John Doe" className="bg-white/5 border-white/10" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} required placeholder="john@example.com" className="bg-white/5 border-white/10" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} required placeholder="+91 98765 43210" className="bg-white/5 border-white/10" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="serviceType">Service Type *</Label>
                    <Select value={formData.serviceType} onValueChange={(val) => handleChange("serviceType", val)}>
                      <SelectTrigger className="bg-white/5 border-white/10">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="account-management">Account Management</SelectItem>
                        <SelectItem value="advertising">Advertising</SelectItem>
                        <SelectItem value="website">Website Development</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="platform">Platform (Optional)</Label>
                    <Select value={formData.platform} onValueChange={(val) => handleChange("platform", val)}>
                      <SelectTrigger className="bg-white/5 border-white/10">
                        <SelectValue placeholder="Select a platform" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="amazon">Amazon</SelectItem>
                        <SelectItem value="flipkart">Flipkart</SelectItem>
                        <SelectItem value="shopify">Shopify</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="storeLink">Store/Website Link (Optional)</Label>
                    <Input id="storeLink" value={formData.storeLink} onChange={(e) => handleChange("storeLink", e.target.value)} placeholder="https://..." className="bg-white/5 border-white/10" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Product/Business Category (Optional)</Label>
                  <Select value={formData.category} onValueChange={(val) => handleChange("category", val)}>
                    <SelectTrigger className="bg-white/5 border-white/10">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="electronics">Electronics</SelectItem>
                      <SelectItem value="fashion">Fashion</SelectItem>
                      <SelectItem value="beauty">Beauty</SelectItem>
                      <SelectItem value="home">Home & Kitchen</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requirements">Tell us about your requirements</Label>
                  <Textarea id="requirements" value={formData.requirements} onChange={(e) => handleChange("requirements", e.target.value)} placeholder="Tell us about your current challenges, goals, or what you're looking to achieve..." className="bg-white/5 border-white/10 min-h-[120px]" />
                </div>

                <div className="pt-4">
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-bold rounded-lg shadow-lg shadow-blue-900/20">
                    {isSubmitting ? "Sending..." : "Get Started"}
                  </Button>
                  <p className="text-center text-xs text-gray-500 mt-4">By submitting this form, you agree to our Privacy Policy and Terms of Service.</p>
                </div>
              </form>
            </GlassCard>

            {/* Why Choose Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-8">Why Choose Ecom elevate solution?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Proven Track Record", desc: "15 successful clients with an average 3x ROAS uplift" },
                  { title: "Expert Team", desc: "Certified Amazon specialists with 9+ years of experience" },
                  { title: "Transparent Pricing", desc: "No hidden fees, clear communication, and detailed reporting" },
                  { title: "End-to-End Support", desc: "Complete Amazon management from listings to advertising" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="text-blue-500 font-bold text-xl">0{i + 1}</div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Quick answers to common questions</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <GlassCard key={i} className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="sm:max-w-md bg-zinc-900 border-white/10">
          <DialogHeader>
            <div className="flex items-center justify-center mb-4">
              <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-green-500" />
              </div>
            </div>
            <DialogTitle className="text-center text-2xl text-white">Message Sent!</DialogTitle>
            <DialogDescription className="text-center text-gray-400 pt-2">
              Thanks for reaching out! We've received your inquiry and will get back to you within 24 hours.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-center">
            <Button
              type="button"
              className="w-full sm:w-auto min-w-[120px] bg-blue-600 hover:bg-blue-700"
              onClick={() => setShowConfirmation(false)}
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Contact;
