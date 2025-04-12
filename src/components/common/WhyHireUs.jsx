import React from "react";
import {
  FaServer,
  FaMobileAlt,
  FaSearchDollar,
  FaCreditCard,
  FaRupeeSign,
  FaThumbsUp,
  FaUsers,
  FaHeadset,
} from "react-icons/fa";
import img from "../../assets/images/why-hire-us.png";

const WhyHireUs = () => {
  return (
    <section className="py-[4rem] bg-gradient-to-br from-white to-blue-50">
      <div className="wrapper p-5 rounded-2xl shadow-xl">
        {/* Section Header */}
        <div className="text-center mb-7">
          <div data-aos="fade-up" className="gradient-rounded-text-box mx-auto">
            Why Hire Us
          </div>
        </div>

        {/* Content Wrapper */}
        <div className="grid gap-16 items-center">
          {/* Description */}
          <div className="flex flex-col-reverse lg:grid grid-cols-[65%,1fr] lg:gap-8">
            <div className="p-5 border border-white/20">
              <p className="text-lg text-gray-700 leading-relaxed desc">
                At{" "}
                <span className="font-medium text-primary">
                  Mecfinity AI Solutions
                </span>
                , we stand out as the premier website development agency in
                India, offering a blend of technical expertise and creative
                innovation. Our expert team crafts custom web solutions tailored
                to your business needs, ensuring visually stunning, responsive,
                and secure websites that enhance user engagement and drive
                growth. We pride ourselves on delivering projects on time,
                adhering to the highest quality standards, and integrating SEO
                best practices to boost your online visibility. Serving clients
                across the country, our PAN India services guarantee that
                businesses nationwide can benefit from our top-notch web
                development and ongoing support. Choose Mecfinity AI for
                exceptional value, competitive pricing, and a commitment to
                excellence in every project.
              </p>
            </div>
            <img
              src={img}
              className="max-h-[40vh] h-fit w-full object-contain"
              loading="lazy"
              alt=""
            />
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Feature Items with Futuristic Design */}
            {[
              {
                icon: <FaServer className="text-blue-500" />,
                title: "Domain & Hosting",
              },
              {
                icon: <FaMobileAlt className="text-indigo-500" />,
                title: "Responsive Design",
              },
              {
                icon: <FaSearchDollar className="text-blue-400" />,
                title: "AI-Driven SEO",
              },
              {
                icon: <FaCreditCard className="text-indigo-400" />,
                title: "Payment Gateways",
              },
              {
                icon: <FaRupeeSign className="text-blue-500" />,
                title: "Predictive Pricing",
              },
              {
                icon: <FaThumbsUp className="text-indigo-500" />,
                title: "100% Satisfaction",
              },
              {
                icon: <FaUsers className="text-blue-400" />,
                title: "AI-Assisted Team",
              },
              {
                icon: <FaHeadset className="text-indigo-400" />,
                title: "24/7 Hologram Support",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                  <div className="relative flex flex-col items-center">
                    <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
                      {feature.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 text-center">
                      {feature.title}
                    </h4>
                    <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 mt-3 rounded-full opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHireUs;
