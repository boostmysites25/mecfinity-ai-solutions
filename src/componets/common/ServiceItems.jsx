import React from "react";
import { allServices } from "../../constant";
import { Link } from "react-router-dom";
import { PiCaretDoubleRightBold } from "react-icons/pi";
import { BiBrain } from "react-icons/bi";

const ServiceItems = () => {
  return (
    <div className="py-[5rem] bg-backgroundcolor text-primarytextcolor">
      <div
        data-aos="fade-up"
        className="wrapper flex flex-col text-center gap-5 items-center"
      >
        <div data-aos="fade-up" className="gradient-rounded-text-box mb-2">
          Our Services
        </div>
        <h2 data-aos="fade-up" className="heading-2 max-w-[50rem]">
          Empowering the Future with AI Innovation
        </h2>
        <p data-aos="fade-up" className="desc max-w-[50rem]">
          At Mecfinity AI Solutions, we’re dedicated to crafting transformative
          technology solutions that leverage the power of artificial
          intelligence. Our mission is to revolutionize industries with
          innovative AI-driven strategies, delivering impactful and reliable
          solutions tailored to meet the evolving needs of businesses worldwide.
        </p>

        <div
          data-aos="fade-up"
          className=" grid sm:grid-cols-2 md:grid-cols-3  mt-3 gap-5"
        >
          {allServices.map((service) => (
            <Link
              // onClick={() => handleSelectServiceToShowDetail(service)}
              // data-aos="fade-up"
              to={`/services/${service.title}`}
              key={service.id}
              data-aos="fade-up"
              className=" rounded-lg p-[1px] cursor-pointer"
            >
              <div className="   group rounded-lg bg-backgro-gradient  hover:scale-105 shadow-2xl hover:shadow-primary/10 p-[1px] transition-all h-full duration-500 overflow-hidden">
                <div className="rounded-lg bg-white hover:bg-custom-gradient p-5 flex flex-col justify-between items-start text-start h-full gap-4">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        {/* <BiBrain className="w-6 h-6" /> */}
                        {service.img}
                      </div>
                    </div>
                    <h5 className="font-semibold text-xl font-raleway transition-colors duration-300 text-primary">
                      {service.title}
                    </h5>
                    <p className="desc text-primarytextcolor">{service.desc}</p>
                  </div>
                  <button
                    // onClick={() => handleSelectServiceToShowDetail(service)}
                    className="font-inter mt-1 flex items-center gap-3 text-primary hover:text-gray-700 transition-all duration-300 underline underline-offset-4"
                  >
                    Learn More <PiCaretDoubleRightBold />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceItems;
