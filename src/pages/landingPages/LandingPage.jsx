import Contact from "../../components/common/Contact";
import { appLandingAbout, webLandingAbout } from "../../constant";
import { Link as ScrollLink } from "react-scroll";
import WhyChooseUs from "../../components/common/WhyChooseUs";
import LandingServices from "../../components/landingPages/LandingServices";
import Testimonials from "../../components/common/Testimonials";
import Portfolio from "../../components/landingPages/Portfolio";
import ReactPlayer from "react-player";
import webBanner from "../../assets/videos/web.mp4";
import appBanner from "../../assets/videos/app.mp4";
import Faqs from "../../components/common/Faqs";
import Credibility from "../../components/common/Credibility";
import ProcessFlowchart from "../../components/landingPages/ProcessFlowChart";
import KeyBenefits from "../../components/landingPages/KeyBenefits";
import CTA from "../../components/landingPages/CTA";
import { Helmet } from "react-helmet-async";
import FeatureSection from "../../components/landingPages/FeatureSection";
import TechStackSection from "../../components/landingPages/TechStackSection";
import WhyHireUs from "../../components/common/WhyHireUs";

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
  return (
    <>
      <Helmet>
        {!isWebDevelopment && (
          <meta
            name="keywords"
            content="mobile app agency, app development, mobile app company, mobile app development, app making company, react development services, custom app development, mobile app firm, ecom app development, hybrid app development, web app development agency, cross platform app development, app development company, Best App Development Company, Redefine Mobile App Development, Having an App Idea?, Expert App Developers, Custom App Development, Launch Your App, Web & Mobile Apps, App Development for Startups, #1 Web App Development Agency, Custom App Development, Ecommerce App Development, Enterprise App Development, iOS & Android App Development, Prices to Suit All Budgets, Get A Free Quote"
          />
        )}
        {!isWebDevelopment && (
          <meta
            name="description"
            content="With 10+ years of experience, we offer full-stack app development services. Our expert developers create innovative iOS, Android, e-commerce, gaming, blockchain, and enterprise apps to help you succeed in the mobile-first world."
          />
        )}
      </Helmet>
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
        className="py-[3rem] bg-backgroundcolor text-primarytextcolor relative"
        style={{
          backgroundImage: `url(${require("../../assets/images/pattern2.png")})`,
        }}
      >
        <div className="bg-backgroundcolor/70 absolute inset-0 h-full w-full" />

        <div className="wrapper">
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
        </div>
      </section>
      <FeatureSection />
      <Contact
        service={isWebDevelopment ? "Web Development" : "App Development"}
      />
      <LandingServices page={page} />
      <KeyBenefits page={page} />
      <div className="py-14 text-center space-y-5 flex flex-col items-center bg-white">
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
      <TechStackSection page={page} />
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
      <Faqs page={page} />
      {isWebDevelopment && <WhyHireUs />}
      <Contact
        service={isWebDevelopment ? "Web Development" : "App Development"}
      />
    </>
  );
};
