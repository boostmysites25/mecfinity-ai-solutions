import React from "react";
import { Link } from "react-router-dom";
// import { ReactComponent as WhatsApp } from "../assets/svgs/WhatsappIcon.svg";
import { ReactComponent as WhatsApp } from "../../assets/svgs/WhatsappIcon.svg";
import { companyDetails } from "../../constant";
const WhatsAppIcon = () => {
  return (
    <Link
      className="fixed group bottom-[1.5rem] hover:-translate-y-1 z-30 bg-white rounded-full right-[1.5rem] transition-all duration-200"
      to={`https://wa.me/${companyDetails.whatsappbox}`}
      target="_blank"
      aria-label="Contact us on WhatsApp"
    >
      <WhatsApp className="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem] fill-green-500 group-hover:fill-primary group-hover:scale-110 rounded-full shadow-transparent shadow-large group-hover:shadow-primary/50 transition-all duration-300" />
    </Link>
  );
};

export default WhatsAppIcon;
