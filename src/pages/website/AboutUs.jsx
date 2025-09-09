import React from "react";
import {
  aboutUsBanner,
  aboutusintroone,
  aboutusintrotwo,
  aboutUsItems,
  whyChooseUsContent,
  reviews,
} from "../../constant";
import UnlockEfficiency from "../../components/common/UnlockEfficiency";
import OurServices from "../../components/website/OurServices";
import Testimonials from "../../components/common/Testimonials";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import Credibility from "../../components/common/Credibility";

const AboutUs = () => {
  return (
    <>
      <div
        data-aos="fade-down"
        className=" h-[40vh] sm:h-[55vh] md:h-[70vh] relative"
      >
        <img
          loading="lazy"
          src={aboutUsBanner}
          className="object-cover object-[100%_35%] h-full w-full"
          alt=""
        />
        <div className="absolute top-0 w-full h-full bg-black/50"></div>
        <div className="absolute py-2  top-[40%] left-1/2 -translate-x-1/2 w-full flex flex-col items-center px-3">
          <h1
            data-aos="fade-up"
            className="heading text-white text-center text-[2.18rem] md:text-7xl font-bold leading-tight"
          >
            About Us
          </h1>
          <div
            data-aos="fade-up"
            className="mt-2 text-base sm:text-xl font-medium px-3 py-2 w-fit rounded-full  flex flex-wrap justify-center text-white items-center gap-1 sm:gap-2"
          >
            <Link to="/">Home</Link>
            <IoIosArrowForward />
            <p className="text-white">About us</p>
          </div>
        </div>
      </div>
      <div
        className="py-[2rem] sm:py-[2rem] text-primarytextcolor text-center relative"
        style={{
          backgroundImage: `url(${require("../../assets/images/pattern2.png")})`,
        }}
      >
        <div className="bg-backgroundcolor/80 absolute inset-0 h-full w-full" />
        <section className=" px-4 py-6 sm:py-12 md:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              {/* Left Content */}
              <div className="">
                <div
                  data-aos="fade-up"
                  className="gradient-rounded-text-box mb-6"
                >
                  Know About Us
                </div>
                <h1
                  data-aos="fade-up"
                  className="mb-6 heading-2 text-start font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl"
                >
                  Driving Progress with AI-Enhanced IT Solutions
                </h1>
                <p
                  data-aos="fade-up"
                  className="text-lg text-start leading-relaxed text-gray-600"
                >
                  At Mecfinity AI Solutions, we believe that every business has
                  the potential to excel in the digital era. Since our
                  inception, we have been dedicated to providing innovative,
                  high-quality digital solutions that enable companies to
                  succeed and grow. From custom websites and mobile applications
                  to advanced AI solutions and blockchain technology, our team
                  is committed to transforming your vision into reality with
                  precision and creativity.
                  <br />
                  <br />
                  We bring together a diverse team of experts who combine their
                  skills and experience to develop solutions that are not only
                  effective but also tailored to your business needs. By working
                  closely with you, we ensure that we fully understand your
                  requirements, objectives, and challenges, allowing us to
                  deliver solutions that truly make a difference.
                </p>
              </div>

              {/* Right Images */}
              <div className="relative max-w-[300px] sm:ml-20  sm:max-w-[400px] h-[300px]">
                {/* Circuit Board Image */}
                <div className="absolute top-0 right-0 max-w-[250px] sm:max-w-[300px]  overflow-hidden rounded-lg shadow-xl">
                  <img
                    loading="lazy"
                    data-aos="fade-up"
                    src={aboutusintroone}
                    alt="Circuit board with glowing components"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* People Image */}
                <div className="absolute left-0 bottom-10 sm:bottom-0 max-h-[140px] sm:max-h-[180px] max-w-[200px] sm:max-w-[250px] overflow-hidden rounded-lg shadow-xl">
                  <img
                    loading="lazy"
                    data-aos="fade-up"
                    src={aboutusintrotwo}
                    alt="Team members working together"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-6 sm:py-16 bg-gradient-to-b from-background to-background/80">
          <div className="wrapper mx-auto px-4">
            <div className="text-center mb-16">
              <div
                data-aos="fade-up"
                className="gradient-rounded-text-box mx-auto mb-6"
              >
                About Us
              </div>
              <h3
                className="text-4xl font-semibold mb-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Magic Behind Our IT Solutions
              </h3>
              <p
                className="text-xl text-muted-foreground max-w-2xl mx-auto"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                We begin by conducting a comprehensive needs assessment to
                understand your specific requirements, challenges, and goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {aboutUsItems.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="">
                    <img
                      loading="lazy"
                      src={item.image}
                      alt={item.title}
                      className="transition-all duration-300 hover:opacity-75 h-[270px] w-full object-cover"
                    />
                  </div>
                  <div className={`p-6 `}>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-sm text-card-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <UnlockEfficiency />

        {/* Mission and Vision Section */}
        <section className="py-12 sm:py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="wrapper mx-auto">
            <div className="text-center mb-12">
              <div
                data-aos="fade-up"
                className="gradient-rounded-text-box mx-auto mb-6"
              >
                Our Purpose
              </div>
              <h3
                className="heading-2 mb-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Mission & Vision
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Mission Card */}
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-primary">
                    Our Mission
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  At Mecfinity AI, our mission is to build responsible,
                  accessible, and intelligent technologies that elevate human
                  potential and transform data into real-world impact. We
                  automate the mundane, unlock deeper insights, and drive
                  sustainable growth, empowering individuals, organizations, and
                  communities to work smarter, faster, and more meaningfully.
                  Guided by transparency, inclusivity, and ethical innovation.
                </p>
              </div>

              {/* Vision Card */}
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-primary">
                    Our Vision
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  We envision a future where AI is not just technology, but a
                  trusted companion, enhancing industries, accelerating
                  equitable progress, and enabling every individual to thrive.
                  Mecfinity AI strives to make intelligent solutions universally
                  accessible, culturally adaptable, and fundamentally human,
                  creating a smarter, more connected, and compassionate world.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="py-6 sm:py-16 px-4 md:py-12 relative"
          style={{
            backgroundImage: `url(${require("../../assets/images/pattern2.png")})`,
          }}
        >
          <div className="bg-backgroundcolor/70 absolute inset-0 h-full w-full" />
          <div className="max-w-7xl mx-auto">
            <h2
              data-aos="fade-up"
              className="heading-2 font-bold text-center mb-12 text-black"
            >
              Why Choose Mecfinity AI Solutions?
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {whyChooseUsContent.map((feature, index) => (
                <div
                  data-aos="fade-up"
                  key={index}
                  className="relative group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      {feature.img}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <OurServices length={3} />
      <Credibility />
      <Testimonials reviews={reviews} />
    </>
  );
};

export default AboutUs;
