import { Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import ReactPlayer from "react-player";
import { homeBannerVideo } from "../../../constant";
import { LoadingSpinner } from "../../../components/common/LoadingSpinner";

// Lazy load non-critical components
const Contact = lazy(() => import("../../../components/landingPages/Contact"));
const WhyChooseUs = lazy(() =>
  import("../../../components/common/WhyChooseUs")
);
const OurServices = lazy(() =>
  import("../../../components/website/OurServices")
);
const UnlockEfficiency = lazy(() =>
  import("../../../components/common/UnlockEfficiency")
);
const Testimonials = lazy(() =>
  import("../../../components/common/Testimonials")
);
const Faqs = lazy(() => import("../../../components/common/Faqs"));
const Credibility = lazy(() =>
  import("../../../components/common/Credibility")
);
const CommonProject = lazy(() =>
  import("../../../components/website/CommonProject")
);
const AboutSection = lazy(() => import("./components/AboutSection"));
const WhoWeAreSection = lazy(() => import("./components/WhoWeAreSection"));

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
      <Suspense fallback={<LoadingSpinner />}>
        <AboutSection />
        <OurServices length={3} />
        <WhoWeAreSection />
        <CommonProject />
        <WhyChooseUs />
        <UnlockEfficiency />
        <Testimonials />
        <Credibility />
        <Faqs />
        <div>
          <Contact />
        </div>
      </Suspense>
    </>
  );
};

export default Home;
