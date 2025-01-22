import React from "react";
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import { Link as ScrollLink } from "react-scroll";
import { companyDetails, logoImg } from "../../constant";
import { Link } from "react-router-dom";

const LandingFooter = () => {
  return (
    <div className="py-14 bg-[#e2f5fb]">
      <div className="wrapper text-black">
        <div className="flex md:flex-row flex-col justify-between gap-10">
          <div className="flex flex-col items-center">
            <img src={logoImg} className="h-[4rem]" alt="" />
            <p className="desc md:max-w-[15rem] text-sm text-center mt-5 text-black">
              We have rapidly grown into a trusted partner for organizations
              seeking digital transformation, enhanced operational efficiency.
            </p>
          </div>
          <div className="flex md:flex-row flex-col gap-10">
            <div className="flex flex-col gap-2">
              <h6 className="font-medium mb-1">Quick Links</h6>
              <ScrollLink
                smooth
                to="banner"
                offset={-60}
                className="text-black desc text-sm cursor-pointer"
              >
                Home
              </ScrollLink>
              <ScrollLink
                smooth
                to="about"
                offset={-60}
                className="text-black desc text-sm cursor-pointer"
              >
                About Us
              </ScrollLink>
              <ScrollLink
                smooth
                to="services"
                offset={-60}
                className="text-black desc text-sm cursor-pointer"
              >
                Services
              </ScrollLink>
              {/* <ScrollLink to='faqs' offset={-60} className="text-primarytextcolor desc text-sm">FAQs</ScrollLink> */}
              <ScrollLink
                smooth
                to="contact"
                offset={-60}
                className="text-black desc text-sm cursor-pointer"
              >
                Contact Us
              </ScrollLink>
              <ScrollLink
                smooth
                to="banner"
                offset={-60}
                className="text-black desc text-sm cursor-pointer"
              >
                Blogs
              </ScrollLink>
            </div>
            <div className="flex flex-col gap-2">
              <h6 className="font-medium mb-1">Contact Us</h6>
              <div className="flex flex-col">
                <h6 className="text-[.9rem] mb-1">Phone</h6>
                <Link
                  to={`tel:${companyDetails.phone}`}
                  className="text-black desc text-sm"
                >
                  {companyDetails.phone}
                </Link>
              </div>
              <div className="flex flex-col">
                <h6 className="text-[.9rem] mb-1">Email</h6>
                <Link
                  // to={`tel:${companyDetails.email}`}
                  className="text-black desc text-sm"
                >
                  {companyDetails.email}
                </Link>
              </div>
              <div className="flex flex-col mt-2">
                <h6 className="text-[.9rem] mb-1">Office Address</h6>
                <p className="text-black desc text-sm max-w-[15rem]">
                  {companyDetails.address}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-4 mt-7 border-t text-black border-primary w-full">
          <div className="flex justify-center gap-5 w-full">
            <div className="flex gap-5 items-center mt-5">
              <Link>
                <BsFacebook className="text-xl text-black hover:text-primary transition-all duration-300" />
              </Link>
              <Link>
                <BsTwitter className="text-xl text-black hover:text-primary transition-all duration-300" />
              </Link>
              <Link>
                <BsLinkedin className="text-xl text-black hover:text-primary transition-all duration-300" />
              </Link>
              <Link>
                <BsYoutube className="text-xl text-black hover:text-primary transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingFooter;
