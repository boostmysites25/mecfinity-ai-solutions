import { Link } from "react-router-dom";
import Contact from "../../../components/landingPages/Contact";
import WhyChooseUs from "../../../components/common/WhyChooseUs";
import ReactPlayer from "react-player";
import { homeBannerVideo } from "../../../constant";
import OurServices from "../../../components/website/OurServices";
import UnlockEfficiency from "../../../components/common/UnlockEfficiency";
import Testimonials from "../../../components/common/Testimonials";
import Faqs from "../../../components/common/Faqs";
import Credibility from "../../../components/common/Credibility";
import { Helmet } from "react-helmet-async";
import { lazy } from "react";
import AboutSection from "./components/AboutSection";
import WhoWeAreSection from "./components/WhoWeAreSection";

const CommonProject = lazy(() =>
  import("../../../components/website/CommonProject")
);

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Mecfinity AI Solutions | AI-Powered IT Services</title>
        <meta
          name="description"
          content="Discover cutting-edge AI-driven IT solutions with Mecfinity AI Solutions. We specialize in web development, mobile apps, blockchain, cloud computing, and more."
        />
        <meta
          name="keywords"
          content="Mecfinity AI Solutions, software development, AI solutions, digital transformation, web development, mobile apps, ui/ux design, app development, e-commerce, social media websites, IoT, blockchain, AI, cloud computing, AR/VR, hybrid apps, custom websites, Flutter, React, Angular, Vue.js, Web Development Services, App Development for Businesses, IoT Development Solutions, Cloud Computing Services for Startups, AI Calling Agency, Blockchain App Development, Virtual and Augmented Reality Development, Affordable web development for small businesses, Custom app development solutions for startups, Best IoT developers in Mangalore"
        />
        <meta name="author" content="Mecfinity AI Solutions" />
      </Helmet>
      <div
        id="banner"
        className="min-h-screen flex items-center py-[2rem] relative"
      >
        <ReactPlayer
          url={homeBannerVideo}
          loop
          muted
          width="100%"
          height="100%"
          playsinline
          playing
          className="absolute"
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
        <div className="bg-gradient-to-r to-black/50 from-transparent absolute w-full h-full"></div>
        <div className="pt-[3rem] wrapper flex items-center h-full">
          <div
            data-aos="fade-up"
            className="relative z-10 px-6 justify-center h-full text-white flex flex-col items-center gap-5 text-center md:max-w-[60rem] mx-auto"
          >
            <div className="rounded-text-box border-white/70 font-medium">
              IT Services
            </div>
            <h1 className="heading-1">
              Shaping the
              <span className="text-secondary"> Digital </span> Future Together
            </h1>
            <p className="desc">
              At Mecfinity AI Solutions, we deliver cutting-edge AI-driven IT
              solutions tailored to the evolving needs of businesses. Our
              innovative technologies empower greater efficiency, sustainable
              growth, and continuous advancement through intelligent automation
              and data-driven insights.
            </p>
            <Link to="/contact-us" className="primary-btn mt-2">
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <AboutSection />
      <OurServices length={3} />
      <WhoWeAreSection/>
      <CommonProject />
      <WhyChooseUs />
      <UnlockEfficiency />
      <Testimonials />
      <Credibility />
      <Faqs />
      {/* <EndlessOpportunitiesSection /> */}
      <div>
        <Contact />
      </div>
    </>
  );
};

export default Home;
