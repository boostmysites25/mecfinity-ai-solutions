import React from "react";
import { FaRocket, FaShieldAlt, FaPlug, FaRobot } from "react-icons/fa"; // Import icons from React Icons

const KeyBenefits = ({ page }) => {
  return (
    <div className="bg-white">
      <div className="wrapper flex flex-col gap-10 items-center justify-center py-14">
        <div
          data-aos="fade-up"
          className="gradient-rounded-text-box mx-auto lg:mx-0"
        >
          Key Benefits
        </div>
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Benefit 1: Rapid Development */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
            <FaRocket className="text-5xl text-blue-500 mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Rapid Development
            </h2>
            <p className="text-sm text-gray-600">
              Launch {page === "web-development" ? "websites" : "apps"} up to
              50% faster with our streamlined processes.
            </p>
          </div>

          {/* Benefit 2: Robust Security */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
            <FaShieldAlt className="text-5xl text-green-500 mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Robust Security
            </h2>
            <p className="text-sm text-gray-600">
              Enterprise-grade protection to keep your data safe and secure.
            </p>
          </div>

          {/* Benefit 3: Seamless Integrations */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
            <FaPlug className="text-5xl text-purple-500 mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Seamless Integrations
            </h2>
            <p className="text-sm text-gray-600">
              Connect effortlessly with your existing tools and systems.
            </p>
          </div>

          {/* Benefit 4: AI-Enhanced Features */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
            <FaRobot className="text-5xl text-orange-500 mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              AI-Enhanced Features
            </h2>
            <p className="text-sm text-gray-600">
              Smart automation for superior performance and efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyBenefits;
