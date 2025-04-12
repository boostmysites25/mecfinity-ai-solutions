import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaAndroid,
  FaApple,
} from "react-icons/fa";
import { SiFlutter, SiKotlin, SiSwift } from "react-icons/si";

const TechStackSection = ({ page }) => {
  const isWeb = page === "web-development";

  const technologies = {
    webDevelopment: [
      {
        name: "HTML5",
        icon: <FaHtml5 className="text-4xl" />,
        color: "text-orange-500",
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt className="text-4xl" />,
        color: "text-blue-500",
      },
      {
        name: "JavaScript",
        icon: <FaJs className="text-4xl" />,
        color: "text-yellow-400",
      },
      {
        name: "React",
        icon: <FaReact className="text-4xl" />,
        color: "text-cyan-400",
      },
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-4xl" />,
        color: "text-green-500",
      },
      {
        name: "PHP",
        icon: <FaPhp className="text-4xl" />,
        color: "text-purple-500",
      },
    ],
    appDevelopment: [
      {
        name: "Flutter",
        icon: <SiFlutter className="text-4xl" />,
        color: "text-blue-400",
      },
      {
        name: "Kotlin",
        icon: <SiKotlin className="text-4xl" />,
        color: "text-purple-400",
      },
      {
        name: "Swift",
        icon: <SiSwift className="text-4xl" />,
        color: "text-orange-400",
      },
      {
        name: "Android",
        icon: <FaAndroid className="text-4xl" />,
        color: "text-green-400",
      },
      {
        name: "iOS",
        icon: <FaApple className="text-4xl" />,
        color: "text-gray-400",
      },
    ],
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-4 text-gray-900">
            Masters of Cutting-Edge Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
           
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies[isWeb ? "webDevelopment" : "appDevelopment"].map(
            (tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`flex flex-col items-center p-6 ${
                  tech.bg
                } rounded-xl border border-gray-200 hover:border-${
                  tech.color.split("-")[1]
                }-300 hover:shadow-md transition-all duration-300`}
              >
                <div className={`${tech.color} mb-3`}>{tech.icon}</div>
                <h3 className="text-lg font-medium text-center text-gray-800">
                  {tech.name}
                </h3>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
