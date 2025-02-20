import React from "react";

const WhoWeAreSection = () => {
  return (
    <section className="py-[3rem] bg-secondary/5">
      <div
        data-aos-offset={-400}
        // data-aos-anchor-placement="bottom-center"
        data-aos="fade-up"
        className="wrapper text-center flex flex-col gap-3"
      >
        <div className="gradient-rounded-text-box mx-auto mb-4">Who We Are</div>
        <h1 className="heading-2 bg-gradient-to-r from-primary max-w-[50rem] mx-auto to-secondary bg-clip-text text-transparent">
          AI-Powered IT Solutions Tailored to Your Business Requirements
        </h1>
        <p className="desc max-w-[50rem] mx-auto">
          At Mecfinity AI Solutions, we recognize that your website is more than
          just an online presence—it's an essential part of your brand, a
          powerful business tool, and often the first interaction with potential
          customers. In today's fast-paced environment, making a lasting first
          impression is crucial. That's why we elevate web design beyond the
          basics, integrating advanced AI-driven features to enhance
          performance, personalize user experiences, and deliver actionable
          insights. Our approach is centered on boosting engagement, driving
          conversions, and accelerating your business growth.
        </p>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
