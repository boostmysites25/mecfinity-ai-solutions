import Contact from "../../components/common/Contact";
import { Link as ScrollLink } from "react-scroll";
import WhyChooseUs from "../../components/common/WhyChooseUs";
import Testimonials from "../../components/common/Testimonials";
import ReactPlayer from "react-player";
import automationBanner from "../../assets/videos/automation-services.mp4";
import Faqs from "../../components/common/Faqs";
import Credibility from "../../components/common/Credibility";
import ProcessFlowchart from "../../components/landingPages/ProcessFlowChart";
import KeyBenefits from "../../components/landingPages/KeyBenefits";
import CTA from "../../components/landingPages/CTA";
import automationLandingAbout from "../../assets/images/automation-services.webp";
import forbesLogo from "../../assets/images/featuredin/forbes.png";
import techcrunchLogo from "../../assets/images/featuredin/TechCrunch.webp";
import entrepreneurLogo from "../../assets/images/featuredin/Entrepreneur.png";
import businessInsiderLogo from "../../assets/images/featuredin/Business Insider.svg";
import { useState, useEffect } from "react";

const automationReviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, Digital Marketing Agency",
    desc: "Mecfinity AI's automation saved us 20+ hours per week on client reporting. Our team can now focus on strategy and growth instead of manual data entry.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Operations Director, E-commerce Brand",
    desc: "They reduced our order processing errors by 98% and cut our customer service workload in half. The ROI was immediate and substantial.",
  },
  {
    id: 3,
    name: "Lisa Rodriguez",
    role: "Founder, Coaching Business",
    desc: "Automated lead nurturing and booked 7 extra calls per week. Our conversion rate improved by 40% while I focused on delivering value to clients.",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "CTO, SaaS Startup",
    desc: "From process chaos to streamlined operations in just 7 days. Mecfinity AI built a custom automation stack that scales with our growth.",
  },
];

const AutomationServices = () => {
  const [roiData, setRoiData] = useState({
    employees: 0,
    hourlyCost: 0,
    hoursPerWeek: 0,
    monthlyCost: 0,
  });

  const calculateROI = () => {
    const { employees, hourlyCost, hoursPerWeek } = roiData;
    const monthlyCost = employees * hourlyCost * hoursPerWeek * 4;
    setRoiData((prev) => ({ ...prev, monthlyCost }));
  };

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const endOfMonth = new Date();
    endOfMonth.setMonth(endOfMonth.getMonth() + 1);
    endOfMonth.setDate(1);
    endOfMonth.setHours(0, 0, 0, 0);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endOfMonth - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div
        id="banner"
        className="landing-page min-h-screen relative overflow-hidden"
      >
        <ReactPlayer
          url={automationBanner}
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
          className="react-player left-0 top-0 absolute object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-primary/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div
          data-aos="fade-up"
          className="relative z-10 pt-[8rem] sm:pt-[3rem] pb-[3rem] min-h-screen wrapper flex items-center h-full"
        >
          <div className="relative z-10 px-6 justify-center h-full flex flex-col items-center gap-8 text-center md:max-w-[70rem] mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium text-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
              Automation Services
            </div>

            <h1 className="heading-1 text-white leading-tight max-w-5xl">
              Stop Drowning in Manual Work.{" "}
              <span className="heading-1 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Start Scaling on Autopilot.
              </span>
            </h1>

            <p className="text-white/90 desc font-medium max-w-4xl text-lg leading-relaxed">
              We build custom AI automation engines that eliminate repetitive
              tasks, slash operational costs, and reclaim up to 20 hours of your
              work week—in as little as 7 days.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <ScrollLink
                to="contact"
                smooth
                offset={-90}
                className="primary-btn"
              >
                Get Your Free Automation Blueprint Today
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <section className="py-12 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
        <div className="wrapper">
          <div className="text-center mb-8">
            <p className="text-gray-500 font-medium text-sm uppercase tracking-wider">
              As featured in
            </p>
          </div>
          <div className="flex justify-center items-center gap-12 flex-wrap">
            <img
              src={forbesLogo}
              alt="Forbes"
              className="h-10 md:h-12 opacity-50 hover:opacity-100 transition-all duration-300 filter grayscale hover:grayscale-0"
            />
            <img
              src={techcrunchLogo}
              alt="TechCrunch"
              className="h-10 md:h-12 opacity-50 hover:opacity-100 transition-all duration-300 filter grayscale hover:grayscale-0"
            />
            <img
              src={entrepreneurLogo}
              alt="Entrepreneur"
              className="h-10 md:h-12 opacity-50 hover:opacity-100 transition-all duration-300 filter grayscale hover:grayscale-0"
            />
            <img
              src={businessInsiderLogo}
              alt="Business Insider"
              className="h-6 md:h-8 opacity-50 hover:opacity-100 transition-all duration-300 filter grayscale hover:grayscale-0"
            />
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 bg-white">
        <div className="wrapper">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Find Out How Much Inefficiency is Costing You
            </h2>
            <p className="desc text-gray-600 max-w-3xl mx-auto text-lg">
              Use our free calculator to see the real, hidden cost of your
              manual processes. Enter your details to reveal how much you could
              save each month with automation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
                    Number of employees performing manual tasks
                  </label>
                  <input
                    type="number"
                    value={roiData.employees}
                    onChange={(e) =>
                      setRoiData((prev) => ({
                        ...prev,
                        employees: parseInt(e.target.value) || 0,
                      }))
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-white"
                    placeholder="e.g., 5"
                  />
                </div>
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
                    Average hourly cost per employee
                  </label>
                  <input
                    type="number"
                    value={roiData.hourlyCost}
                    onChange={(e) =>
                      setRoiData((prev) => ({
                        ...prev,
                        hourlyCost: parseInt(e.target.value) || 0,
                      }))
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-white"
                    placeholder="e.g., 25"
                  />
                </div>
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
                    Hours spent on manual tasks per employee, per week
                  </label>
                  <input
                    type="number"
                    value={roiData.hoursPerWeek}
                    onChange={(e) =>
                      setRoiData((prev) => ({
                        ...prev,
                        hoursPerWeek: parseInt(e.target.value) || 0,
                      }))
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-white"
                    placeholder="e.g., 10"
                  />
                </div>
              </div>
              <button
                onClick={calculateROI}
                className="w-full bg-gradient-to-r from-primary to-blue-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-primary transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Calculate Your Savings
              </button>

              {roiData.monthlyCost > 0 && (
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-900 mb-2">
                      ${roiData.monthlyCost.toLocaleString()}
                    </p>
                    <p className="text-blue-700 font-medium">
                      Your estimated monthly cost of inefficiency
                    </p>
                    <p className="text-blue-600 mt-2 text-sm">
                      With Mecfinity AI, you could reinvest that directly into
                      growth.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-gradient-to-br from-gray-100 via-white to-gray-100">
        <div className="wrapper">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="heading-2 mb-8 text-gray-900">
              Are you losing your best people to burnout from soul-crushing
              repetitive work?
            </h2>
            <p className="desc text-gray-600 leading-relaxed text-lg max-w-4xl mx-auto">
              Every hour your team spends on manual data entry, client
              onboarding, and follow-ups is an hour they're not spending on
              strategy, innovation, or closing deals. This isn't just
              inefficient; it's a silent killer of profit margins and your
              competitive edge.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-20 bg-white">
        <div className="wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-full text-green-700 font-medium text-sm mb-6">
                  ✨ AI-Powered Solution
                </div>
                <h2 className="heading-2 mb-6 text-gray-900">
                  Mecfinity AI transforms your operational chaos into a
                  streamlined, self-running asset
                </h2>
              </div>
              <p className="desc text-gray-600 leading-relaxed text-lg">
                We don't just sell you software; we are architects of
                efficiency. We analyze your unique business processes and build
                a custom AI-powered automation stack that integrates seamlessly
                with the tools you already use (like HubSpot, Slack, and Google
                Workspace), working tirelessly so you don't have to.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>HubSpot Integration</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Slack Automation</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Google Workspace</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-2xl blur-xl"></div>
                <img
                  src={automationLandingAbout}
                  alt="Automation Services"
                  className="relative rounded-2xl shadow-2xl max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Benefits */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="wrapper">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6 text-gray-900">Core Benefits</h2>
            <p className="desc text-gray-600 max-w-3xl mx-auto text-lg">
              Discover how our automation solutions can transform your business
              operations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-primary/20">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Launch in Days, Not Months
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Go from process pain to automated efficiency in as little as 7
                days. Our rapid implementation ensures you see ROI almost
                immediately.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-primary/20">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Achieve 99.9% Accuracy
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Eliminate costly human errors. Our automated workflows execute
                tasks with machine-level precision, enhancing quality and client
                trust.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-primary/20">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Drastically Cut Operational Costs
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Reduce your reliance on manual labor for repetitive tasks and
                reallocate budget towards high-growth activities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-primary/20">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 11l5-5m0 0l5 5m-5-5v12"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Scale Without Limits
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Build a business infrastructure that can handle 10x the workload
                without needing to 10x your headcount.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Carousel */}
      <section className="py-20 bg-white">
        <div className="wrapper">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6 text-gray-900">Success Stories</h2>
            <p className="desc text-gray-600 max-w-3xl mx-auto text-lg">
              Real results from real businesses that transformed their
              operations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-500 mb-4">
                  Digital Marketing Agency
                </h3>
                <h4 className="text-xl font-bold mb-4 text-primary">
                  Saved 20+ Hours/Week on Client Reporting
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Automated client reporting processes, allowing the team to
                  focus on strategy and creative work.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-500 mb-4">
                  E-commerce Brand
                </h3>
                <h4 className="text-xl font-bold mb-4 text-primary">
                  Reduced Order Processing Errors by 98%
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Streamlined order fulfillment and inventory management,
                  dramatically improving customer satisfaction.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-500 mb-4">
                  Coaching Business
                </h3>
                <h4 className="text-xl font-bold mb-4 text-primary">
                  Automated Lead Nurturing & Booked 7 Extra Calls/Week
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Implemented automated follow-up sequences, increasing
                  conversion rates and revenue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="wrapper">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6 text-gray-900">Why Choose Us</h2>
            <p className="desc text-gray-600 max-w-3xl mx-auto text-lg">
              We're not just another automation company. We're your strategic
              partner in digital transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Bespoke Systems, Not Rigid Software
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                We build a solution tailored perfectly to your workflow, unlike
                inflexible off-the-shelf products.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Your Dedicated Automation Partner
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                We provide end-to-end service, from the initial audit and
                strategy to full implementation and support.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Focus on Business Outcomes
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Our success is measured by your ROI, saved time, and increased
                capacity—not just lines of code.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA with Urgency */}
      <section className="py-20 bg-gradient-to-br from-primary via-blue-600 to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="wrapper relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="heading-2 text-white mb-8">
              Ready to Run Your Business on Autopilot?
            </h2>
            <p className="desc mb-8 text-white/90 text-lg">
              To ensure every partner gets our full attention and achieves
              maximum ROI, we only have capacity for 2 more client builds this
              month.
            </p>
            <p className="desc mb-12 text-white/90 text-lg">
              Book your free, no-obligation Automation Blueprint now to secure
              your spot and get a clear roadmap to a more profitable, efficient
              business.
            </p>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl mb-12 border border-white/20">
              <p className="text-xl font-semibold mb-6 text-white">
                ⏰ Time left to claim your spot this month:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-6 text-3xl font-bold">
                <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/30">
                  <div className="text-white">{timeLeft.days}</div>
                  <div className="text-white/70 text-sm font-normal">Days</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/30">
                  <div className="text-white">{timeLeft.hours}</div>
                  <div className="text-white/70 text-sm font-normal">Hours</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/30">
                  <div className="text-white">{timeLeft.minutes}</div>
                  <div className="text-white/70 text-sm font-normal">
                    Minutes
                  </div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/30">
                  <div className="text-white">{timeLeft.seconds}</div>
                  <div className="text-white/70 text-sm font-normal">
                    Seconds
                  </div>
                </div>
              </div>
            </div>

            <ScrollLink
              to="contact"
              smooth
              offset={-90}
              className="inline-block bg-white text-primary px-5 py-3 rounded-xl font-medium text-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl cursor-pointer"
            >
              Claim My Free Blueprint Now
            </ScrollLink>
          </div>
        </div>
      </section>

      <Testimonials reviews={automationReviews} />
      <WhyChooseUs />
      <Faqs />
      <Contact service='AI Automation Services' />
    </>
  );
};

export default AutomationServices;
