import React, { useState } from "react";
import Contact from "../../components/landingPages/Contact";
import {
  appLandingAbout,
  emailjsDetails,
  webLandingAbout,
} from "../../constant";
import { Link as ScrollLink } from "react-scroll";
import WhyChooseUs from "../../components/common/WhyChooseUs";
import LandingServices from "../../components/landingPages/LandingServices";
import Testimonials from "../../components/common/Testimonials";
import Portfolio from "../../components/landingPages/Portfolio";
import ReactPlayer from "react-player";
import webBanner from "../../assets/videos/web.mp4";
import appBanner from "../../assets/videos/app.mp4";
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

const webDevReviews = [
  {
    id: 1,
    name: "Suraj",
    role: "CEO, Leading Retail Brand",
    desc: "“MecfinityAI transformed our digital presence, driving a 40% increase in website speed and a noticeable boost in conversions.”",
  },
  {
    id: 2,
    name: "Ananya",
    role: "Founder, Tech Startup",
    desc: "“Their expertise in web development helped us build a scalable, high-performance platform that exceeded our expectations.”",
  },
  {
    id: 3,
    name: "Ravi Kumar",
    role: "Marketing Head, E-commerce Company",
    desc: "“Thanks to MecfinityAI, our website is now faster, more user-friendly, and optimized for SEO, leading to a 25% increase in organic traffic.”",
  },
  {
    id: 4,
    name: "Meera Patel",
    role: "COO, Fintech Firm",
    desc: "“MecfinityAI’s innovative solutions gave our website a modern, responsive design that significantly improved customer engagement.”",
  },
];

const appDevReviews = [
  {
    id: 1,
    name: "Amit Sharma",
    role: "CEO, HealthTech Startup",
    desc: "“MecfinityAI built a seamless mobile app that improved user engagement by 60%. Their expertise in app development is outstanding!”",
  },
  {
    id: 2,
    name: "Priya Verma",
    role: "Founder, E-learning Platform",
    desc: "“Our app now runs flawlessly on both iOS and Android, thanks to the team’s dedication and skill. Highly recommended!”",
  },
  {
    id: 3,
    name: "Rahul Nair",
    role: "Product Manager, Fintech Company",
    desc: "“MecfinityAI delivered a secure and feature-rich app that helped us scale our user base by 40% within months.”",
  },
  {
    id: 4,
    name: "Neha Kapoor",
    role: "COO, On-Demand Service Startup",
    desc: "“From design to development, the team executed our vision perfectly, creating a smooth and intuitive app experience.”",
  },
];

export const LandingPage = ({ page }) => {
  const isWebDevelopment = Boolean(page === "web-development");
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
          url={isWebDevelopment ? webBanner : appBanner}
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
              {isWebDevelopment ? "Web Development" : "App Development"}
            </div>
            {isWebDevelopment ? (
              <h1 className="heading-1 text-white leading-tight">
                Elevate Your Digital World with AI-Powered Web Solutions
              </h1>
            ) : (
              <h1 className="heading-1 text-white leading-tight">
                Creating Mobile Apps That Drive Success
              </h1>
            )}
            <p className="text-white desc font-medium">
              {isWebDevelopment
                ? "Transform your online presence with innovative, scalable, and performance-driven web development tailored for modern businesses."
                : "Transform your online presence with innovative, scalable, and performance-driven app development tailored for modern businesses."}
            </p>
            <ScrollLink
              to="contact"
              smooth
              offset={-90}
              className="primary-btn mt-2"
            >
              Book Your Free Strategy Call
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
          {isWebDevelopment ? "Web Development" : "App Development"}
        </div>
        <div className="flex flex-col-reverse items-center lg:grid grid-cols-2 gap-10 mt-7">
          <div
            data-aos="fade-right"
            className="flex h-full flex-col gap-7 text-center lg:text-start"
          >
            <div className="flex flex-col gap-7">
              <h2 className="heading-2">
                {isWebDevelopment
                  ? "Empowering Brands with Cutting-Edge Web Development"
                  : "Turning Ideas into High-Impact Mobile Apps"}
              </h2>
              <p className="desc">
                {isWebDevelopment
                  ? "We combine creativity and technical expertise to craft websites that not only represent your brand but also provide an optimized, seamless experience across all devices. Let us help you engage your audience and drive business growth."
                  : "From startups to established enterprises, we offer customized app development services that align with your business goals. Our apps enhance user engagement, improve functionality, and scale with your growth, keeping you ahead in a competitive market."}
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
              src={isWebDevelopment ? webLandingAbout : appLandingAbout}
              className="object-contain max-h-[30rem] w-full rounded-lg"
              alt=""
            />
          </div>
        </div>
      </section>
      <Contact />
      <KeyBenefits />
      <LandingServices page={page} />
      <div className="py-14 text-center space-y-5 flex flex-col items-center">
        <h6 className="heading-2">
          Slots filling fast – secure your free call now!
        </h6>
        <ScrollLink
          to="contact"
          smooth
          offset={-90}
          className="primary-btn w-fit mt-4"
        >
          Get Started Today
        </ScrollLink>
      </div>
      <ProcessFlowchart />
      <WhyChooseUs />
      <Portfolio page={page} />
      <Testimonials
        reviews={isWebDevelopment ? webDevReviews : appDevReviews}
      />
      <Credibility />
      <CTA
        title={
          isWebDevelopment
            ? "Transform Your Future Today – Book Your Free Strategy Call"
            : "Struggling with slow app performance?"
        }
        desc={
          isWebDevelopment
            ? ""
            : "Our AI-enhanced development process can boost speed by up to 40%—so you never miss a beat."
        }
      />
      <Faqs />
      <div
        data-aos="fade-up"
        id="contacts"
        className=" py-[2rem] sm:py-[5rem]  mt-[2rem] text-primarytextcolor bg-backgro-gradient-revert"
      >
        <div className="wrapper">
          <div className="h-full grid md:grid-cols-2 gap-10 py-5">
            <div className="flex flex-col gap-4">
              <h2 className="heading-2">Ready to Get Started?</h2>
              <p className="desc">
                At Mecfinity AI Solutions, we are passionate about helping you
                achieve your business goals with our innovative and customized
                digital solutions. Whether you’re looking to develop a
                cutting-edge website or build a high-impact mobile app, we’re
                here to guide you through every step of the process. Our
                expertise in web and app development ensures that your project
                will not only meet but exceed your expectations, driving
                engagement and growth for your business.
              </p>
              <img
                loading="lazy"
                src={image}
                alt=""
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
                  placeholder="Enter Message"
                  {...register("message", { required: "Message is required" })}
                />
                {errors.message && (
                  <span className="text-red-500 text-sm">
                    {errors.message.message}
                  </span>
                )}
              </div>

              <button className="primary-btn" type="submit">
                {spinner ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
