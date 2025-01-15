import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import homepagebanner from "../../assets/videos/home-banner.mp4";

const ServiceDetailsBanner = ({ title }) => {
  return (
    <div className="min-h-[45vh] md:min-h-[70vh] w-full page-banner relative bg-[#17012C]">
      <ReactPlayer
        url={homepagebanner}
        loop
        muted
        width="100vw"
        height="100%"
        playsinline
        playing
        className="react-player left-0 top-0 absolute object-cover h-full w-full"
      />
      <div className="absolute py-2 top-[40%] left-1/2 -translate-x-1/2 w-full flex flex-col items-center px-3">
        <h1
          data-aos="fade-up"
          className="text-primary text-center font-raleway text-[2rem] md:text-[3.5rem] font-bold leading-tight"
        >
          {title}
        </h1>
        <div
          data-aos="fade-up"
          className="mt-5 text-base sm:text-xl font-medium px-3 py-2 w-fit rounded-full  flex flex-wrap justify-center text-white items-center gap-1 sm:gap-2"
        >
          <Link to="/">Home</Link>
          <IoIosArrowForward />
          <Link to="/services">Services</Link>
          <IoIosArrowForward />
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsBanner;
