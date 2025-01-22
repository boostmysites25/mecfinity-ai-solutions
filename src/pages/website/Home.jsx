import { Link } from "react-router-dom";
import Contact from "../../components/landingPages/Contact";
import aboutUsImg from "../../assets/images/aboutuscontent.jpg";
import WhyChooseUs from "../../components/common/WhyChooseUs";
import ReactPlayer from "react-player";
import { homeBannerVideo } from "../../constant";
import OurServices from "../../components/website/OurServices";
import UnlockEfficiency from "../../components/common/UnlockEfficiency";
import Testimonials from "../../components/common/Testimonials";
import Faqs from "../../components/common/Faqs";
import Credibility from "../../components/common/Credibility";
import CommonProject from "../../components/website/CommonProject";
import PopupForm from "../../components/common/PopupForm";

const Home = () => {
  return (
    <>
      <PopupForm storageKey={"formModalClosed"} />
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
      <section className="py-[3rem] bg-backgroundcolor text-primarytextcolor wrapper">
        <div
          data-aos="fade-right"
          className="gradient-rounded-text-box mx-auto lg:mx-0"
        >
          About Us
        </div>
        <div className="flex flex-col-reverse items-center lg:grid grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-right" className="flex h-full flex-col gap-7">
            <div className="flex flex-col gap-7 text-center lg:text-start">
              <h2 className="heading-2">
                Revolutionizing Operations with AI-Powered Innovation
              </h2>
              <p className="desc">
                At Mecfinity AI Solutions, we combine innovation with expertise
                to deliver custom-built digital solutions that elevate your
                business. Whether it’s creating dynamic websites, developing
                mobile applications, or exploring emerging technologies like AI
                and blockchain, we’re your reliable partner for navigating
                today’s fast-paced digital world.
              </p>
            </div>
            <div className="flex gap-5 mt-4 justify-center lg:justify-start">
              <Link to="/contact-us" className="primary-btn">
                Contact Us
              </Link>
              <Link to="/services" className="secondary-btn">
                Our Services
              </Link>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="h-full max-h-[300px] max-w-[400px] lg:max-w-full  lg:max-h-[382px] "
          >
            <img
              src={aboutUsImg}
              className=" h-full rounded-lg w-full  mx-auto object-cover"
              alt=""
            />
          </div>
        </div>
      </section>
      <OurServices length={3} />
      <section
        // data-aos-offset={-400}
        // data-aos-anchor-placement="top-bottom"
        // data-aos-anchor="selector"
        className="py-[3rem] bg-secondary/5"
      >
        <div
          data-aos-offset={-400}
          // data-aos-anchor-placement="bottom-center"
          data-aos="fade-up"
          className="wrapper text-center flex flex-col gap-3"
        >
          <div className="gradient-rounded-text-box mx-auto mb-4">
            Who We Are
          </div>
          <h1 className="heading-2 bg-gradient-to-r from-primary max-w-[50rem] mx-auto to-secondary bg-clip-text text-transparent">
            AI-Powered IT Solutions Tailored to Your Business Requirements
          </h1>
          <p className="desc max-w-[50rem] mx-auto">
            At Mecfinity AI Solutions, we recognize that your website is more
            than just an online presence—it's an essential part of your brand, a
            powerful business tool, and often the first interaction with
            potential customers. In today's fast-paced environment, making a
            lasting first impression is crucial. That's why we elevate web
            design beyond the basics, integrating advanced AI-driven features to
            enhance performance, personalize user experiences, and deliver
            actionable insights. Our approach is centered on boosting
            engagement, driving conversions, and accelerating your business
            growth.
          </p>
        </div>
      </section>
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
