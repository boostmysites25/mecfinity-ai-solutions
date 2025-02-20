import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import { IoMdClose } from "react-icons/io";
import React, { useEffect, useState } from "react";
import { logoImg, routes } from "../../constant";
import { Link, useLocation } from "react-router-dom";

const WebsiteHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
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
      className={`pt-3 pb-6 fixed top-0 w-full z-50 text-headertextcolor transition-all duration-300 ${
        isScrolled
          ? "bg-[#e2f5fb] backdrop-blur-md text-black"
          : "bg-[#e2f5fb] text-black"
      }`}
    >
      <div className="wrapper flex justify-between items-center gap-10">
        <div className="flex justify-between items-center gap-20 w-full pl-[1rem] lg:pl-0">
          <Link to="/">
            <img 
              src={logoImg}
              className="h-[2rem] md:h-[3rem] ml-5 scale-125"
              alt="logo"
            />
          </Link>
          <div className="lg:flex mt-7 items-center gap-10 hidden">
            {routes.map(({ name, path }) => (
              <Link
                to={`${path}`}
                className={`link text-sm ${
                  pathname === `${path}` && "active-link"
                }`}
                key={path}
              >
                {name}
              </Link>
            ))}
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
              className="text-[2.2rem]"
            >
              <IoMdClose />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            {routes.map(({ name, path }) => (
              <Link
                onClick={() => setIsOpen(false)}
                key={path}
                className="text-3xl font-medium transition-colors duration-300 link"
                to={path}
              >
                {name}
              </Link>
            ))}
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

export default WebsiteHeader;
