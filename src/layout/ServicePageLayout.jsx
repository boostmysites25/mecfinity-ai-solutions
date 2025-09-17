import React, { useEffect, useRef } from "react";
import {
  Link,
  Navigate,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { BsClock } from "react-icons/bs";
import WebsiteHeader from "../components/website/WebsiteHeader";
import WebsiteFooter from "../components/website/WebsiteFooter";
import { companyDetails, allServices } from "../constant";
import ServiceDetailsBanner from "../components/common/ServiceBannerDetails";
import { createUrlParam } from "../utils/helper";
import WhatsAppIcon from "../components/common/Whatsapp";

const ServicePageLayout = () => {
  const { pathname } = useLocation();
  const { title } = useParams();
  const wrapperRef = useRef(null);
  const prevPath = useRef(pathname); // To store the previous path

  useEffect(() => {
    if (pathname.startsWith("/services/")) {
      // Check if the user is coming to the page for the first time or navigating within
      if (prevPath.current !== pathname) {
        // If the path is the same (navigation within the page), scroll to the wrapper
        if (wrapperRef.current) {
          const elementPosition =
            wrapperRef.current.getBoundingClientRect().top + window.pageYOffset;
          const offset = 100; // Adjust this value to your desired pixel offset
          window.scrollTo({
            top: elementPosition - offset,
            behavior: "smooth",
          });
        }
      } else {
        // If it's the first time visiting the page, scroll to the top
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }

      // Update the previous path to the current one
      prevPath.current = pathname;
    }
  }, [pathname]);

  const service = allServices.find(
    (service) => createUrlParam(service.title) === title
  );

  if (!service) {
    return <Navigate to="/services" />;
  }
  return (
    <>
      <WebsiteHeader />
      <WhatsAppIcon />
      <ServiceDetailsBanner title={service.title} />
      <div ref={wrapperRef} className="wrapper">
        <div className="pt-[5rem] grid md:grid-cols-[30%_65%] grid-cols-1 gap-10">
          <div className="w-full flex flex-col gap-10">
            <div
              data-aos="fade-up"
              className="bg-[#ECF8FF] p-4 lg:p-6 rounded-lg"
            >
              <h4 className="text-2xl font-medium">All Services</h4>
              <div className="mt-5 flex flex-wrap md:flex-col flex-col gap-3">
                {allServices.map((item) => (
                  <Link
                    key={item.title}
                    className={`${
                      createUrlParam(item.title) === title
                        ? "bg-primary text-white"
                        : "bg-white text-[#17012C]"
                    } flex items-center gap-2 justify-between p-3 rounded-md`}
                    to={createUrlParam(item.title)}
                  >
                    {item.title} <IoIosArrowRoundForward className="text-xl" />
                  </Link>
                ))}
              </div>
            </div>
            <Link to={`tel:${companyDetails.phone}`} className="font-semibold">
              <div
                data-aos="fade-up"
                className="text-center bg-gradient-to-b hidden md:flex flex-col items-center gap-3 text-white from-primary to-[#efb461b1] px-4 lg:px-6 py-10 rounded-lg"
              >
                <div className="w-[3.5rem] h-[3.5rem] bg-white text-primary rounded-full p-3 flex justify-center items-center">
                  <FaPhoneAlt className="text-3xl" />
                </div>
                <h4 className="text-2xl font-medium">Need Help? Call Here</h4>
                <Link
                  to={`tel:${companyDetails.phone}`}
                  className="font-semibold"
                >
                  {companyDetails.phone}
                </Link>
              </div>
            </Link>
          </div>
          <div className="w-full">
            <Outlet />
          </div>
          <div
            data-aos="fade-up"
            className="text-center bg-primary flex md:hidden flex-col items-start gap-3 px-4 lg:px-6 py-10 rounded-lg"
          >
            <h4 className="text-xl font-semibold">Working Days</h4>
            <div className="flex flex-col gap-3 w-full">
              <Link className="bg-white text-[#17012C] flex items-center gap-2 p-3 rounded-md">
                <BsClock className="text-xl text-primary" />
                Mon - Sat: 9:00 AM - 8:00 PM
              </Link>
              <Link className="bg-white text-[#17012C] flex items-center gap-2 p-3 rounded-md">
                <BsClock className="text-xl text-primary" />
                Sunday: Closed
              </Link>
              <Link
                to="/contact-us"
                className="purple-btn flex justify-center items-center gap-2 rounded-md"
              >
                Appointment Now <IoIosArrowRoundForward className="text-3xl" />
              </Link>
            </div>
          </div>
          <Link to={`tel:${companyDetails.phone}`} className="font-semibold">
            <div
              data-aos="fade-up"
              className="text-center bg-gradient-to-b flex md:hidden flex-col items-center gap-3 text-white from-primary to-[#efb461b1] px-4 lg:px-6 py-10 rounded-lg"
            >
              <div className="w-[3.5rem] h-[3.5rem] bg-white text-primary rounded-full p-3 flex justify-center items-center">
                <FaPhoneAlt className="text-3xl" />
              </div>
              <h4 className="text-xl font-semibold">Need Help? Call Here</h4>
              <h4 className="font-semibold">{companyDetails.phone}</h4>
            </div>
          </Link>
        </div>
      </div>
      {/* <GetInTouch /> */}
      <WebsiteFooter />
    </>
  );
};

export default ServicePageLayout;
