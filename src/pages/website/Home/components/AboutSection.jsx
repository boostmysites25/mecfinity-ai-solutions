import React from "react";
import aboutUsImg from "../../assets/images/aboutuscontent.webp";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
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
              At Mecfinity AI Solutions, we combine innovation with expertise to
              deliver custom-built digital solutions that elevate your business.
              Whether it’s creating dynamic websites, developing mobile
              applications, or exploring emerging technologies like AI and
              blockchain, we’re your reliable partner for navigating today’s
              fast-paced digital world.
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
            loading="lazy"
            src={aboutUsImg}
            className=" h-full rounded-lg w-full  mx-auto object-cover"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
