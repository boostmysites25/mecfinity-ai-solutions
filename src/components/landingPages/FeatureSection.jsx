import React from "react";
import { FiLayers, FiUsers, FiClock, FiHeadphones } from "react-icons/fi";
import { motion } from "framer-motion";

const FeatureSection = () => {
  const features = [
    {
      title: "Innovative Designs",
      description:
        "We deliver cutting-edge, user-friendly designs tailored to client needs.",
      icon: <FiLayers className="text-2xl" />,
      color: "from-blue-400 to-cyan-400",
    },
    {
      title: "Expert Team",
      description:
        "We boast a team of experienced designers and developers committed to excellence.",
      icon: <FiUsers className="text-2xl" />,
      color: "from-emerald-400 to-teal-400",
    },
    {
      title: "Timely Delivery",
      description:
        "We ensure projects are completed on schedule without compromising quality.",
      icon: <FiClock className="text-2xl" />,
      color: "from-amber-400 to-yellow-400",
    },
    {
      title: "24x7 Support",
      description:
        "We prioritize client satisfaction by providing personalized and dedicated support.",
      icon: <FiHeadphones className="text-2xl" />,
      color: "from-violet-400 to-purple-400",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">
            Elevate Your Digital Presence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Next-generation solutions designed for tomorrow's challenges
          </p>
        </motion.div> */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-lg border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${feature.color}`}
              />
              <div className="relative z-10 p-8 h-full">
                <div
                  className={`w-16 h-16 rounded-xl mb-6 bg-gradient-to-br ${feature.color} flex items-center justify-center text-white shadow-lg`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <div
                  className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;
