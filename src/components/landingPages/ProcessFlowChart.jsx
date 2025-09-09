import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Import arrow icon from React Icons

const ProcessFlowchart = () => {
  return (
    <div className="bg-white py-14">
      <div className="wrapper flex flex-col gap-10 items-center justify-center">
        <div
          data-aos="fade-up"
          className="gradient-rounded-text-box mx-auto lg:mx-0"
        >
          Our Process
        </div>
        <div
          data-aos="fade-up"
          className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12"
        >
          {/* Step 1: Discover */}
          <div className="flex flex-col items-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg transform transition-transform duration-300 hover:scale-110">
              1
            </div>
            <p className="mt-4 text-xl font-semibold text-gray-800">Discover</p>
            <p className="mt-2 text-sm text-gray-600 text-center max-w-xs">
              Research and understand the problem space.
            </p>
          </div>

          {/* Arrow */}
          <FaArrowRight className="hidden lg:block text-3xl min-w-[1.9rem] text-blue-400 mx-4 transform transition-transform duration-300 hover:scale-125" />

          {/* Step 2: Design */}
          <div className="flex flex-col items-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg transform transition-transform duration-300 hover:scale-110">
              2
            </div>
            <p className="mt-4 text-xl font-semibold text-gray-800">Design</p>
            <p className="mt-2 text-sm text-gray-600 text-center max-w-xs">
              Create wireframes and prototypes.
            </p>
          </div>

          {/* Arrow */}
          <FaArrowRight className="hidden lg:block text-3xl min-w-[1.9rem] text-purple-400 mx-4 transform transition-transform duration-300 hover:scale-125" />

          {/* Step 3: Develop */}
          <div className="flex flex-col items-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg transform transition-transform duration-300 hover:scale-110">
              3
            </div>
            <p className="mt-4 text-xl font-semibold text-gray-800">Develop</p>
            <p className="mt-2 text-sm text-gray-600 text-center max-w-xs">
              Build the solution with modern technologies.
            </p>
          </div>

          {/* Arrow */}
          <FaArrowRight className="hidden lg:block text-3xl min-w-[1.9rem] text-pink-400 mx-4 transform transition-transform duration-300 hover:scale-125" />

          {/* Step 4: Deploy */}
          <div className="flex flex-col items-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg transform transition-transform duration-300 hover:scale-110">
              4
            </div>
            <p className="mt-4 text-xl font-semibold text-gray-800">Deploy</p>
            <p className="mt-2 text-sm text-gray-600 text-center max-w-xs">
              Launch the product to the world.
            </p>
          </div>

          {/* Arrow */}
          <FaArrowRight className="hidden lg:block text-3xl min-w-[1.9rem] text-orange-400 mx-4 transform transition-transform duration-300 hover:scale-125" />

          {/* Step 5: Support */}
          <div className="flex flex-col items-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg transform transition-transform duration-300 hover:scale-110">
              5
            </div>
            <p className="mt-4 text-xl font-semibold text-gray-800">Support</p>
            <p className="mt-2 text-sm text-gray-600 text-center max-w-xs">
              Provide ongoing maintenance and updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessFlowchart;
