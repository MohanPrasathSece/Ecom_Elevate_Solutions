import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import {
    Briefcase,
    TrendingUp,
    Activity,
    ArrowRight,
    Download,
    Repeat,
    Users
} from "lucide-react";

const Portfolio: React.FC = () => {
    const clientCategories = [
        "Fashion & Apparel", "Electronics", "Home & Kitchen", "Beauty & Wellness",
        "Food & Beverages", "Sports & Fitness", "Books & Media", "Toys & Games",
        "Automotive", "Healthcare", "Pet Supplies", "Office Products"
    ];

    const growthVelocity = [
        { quarter: "Q1", value: "18%" },
        { quarter: "Q2", value: "26%" },
        { quarter: "Q3", value: "35%" },
        { quarter: "Q4", value: "38%" }
    ];

    const adEfficiency = [
        { platform: "Amazon", roas: "5.1x" },
        { platform: "Flipkart", roas: "4.2x" },
        { platform: "Myntra", roas: "3.8x" },
        { platform: "Ajio", roas: "4.0x" }
    ];

    const cxMetrics = [
        { metric: "CX Rating", value: "95%" },
        { metric: "Fulfillment", value: "89%" },
        { metric: "Delivery", value: "93%" },
        { metric: "Loyalty", value: "91%" }
    ];

    const samples = [
        {
            title: "Amazon Infographics",
            description: "Professional infographics designed for Amazon product listings and business storytelling",
            image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80",
            type: "Design"
        },
        {
            title: "Posters",
            description: "Eye-catching poster designs for marketing campaigns and promotional materials",
            image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&q=80",
            type: "Marketing"
        },
        {
            title: "Hoodie Graphics Design",
            description: "Custom hoodie and apparel graphics that make your business stand out",
            image: "https://images.unsplash.com/photo-1556906781-9a412961d289?w=800&q=80",
            type: "Merch"
        }
    ];

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/15 relative overflow-hidden text-center min-h-[40vh] flex flex-col justify-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-500/20 blur-[100px] rounded-full"></div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Our Portfolio
                    </h1>
                    <p className="text-xl text-blue-100">
                        Trusted by leading businesses across India to <span className="text-white font-semibold">scale their e-commerce presence</span>.
                    </p>
                </div>
            </section>

            {/* Client Categories */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-foreground mb-4">Client Categories We Serve</h2>
                        <p className="text-muted-foreground">Partnering with diverse businesses across multiple industries</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
                        {clientCategories.map((category, i) => (
                            <div key={i} className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors cursor-default">
                                {category}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Performance Snapshots */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-foreground mb-4">Performance Snapshots</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">Visualizing outcomes across marketplaces, advertising funnels, and customer experience</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Growth Velocity */}
                        <GlassCard className="p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-white">Marketplace Growth</h3>
                                <TrendingUp className="w-5 h-5 text-green-400" />
                            </div>
                            <div className="space-y-4">
                                <div className="text-4xl font-bold text-white mb-2">+38% <span className="text-sm font-normal text-muted-foreground">YoY</span></div>
                                <div className="grid grid-cols-4 gap-2 text-center text-sm">
                                    {growthVelocity.map((g, i) => (
                                        <div key={i} className="bg-white/5 rounded p-2">
                                            <div className="text-gray-400 text-xs">{g.quarter}</div>
                                            <div className="font-bold text-green-400">{g.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </GlassCard>

                        {/* Ad Efficiency */}
                        <GlassCard className="p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-white">Ad Efficiency</h3>
                                <Activity className="w-5 h-5 text-blue-400" />
                            </div>
                            <div className="space-y-4">
                                <div className="text-4xl font-bold text-white mb-2">4.6x <span className="text-sm font-normal text-muted-foreground">Avg ROAS</span></div>
                                <div className="space-y-2">
                                    {adEfficiency.map((ad, i) => (
                                        <div key={i} className="flex justify-between items-center text-sm">
                                            <span className="text-gray-300">{ad.platform}</span>
                                            <div className="flex-1 mx-3 h-1 bg-white/10 rounded-full overflow-hidden">
                                                <div className="h-full bg-blue-500 rounded-full" style={{ width: `${parseFloat(ad.roas) * 15}%` }}></div>
                                            </div>
                                            <span className="font-bold text-blue-400">{ad.roas}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </GlassCard>

                        {/* Customer Experience */}
                        <GlassCard className="p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-white">Customer Experience</h3>
                                <Repeat className="w-5 h-5 text-purple-400" />
                            </div>
                            <div className="space-y-4">
                                <div className="text-4xl font-bold text-white mb-2">92% <span className="text-sm font-normal text-muted-foreground">Repeat Rate</span></div>
                                <div className="grid grid-cols-2 gap-3">
                                    {cxMetrics.map((m, i) => (
                                        <div key={i} className="bg-white/5 p-3 rounded text-center">
                                            <div className="text-2xl font-bold text-purple-400">{m.value}</div>
                                            <div className="text-xs text-gray-400">{m.metric}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </GlassCard>
                    </div>
                </div>
            </section>

            {/* Samples */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-foreground mb-4">Samples</h2>
                        <p className="text-muted-foreground">Explore our design work across different mediums and styles</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {samples.map((sample, i) => (
                            <GlassCard key={i} className="overflow-hidden group cursor-pointer h-full flex flex-col">
                                <div className="relative h-48 overflow-hidden">
                                    <img src={sample.image} alt={sample.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                                            <ArrowRight className="text-white w-6 h-6" />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <div className="text-xs font-medium text-blue-400 mb-2 uppercase tracking-wide">{sample.type}</div>
                                    <h3 className="text-xl font-bold text-white mb-2">{sample.title}</h3>
                                    <p className="text-sm text-muted-foreground mb-6 flex-grow">{sample.description}</p>
                                    <Button variant="outline" size="sm" className="w-full mt-auto">
                                        <Download className="w-4 h-4 mr-2" /> Download Sample
                                    </Button>
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* How We Deliver Impact */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-foreground mb-4">How We Deliver Impact</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto"> Dedicated pods, intelligence systems, and rigorous execution ensure every marketplace stays profitable and fast-growing.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <GlassCard className="p-8">
                            <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400 mb-6">
                                <Briefcase className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Full-Funnel Marketplace Strategy</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                We audit category dynamics, competition, pricing elasticity, and customer behavior to build growth roadmaps.
                            </p>
                            <ul className="space-y-2">
                                {["Demand forecasting", "Dynamic repricing", "Marketplace expansion"].map((item, i) => (
                                    <li key={i} className="flex items-center text-sm text-gray-300">
                                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </GlassCard>

                        <GlassCard className="p-8">
                            <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 mb-6">
                                <Users className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Business Accelerator Pods</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                Dedicated pods comprised of performance marketers, creatives, content, and Ops working in agile sprints.
                            </p>
                            <ul className="space-y-2">
                                {["Dedicated pod structure", "Weekly growth sprints", "Unified analytics"].map((item, i) => (
                                    <li key={i} className="flex items-center text-sm text-gray-300">
                                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </GlassCard>

                        <GlassCard className="p-8">
                            <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center text-green-400 mb-6">
                                <Activity className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Insights & Analytics Engine</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                Automated intelligence layer blending marketplace data, inventory systems, and marketing channels.
                            </p>
                            <ul className="space-y-2">
                                {["SKU-level P&L tracking", "Anomaly detection", "Executive reporting"].map((item, i) => (
                                    <li key={i} className="flex items-center text-sm text-gray-300">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </GlassCard>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-blue-900/20 to-transparent">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-foreground mb-6">
                        Ready to See Similar Results?
                    </h2>
                    <Button
                        asChild
                        size="lg"
                        className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
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

export default Portfolio;
