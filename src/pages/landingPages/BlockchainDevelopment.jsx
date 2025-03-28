import React, { useState } from "react";
import Contact from "../../components/landingPages/Contact";
import { blockchainServices, emailjsDetails } from "../../constant";
import { Link as ScrollLink } from "react-scroll";
import WhyChooseUs from "../../components/common/WhyChooseUs";
import Testimonials from "../../components/common/Testimonials";
import ReactPlayer from "react-player";
import blockchainBanner from "../../assets/videos/blockchain.mp4";
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
import blockchainLandingAbout from "../../assets/images/blockchain.webp";

const blockchainReviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "CTO, FinTech Startup",
    desc: "“MecfinityAI built our blockchain payment solution that reduced transaction costs by 70% while increasing transparency across our supply chain.”",
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "CEO, Healthcare Network",
    desc: "“Their blockchain-based patient records system has transformed our data security and interoperability between providers.”",
  },
  {
    id: 3,
    name: "Arjun Mehta",
    role: "Director, Logistics Company",
    desc: "“The blockchain tracking solution eliminated paperwork and reduced disputes in our shipping operations by 85%.”",
  },
  {
    id: 4,
    name: "Neha Kapoor",
    role: "COO, Real Estate Platform",
    desc: "“Smart contracts for property transactions have reduced closing times from weeks to days while eliminating fraud risks.”",
  },
];

const BlockchainDevelopment = () => {
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
          url={blockchainBanner}
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
              Blockchain Development
            </div>
            <h1 className="heading-1 text-white leading-tight">
              Build Trust & Transparency with Enterprise Blockchain Solutions
            </h1>
            <p className="text-white desc font-medium">
              From smart contracts to decentralized applications, we deliver
              secure, scalable blockchain solutions that transform business
              processes and create new opportunities.
            </p>
            <ScrollLink
              to="contact"
              smooth
              offset={-90}
              className="primary-btn mt-2"
            >
              Explore Blockchain Solutions
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
          Blockchain Technology
        </div>
        <div className="flex flex-col-reverse items-center lg:grid grid-cols-2 gap-10 mt-7">
          <div
            data-aos="fade-right"
            className="flex h-full flex-col gap-7 text-center lg:text-start"
          >
            <div className="flex flex-col gap-7">
              <h2 className="heading-2">
                Enterprise-Grade Blockchain Solutions for Modern Businesses
              </h2>
              <p className="desc">
                We design and implement blockchain architectures that solve real
                business challenges. Whether you need supply chain transparency,
                secure financial transactions, or decentralized data management,
                our solutions deliver immutable trust and operational
                efficiency.
              </p>
            </div>

            <div className="flex justify-center lg:justify-start gap-5 mt-4">
              <ScrollLink
                to="contact"
                smooth
                offset={-90}
                className="primary-btn"
              >
                Get Consultation
              </ScrollLink>
              <ScrollLink
                to="services"
                smooth
                offset={-80}
                className="secondary-btn"
              >
                Our Services
              </ScrollLink>
            </div>
          </div>
          <div data-aos="fade-left" className="h-full">
            <img
              loading="lazy"
              src={blockchainLandingAbout}
              className="object-contain max-h-[30rem] w-full rounded-lg"
              alt="Blockchain network visualization"
            />
          </div>
        </div>
      </section>
      <Contact />
      <KeyBenefits
        title="The Business Value of Blockchain Technology"
        benefits={[
          "Eliminate intermediaries and reduce costs by up to 60%",
          "Create tamper-proof records and audit trails",
          "Automate processes with self-executing smart contracts",
          "Enhance security with decentralized architecture",
          "Improve transparency across business networks",
          "Enable new business models and revenue streams",
        ]}
      />
      <div id="services" className="flex justify-center relative">
        <div className="wrapper py-10 flex flex-col items-center gap-5 z-10 text-primarytextcolor">
          <div data-aos="fade-up" className="gradient-rounded-text-box mx-auto">
            Our Blockchain Services
          </div>
          <h1 data-aos="fade-up" className="heading-2 text-center max-w-2xl">
            End-to-End Blockchain Development Solutions
          </h1>
          <p data-aos="fade-up" className="text-center max-w-2xl desc">
            Comprehensive blockchain services from strategy to implementation
            and ongoing support, tailored to your industry requirements.
          </p>
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 py-[2rem] mx-auto max-w-6xl"
          >
            {blockchainServices.map((item) => {
              const isLastItem = item.id === blockchainServices.length;
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
          Ready to take your business to the next level with blockchain?
        </h6>
        <ScrollLink
          to="contact"
          smooth
          offset={-90}
          className="primary-btn w-fit mt-4"
        >
          Claim Your Free Assessment
        </ScrollLink>
      </div>
      <ProcessFlowchart
        steps={[
          "Blockchain Feasibility Study",
          "Consensus Mechanism Selection",
          "Architecture Design",
          "Smart Contract Development",
          "DApp Frontend Development",
          "Testing & Security Audit",
          "Mainnet Deployment",
          "Ongoing Maintenance",
        ]}
      />
      <WhyChooseUs
        points={[
          "Certified blockchain architects and developers",
          "Experience across multiple blockchain platforms",
          "Focus on enterprise-grade security",
          "Industry-specific solutions",
          "Smart contract auditing services",
          "24/7 monitoring and support",
        ]}
      />
      <Testimonials reviews={blockchainReviews} />
      <Credibility />
      <CTA
        title={
          "Still facing transparency and trust issues in your business processes?"
        }
        desc={
          "Our blockchain solutions can create immutable audit trails, automate contracts, and reduce costs by up to 60% while enhancing security."
        }
      />
      <Faqs
        questions={[
          {
            question: "Which blockchain platforms do you work with?",
            answer:
              "We have expertise across Ethereum, Hyperledger, Corda, Polygon, Solana, and other enterprise blockchain platforms. We'll recommend the best fit based on your use case, considering factors like scalability, privacy needs, and consensus requirements.",
          },
          {
            question: "How do you ensure blockchain security?",
            answer:
              "We conduct thorough security audits, implement best practices for key management, use formal verification for smart contracts, and perform penetration testing. Our solutions include multi-signature wallets, role-based access controls, and regular security updates.",
          },
          {
            question:
              "What's the typical timeline for blockchain implementation?",
            answer:
              "Most projects take 3-9 months depending on complexity. A PoC can be delivered in 4-8 weeks, with full implementation following requirements finalization and testing. We follow agile methodologies to deliver incremental value.",
          },
          {
            question: "Can blockchain work with our existing systems?",
            answer:
              "Absolutely. We design solutions that integrate seamlessly with your current ERP, CRM, and other enterprise systems through APIs and middleware. Our focus is on creating business value without disrupting existing workflows.",
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
                Ready to Explore Blockchain Solutions?
              </h2>
              <p className="desc">
                At Mecfinity AI Solutions, we help businesses harness the power
                of blockchain technology to solve real-world challenges. Whether
                you're looking to enhance security, improve transparency, or
                create new decentralized business models, our team of blockchain
                experts is ready to guide your journey. Let's discuss how
                blockchain can transform your operations.
              </p>
              <img
                loading="lazy"
                src={image}
                alt="Blockchain consultation"
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
                  placeholder="Tell us about your blockchain project needs"
                  {...register("message", { required: "Message is required" })}
                />
                {errors.message && (
                  <span className="text-red-500 text-sm">
                    {errors.message.message}
                  </span>
                )}
              </div>

              <button className="primary-btn" type="submit">
                {spinner ? "Sending..." : "Get Blockchain Consultation"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockchainDevelopment;
