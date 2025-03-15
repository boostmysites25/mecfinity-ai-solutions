import React from "react";
import { Link } from "react-scroll";

const CTA = ({ title, desc }) => {
  return (
    <section className="py-[3rem] text-primarytextcolor bg-white">
      <div
        data-aos-offset={-400}
        data-aos="fade-up"
        className="wrapper flex flex-col text-primarytextcolor items-center gap-5 text-center"
      >
        <div className="gradient-rounded-text-box">Unlock Efficiency</div>
        <h2 className="heading-2 max-w-5xl mx-auto text-center">{title}</h2>
        <p className="desc max-w-[40rem] text-center">{desc}</p>
        <Link to="contact" smooth offset={-90} className="primary-btn mt-3">
          Get Your Free Quote Now
        </Link>
      </div>
    </section>
  );
};

export default CTA;
