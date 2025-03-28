import React, { useState } from "react";
import Contact from "../../components/landingPages/Contact";
import { aiCallingServices, emailjsDetails } from "../../constant";
import { Link as ScrollLink } from "react-scroll";
import WhyChooseUs from "../../components/common/WhyChooseUs";
import Testimonials from "../../components/common/Testimonials";
import ReactPlayer from "react-player";
import aiCallingBanner from "../../assets/videos/ai-calling.mp4";
import Faqs from "../../components/common/Faqs";
import { useForm } from "react-hook-form";
import Credibility from "../../components/common/Credibility";
import image from "../../assets/images/contactimage.webp";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import ProcessFlowchart from "../../components/landingPages/ProcessFlowChart";
import KeyBenefits from "../../components/landingPages/KeyBenefits";
import CTA from "../../components/landingPages/CTA";
import aiCallingAbout from "../../assets/images/ai-calling.webp";

const aiCallingReviews = [
  {
    id: 1,
    name: "Rajiv Mehta",
    role: "Sales Director, Insurance Company",
    desc: "“The AI calling solution increased our lead conversion by 35% while reducing call center costs by 50%. The natural conversations are indistinguishable from human agents.”",
  },
  {
    id: 2,
    name: "Priya Nair",
    role: "Marketing Head, EdTech Startup",
    desc: "“Our enrollment calls handled by MecfinityAI's solution have 40% higher completion rates than our previous outsourced call center.”",
  },
  {
    id: 3,
    name: "Amit Sharma",
    role: "CEO, Healthcare Provider",
    desc: "“Patient appointment reminders through AI calling reduced no-shows by 60% while maintaining perfect HIPAA compliance.”",
  },
  {
    id: 4,
    name: "Neha Kapoor",
    role: "COO, E-commerce Platform",
    desc: "“The AI calling system handles 10,000+ customer service calls daily with 98% resolution rate, scaling effortlessly during peak seasons.”",
  },
];

const AiCallingAgency = () => {
  const [spinner, setSpinner] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setSpinner(true);

    var emailBody = "Name: " + data.fullName + "\n\n";
    emailBody += "Email: " + data.email + "\n\n";
    emailBody += "Phone: " + data.mobileNumber + "\n\n";
    emailBody += "Message:\n" + data.message;

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
        toast.success("Email sent successfully");
        reset();
        navigate("/thank-you");
      })
      .catch((error) => {
        toast.error("Failed to send email");
      })
      .finally(() => setSpinner(false));
  };

  return (
    <>
      <div id="banner" className="landing-page h-screen relative">
        <ReactPlayer
          url={aiCallingBanner}
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
        <div className="bg-black/30 absolute w-full h-full"></div>
        <div
          data-aos="fade-up"
          className="pt-[3rem] wrapper flex items-center h-full"
        >
          <div className="relative z-10 px-6 justify-center h-full flex flex-col items-center gap-5 text-center md:max-w-[60rem] mx-auto">
            <div className="rounded-text-box border-white/70 font-medium text-white">
              AI Calling Solutions
            </div>
            <h1 className="heading-1 text-white leading-tight">
              Revolutionize Customer Engagement with AI-Powered Calling
            </h1>
            <p className="text-white desc font-medium">
              Our advanced conversational AI makes natural, human-like calls at
              scale - perfect for sales, support, reminders, and surveys. Reduce
              costs while improving customer experience.
            </p>
            <ScrollLink
              to="contact"
              smooth
              offset={-90}
              className="primary-btn mt-2"
            >
              Request Demo
            </ScrollLink>
          </div>
        </div>
      </div>

      <section
        id="about"
        className="py-[3rem] bg-backgroundcolor text-primarytextcolor wrapper"
      >
        <div
          data-aos="fade-up"
          className="gradient-rounded-text-box mx-auto lg:mx-0"
        >
          AI Calling
        </div>
        <div className="flex flex-col-reverse items-center lg:grid grid-cols-2 gap-10 mt-7">
          <div
            data-aos="fade-right"
            className="flex h-full flex-col gap-7 text-center lg:text-start"
          >
            <div className="flex flex-col gap-7">
              <h2 className="heading-2">
                Human-Like Conversations Powered by Cutting-Edge AI
              </h2>
              <p className="desc">
                Our AI calling platform combines natural language processing,
                emotional intelligence algorithms, and industry-specific
                knowledge to deliver calls that customers can't distinguish from
                human agents. Perfect for sales outreach, customer support,
                appointment reminders, and market research at any scale.
              </p>
            </div>

            <div className="flex justify-center lg:justify-start gap-5 mt-4">
              <ScrollLink
                to="contact"
                smooth
                offset={-90}
                className="primary-btn"
              >
                Get Started
              </ScrollLink>
              <ScrollLink
                to="services"
                smooth
                offset={-80}
                className="secondary-btn"
              >
                Our Capabilities
              </ScrollLink>
            </div>
          </div>
          <div data-aos="fade-left" className="h-full">
            <img
              loading="lazy"
              src={aiCallingAbout}
              className="object-contain max-h-[30rem] w-full rounded-lg"
              alt="AI calling interface"
            />
          </div>
        </div>
      </section>
      <Contact />
      <KeyBenefits
        title="Why AI Calling is Transforming Business Communications"
        benefits={[
          "Handle 10x more calls at 60% lower cost",
          "24/7 availability with instant response",
          "Natural conversations in 50+ languages",
          "Real-time analytics and call insights",
          "Seamless integration with your CRM",
          "Scalable for seasonal demand spikes",
          "Compliance with telemarketing regulations",
        ]}
      />
      <div id="services" className="flex justify-center relative">
        <div className="wrapper py-10 flex flex-col items-center gap-5 z-10 text-primarytextcolor">
          <div data-aos="fade-up" className="gradient-rounded-text-box mx-auto">
            Our AI Calling Solutions
          </div>
          <h1 data-aos="fade-up" className="heading-2 text-center max-w-2xl">
            Intelligent Calling for Every Business Need
          </h1>
          <p data-aos="fade-up" className="text-center max-w-2xl desc">
            Comprehensive AI calling solutions tailored to your industry and
            specific use cases, delivering measurable results from day one.
          </p>
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 py-[2rem] mx-auto max-w-6xl"
          >
            {aiCallingServices.map((item) => {
              const isLastItem = item.id === aiCallingServices.length;
              const isLastItemOdd = isLastItem && item.id % 2 !== 0;

              return (
                <div
                  key={item.id}
                  className={`${
                    isLastItemOdd && "sm:col-span-2 sm:w-1/2"
                  } mx-auto shadow-2xl transition-all  bg-primary/15 hover:-translate-y-1 hover:bg-primary/25 duration-300 rounded-lg`}
                >
                  <div className="group rounded-lg bg-backgro-gradient hover:scale-105 shadow-2xl hover:shadow-primary/10 p-[1px] transition-all h-full duration-500 overflow-hidden">
                    <div className="rounded-lg bg-white hover:bg-custom-gradient p-5 flex flex-col justify-between items-start text-start h-full gap-4">
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            {item.img}
                          </div>
                        </div>
                        <h5 className="font-semibold text-2xl font-raleway transition-colors duration-300 text-primary">
                          {item.title}
                        </h5>
                        <p className="desc text-primarytextcolor">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="py-14 wrapper text-center space-y-5 flex flex-col items-center">
        <h6 className="heading-2">
          Ready to take your business to the next level?
        </h6>
        <ScrollLink
          to="contact"
          smooth
          offset={-90}
          className="primary-btn w-fit mt-4"
        >
          Claim Your Free Calls
        </ScrollLink>
      </div>
      <ProcessFlowchart
        steps={[
          "Needs Assessment & Use Case Definition",
          "Conversation Design & Scripting",
          "Voice Personality Selection",
          "CRM & System Integration",
          "Compliance Setup",
          "Pilot Program Implementation",
          "Full-Scale Deployment",
          "Ongoing Optimization",
        ]}
      />
      <WhyChooseUs
        points={[
          "Proprietary emotional intelligence algorithms",
          "99% accurate speech recognition",
          "Industry-specific conversation models",
          "Real-time call monitoring dashboard",
          "Compliance with TCPA and other regulations",
          "24/7 technical support",
        ]}
      />
      <Testimonials reviews={aiCallingReviews} />
      <Credibility />
      <CTA
        title={"Still relying on expensive call centers?"}
        desc={
          "Our AI calling solution can handle your customer interactions at 60% lower cost with higher conversion rates and 24/7 availability."
        }
      />
      <Faqs
        questions={[
          {
            question: "How human-like are your AI calls?",
            answer:
              "Our calls use advanced emotional AI and natural language processing to deliver conversations that 92% of customers can't distinguish from human agents, with appropriate pauses, tone variations, and contextual responses.",
          },
          {
            question: "What languages do you support?",
            answer:
              "Our platform supports 50+ languages and regional dialects, with the ability to switch languages mid-call based on customer preference or accent detection.",
          },
          {
            question: "Is this compliant with telemarketing laws?",
            answer:
              "Yes, we ensure full compliance with TCPA, DNC regulations, and other regional telemarketing laws. Our system includes built-in consent management, call recording, and opt-out handling.",
          },
          {
            question: "Can it integrate with our existing CRM?",
            answer:
              "Absolutely. We offer seamless integration with all major CRM platforms including Salesforce, HubSpot, Zoho, and custom solutions. All call data and outcomes are automatically logged in your system.",
          },
        ]}
      />
      <div
        data-aos="fade-up"
        id="contacts"
        className=" py-[2rem] sm:py-[5rem]  mt-[2rem] text-primarytextcolor bg-backgro-gradient-revert"
      >
        <div className="wrapper">
          <div className="h-full grid md:grid-cols-2 gap-10 py-5">
            <div className="flex flex-col gap-4">
              <h2 className="heading-2">
                Ready to Transform Your Calling Strategy?
              </h2>
              <p className="desc">
                At Mecfinity AI Solutions, we're redefining business
                communications with our cutting-edge AI calling technology.
                Whether you need to scale customer support, boost sales
                outreach, or automate routine calls, our solution delivers
                measurable results from day one. Schedule a demo to experience
                the future of customer engagement.
              </p>
              <img
                loading="lazy"
                src={image}
                alt="AI calling consultation"
                className="max-h-[21rem] object-cover rounded-xl"
              />
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4 md:px-[1rem] text-black"
            >
              <div className="hover:scale-105 transition-all duration-500">
                <label htmlFor="" className="mb-6 font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  className="mt-1 w-full bg-[#faf3ef] placeholder-slate-800  outline-none border-2 rounded-sm font-light border-primary/60 px-2 py-3"
                  placeholder="Enter Full Name"
                  {...register("fullName", {
                    required: "Full name is required",
                  })}
                />
                {errors.fullName && (
                  <span className="text-red-500 text-sm">
                    {errors.fullName.message}
                  </span>
                )}
              </div>

              <div className="hover:scale-105 transition-all duration-500">
                <label htmlFor="" className="mb-6 font-medium">
                  Mobile Number
                </label>
                <input
                  type="text"
                  className="mt-1 w-full bg-[#faf3ef] outline-none placeholder-slate-800 border-2 rounded-sm font-light border-primary/60 px-2 py-3"
                  placeholder="Enter Mobile Number"
                  {...register("mobileNumber", {
                    required: "Mobile number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Invalid phone number",
                    },
                  })}
                />
                {errors.mobileNumber && (
                  <span className="text-red-500 text-sm">
                    {errors.mobileNumber.message}
                  </span>
                )}
              </div>

              <div className="hover:scale-105 transition-all duration-500">
                <label htmlFor="" className="mb-6 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 w-full bg-[#faf3ef] outline-none placeholder-slate-800 border-2 rounded-sm font-light border-primary/60 px-2 py-3"
                  placeholder="Enter Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className="hover:scale-105 transition-all duration-500">
                <label htmlFor="" className="mb-6 font-medium">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="mt-1 w-full bg-[#faf3ef] outline-none placeholder-slate-800 border-2 rounded-sm font-light border-primary/60 px-2 py-3"
                  placeholder="Tell us about your calling needs"
                  {...register("message", { required: "Message is required" })}
                />
                {errors.message && (
                  <span className="text-red-500 text-sm">
                    {errors.message.message}
                  </span>
                )}
              </div>

              <button className="primary-btn" type="submit">
                {spinner ? "Sending..." : "Request AI Calling Demo"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiCallingAgency;
