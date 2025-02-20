import React from "react";
import aboutUsImg from "../../../../assets/images/aboutuscontent.webp";
import { Link } from "react-router-dom";

const AboutSection = React.memo(() => {
  return (
    <section className="py-12 bg-backgroundcolor text-primarytextcolor wrapper">
      <div
        data-aos="fade-right"
        className="gradient-rounded-text-box mx-auto lg:mx-0"
      >
        About Us
      </div>
      <div className="flex flex-col lg:grid grid-cols-2 gap-10 mt-7 items-center">
        <div
          data-aos="fade-right"
          className="flex flex-col space-y-6 text-center lg:text-left"
        >
          <h2 className="heading-2">
            Revolutionizing Operations with AI-Powered Innovation
          </h2>
          <p className="desc">
            At Mecfinity AI Solutions, we combine innovation with expertise to
            deliver custom-built digital solutions that elevate your business.
            Whether it’s creating dynamic websites, developing mobile
            applications, or exploring emerging technologies like AI and
            blockchain, we’re your reliable partner for navigating today’s
            fast-paced digital world.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
            <Link to="/contact-us" className="primary-btn">
              Contact Us
            </Link>
            <Link to="/services" className="secondary-btn">
              Our Services
            </Link>
          </div>
        </div>
        <div data-aos="fade-left" className="w-full max-w-sm lg:max-w-full">
          <img
            loading="lazy"
            src={aboutUsImg}
            className="w-full h-auto rounded-lg object-cover"
            alt="About Us"
          />
        </div>
      </div>
    </section>
  );
});

export default AboutSection;
