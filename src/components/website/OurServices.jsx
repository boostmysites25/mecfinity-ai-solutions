import React, { useState } from "react";
import { allServices } from "../../constant";
import { PiCaretDoubleRightBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import Drawer from "react-modern-drawer";
import { IoMdClose } from "react-icons/io";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";
import { useKeenSlider } from "keen-slider/react";
import { createUrlParam } from "../../utils/helper";

const OurServices = ({ length }) => {
  const [isOpen, setIsOpen] = useState(false);
  const services = allServices;
  const [selectedService, setSelectedService] = useState(services[0]);

  const handleSelectServiceToShowDetail = (service) => {
    setSelectedService(service);
    setIsOpen(true);
  };

  const [sliderRefone, instanceRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: 3,
        spacing: 1,
      },
      mode: "free",
      breakpoints: {
        "(max-width: 1024px)": {
          slides: {
            perView: 2, // Show 2 slides for screens below lg
            spacing: 10, // Adjust spacing for better layout
          },
        },
        "(max-width: 768px)": {
          slides: {
            perView: 1, // Show 1 slide for screens below md
            spacing: 5, // Adjust spacing for compact layout
          },
        },
      },
      animation: {
        duration: 1500,
        easing: (t) => t,
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  // Button click handler
  const handleNextClick = () => {
    if (instanceRef.current) {
      instanceRef.current.next(); // Move to the next slide
    } else {
      console.warn("Slider instance is not available.");
    }
  };

  const handlePrevClick = () => {
    if (instanceRef.current) {
      instanceRef.current.prev(); // Move to the prev slide
    } else {
      console.warn("Slider instance is not available.");
    }
  };
  return (
    <div className="py-[2rem] sm:py-[5rem] bg-backgroundcolor text-primarytextcolor">
      <div
        data-aos="fade-up"
        className="wrapper flex flex-col text-center gap-5 items-center"
      >
        <div data-aos="fade-up" className="gradient-rounded-text-box mb-2">
          Our Services
        </div>
        <h2 data-aos="fade-up" className="heading-2 max-w-[50rem]">
          Leading the Way in AI Solutions with Unmatched Precision
        </h2>
        <p data-aos="fade-up" className="desc max-w-[50rem]">
          At Mecfinity AI Solutions, we harness the power of artificial
          intelligence to craft innovative technology solutions that fuel
          business success. By utilizing AI-driven insights and automation, we
          deliver customized services that align with your goals, promoting
          smarter decision-making, enhanced operational efficiency, and
          long-term growth for your organization.
        </p>
        <div
          data-aos="fade-up"
          ref={sliderRefone}
          className="keen-slider grid sm:grid-cols-2 md:grid-cols-3   mt-3"
        >
          {services.map((service) => (
            <div className="keen-slider__slide  p-4 h-full ">
              <Link
                onClick={() => handleSelectServiceToShowDetail(service)}
                // data-aos="fade-up"
                to={`/services/${createUrlParam(service.title)}`}
                key={service.id}
                className=" rounded-lg p-[1px]  cursor-pointer h-full "
              >
                <div className="group hover:scale-105 h-full   rounded-lg bg-backgro-gradient p-[1px] transition-all  duration-500">
                  <div className="rounded-lg bg-white min-h-[31rem] sm:min-h-[23.25rem] hover:bg-custom-gradient p-5 flex flex-col justify-between items-start text-start h-full gap-4">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white  transition-colors duration-300">
                          {/* <BiBrain className="w-6 h-6" /> */}
                          {service.img}
                        </div>
                      </div>
                      <h5 className="font-semibold text-primary text-xl font-raleway">
                        {service.title}
                      </h5>
                      <p className="desc text-primarytextcolor">
                        {service.desc}
                      </p>
                    </div>
                    <button
                      onClick={() => handleSelectServiceToShowDetail(service)}
                      className="font-inter mt-1 flex items-center gap-3 text-primary  hover:text-gray-700  transition-all duration-300 underline underline-offset-4"
                    >
                      Learn More <PiCaretDoubleRightBold />
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div
          // data-aos="fade-up"
          className="flex justify-center items-center gap-10 mt-2"
        >
          <button
            className="text-primary text-5xl hover:text-primary/70 transition-all duration-200"
            onClick={handlePrevClick}
            aria-label="Previous slide"
          >
            <IoArrowBackCircleOutline />
          </button>
          <button
            className="text-primary text-5xl hover:text-primary/70 transition-all duration-200"
            onClick={handleNextClick}
            aria-label="Next slide"
          >
            <IoArrowForwardCircleOutline />
          </button>
        </div>
        {length && (
          <Link to="/services" className="primary-btn mt-6">
            All Services
          </Link>
        )}
      </div>

      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        direction="top"
        className="p-4 z-10 w-screen"
        lockBackgroundScroll
      >
        <div className="mb-3 flex items-center justify-end pr-[.7rem] py-[.4rem]">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-[2.2rem]"
          >
            <IoMdClose />
          </button>
        </div>
        <div className="flex flex-col gap-6 tex-white pb-[2rem]">
          <h1 className="heading-2">{selectedService.title}</h1>
          <p className="desc whitespace-pre-line">
            {selectedService.detailContent}
          </p>
        </div>
      </Drawer>
    </div>
  );
};

export default OurServices;
