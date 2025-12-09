import React from "react";
import { GlassCard } from "@/components/ui/glass-card";
import {
  Layers,
  Clock,
  Zap,
  CheckCircle2,
  TrendingUp,
  DollarSign,
  Users,
  Calendar
} from "lucide-react";

const HowWeWork: React.FC = () => {
  const models = [
    {
      icon: Layers,
      title: "The B.O.T. Model",
      subtitle: "Build - Operate - Transfer",
      description: "Our signature model. We build the Tech (App/Web) and the Strategy (Playbooks), our Sales Team runs the engine to prove ROI, then we hire/train your internal team and hand over the Code and the Keys. You own the asset.",
      phases: [
        {
          title: "BUILD",
          duration: "Months 1-3",
          objective: "We build the Tech (App/Web) and the Strategy (Playbooks)",
          activities: [
            "Develop custom web/app infrastructure",
            "Design GTM strategy and sales playbooks",
            "Implement CRM and automation systems",
            "Build AI agents and support systems",
            "Create tracking and reporting dashboards"
          ],
          deliverable: "Complete tech stack + strategic playbooks ready for execution"
        },
        {
          title: "OPERATE",
          duration: "Months 4-6",
          objective: "Our Sales Team runs the engine to prove ROI",
          activities: [
            "Deploy fractional sales teams",
            "Execute outbound campaigns and pipeline generation",
            "Manage sales process from lead to close",
            "Optimize based on real-time performance data",
            "Demonstrate predictable revenue growth"
          ],
          deliverable: "Proven ROI with documented revenue metrics and case studies"
        },
        {
          title: "TRANSFER",
          duration: "Months 7-9",
          objective: "We hire/train your internal team and hand over the Code and the Keys",
          activities: [
            "Recruit and hire your internal team",
            "Train new hires on proven systems and playbooks",
            "Transfer all technology assets and source code",
            "Document all processes and customer relationships",
            "Provide ongoing advisory support"
          ],
          deliverable: "Fully trained internal team + complete ownership of all assets"
        }
      ],
      pricing: "Monthly retainer + performance bonus tied to revenue milestones",
      idealFor: "Series A-B startups ready to build a scalable revenue function; companies transitioning from founder-led sales; businesses needing proven systems before hiring."
    },
    {
      icon: Clock,
      title: "Fractional Retainers",
      subtitle: "Executive Leadership on Demand",
      description: "Executive leadership (VP Sales / Head of Product) on a flexible 10-20 hour/week basis. Senior expertise without the full-time commitment.",
      features: [
        {
          title: "Flexible Time Commitment",
          description: "10-20 hours per week based on your needs"
        },
        {
          title: "Senior-Level Expertise",
          description: "Access to VP and C-level operators with 10+ years of experience"
        },
        {
          title: "Strategic + Tactical",
          description: "We provide both strategic direction and hands-on execution"
        },
        {
          title: "No Long-Term Commitment",
          description: "Month-to-month contracts with 30-day notice"
        },
        {
          title: "Cost-Effective",
          description: "60-70% less expensive than a full-time executive hire"
        }
      ],
      useCases: [
        "Fractional VP of Sales to build and manage sales team",
        "Fractional CMO to design and execute marketing strategy",
        "Fractional Head of Product to guide development roadmap",
        "Fractional RevOps leader to optimize systems and processes"
      ],
      included: [
        "Weekly strategic planning sessions",
        "Hands-on execution of key initiatives",
        "Team coaching and management",
        "Performance reporting and analytics",
        "Access to our playbooks and frameworks"
      ],
      pricing: "Monthly retainer based on hours committed",
      idealFor: "Bootstrapped startups; SMBs between executive hires; companies testing new markets; businesses needing interim leadership."
    },
    {
      icon: Zap,
      title: "Project Sprints",
      subtitle: "30-90 Day Focused Execution",
      description: "30-90 Day sprints for specific builds. Perfect for well-defined projects with clear deliverables and timelines.",
      features: [
        {
          title: "Fixed Scope & Timeline",
          description: "Clear deliverables with defined start and end dates"
        },
        {
          title: "Project-Based Pricing",
          description: "Fixed cost for the entire sprint deliverable"
        },
        {
          title: "Rapid Execution",
          description: "Dedicated team focused on your specific project"
        },
        {
          title: "Measurable Outcomes",
          description: "Success metrics defined upfront and tracked throughout"
        },
        {
          title: "Specialized Teams",
          description: "Right experts for your specific needs (dev, sales, strategy)"
        }
      ],
      scenarios: [
        "\"Build my MVP\" - Complete product development sprint",
        "\"Fix my Sales Funnel\" - Revenue optimization project",
        "\"Launch my Marketing\" - GTM execution sprint",
        "\"Implement AI Chatbots\" - Technology integration project"
      ],
      included: [
        "Dedicated project team and manager",
        "Weekly progress reports and demos",
        "All deliverables as specified in scope",
        "Project documentation and handover",
        "30-day post-project support"
      ],
      pricing: "Fixed project fee based on scope and duration",
      idealFor: "Startups with specific project needs; companies between funding rounds; businesses needing targeted expertise without ongoing commitment."
    }
  ];

  const comparisonTable = [
    {
      feature: "Time Commitment",
      bot: "9-12 months",
      fractional: "Ongoing, flexible",
      fullTime: "30-90 days"
    },
    {
      feature: "Hours per Week",
      bot: "20-40",
      fractional: "10-20",
      fullTime: "Project-based"
    },
    {
      feature: "Best For",
      bot: "Building complete revenue stack",
      fractional: "Ongoing strategic support",
      fullTime: "Specific project delivery"
    },
    {
      feature: "Asset Ownership",
      bot: "Full transfer to you",
      fractional: "Continuous advisory",
      fullTime: "Project deliverables"
    },
    {
      feature: "Team Building",
      bot: "Included",
      fractional: "Optional",
      fullTime: "As needed"
    }
  ];

  const successStories = [
    {
      model: "B.O.T. Success",
      client: "Series A SaaS company",
      challenge: "Founder-led sales, no repeatable process",
      solution: "9-month B.O.T. engagement with full tech stack build-out",
      results: "Built sales team of 5, generated $2M ARR, transferred complete codebase and playbooks"
    },
    {
      model: "Fractional Success",
      client: "Bootstrapped B2B software company",
      challenge: "Needed sales leadership but couldn't afford full-time VP",
      solution: "Fractional VP of Sales, 15 hours/week for 8 months",
      results: "3x pipeline growth, closed first enterprise deals, trained internal AE"
    },
    {
      model: "Project Sprint Success",
      client: "Pre-seed startup",
      challenge: "Needed MVP built and sales funnel launched",
      solution: "60-day project sprint: MVP development + GTM setup",
      results: "Launched product with 50 beta users, $20k pipeline in first month"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/10 min-h-[50vh] flex flex-col justify-center">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Flexible Delivery. Zero Bloat.
          </h1>
          <p className="text-xl text-muted-foreground">
            Engagement models designed for how startups actually work. No long-term commitments, no overhead—just results.
          </p>
        </div>
      </section>

      {/* Process Visualization Image */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Proven Methodologies, Tailored to Your Needs
              </h3>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Our engagement models are designed based on years of building and scaling revenue operations across dozens of companies.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you need a complete revenue transformation (B.O.T.), ongoing strategic support (Fractional), or embedded full-time execution, we have a model that fits your stage and goals.
              </p>
            </div>
            <GlassCard className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1000&h=600&fit=crop&q=80"
                alt="Business process timeline showing build, operate, and transfer phases"
                className="w-full h-[350px] object-cover rounded-lg"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </GlassCard>
          </div>
        </div>
      </section>

      {models.map((model, index) => (
        <section
          key={index}
          className={`py-20 px-4 sm:px-6 lg:px-8 ${index % 2 === 0 ? 'bg-black/5' : 'bg-black/10'}`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-primary/10">
                  <model.icon className="w-12 h-12 text-primary" />
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                {model.title}
              </h2>
              <p className="text-xl text-primary font-medium mb-4">
                {model.subtitle}
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {model.description}
              </p>
            </div>

            {model.phases && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {model.phases.map((phase, idx) => (
                  <GlassCard key={idx}>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold mr-4">
                        {idx + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          {phase.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{phase.duration}</p>
                      </div>
                    </div>
                    <p className="text-sm font-medium text-primary mb-4">
                      {phase.objective}
                    </p>
                    <ul className="space-y-2 mb-4">
                      {phase.activities.map((activity, actIdx) => (
                        <li key={actIdx} className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground text-base">{activity}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-border">
                      <p className="text-xs font-medium text-foreground mb-1">Deliverable:</p>
                      <p className="text-base text-muted-foreground">{phase.deliverable}</p>
                    </div>
                  </GlassCard>
                ))}
              </div>
            )}

            {model.features && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {model.features.map((feature, idx) => (
                  <GlassCard key={idx} hover={false}>
                    <h4 className="font-bold text-foreground mb-2 text-base">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground text-base">
                      {feature.description}
                    </p>
                  </GlassCard>
                ))}
              </div>
            )}

            {model.useCases && (
              <GlassCard className="mb-8">
                <h4 className="font-bold text-foreground mb-4 flex items-center text-base">
                  <Users className="w-5 h-5 text-primary mr-2" />
                  Common Use Cases
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {model.useCases.map((useCase, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-base">{useCase}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            )}

            {model.scenarios && (
              <GlassCard className="mb-8">
                <h4 className="font-bold text-foreground mb-4 flex items-center text-base">
                  <TrendingUp className="w-5 h-5 text-primary mr-2" />
                  Common Scenarios
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {model.scenarios.map((scenario, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-base">{scenario}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            )}

            {model.included && (
              <GlassCard className="mb-8">
                <h4 className="font-bold text-foreground mb-4 flex items-center text-base">
                  <CheckCircle2 className="w-5 h-5 text-accent mr-2" />
                  What's Included
                </h4>
                <ul className="space-y-2">
                  {model.included.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GlassCard>
                <h4 className="font-bold text-foreground mb-2 flex items-center text-base">
                  <DollarSign className="w-5 h-5 text-primary mr-2" />
                  Pricing Structure
                </h4>
                <p className="text-muted-foreground text-base">{model.pricing}</p>
              </GlassCard>
              <GlassCard>
                <h4 className="font-bold text-foreground mb-2 flex items-center text-base">
                  <Calendar className="w-5 h-5 text-accent mr-2" />
                  Ideal For
                </h4>
                <p className="text-muted-foreground text-base">{model.idealFor}</p>
              </GlassCard>
            </div>
          </div>
        </section>
      ))});

      {/* Partnership Image */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <GlassCard className="overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=800&fit=crop&q=80"
              alt="Professional business partnership and collaboration for revenue growth"
              className="w-full h-[400px] object-cover rounded-lg"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </GlassCard>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">
            Which Model Fits Your Stage?
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-4 px-4 text-foreground font-bold">Feature</th>
                  <th className="text-center py-4 px-4 text-foreground font-bold">B.O.T. Model</th>
                  <th className="text-center py-4 px-4 text-foreground font-bold">Fractional</th>
                  <th className="text-center py-4 px-4 text-foreground font-bold">Project Sprints</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((row, index) => (
                  <tr key={index} className="border-b border-border">
                    <td className="py-4 px-4 font-medium text-foreground">{row.feature}</td>
                    <td className="py-4 px-4 text-center text-muted-foreground">{row.bot}</td>
                    <td className="py-4 px-4 text-center text-muted-foreground">{row.fractional}</td>
                    <td className="py-4 px-4 text-center text-muted-foreground">{row.fullTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">
            Real Results Across All Models
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <GlassCard key={index}>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {story.model}
                  </span>
                </div>
                <h4 className="font-bold text-foreground mb-2 text-base">{story.client}</h4>
                <div className="space-y-3 text-base">
                  <div>
                    <p className="font-medium text-muted-foreground">Challenge:</p>
                    <p className="text-muted-foreground">{story.challenge}</p>
                  </div>
                  <div>
                    <p className="font-medium text-muted-foreground">Solution:</p>
                    <p className="text-muted-foreground">{story.solution}</p>
                  </div>
                  <div>
                    <p className="font-medium text-primary">Results:</p>
                    <p className="text-foreground">{story.results}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default HowWeWork;
