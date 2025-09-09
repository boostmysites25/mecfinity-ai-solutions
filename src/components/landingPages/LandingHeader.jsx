import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import { IoMdClose } from "react-icons/io";
import React, { useEffect, useState } from "react";
import { Link as CustomLink } from "react-router-dom";
import { Link } from "react-scroll";
import { logoImg } from "../../constant";
const options = [
  {
    name: "Home",
    path: "banner",
  },
  {
    name: "About Us",
    path: "about",
  },
  {
    name: "Services",
    path: "services",
  },
  // {
  //   name: "FAQs",
  //   path: "faqs",
  // },
];

const LandingHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`py-6 fixed top-0 w-full   z-50  ${
        isScrolled
          ? "bg-backgroundcolor backdrop-blur-md text-black"
          : "bg-backgroundcolor text-black"
      }`}
    >
      <div className="wrapper flex justify-between items-center gap-10">
        <div className="flex justify-between items-center gap-20 w-full pl-[1rem] lg:pl-0">
          <Link smooth={true} to="banner" className="cursor-pointer">
            <img src={logoImg} className="w-[7.5rem] sm:w-[9rem] ml-2 scale-125" alt="logo" />
          </Link>
          <div className="lg:flex items-center gap-10 hidden">
            {options.map((option) =>
              option.name === "Home" ? (
                <CustomLink key={option.path} to={`/`} className="link text-sm">
                  Home
                </CustomLink>
              ) : (
                <Link
                  to={option.path}
                  className="link text-sm"
                  key={option.path}
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={1000}
                  activeClass="active-link"
                >
                  {option.name}
                </Link>
              )
            )}
            <Link
              onClick={() => setIsOpen(false)}
              to="contact"
              className="primary-btn"
              spy={true}
              smooth={true}
              offset={-60}
              duration={1000}
            >
              Book Your Free Strategy Call
            </Link>
          </div>
        </div>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="py-4 px-10 z-10"
        >
          <div className="mb-6 flex items-center justify-end pr-[.7rem] py-[.4rem]">
            <button
              onClick={() => setIsOpen(false)}
              className="text-black text-[2.2rem]"
            >
              <IoMdClose />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            {options.map((option) =>
              option.name === "Home" ? (
                <CustomLink
                  onClick={() => setIsOpen(false)}
                  key={option.path}
                  to={`/`}
                  className="text-3xl font-medium transition-colors duration-300 link"
                >
                  Home
                </CustomLink>
              ) : (
                <Link
                  onClick={() => setIsOpen(false)}
                  to={option.path}
                  className="text-3xl font-medium transition-colors duration-300 link"
                  key={option.path}
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={1000}
                >
                  {option.name}
                </Link>
              )
            )}
            <Link
              onClick={() => setIsOpen(false)}
              to="contact"
              className="text-3xl font-medium transition-colors duration-300 link"
              spy={true}
              smooth={true}
              offset={-60}
              duration={1000}
            >
              Contact Us
            </Link>
          </div>
        </Drawer>
        <div
          className="block lg:hidden justify-self-end"
          onClick={toggleDrawer}
        >
          <Hamburger
            color="black"
            size="23"
            toggled={isOpen}
            rounded
            toggle={setIsOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingHeader;
