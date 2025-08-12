import Contact from "../../components/common/Contact";
import { Link as ScrollLink } from "react-scroll";
import WhyChooseUs from "../../components/common/WhyChooseUs";
import Testimonials from "../../components/common/Testimonials";
import ReactPlayer from "react-player";
import webDevBanner from "../../assets/videos/custom-web-development.mp4";
import Faqs from "../../components/common/Faqs";
import forbesLogo from "../../assets/images/featuredin/forbes.png";
import techcrunchLogo from "../../assets/images/featuredin/TechCrunch.webp";
import entrepreneurLogo from "../../assets/images/featuredin/Entrepreneur.png";
import businessInsiderLogo from "../../assets/images/featuredin/Business Insider.svg";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { emailjsDetails } from "../../constant";
import toast from "react-hot-toast";
import { ImSpinner3 } from "react-icons/im";
import emailjs from "@emailjs/browser";

const webDevReviews = [
  {
    id: 1,
    name: "Alex Chen",
    role: "CTO, B2B SaaS Platform",
    desc: "Mecfinity AI re-architected our entire growth trajectory. They built automation that cut our user churn by 30% and handled a 50x increase in users without a single outage.",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Founder, FinTech Startup",
    desc: "From MVP to enterprise-ready platform in 6 months. Their automation-first approach saved us countless hours and positioned us perfectly for our Series A.",
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    role: "CEO, E-commerce SaaS",
    desc: "They're not just developers; they're genuine technical partners who understand the pressures of a venture-backed startup. Our platform now scales seamlessly.",
  },
  {
    id: 4,
    name: "Lisa Thompson",
    role: "CTO, HealthTech Platform",
    desc: "The microservices architecture they built handles our peak loads effortlessly. We've grown from 1k to 50k users without any infrastructure issues.",
  },
];

const CustomWebDevelopment = () => {
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [demoSpinner, setDemoSpinner] = useState(false);
  const [exitIntentSpinner, setExitIntentSpinner] = useState(false);

  const {
    register: registerDemo,
    handleSubmit: handleSubmitDemo,
    formState: { errors: demoErrors },
    reset: resetDemo,
  } = useForm();

  const {
    register: registerExitIntent,
    handleSubmit: handleSubmitExitIntent,
    formState: { errors: exitIntentErrors },
    reset: resetExitIntent,
  } = useForm();

  useEffect(() => {
    // Check if user has already seen the exit intent modal in this session
    const exitIntentData = sessionStorage.getItem('customWebDevExitIntent');
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

  const techStack = [
    {
      name: "AWS",
      logo: "🔷",
      description: "For infinite scalability and 99.99% uptime, ensuring your platform never goes down during traffic spikes."
    },
    {
      name: "Kubernetes",
      logo: "⚓",
      description: "For container orchestration that allows for efficient resource management and rapid deployment of new features."
    },
    {
      name: "Python/Django",
      logo: "🐍",
      description: "For robust, secure, and scalable backend logic that powers complex business operations."
    },
    {
      name: "React",
      logo: "⚛️",
      description: "For lightning-fast, modern, and responsive user interfaces that your customers will love."
    }
  ];

  const onSubmitDemo = async (data) => {
    setDemoSpinner(true);

    var emailBody = "Demo Request Details:\n\n";
    emailBody += "Full Name: " + data.fullName + "\n\n";
    emailBody += "Email: " + data.email + "\n\n";
    emailBody += "Company Name: " + data.companyName + "\n\n";
    emailBody += "Preferred Date & Time: " + data.preferredDateTime + "\n\n";
    emailBody += "Additional Notes: " + data.additionalNotes + "\n\n";
    emailBody += "Service: Custom Web Development Demo";

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
        toast.success("Demo request submitted successfully!");
        resetDemo();
        setShowDemoModal(false);
      })
      .catch((error) => {
        toast.error("Failed to submit demo request. Please try again.");
      })
      .finally(() => setDemoSpinner(false));
  };

  const onSubmitExitIntent = async (data) => {
    setExitIntentSpinner(true);

    var emailBody = "Exit Intent Lead Details:\n\n";
    emailBody += "Full Name: " + data.fullName + "\n\n";
    emailBody += "Email: " + data.email + "\n\n";
    emailBody += "Phone Number: " + data.phone + "\n\n";
    emailBody += "Service: Custom Web Development - Exit Intent";

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
         sessionStorage.setItem('customWebDevExitIntent', JSON.stringify(exitIntentData));
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
    sessionStorage.setItem('customWebDevExitIntent', JSON.stringify(exitIntentData));
  };

  return (
    <>
      {/* Hero Section */}
      <div
        id="banner"
        className="landing-page min-h-screen relative overflow-hidden"
      >
        <ReactPlayer
          url={webDevBanner}
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
              Custom Web Development
            </div>

            <h1 className="heading-1 text-white leading-tight max-w-7xl">
              Your MVP Got You Here.{" "}
              <span className="heading-1 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                An Automation-First Architecture Will Get You to $10M and Beyond.
              </span>
            </h1>

            <p className="text-white/90 desc font-medium max-w-6xl text-lg leading-relaxed">
              We are the expert development partners for visionary SaaS founders. We build robust, massively scalable web applications with intelligent automation at their core, ensuring you dominate your market and are ready for your next funding round.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <ScrollLink
                to="contact"
                smooth
                offset={-90}
                className="primary-btn"
              >
                Book Your Free Architecture Review
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

      {/* Solution Overview */}
      <section className="py-20 bg-white">
        <div className="wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-red-50 border border-red-200 rounded-full text-red-700 font-medium text-sm mb-6">
                  ⚠️ Critical Growth Challenge
                </div>
                <h2 className="heading-2 mb-6 text-gray-900">
                  Your MVP proved the market exists, but now growth is exposing the cracks
                </h2>
              </div>
              <p className="desc text-gray-600 leading-relaxed text-lg">
                Manual back-office tasks are creating bottlenecks, your monolithic architecture groans under peak loads, and every new feature request adds to a mountain of technical debt. You're caught in a reactive cycle of patching fires instead of building your empire.
              </p>
              
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-full text-green-700 font-medium text-sm mb-6">
                  ✨ Our Solution
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Mecfinity AI builds the automation-centric SaaS backbones that are engineered for hyper-growth
                </h3>
                <p className="desc text-gray-600 leading-relaxed text-lg">
                  We don't just write code; we architect your future. We build platforms where scalability and automation are the foundation, not an afterthought, ensuring you can handle 100,000 users as seamlessly as your first 100.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-2xl max-w-full">
                  {/* Animated Architecture Diagram */}
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Architecture Evolution</h4>
                    </div>
                    
                    {/* Monolith Stage */}
                    <div className="flex justify-center mb-4">
                      <div className="bg-red-100 border-2 border-red-300 p-4 rounded-lg animate-pulse">
                        <div className="text-red-700 font-semibold">Monolith</div>
                        <div className="text-red-500 text-sm">Error-prone, slow</div>
                      </div>
                    </div>
                    
                    {/* Arrow */}
                    <div className="flex justify-center mb-4">
                      <div className="w-0.5 h-8 bg-gray-300"></div>
                    </div>
                    
                    {/* Microservices Stage */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-green-100 border-2 border-green-300 p-3 rounded-lg">
                        <div className="text-green-700 font-semibold text-sm">User Auth</div>
                      </div>
                      <div className="bg-green-100 border-2 border-green-300 p-3 rounded-lg">
                        <div className="text-green-700 font-semibold text-sm">Billing API</div>
                      </div>
                      <div className="bg-green-100 border-2 border-green-300 p-3 rounded-lg">
                        <div className="text-green-700 font-semibold text-sm">Microservices</div>
                      </div>
                      <div className="bg-green-100 border-2 border-green-300 p-3 rounded-lg">
                        <div className="text-green-700 font-semibold text-sm">Automation Engine</div>
                      </div>
                    </div>
                    
                    <div className="text-center text-green-600 font-medium">
                      ✓ Efficient & Stable
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Showcase */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="wrapper">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6 text-gray-900">
              Built with a Tech Stack You Can Trust
            </h2>
            <p className="desc text-gray-600 max-w-3xl mx-auto text-lg">
              We use proven technologies that scale with your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((tech, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-primary/20 relative"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{tech.logo}</div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{tech.name}</h3>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-normal max-w-xs z-10">
                    {tech.description}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Benefits */}
      <section className="py-20 bg-white">
        <div className="wrapper">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6 text-gray-900">Core Benefits</h2>
            <p className="desc text-gray-600 max-w-3xl mx-auto text-lg">
              Why our automation-first approach gives you the competitive edge
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Accelerate Your Go-to-Market</h3>
              <p className="text-gray-600 leading-relaxed">
                Launch with a powerful, future-proof architecture that prevents the need for costly refactoring down the line.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Eradicate Technical Debt</h3>
              <p className="text-gray-600 leading-relaxed">
                Our commitment to clean, well-documented code and forward-thinking design ensures your platform is agile and ready for rapid innovation.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Build an Integrated Powerhouse</h3>
              <p className="text-gray-600 leading-relaxed">
                We design with an API-first methodology, enabling seamless integration with any third-party service and creating a powerful, defensible ecosystem.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Engineer for Peak Performance</h3>
              <p className="text-gray-600 leading-relaxed">
                Our load-balanced, resilient infrastructure is purpose-built to handle viral traffic spikes and deliver a consistently fast, secure user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonial Section */}
      {/* <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="wrapper">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6 text-gray-900">
              How We Helped Scale a B2B SaaS Platform from 1k to 50k Users
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <div className="aspect-video bg-gray-100 rounded-xl mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-gray-600">Video Testimonial</p>
                  <p className="text-sm text-gray-500">"We had a great product, but our infrastructure was holding us back..."</p>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-gray-600 italic text-lg">
                  "We had a great product, but our infrastructure was holding us back. We couldn't scale. Mecfinity AI didn't just rebuild our platform; they re-architected our entire growth trajectory. They built in automation that cut our user churn by 30% and an architecture that handled a 50x increase in users without a single outage. They're not just developers; they're genuine technical partners who understand the pressures of a venture-backed startup."
                </p>
                <p className="text-primary font-semibold mt-4">- Alex Chen, CTO, B2B SaaS Platform</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Schedule Demo CTA */}
      <section className="py-20 bg-white">
        <div className="wrapper">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="heading-2 mb-6 text-gray-900">
              See Our Scalable Architecture in Action
            </h2>
            <p className="desc text-gray-600 mb-8 text-lg">
              Not ready for a full architecture review? Schedule a quick, no-pressure demo of a live SaaS platform we've built.
            </p>
            <button 
              onClick={() => setShowDemoModal(true)}
              className="primary-btn mx-auto"
            >
              Schedule a Live Demo
            </button>
          </div>
        </div>
      </section>

      {/* Whitepaper Offer */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="wrapper">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="heading-2 mb-6 text-gray-900">
                    Gain a Competitive Edge with Our Expert Insights
                  </h2>
                  <p className="desc text-gray-600 mb-8 text-lg">
                    Download our free guide: "The Founder's Guide to Building a Scalable SaaS Architecture." Learn how to avoid common pitfalls and build a platform that attracts investors.
                  </p>
                  <button className="primary-btn">
                    Download the Free Guide
                  </button>
                </div>
                <div className="flex justify-center">
                  <div className="bg-gradient-to-br from-primary/10 to-blue-500/10 p-8 rounded-2xl border-2 border-dashed border-primary/30">
                    <div className="text-center">
                      <div className="text-6xl mb-4">📄</div>
                      <p className="text-gray-600 font-medium">Whitepaper Cover</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-white">
        <div className="wrapper">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="heading-2 mb-6 text-gray-900">
              Trusted by a Community of Builders
            </h2>
            <p className="desc text-gray-600 mb-8 text-lg">
              We believe in giving back. Our team actively contributes to open-source projects on GitHub and is frequently cited in developer communities like Stack Overflow and Indie Hackers for our expertise in scalable systems and automation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🐙</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">GitHub</h3>
                <p className="text-gray-600 text-sm">Active open-source contributors</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Stack Overflow</h3>
                <p className="text-gray-600 text-sm">Frequently cited for expertise</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Indie Hackers</h3>
                <p className="text-gray-600 text-sm">Trusted by the community</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="wrapper">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6 text-gray-900">
              Our Approach vs. Typical Agency Model
            </h2>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                <div className="bg-gray-50 p-6 border-r border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-4">Feature</h3>
                </div>
                <div className="bg-primary/5 p-6 border-r border-gray-200">
                  <h3 className="font-bold text-primary mb-4">The Mecfinity AI Partnership</h3>
                </div>
                <div className="bg-gray-50 p-6">
                  <h3 className="font-bold text-gray-900 mb-4">The Typical Agency Model</h3>
                </div>
              </div>
              
              {[
                { feature: "Focus", us: "Long-Term Scalability & Business Goals", them: "Short-Term Project Completion" },
                { feature: "Architecture", us: "Automation-First, Microservices", them: "Monolithic, Quickest Path to Launch" },
                { feature: "Code", us: "Clean, Documented, You Own It", them: "Often Obfuscated, Creates Lock-in" },
                { feature: "Support", us: "Ongoing Strategic Partnership", them: "Ends When the Project is \"Done\"" }
              ].map((row, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-gray-200">
                  <div className="p-6 border-r border-gray-200">
                    <p className="font-semibold text-gray-900">{row.feature}</p>
                  </div>
                  <div className="p-6 border-r border-gray-200 bg-primary/5">
                    <p className="text-primary font-medium">{row.us}</p>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600">{row.them}</p>
                  </div>
                </div>
              ))}
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
              Ready to Build Your Scalable SaaS Empire?
            </h2>
            <p className="desc mb-12 text-white/90 text-lg">
              Join the ranks of successful SaaS founders who chose automation-first architecture. Book your free architecture review and discover how we can accelerate your path to $10M and beyond.
            </p>

            <ScrollLink
              to="contact"
              smooth
              offset={-90}
              className="inline-block bg-white text-primary px-5 py-3 rounded-xl font-medium text-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl"
            >
              Book Your Free Architecture Review
            </ScrollLink>
          </div>
        </div>
      </section>

      {/* Exit Intent Modal */}
      {showExitIntent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-lg w-full">
            <h3 className="text-xl font-bold mb-4 text-gray-900">
              Before You Go... A Personal Note from Our Lead Architect
            </h3>
            <p className="text-gray-600 mb-6">
              "Building a scalable SaaS is hard. I've seen hundreds of founders struggle with the wrong architecture. Let's have a quick, confidential 15-minute chat about your vision. No sales pitch, just a genuine technical discussion."
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
                    "Book a 15-Min Chat"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Demo Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-lg w-full">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">
                Schedule Your Live Demo
              </h3>
              <p className="text-gray-600">
                See our automation-first architecture in action with a live SaaS platform demo
              </p>
            </div>
            
            <form onSubmit={handleSubmitDemo(onSubmitDemo)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter your full name"
                  {...registerDemo("fullName", { required: "Full name is required" })}
                />
                {demoErrors.fullName && (
                  <small className="text-red-500 text-sm">
                    {demoErrors.fullName.message}
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
                  {...registerDemo("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {demoErrors.email && (
                  <small className="text-red-500 text-sm">
                    {demoErrors.email.message}
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
                  {...registerDemo("companyName")}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date & Time
                </label>
                <input
                  type="datetime-local"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  {...registerDemo("preferredDateTime")}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes
                </label>
                <textarea
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Any specific questions or requirements?"
                  {...registerDemo("additionalNotes")}
                />
              </div>
              
              <div className="flex gap-4 mt-8">
                <button 
                  type="button"
                  onClick={() => setShowDemoModal(false)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  disabled={demoSpinner}
                  type="submit"
                  className="flex-1 primary-btn disabled:cursor-wait disabled:hover:-translate-y-0 disabled:hover:bg-tertiary disabled:shadow-none"
                >
                  {demoSpinner ? (
                    <ImSpinner3 className="text-xl animate-spin" />
                  ) : (
                    "Schedule Demo"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Testimonials reviews={webDevReviews} />
      <WhyChooseUs />
      <Faqs />
      <Contact />
    </>
  );
};

export default CustomWebDevelopment;
