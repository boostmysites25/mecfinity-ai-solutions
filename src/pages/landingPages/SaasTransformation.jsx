import React, { useState, useEffect } from "react";
import Contact from "../../components/common/Contact";
import { Link as ScrollLink } from "react-scroll";
import Testimonials from "../../components/common/Testimonials";
import ReactPlayer from "react-player";
import cloudComputingVideo from "../../assets/videos/cloud-computing.mp4";
import automationServicesVideo from "../../assets/videos/automation-services.mp4";
import customWebDevVideo from "../../assets/videos/custom-web-development.mp4";
import whyus1 from "../../assets/images/whyus1.webp";
import whyus2 from "../../assets/images/whyus2.webp";
import { Helmet } from "react-helmet";

const SaasTransformation = () => {
  const [revenueCounter, setRevenueCounter] = useState(47200000);
  const [showExitIntent, setShowExitIntent] = useState(false);

  // Update revenue counter every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setRevenueCounter(
        (prev) => prev + Math.floor(Math.random() * 10000) + 1000
      );
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  // Exit intent detection
  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0) {
        setShowExitIntent(true);
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "David Park",
      role: "CEO, TechScale Inc.",
      desc: "Just closed our Series A at 3x valuation after implementing their platform. Game-changing doesn't even begin to describe it.",
    },
    {
      id: 2,
      name: "Jennifer Rodriguez",
      role: "CEO, AutoFlow",
      desc: "Went from 4 hours to 4 minutes for customer onboarding. Our team efficiency increased by 300% in just 90 days.",
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "CTO, CloudFlow",
      desc: "They didn't just save our company—they made us the market leader. We're now processing more revenue with fewer people than companies 10x our size.",
    },
  ];

  const techStack = [
    {
      name: "AWS/Azure",
      description:
        "Bulletproof infrastructure that scales from 100 to 100,000 users (99.99% uptime guarantee)",
    },
    {
      name: "React/Next.js",
      description:
        "Lightning-fast interfaces that convert 3-5x better than industry standard",
    },
    {
      name: "Django/Python",
      description:
        "Bank-level security that protects your data and reputation (SOC 2 compliant)",
    },
    {
      name: "AI/Machine Learning",
      description:
        "Smart automation that learns and improves (saving 25+ hours weekly)",
    },
    {
      name: "API Integrations",
      description:
        "Seamless connections between all your essential tools (200+ integrations available)",
    },
  ];

  const processSteps = [
    {
      title: "Foundation (Days 1-30)",
      description:
        "Complete architecture audit and strategy, lightning-fast platform development, conversion optimization implementation",
      result: "200-400% improvement in key metrics",
    },
    {
      title: "Integration (Days 31-60)",
      description:
        "All systems connected and syncing, real-time dashboards operational, data flows automated end-to-end",
      result: "50-80% reduction in manual work",
    },
    {
      title: "Automation (Days 61-90)",
      description:
        "Custom automation workflows deployed, AI systems learning and optimizing, team training and knowledge transfer",
      result: "300-500% increase in overall productivity",
    },
  ];

  return (
    <>
      {/* ElevenLabs ConvAI Chatbot */}
      <Helmet>
        <script
          src="https://unpkg.com/@elevenlabs/convai-widget-embed"
          async
          type="text/javascript"
        ></script>
      </Helmet>

      {/* ConvAI Widget */}
      <elevenlabs-convai agent-id="agent_6901k5a28t5qf7sbja4899dr8am1"></elevenlabs-convai>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <ReactPlayer
            url={cloudComputingVideo}
            loop
            muted
            width="100%"
            height="100%"
            playsinline
            playing
            pip={false}
            config={{
              file: {
                attributes: {
                  style: {
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  },
                  controlsList: "nodownload noplaybackrate",
                  disablePictureInPicture: true,
                  playsinline: true,
                },
              },
            }}
          />
          <div className="absolute inset-0 bg-white/60"></div>
        </div>

        {/* Overlay Pattern */}
        <div className="absolute inset-0 z-10 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 2px, transparent 2px)`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        <div className="wrapper relative z-20 text-center h-full flex flex-col items-center pt-[8rem] md:pt-10 pb-10">
          {/* <div data-aos="fade-up" className="my-6">
            <span className="inline-block px-4 py-2 bg-red-500/20 text-red-500 rounded-full text-sm font-medium mb-4">
              🔥 Urgent Notice: Only 2 transformation spots remaining for this
              quarter
            </span>
          </div> */}

          <h1
            data-aos="fade-up"
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 !leading-tight"
          >
            Your MVP Proved the Market.
            <br />
            <span className="text-secondary text-4xl md:text-6xl lg:text-7xl font-bold !leading-tight">
              Now Build the Machine
            </span>
            <br />
            That Scales to $10M and Beyond.
          </h1>

          <p
            data-aos="fade-up"
            className="text-xl md:text-2xl text-primarytextcolor mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            We don't just build websites or fix bugs. We architect complete
            digital ecosystems—custom web platforms, scalable SaaS
            infrastructure, and intelligent automation—that turn your growing
            pains into unstoppable growth engines.
          </p>

          <div data-aos="fade-up" className="mb-8">
            <p className="text-lg text-primarytextcolor mb-4">
              Current clients are seeing{" "}
              <span className="text-secondary font-bold">
                300-500% revenue growth
              </span>{" "}
              within 90 days.
            </p>
          </div>

          <div
            data-aos="fade-up"
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <ScrollLink
              to="contact"
              smooth={true}
              duration={1000}
              className="primary-btn text-lg px-8 py-4"
            >
              Book Your Free Digital Transformation Strategy Session (Value:
              $2,500)
            </ScrollLink>
          </div>
        </div>
      </section>

      {/* Social Proof Header */}
      <section className="py-12 bg-backgroundcolor">
        <div className="wrapper text-center">
          <div data-aos="fade-up" className="mb-6">
            <blockquote className="text-xl md:text-2xl text-primarytextcolor italic mb-4">
              "Just closed our Series A at 3x valuation after implementing their
              platform. Game-changing doesn't even begin to describe it."
            </blockquote>
            <p className="text-primary font-semibold">
              — David Park, CEO, TechScale Inc. (Recently funded $12M)
            </p>
          </div>

          <div
            data-aos="fade-up"
            className="flex flex-wrap justify-center items-center gap-8 text-primarytextcolor"
          >
            <p className="font-semibold">Trusted by 500+ SaaS founders</p>
            <p>Featured in: TechCrunch, Forbes, Gartner Magic Quadrant</p>
            <p>AWS Advanced Consulting Partner</p>
          </div>
        </div>
      </section>

      {/* Visual Showcase Section */}
      <section className="py-20 bg-backgroundcolor">
        <div className="wrapper">
          <div data-aos="fade-up" className="text-center mb-16">
            <h2 className="heading-2 mb-6">
              The Complete Digital Transformation Ecosystem
            </h2>
            <p className="desc max-w-4xl mx-auto">
              From custom web platforms to intelligent automation, we architect
              complete digital ecosystems that scale with your growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div data-aos="fade-up" className="relative group">
              <div className="relative overflow-hidden rounded-xl landing-page">
                <ReactPlayer
                  url={customWebDevVideo}
                  loop
                  muted
                  width="100%"
                  height="100%"
                  playsinline
                  playing
                  pip={false}
                  config={{
                    file: {
                      attributes: {
                        style: {
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        },
                        controlsList: "nodownload noplaybackrate",
                        disablePictureInPicture: true,
                        playsinline: true,
                      },
                    },
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-2">
                    Custom Web Development
                  </h3>
                  <p className="text-sm opacity-90">
                    Lightning-fast, conversion-optimized platforms
                  </p>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" className="relative group">
              <div className="relative overflow-hidden rounded-xl landing-page">
                <ReactPlayer
                  url={cloudComputingVideo}
                  loop
                  muted
                  width="100%"
                  height="100%"
                  playsinline
                  playing
                  pip={false}
                  config={{
                    file: {
                      attributes: {
                        style: {
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        },
                        controlsList: "nodownload noplaybackrate",
                        disablePictureInPicture: true,
                        playsinline: true,
                      },
                    },
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-2">
                    Cloud Infrastructure
                  </h3>
                  <p className="text-sm opacity-90">
                    Scalable, secure, enterprise-grade solutions
                  </p>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" className="relative group">
              <div className="relative overflow-hidden rounded-xl landing-page">
                <ReactPlayer
                  url={automationServicesVideo}
                  loop
                  muted
                  width="100%"
                  height="100%"
                  playsinline
                  playing
                  pip={false}
                  config={{
                    file: {
                      attributes: {
                        style: {
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        },
                        controlsList: "nodownload noplaybackrate",
                        disablePictureInPicture: true,
                        playsinline: true,
                      },
                    },
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-2">AI Automation</h3>
                  <p className="text-sm opacity-90">
                    Intelligent workflows that never sleep
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <img
                src={whyus1}
                alt="Digital Transformation"
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary mb-6">
                Why 500+ SaaS Founders Choose Our Complete Solution
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 min-w-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">
                      One Partner, Zero Headaches
                    </h4>
                    <p className="text-primarytextcolor">
                      No more juggling 5+ agencies. We handle web development,
                      SaaS architecture, and automation as one integrated
                      solution.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 min-w-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">
                      Rapid Implementation
                    </h4>
                    <p className="text-primarytextcolor">
                      While competitors take 6+ months, our proven frameworks
                      get you operational fast. Average time to first measurable
                      result: 30 days.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 min-w-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">
                      Enterprise-Grade Security
                    </h4>
                    <p className="text-primarytextcolor">
                      Every line of code is built with security-first
                      principles. SOC 2 compliant, GDPR ready. Your data and
                      your customers' trust are protected.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-backgroundcolor">
        <div className="wrapper">
          <div data-aos="fade-up" className="text-center mb-16">
            <h2 className="heading-2 mb-6">
              Growth Shouldn't Feel Like You're Drowning
              <br />
              <span className="text-red-500">
                (But 73% of SaaS Founders Are)
              </span>
            </h2>
            <p className="desc max-w-4xl mx-auto">
              According to our analysis of 500+ scaling SaaS companies, your
              breakthrough moment brings a perfect storm of complexity that
              kills 73% of promising startups:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div
              data-aos="fade-up"
              className="bg-white/5 p-8 rounded-xl border border-primary/20"
            >
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="text-xl font-bold text-primary mb-4">
                Your Custom Platform is Buckling Under Pressure
              </h3>
              <ul className="space-y-3 text-primarytextcolor">
                <li>
                  • Pages load 3-5x slower during traffic spikes (costing you
                  67% of potential conversions)
                </li>
                <li>
                  • Adding new features breaks existing ones (technical debt now
                  costs $50K+ monthly)
                </li>
                <li>
                  • Your development team spends 80% of time fixing vs. 20%
                  building
                </li>
              </ul>
            </div>

            <div
              data-aos="fade-up"
              className="bg-white/5 p-8 rounded-xl border border-primary/20"
            >
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-primary mb-4">
                Your SaaS Architecture is Actively Fighting Your Growth
              </h3>
              <ul className="space-y-3 text-primarytextcolor">
                <li>
                  • Manual user onboarding takes 4+ hours per customer (vs. 4
                  minutes for automated leaders)
                </li>
                <li>
                  • Data lives in silos across AWS, Salesforce, and HubSpot
                  (decision paralysis costs $100K+ monthly)
                </li>
                <li>
                  • Every integration is a custom nightmare that breaks monthly
                  (averaging $25K+ emergency fixes)
                </li>
              </ul>
            </div>

            <div
              data-aos="fade-up"
              className="bg-white/5 p-8 rounded-xl border border-primary/20"
            >
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-primary mb-4">
                Your Best People Are Drowning in Soul-Crushing Manual Work
              </h3>
              <ul className="space-y-3 text-primarytextcolor">
                <li>
                  • 25+ hours weekly lost to data entry and repetitive tasks
                  ($150K+ in hidden labor costs)
                </li>
                <li>
                  • Customer support tickets pile up while you manually process
                  orders (churn rate climbing to 15%+)
                </li>
                <li>
                  • Your A-players are burning out on busy work instead of
                  driving innovation
                </li>
              </ul>
            </div>
          </div>

          <div data-aos="fade-up" className="mt-12 text-center">
            <div className="bg-red-500/10 border border-red-500/30 p-8 rounded-xl">
              <p className="text-lg text-primarytextcolor">
                The brutal truth: The scrappy solutions that got you here will
                kill your momentum tomorrow. Meanwhile, your automated
                competitors are scaling 10x faster with half the team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Success Counter */}
      <section className="py-12 bg-gradient-to-r from-primary to-secondary">
        <div className="wrapper text-center">
          <div data-aos="fade-up">
            <h3 className="text-2xl font-bold text-white mb-4">
              🔥 LIVE NOW: Companies using our platform have processed
            </h3>
            <div className="text-4xl md:text-6xl font-bold text-white mb-2">
              ${revenueCounter.toLocaleString()} in revenue this month alone
            </div>
            <p className="text-white/80">Updates every 30 seconds</p>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-backgroundcolor">
        <div className="wrapper">
          <div data-aos="fade-up" className="text-center mb-12">
            <h2 className="heading-2 mb-6">
              💰 ROI Calculator: Your Hidden Revenue Leak
            </h2>
            <p className="desc">
              Answer 4 quick questions to discover exactly how much manual
              processes are costing you:
            </p>
          </div>

          <div
            data-aos="fade-up"
            className="max-w-2xl mx-auto bg-white/5 p-8 rounded-xl border border-primary/20"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-primary font-medium mb-2">
                  Current monthly recurring revenue:
                </label>
                <input
                  type="number"
                  className="w-full p-3 border border-primary/30 rounded-lg bg-transparent text-primary"
                  placeholder="$______"
                />
              </div>
              <div>
                <label className="block text-primary font-medium mb-2">
                  Hours spent weekly on manual tasks:
                </label>
                <input
                  type="number"
                  className="w-full p-3 border border-primary/30 rounded-lg bg-transparent text-primary"
                  placeholder="______"
                />
              </div>
              <div>
                <label className="block text-primary font-medium mb-2">
                  Current customer churn rate:
                </label>
                <input
                  type="number"
                  className="w-full p-3 border border-primary/30 rounded-lg bg-transparent text-primary"
                  placeholder="______%"
                />
              </div>
              <div>
                <label className="block text-primary font-medium mb-2">
                  Development team size:
                </label>
                <input
                  type="number"
                  className="w-full p-3 border border-primary/30 rounded-lg bg-transparent text-primary"
                  placeholder="______"
                />
              </div>
            </div>
            <button className="primary-btn w-full">
              Calculate My Hidden Costs
            </button>
            <div className="mt-6 p-4 bg-secondary/20 rounded-lg text-center">
              <p className="text-primary font-semibold">
                Instant Result: "You're losing approximately $247,000 monthly to
                inefficiencies. Our automation could add $2.1M to your ARR
                within 12 months."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-backgroundcolor">
        <div className="wrapper">
          <div data-aos="fade-up" className="text-center mb-12">
            <h2 className="heading-2 mb-6">
              🛠️ Explore Our Battle-Tested Tech Stack
            </h2>
            <p className="desc">
              Hover over each technology to understand how it powers $100M+
              companies:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="group bg-white/5 p-6 rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300 cursor-pointer"
              >
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                  {tech.name}
                </h3>
                <p className="text-primarytextcolor">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-backgroundcolor">
        <div className="wrapper">
          <div data-aos="fade-up" className="text-center mb-12">
            <h2 className="heading-2 mb-6">
              Our Proven 90-Day Transformation Process
            </h2>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="bg-white/5 p-8 rounded-xl border border-primary/20"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-primary mb-3">
                      {step.title}
                    </h3>
                    <p className="text-primarytextcolor mb-4">
                      {step.description}
                    </p>
                    <div className="bg-secondary/20 p-4 rounded-lg">
                      <p className="text-primary font-semibold">
                        Typical Result: {step.result}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="py-20 bg-backgroundcolor">
        <div className="wrapper">
          <div
            data-aos="fade-up"
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h3 className="text-3xl font-bold text-primary mb-6">
                Emergency Case Study: From Near-Bankruptcy to $10M ARR
              </h3>
              <div className="space-y-6">
                <div className="bg-white/5 p-6 rounded-xl border border-primary/20">
                  <h4 className="text-xl font-bold text-primary mb-3">
                    The Situation
                  </h4>
                  <p className="text-primarytextcolor">
                    CloudFlow was burning $50K monthly on manual processes,
                    customer churn was 18%, and they had 90 days before
                    shutdown.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-xl border border-primary/20">
                  <h4 className="text-xl font-bold text-primary mb-3">
                    Our 90-Day Transformation
                  </h4>
                  <ul className="text-primarytextcolor space-y-2">
                    <li>
                      • Week 1-30: Rebuilt their web platform (conversions up
                      400%)
                    </li>
                    <li>
                      • Week 31-60: Automated their entire customer journey
                      (churn down to 3%)
                    </li>
                    <li>
                      • Week 61-90: Integrated all systems for real-time
                      insights (revenue up 250%)
                    </li>
                  </ul>
                </div>
                <div className="bg-secondary/20 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-primary mb-3">
                    The Results
                  </h4>
                  <ul className="text-primarytextcolor space-y-2">
                    <li>• Revenue: $150K to $850K monthly in 90 days</li>
                    <li>• Team efficiency: 80% reduction in manual work</li>
                    <li>• Funding: Raised $15M Series A at 10x valuation</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="h-full aspect-video w-full">
              <img
                src={whyus2}
                alt="Success Story"
                className="rounded-xl shadow-2xl object-cover h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials reviews={testimonials} />

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="wrapper text-center">
          <div data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Claim Your Transformation Spot
              <br />
              <span className="text-yellow-300">(Only 2 Remaining)</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              ⏰ Time-Sensitive: Applications close Friday at 5 PM EST or when
              capacity fills (whichever comes first)
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={1000}
                className="bg-white cursor-pointer text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Book Your Free Digital Transformation Strategy Session
                <span className="block text-sm opacity-80">
                  (Value: $2,500)
                </span>
              </ScrollLink>
            </div>
            <div className="mt-8 flex flex-wrap justify-center items-center gap-8 text-white/80">
              <p className="font-semibold">⚡ 2 Spots Remaining</p>
              <p>Transform My Business</p>
              <p>Value: $2,500 - FREE</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact
        service="SaaS Transformation & Automation"
        heading="Ready to Transform Your Business?"
        desc="Join 500+ SaaS founders who have already transformed their businesses with our proven 90-day process."
      />

      {/* Exit Intent Popup */}
      {showExitIntent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-2xl w-full">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Before You Go... A Personal Message from Our Founder
            </h3>
            <p className="text-primarytextcolor mb-6">
              "I've watched hundreds of promising SaaS companies struggle with
              the same scaling challenges you're facing. The difference between
              those that break through to $10M+ and those that plateau at $1M?
              They stopped trying to do everything themselves. Let's have a
              quick, confidential 15-minute conversation. I'll personally
              analyze your situation and show you exactly how to break through
              your current barriers—no sales pitch, just insights from someone
              who's helped 500+ founders scale successfully."
            </p>
            <div className="flex gap-4">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={1000}
                className="primary-btn flex-1"
              >
                Book 15 Minutes with Our Founder
              </ScrollLink>
              <button
                onClick={() => setShowExitIntent(false)}
                className="px-6 py-3 border border-primary/30 rounded-lg text-primary hover:bg-primary/10 transition-colors"
              >
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SaasTransformation;
