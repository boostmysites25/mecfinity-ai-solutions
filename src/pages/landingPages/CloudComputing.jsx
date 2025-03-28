import React, { useState } from "react";
import Contact from "../../components/landingPages/Contact";
import { cloudComputingServices, emailjsDetails } from "../../constant";
import { Link as ScrollLink } from "react-scroll";
import WhyChooseUs from "../../components/common/WhyChooseUs";
import Testimonials from "../../components/common/Testimonials";
import ReactPlayer from "react-player";
import cloudBanner from "../../assets/videos/cloud-computing.mp4";
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
import cloudLandingAbout from "../../assets/images/cloud-computing.webp";

const cloudReviews = [
  {
    id: 1,
    name: "Sanjay Verma",
    role: "CIO, Financial Services Group",
    desc: "“MecfinityAI's cloud migration transformed our operations, reducing infrastructure costs by 40% while improving system reliability.”",
  },
  {
    id: 2,
    name: "Anjali Deshpande",
    role: "Director of IT, E-commerce Platform",
    desc: "“Their cloud-native solutions scaled seamlessly during our peak season, handling 5x traffic without performance issues.”",
  },
  {
    id: 3,
    name: "Rahul Nair",
    role: "CTO, Healthcare Analytics",
    desc: "“The HIPAA-compliant cloud architecture they implemented reduced our compliance overhead while improving data accessibility.”",
  },
  {
    id: 4,
    name: "Priyanka Shah",
    role: "VP Engineering, SaaS Startup",
    desc: "“Going cloud-first with MecfinityAI cut our time-to-market by 60% and allowed us to focus on core product features.”",
  },
];

const CloudComputing = () => {
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
          url={cloudBanner}
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
              Cloud Computing
            </div>
            <h1 className="heading-1 text-white leading-tight">
              Accelerate Your Digital Transformation with Cloud Solutions
            </h1>
            <p className="text-white desc font-medium">
              Leverage our expertise in cloud architecture, migration, and
              optimization to build scalable, secure, and cost-effective
              solutions that drive business growth.
            </p>
            <ScrollLink
              to="contact"
              smooth
              offset={-90}
              className="primary-btn mt-2"
            >
              Start Your Cloud Journey
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
          Cloud Services
        </div>
        <div className="flex flex-col-reverse items-center lg:grid grid-cols-2 gap-10 mt-7">
          <div
            data-aos="fade-right"
            className="flex h-full flex-col gap-7 text-center lg:text-start"
          >
            <div className="flex flex-col gap-7">
              <h2 className="heading-2">
                Enterprise-Grade Cloud Solutions Tailored to Your Needs
              </h2>
              <p className="desc">
                We design and implement comprehensive cloud strategies across
                public, private, and hybrid environments. From infrastructure
                modernization to cloud-native application development, our
                solutions deliver agility, scalability, and security to power
                your digital transformation.
              </p>
            </div>

            <div className="flex justify-center lg:justify-start gap-5 mt-4">
              <ScrollLink
                to="contact"
                smooth
                offset={-90}
                className="primary-btn"
              >
                Contact Us
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
              src={cloudLandingAbout}
              className="object-contain max-h-[30rem] w-full rounded-lg"
              alt="Cloud computing architecture"
            />
          </div>
        </div>
      </section>
      <Contact />
      <KeyBenefits
        title="The Business Advantages of Cloud Computing"
        benefits={[
          "Reduce IT infrastructure costs by up to 40%",
          "Scale resources instantly to meet demand fluctuations",
          "Enhance security with enterprise-grade protections",
          "Enable remote work with anywhere access to systems",
          "Improve disaster recovery and business continuity",
          "Accelerate innovation with on-demand resources",
        ]}
      />
      <div id="services" className="flex justify-center relative">
        <div className="wrapper py-10 flex flex-col items-center gap-5 z-10 text-primarytextcolor">
          <div data-aos="fade-up" className="gradient-rounded-text-box mx-auto">
            Our Cloud Services
          </div>
          <h1 data-aos="fade-up" className="heading-2 text-center max-w-2xl">
            Comprehensive Cloud Solutions Across All Platforms
          </h1>
          <p data-aos="fade-up" className="text-center max-w-2xl desc">
            End-to-end cloud services from strategy to implementation and
            ongoing management, tailored to your business requirements.
          </p>
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 py-[2rem] mx-auto max-w-6xl"
          >
            {cloudComputingServices.map((item) => {
              const isLastItem = item.id === cloudComputingServices.length;
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
          Limited availability for cloud migration projects - schedule your
          assessment today!
        </h6>
        <ScrollLink
          to="contact"
          smooth
          offset={-90}
          className="primary-btn w-fit mt-4"
        >
          Get Cloud Consultation
        </ScrollLink>
      </div>
      <ProcessFlowchart
        steps={[
          "Cloud Strategy & Assessment",
          "Workload Analysis & Planning",
          "Security & Compliance Review",
          "Migration Roadmap Development",
          "Proof of Concept Implementation",
          "Phased Migration Execution",
          "Optimization & Cost Management",
          "Ongoing Management & Support",
        ]}
      />
      <WhyChooseUs
        points={[
          "Certified AWS, Azure, and GCP architects",
          "10+ years of cloud implementation experience",
          "Proven migration methodologies",
          "FinOps and cost optimization expertise",
          "24/7 monitoring and support",
          "Industry-specific compliance knowledge",
        ]}
      />
      <Testimonials reviews={cloudReviews} />
      <Credibility />
      <CTA
        title={"Struggling with legacy infrastructure limitations?"}
        desc={
          "Our cloud solutions can modernize your IT environment, reducing costs by up to 40% while improving agility and scalability."
        }
      />
      <Faqs
        questions={[
          {
            question: "Which cloud platforms do you work with?",
            answer:
              "We're certified partners with all major cloud providers including AWS, Microsoft Azure, Google Cloud Platform, and specialize in hybrid and multi-cloud architectures.",
          },
          {
            question: "How do you ensure security in cloud migrations?",
            answer:
              "We implement security-by-design principles, conduct thorough risk assessments, and follow industry best practices for identity management, data encryption, and network security.",
          },
          {
            question: "What's the typical ROI for cloud migration?",
            answer:
              "Most organizations see 30-40% infrastructure cost savings within the first year, plus additional benefits from improved agility, productivity, and innovation capabilities.",
          },
          {
            question: "Can you help optimize our existing cloud environment?",
            answer:
              "Absolutely. Our Cloud Optimization Services include cost analysis, resource right-sizing, architecture reviews, and implementation of FinOps practices to maximize your cloud investment.",
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
              <h2 className="heading-2">Ready to Elevate to the Cloud?</h2>
              <p className="desc">
                At Mecfinity AI Solutions, we help businesses harness the full
                potential of cloud computing. Whether you're looking to migrate,
                optimize costs, or build cloud-native applications, our team of
                certified cloud architects is ready to guide your
                transformation. Let's discuss how the cloud can solve your
                unique business challenges.
              </p>
              <img
                loading="lazy"
                src={image}
                alt="Cloud computing consultation"
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
                  placeholder="Tell us about your cloud computing needs"
                  {...register("message", { required: "Message is required" })}
                />
                {errors.message && (
                  <span className="text-red-500 text-sm">
                    {errors.message.message}
                  </span>
                )}
              </div>

              <button className="primary-btn" type="submit">
                {spinner ? "Sending..." : "Get Cloud Consultation"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CloudComputing;
