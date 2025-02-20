import React from "react";
import { Link } from "react-router-dom";

const UnlockEfficiency = React.memo(() => {
  return (
    <section className="py-[3rem] text-primarytextcolor bg-backgroundcolor">
      <div
        data-aos-offset={-400}
        data-aos="fade-up"
        className="wrapper flex flex-col text-primarytextcolor items-center gap-5 text-center"
      >
        <div className="gradient-rounded-text-box">Unlock Efficiency</div>
        <h2 className="heading-2 max-w-5xl mx-auto text-center">
          Ready to Maximize Your Business Potential with AI?
        </h2>
        <p className="desc max-w-[40rem] text-center">
          We provide AI-driven solutions tailored to grow with your business. Discover how our innovative services can elevate your success—let's work together to build a smarter, more prosperous future!
        </p>
        <Link to="/contact-us" className="primary-btn mt-3">
          Contact Us
        </Link>
      </div>
    </section>
  );
})

export default UnlockEfficiency;
