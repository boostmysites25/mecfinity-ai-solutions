import Contact from "../../components/common/Contact";
import { Link as ScrollLink } from "react-scroll";
import WhyChooseUs from "../../components/common/WhyChooseUs";
import Testimonials from "../../components/common/Testimonials";
import ReactPlayer from "react-player";
import cloudServicesBanner from "../../assets/videos/cloud-services.mp4";
import Faqs from "../../components/common/Faqs";
import forbesLogo from "../../assets/images/featuredin/forbes.png";
import techcrunchLogo from "../../assets/images/featuredin/TechCrunch.webp";
import gartnerLogo from "../../assets/images/featuredin/gartner.png";
import awsPartnerLogo from "../../assets/images/featuredin/aws-partner.jpg";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { emailjsDetails } from "../../constant";
import toast from "react-hot-toast";
import { ImSpinner3 } from "react-icons/im";
import emailjs from "@emailjs/browser";

const cloudServicesReviews = [
  {
    id: 1,
    name: "David Chen",
    role: "CTO, B2B SaaS Platform",
    desc: "Mecfinity AI unified our Salesforce and AWS data, giving us a complete 360° customer view. Our customer insights improved by 40% and we can now make data-driven decisions in real-time.",
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    role: "VP Engineering, Retail E-commerce",
    desc: "They synced our Shopify and NetSuite systems seamlessly. Our inventory management is now fully automated, reducing stockouts by 60% and saving us 20 hours per week in manual work.",
  },
  {
    id: 3,
    name: "James Wilson",
    role: "CEO, Fintech Startup",
    desc: "The multi-payment gateway integration they built is bulletproof. We can now process payments through any provider with a single API call, and our transaction success rate increased by 25%.",
  },
  {
    id: 4,
    name: "Sarah Thompson",
    role: "CTO, HealthTech Platform",
    desc: "Their secure integration layer between our EHR and billing systems eliminated data silos completely. We now have real-time patient data synchronization and 99.9% uptime.",
  },
];

const platformLogos = [
  { name: "Salesforce", logo: "☁️", selected: false },
  { name: "HubSpot", logo: "🟠", selected: false },
  { name: "AWS S3", logo: "🔷", selected: false },
  { name: "Google BigQuery", logo: "🔵", selected: false },
  { name: "Shopify", logo: "🛒", selected: false },
  { name: "Slack", logo: "💬", selected: false },
  { name: "Microsoft Azure", logo: "🔵", selected: false },
];

const CloudServices = () => {
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [showAuditModal, setShowAuditModal] = useState(false);
  const [auditSpinner, setAuditSpinner] = useState(false);
  const [exitIntentSpinner, setExitIntentSpinner] = useState(false);
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [currentCaseStudy, setCurrentCaseStudy] = useState(0);

  const {
    register: registerAudit,
    handleSubmit: handleSubmitAudit,
    formState: { errors: auditErrors },
    reset: resetAudit,
  } = useForm();

  const {
    register: registerExitIntent,
    handleSubmit: handleSubmitExitIntent,
    formState: { errors: exitIntentErrors },
    reset: resetExitIntent,
  } = useForm();

  useEffect(() => {
    // Check if user has already seen the exit intent modal in this session
    const exitIntentData = sessionStorage.getItem('cloudServicesExitIntent');
    const currentTime = Date.now();
    
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0) {
        if (!exitIntentData) {
          // First time - show modal
          setShowExitIntent(true);
        } else {
          // Check if 3 minutes have passed since "Maybe Later" was clicked
          const { timestamp, action } = JSON.parse(exitIntentData);
          const timeDiff = currentTime - timestamp;
          const threeMinutes = 3 * 60 * 1000; // 3 minutes in milliseconds
          
          if (action === 'maybeLater' && timeDiff < threeMinutes) {
            // Less than 3 minutes have passed, don't show
            return;
          } else if (action === 'submitted') {
            // Form was submitted, don't show again
            return;
          } else {
            // More than 3 minutes have passed or other action, show modal
            setShowExitIntent(true);
          }
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  const caseStudies = [
    {
      logo: "🏢",
      company: "B2B SaaS Company",
      metric: "Unified Salesforce & AWS, Gaining a 360° Customer View",
      story: "A growing SaaS company was struggling with disconnected customer data between Salesforce and AWS. We built a real-time integration that unified their customer journey data, resulting in 40% better customer insights and 25% faster sales cycles.",
      results: ["40% improvement in customer insights", "25% faster sales cycles", "Real-time data synchronization", "Single source of truth for customer data"]
    },
    {
      logo: "🛍️",
      company: "Retail E-commerce Brand",
      metric: "Synced Shopify & NetSuite, Automating Inventory Management",
      story: "A retail brand was manually managing inventory between Shopify and NetSuite, leading to stockouts and overstock. Our integration automated the entire process, eliminating manual work and reducing inventory costs by 30%.",
      results: ["60% reduction in stockouts", "30% reduction in inventory costs", "20 hours saved per week", "Automated inventory management"]
    },
    {
      logo: "💳",
      company: "Fintech Startup",
      metric: "Integrated Multiple Payment Gateways into a Single, Secure API",
      story: "A fintech startup needed to support multiple payment providers but was struggling with complex integrations. We built a unified payment API that handles multiple gateways seamlessly, improving transaction success rates by 25%.",
      results: ["25% increase in transaction success", "Single API for all payments", "99.9% uptime", "Enhanced security compliance"]
    }
  ];

  const togglePlatform = (platformName) => {
    setSelectedPlatforms(prev => {
      if (prev.includes(platformName)) {
        return prev.filter(p => p !== platformName);
      } else {
        return [...prev, platformName];
      }
    });
  };

  const onSubmitAudit = async (data) => {
    setAuditSpinner(true);

    var emailBody = "Integration Audit Request Details:\n\n";
    emailBody += "Full Name: " + data.fullName + "\n\n";
    emailBody += "Email: " + data.email + "\n\n";
    emailBody += "Company Name: " + data.companyName + "\n\n";
    emailBody += "Current Platforms: " + data.currentPlatforms + "\n\n";
    emailBody += "Integration Goals: " + data.integrationGoals + "\n\n";
    emailBody += "Service: Cloud Services Integration Audit";

    const formData = {
      from_name: data.fullName,
      message: emailBody,
    };

    emailjs
      .send(
        emailjsDetails.serviceId,
        emailjsDetails.templateId,
        formData,
        emailjsDetails.publicKey
      )
      .then((response) => {
        toast.success("Integration audit request submitted successfully!");
        resetAudit();
        setShowAuditModal(false);
      })
      .catch((error) => {
        toast.error("Failed to submit audit request. Please try again.");
      })
      .finally(() => setAuditSpinner(false));
  };

  const onSubmitExitIntent = async (data) => {
    setExitIntentSpinner(true);

    var emailBody = "Exit Intent Lead Details:\n\n";
    emailBody += "Full Name: " + data.fullName + "\n\n";
    emailBody += "Email: " + data.email + "\n\n";
    emailBody += "Phone Number: " + data.phone + "\n\n";
    emailBody += "Service: Cloud Services - Exit Intent";

    const formData = {
      from_name: data.fullName,
      message: emailBody,
    };

    emailjs
      .send(
        emailjsDetails.serviceId,
        emailjsDetails.templateId,
        formData,
        emailjsDetails.publicKey
      )
      .then((response) => {
        toast.success("Form submitted successfully!");
        resetExitIntent();
        setShowExitIntent(false);
        const exitIntentData = {
          timestamp: Date.now(),
          action: 'submitted'
        };
        sessionStorage.setItem('cloudServicesExitIntent', JSON.stringify(exitIntentData));
      })
      .catch((error) => {
        toast.error("Failed to submit form");
      })
      .finally(() => setExitIntentSpinner(false));
  };

  const closeExitIntent = () => {
    setShowExitIntent(false);
    const exitIntentData = {
      timestamp: Date.now(),
      action: 'maybeLater'
    };
    sessionStorage.setItem('cloudServicesExitIntent', JSON.stringify(exitIntentData));
  };

  return (
    <>
      {/* Hero Section */}
      <div
        id="banner"
        className="landing-page min-h-screen relative overflow-hidden"
      >
        <ReactPlayer
          url={cloudServicesBanner}
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
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></span>
              Cloud Services & Platform Integration
            </div>

            <h1 className="heading-1 text-white leading-tight max-w-7xl">
              Your Cloud Platforms Are Silos.{" "}
              <span className="heading-1 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                We Build the Bridges That Unleash Their Power.
              </span>
            </h1>

            <p className="text-white/90 desc font-medium max-w-6xl text-lg leading-relaxed">
              We engineer secure, scalable, and automated integrations that unify your disparate cloud services, creating a single source of truth that drives intelligent business decisions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <ScrollLink
                to="contact"
                smooth
                offset={-90}
                className="primary-btn"
              >
                Schedule Your Free Integration Audit
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
              Our integration expertise is trusted by teams at
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
              src={gartnerLogo}
              alt="Gartner"
              className="h-10 md:h-12 opacity-50 hover:opacity-100 transition-all duration-300 filter grayscale hover:grayscale-0"
            />
            <img
              src={awsPartnerLogo}
              alt="AWS Partner Network"
              className="h-10 md:h-12 opacity-50 hover:opacity-100 transition-all duration-300 filter grayscale hover:grayscale-0"
            />
          </div>
        </div>
      </section>

      {/* Interactive Platform Connector */}
      <section className="py-20 bg-white">
        <div className="wrapper">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6 text-gray-900">
              See How Your Ecosystem Could Connect
            </h2>
            <p className="desc text-gray-600 max-w-3xl mx-auto text-lg">
              Select the platforms you currently use to visualize how a unified integration strategy can create seamless data flow across your entire operation.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <div className="text-center mb-8">
                <p className="text-gray-600 font-medium">Click the logos of the services you use</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 mb-8">
                {platformLogos.map((platform, index) => (
                  <div
                    key={index}
                    onClick={() => togglePlatform(platform.name)}
                    className={`cursor-pointer p-4 rounded-xl border-2 transition-all duration-300 ${
                      selectedPlatforms.includes(platform.name)
                        ? 'border-primary bg-primary/10 shadow-lg scale-105'
                        : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-3xl mb-2">{platform.logo}</div>
                      <p className="text-sm font-medium text-gray-700">{platform.name}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {selectedPlatforms.length > 0 && (
                <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
                  <div className="text-2xl mb-4">🔗</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Mecfinity AI Unified Data Core
                  </h3>
                  <p className="text-gray-600">
                    A unified {selectedPlatforms.slice(0, 2).join(' + ')} integration can reduce data processing time by up to 60%.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="wrapper">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-red-50 border border-red-200 rounded-full text-red-700 font-medium text-sm mb-6">
                ⚠️ Critical Integration Challenge
              </div>
              <h2 className="heading-2 mb-6 text-gray-900">
                Is your data trapped in isolated cloud platforms?
              </h2>
            </div>
            <p className="desc text-gray-600 leading-relaxed text-lg text-center">
              You're likely dealing with crippling data silos, security risks from manual CSV uploads, and development teams wasting countless hours building brittle, one-off connections that break. This isn't just a technical headache—it's a strategic bottleneck that prevents you from getting a true 360-degree view of your customers and business.
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
                  ✨ Our Solution
                </div>
                <h2 className="heading-2 mb-6 text-gray-900">
                  Mecfinity AI is your expert partner in dismantling data silos
                </h2>
              </div>
              <p className="desc text-gray-600 leading-relaxed text-lg">
                We architect and build robust, API-driven integration layers that create a secure and automated data superhighway between your cloud applications. We specialize in creating scalable data pipelines, unified monitoring dashboards, and seamless workflows that allow your platforms to communicate in real-time, unlocking insights you never thought possible.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-2xl max-w-full">
                  {/* Integration Architecture Diagram */}
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Integration Architecture</h4>
                    </div>
                    
                    {/* Cloud Platforms */}
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="bg-blue-100 border-2 border-blue-300 p-3 rounded-lg">
                        <div className="text-blue-700 font-semibold text-sm">Salesforce</div>
                      </div>
                      <div className="bg-green-100 border-2 border-green-300 p-3 rounded-lg">
                        <div className="text-green-700 font-semibold text-sm">HubSpot</div>
                      </div>
                      <div className="bg-purple-100 border-2 border-purple-300 p-3 rounded-lg">
                        <div className="text-purple-700 font-semibold text-sm">AWS</div>
                      </div>
                    </div>
                    
                    {/* Central Hub */}
                    <div className="flex justify-center mb-4">
                      <div className="bg-primary/20 border-2 border-primary p-4 rounded-lg">
                        <div className="text-primary font-semibold">Mecfinity AI</div>
                        <div className="text-primary/70 text-sm">Integration Hub</div>
                      </div>
                    </div>
                    
                    {/* Data Flow */}
                    <div className="text-center text-green-600 font-medium">
                      ✓ Real-time Data Sync
                    </div>
                  </div>
                </div>
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
              Why our integration-first approach gives you the competitive edge
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Create a Single Source of Truth</h3>
              <p className="text-gray-600 leading-relaxed">
                Unify customer and operational data from all your platforms for complete, accurate business intelligence.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Enhance Security & Compliance</h3>
              <p className="text-gray-600 leading-relaxed">
                Eliminate risky manual data transfers and ensure all data flows through a secure, auditable, and compliant integration layer.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Boost Operational Efficiency</h3>
              <p className="text-gray-600 leading-relaxed">
                Automate the flow of information between departments, reducing manual work and accelerating business processes.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Future-Proof Your Tech Stack</h3>
              <p className="text-gray-600 leading-relaxed">
                Build a flexible, scalable integration architecture that allows you to add or change platforms easily without costly re-engineering.
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
              See how we've transformed businesses through strategic platform integration
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <div className="text-center mb-8">
                <div className="text-4xl mb-4">{caseStudies[currentCaseStudy].logo}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {caseStudies[currentCaseStudy].company}
                </h3>
                <p className="text-primary font-semibold text-lg">
                  {caseStudies[currentCaseStudy].metric}
                </p>
              </div>
              
              <div className="mb-8">
                <p className="text-gray-600 leading-relaxed text-lg">
                  {caseStudies[currentCaseStudy].story}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {caseStudies[currentCaseStudy].results.map((result, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">{result}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center space-x-4">
                {caseStudies.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCaseStudy(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentCaseStudy ? 'bg-primary' : 'bg-gray-300'
                    }`}
                  />
                ))}
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
              Our specialized expertise in cloud integration sets us apart
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Multi-Cloud Specialization</h3>
              <p className="text-gray-600 text-sm">We have deep, certified expertise across AWS, Google Cloud, and Azure ecosystems.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Security-First Approach</h3>
              <p className="text-gray-600 text-sm">Every integration we build is architected with enterprise-grade security and data governance as the top priority.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Focus on Scalable Architecture</h3>
              <p className="text-gray-600 text-sm">We don't build quick fixes; we build resilient, long-term infrastructure that grows with your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary via-blue-600 to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="wrapper relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="heading-2 text-white mb-8">
              Ready to Build a Truly Connected Business?
            </h2>
            <p className="desc mb-12 text-white/90 text-lg">
              A fragmented cloud strategy is a competitive disadvantage. To guarantee the deep, architectural focus required for these projects, we are only accepting 2 new integration clients this quarter.
            </p>
            <p className="desc mb-12 text-white/90 text-lg">
              Book your free, no-obligation Integration Audit today to secure your spot and receive a strategic plan to unify your technology stack.
            </p>

            <button 
              onClick={() => setShowAuditModal(true)}
              className="inline-block bg-white text-primary px-5 py-3 rounded-xl font-medium text-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl"
            >
              Claim My Free Integration Audit
            </button>
          </div>
        </div>
      </section>

      {/* Exit Intent Modal */}
      {showExitIntent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-lg w-full">
            <h3 className="text-xl font-bold mb-4 text-gray-900">
              Is Your Cloud Strategy Secure?
            </h3>
            <p className="text-gray-600 mb-6">
              Before you go, download our free checklist: "The CTO's 15-Point Checklist for a Secure Multi-Cloud Integration."
            </p>
            
            <form onSubmit={handleSubmitExitIntent(onSubmitExitIntent)} className="space-y-3">
              <div>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Full Name"
                  {...registerExitIntent("fullName", { required: "Full name is required" })}
                />
                {exitIntentErrors.fullName && (
                  <small className="text-red-500 text-sm">
                    {exitIntentErrors.fullName.message}
                  </small>
                )}
              </div>

              <div>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Email"
                  {...registerExitIntent("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {exitIntentErrors.email && (
                  <small className="text-red-500 text-sm">
                    {exitIntentErrors.email.message}
                  </small>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Phone Number"
                  {...registerExitIntent("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^\+?[\d\s\-()]{6,14}\d$/,
                      message: "Invalid phone number",
                    },
                  })}
                />
                {exitIntentErrors.phone && (
                  <small className="text-red-500 text-sm">
                    {exitIntentErrors.phone.message}
                  </small>
                )}
              </div>

              <div className="flex gap-4 mt-6">
                <button 
                  type="button"
                  onClick={closeExitIntent}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Maybe Later
                </button>
                <button 
                  disabled={exitIntentSpinner}
                  type="submit"
                  className="flex-1 primary-btn disabled:cursor-wait disabled:hover:-translate-y-0 disabled:hover:bg-tertiary disabled:shadow-none justify-center"
                >
                  {exitIntentSpinner ? (
                    <ImSpinner3 className="text-xl animate-spin" />
                  ) : (
                    "Get My Free Checklist"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Audit Modal */}
      {showAuditModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-lg w-full">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">
                Schedule Your Free Integration Audit
              </h3>
              <p className="text-gray-600">
                Get a comprehensive analysis of your current cloud ecosystem and a strategic roadmap for unification
              </p>
            </div>
            
            <form onSubmit={handleSubmitAudit(onSubmitAudit)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter your full name"
                  {...registerAudit("fullName", { required: "Full name is required" })}
                />
                {auditErrors.fullName && (
                  <small className="text-red-500 text-sm">
                    {auditErrors.fullName.message}
                  </small>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter your email address"
                  {...registerAudit("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {auditErrors.email && (
                  <small className="text-red-500 text-sm">
                    {auditErrors.email.message}
                  </small>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter your company name"
                  {...registerAudit("companyName")}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Platforms
                </label>
                <textarea
                  rows="2"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Which cloud platforms do you currently use?"
                  {...registerAudit("currentPlatforms")}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Integration Goals
                </label>
                <textarea
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="What are your main integration challenges and goals?"
                  {...registerAudit("integrationGoals")}
                />
              </div>
              
              <div className="flex gap-4 mt-8">
                <button 
                  type="button"
                  onClick={() => setShowAuditModal(false)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  disabled={auditSpinner}
                  type="submit"
                  className="flex-1 primary-btn disabled:cursor-wait disabled:hover:-translate-y-0 disabled:hover:bg-tertiary disabled:shadow-none"
                >
                  {auditSpinner ? (
                    <ImSpinner3 className="text-xl animate-spin" />
                  ) : (
                    "Schedule Audit"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Testimonials reviews={cloudServicesReviews} />
      <WhyChooseUs />
      <Faqs />
      <Contact />
    </>
  );
};

export default CloudServices;
