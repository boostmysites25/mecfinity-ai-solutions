import logoImg from "./assets/images/logo/logo.png";
import whyChooseUsIcon1 from "./assets/images/ph_target-light.png";
import whyChooseUsIcon2 from "./assets/images/mage_light-bulb.png";
import whyChooseUsIcon3 from "./assets/images/tdesign_user-talk.png";
import whyChooseUsIcon4 from "./assets/images/healthicons_ui-secure-outline.png";
import whyChooseUsPng from "./assets/images/whychooseus-png.png";
import faqPng from "./assets/images/faq-character.png";
import appDevBanner from "./assets/images/app-dev-banner.webp";
import webDevBanner from "./assets/images/web-landing-banner.webp";
import webLandingAbout from "./assets/images/web-landing-about1.webp";
import appLandingAbout from "./assets/images/app-landing-about.webp";
import endlessOpportunitiesImg1 from "./assets/images/section-8-img-1.png";
import endlessOpportunitiesImg2 from "./assets/images/section-8-img-2.png";
import endlessOpportunitiesImg3 from "./assets/images/section-8-img-3.png";
import homeBannerVideo from "./assets/videos/home-banner.mp4";
import aboutUsBanner from "./assets/images/aboutusbanner.webp";
import contactusbanner from "./assets/images/contactusbanner1.webp";
import aboutUsGridImg1 from "./assets/images/aboutus-png1.png";
import aboutUsGridImg2 from "./assets/images/aboutus-png2.png";
import aboutUsGridImg3 from "./assets/images/aboutus-png3.png";
import aboutUsGridImg4 from "./assets/images/aboutus-png4.png";
import aboutUsGridImg5 from "./assets/images/aboutus-png5.png";
import serviceswebdevelopment from "./assets/images/services/serviceswebdevelopment.jpg";
import serviceaidevelopment from "./assets/images/services/serviceaidevelopment.jpg";
import chatbotdevelopment from "./assets/images/services/chatbotdevelopment.jpg";
import datadevelopment from "./assets/images/services/datadevelopment.jpg";
import gamedevelopment from "./assets/images/services/gamedevelopment.jpg";
import blockchaindevelopment from "./assets/images/services/blockchaindevelopment.jpg";
import machinelearning from "./assets/images/services/machinelearning.jpg";
import clouddevelopment from "./assets/images/services/clouddevelopment.jpg";
import rpa from "./assets/images/services/rpa.jpg";
import aboutone from "./assets/images/aboutone.webp";
import abouttwo from "./assets/images/abouttwo.webp";
import aboutthree from "./assets/images/aboutthree.webp";
import aboutfour from "./assets/images/aboutfour.webp";
import aboutusintroone from "./assets/images/aboutusintroone.webp";
import aboutusintrotwo from "./assets/images/aboutusintrotwo.webp";
import allbgimage from "./assets/images/allbgimage.webp";
import { lazy } from "react";
import { BiBrain, BiBulb, BiCustomize, BiRocket } from "react-icons/bi";
import { GoFileMedia, GoGraph } from "react-icons/go";
import { SlBadge } from "react-icons/sl";
import {
  MdCloudQueue,
  MdOutlineDashboardCustomize,
  MdOutlineDeveloperMode,
  MdOutlineSmartToy,
  MdSupportAgent,
} from "react-icons/md";
import {
  FaAppStoreIos,
  FaCalendarAlt,
  FaChartLine,
  FaClipboardList,
  FaCloudUploadAlt,
  FaCogs,
  FaCoins,
  FaCube,
  FaFileContract,
  FaGlobeAmericas,
  FaGraduationCap,
  FaHeadset,
  FaLink,
  FaMobileAlt,
  FaNetworkWired,
  FaPhoneVolume,
  FaPlug,
  FaProjectDiagram,
  FaShieldAlt,
  FaStore,
  FaTools,
} from "react-icons/fa";
import { SiFlutter, SiHiveBlockchain } from "react-icons/si";
import { IoLogoAndroid } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import { TfiLayoutMediaRightAlt } from "react-icons/tfi";
import { TbDeviceMobileCode } from "react-icons/tb";
import { FaMobileScreen } from "react-icons/fa6";
import { AiOutlineBarChart } from "react-icons/ai";
import { RiShieldKeyholeLine } from "react-icons/ri";

const Home = lazy(() => import("./pages/website/Home/Home"));
const Services = lazy(() => import("./pages/website/Services"));
const ContactUs = lazy(() => import("./pages/website/ContactUs"));
const AboutUs = lazy(() => import("./pages/website/AboutUs"));
const Blogs = lazy(() => import("./pages/website/Blogs"));

export {
  logoImg,
  whyChooseUsPng,
  whyChooseUsIcon1,
  whyChooseUsIcon2,
  whyChooseUsIcon3,
  whyChooseUsIcon4,
  faqPng,
  appDevBanner,
  webDevBanner,
  webLandingAbout,
  appLandingAbout,
  endlessOpportunitiesImg1,
  endlessOpportunitiesImg2,
  endlessOpportunitiesImg3,
  homeBannerVideo,
  aboutUsBanner,
  aboutUsGridImg1,
  aboutUsGridImg2,
  aboutUsGridImg3,
  aboutUsGridImg4,
  aboutUsGridImg5,
  serviceswebdevelopment,
  serviceaidevelopment,
  chatbotdevelopment,
  datadevelopment,
  gamedevelopment,
  blockchaindevelopment,
  machinelearning,
  clouddevelopment,
  rpa,
  contactusbanner,
  aboutusintroone,
  aboutusintrotwo,
  allbgimage,
};

// company details
export const companyDetails = {
  phone: "+917483139873",
  whatsapp: "917483139873",
  whatsappbox: "917483139873",
  email: "info@mecfinityai.com",
  address: "Mangalore, India",
  linkedin: "https://www.linkedin.com/company/mecfinity-ai/",
  instagram: "https://www.instagram.com/mecfinityai?igsh=MTQ3MW92a3ZrZGo1Zg==",
};

export const emailjsDetails = {
  serviceId: "service_uisbzh8",
  templateId: "template_e8t5y0i",
  publicKey: "_UFO43_P5mAN3U4jH",
};

// website routes
export const routes = [
  {
    name: "Home",
    path: "/",
    component: <Home />,
  },
  {
    name: "Services",
    path: "/services",
    component: <Services />,
  },
  {
    name: "About Us",
    path: "/about-us",
    component: <AboutUs />,
  },
  {
    name: "Blogs",
    path: "/blogs",
    component: <Blogs />,
  },
  {
    name: "Contact Us",
    path: "/contact-us",
    component: <ContactUs />,
  },
];

export const faqs = [
  {
    id: 1,
    question: "What services does Mecfinity AI Solutions offer?",
    answer:
      "We specialize in Web Development, App Development, IoT Development, Cloud Computing Services, AI Calling Agency, Blockchain Development, and Virtual & Augmented Reality Development.",
  },
  {
    id: 2,
    question: "How can I contact Mecfinity AI Solutions?",
    answer:
      "You can reach us through the 'Contact Us' page on our website or email us directly at info@mecfinityai.com.",
  },
  {
    id: 3,
    question: "What industries do you serve?",
    answer:
      "We cater to a diverse range of industries, including healthcare, finance, retail, and more, providing tailored solutions to meet specific business needs.",
  },
  {
    id: 4,
    question: "Do you offer customized solutions?",
    answer:
      "Yes, we provide bespoke solutions tailored to your business requirements to ensure optimal outcomes.",
  },
  {
    id: 5,
    question: "What is your project development process?",
    answer:
      "Our process includes initial consultation, requirement analysis, design and development, testing, deployment, and ongoing support.",
  },
  {
    id: 6,
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines vary based on complexity and scope. After understanding your requirements, we provide a detailed timeline.",
  },
  {
    id: 7,
    question: "What are your pricing models?",
    answer:
      "We offer flexible pricing models, including fixed-price and time-and-materials, to suit different project needs.",
  },
  {
    id: 8,
    question: "Do you provide post-deployment support?",
    answer:
      "Yes, we offer comprehensive post-deployment support and maintenance service.",
  },
];

// web development services
// export const webDevelopmentServices = [
//   {
//     id: 1,
//     title: "E-commerce Websites",
//     icon: require("./assets/images/icons/online-shopping.png"),
//     img: <CgWebsite />,
//     description:
//       "Boost your online business with custom e-commerce solutions. Our platforms enhance customer engagement, streamline operations, and drive revenue growth through personalized shopping experiences and intelligent recommendations.",
//   },
//   {
//     id: 2,
//     title: "Social Media Websites",
//     img: <GoFileMedia />,
//     icon: require("./assets/images/icons/socialmedia.png"),
//     description:
//       "Develop custom social media websites that captivate audiences with AI-driven content recommendations and engagement strategies, fostering brand loyalty and growth.",
//   },
//   {
//     id: 3,
//     title: "Landing Websites",
//     img: <TfiLayoutMediaRightAlt />,
//     icon: require("./assets/images/icons/landing-page.png"),
//     description:
//       "Create high-converting landing pages with AI-enhanced design and user behavior tracking. Our designs grab attention, inspire action, and maximize conversions through personalized experiences.",
//   },
//   {
//     id: 4,
//     title: "Custom Websites",
//     img: <MdOutlineDashboardCustomize />,
//     icon: require("./assets/images/icons/software-development.png"),
//     description:
//       "Deliver bespoke websites tailored to your business needs. Our solutions combine creativity, functionality, and AI-driven features for an exceptional online presence.",
//   },
// ];
export const webDevelopmentServices = [
  {
    id: 1,
    title: "Custom Web Development",
    icon: require("./assets/images/icons/online-shopping.png"),
    img: <TfiLayoutMediaRightAlt />,
    description:
      "Tailored solutions built to match your unique brand identity. Our custom web development services ensure that your website is designed and developed to reflect your brand's values and meet your specific business needs.",
  },
  {
    id: 2,
    title: "E-commerce Solutions",
    img: <CgWebsite />,
    icon: require("./assets/images/icons/online-shopping.png"),
    description:
      "Seamless, secure platforms designed to drive online sales. Our e-commerce solutions provide a robust and user-friendly platform for your online store, ensuring a smooth shopping experience for your customers.",
  },
  {
    id: 3,
    title: "Mobile Optimization",
    img: <MdOutlineDashboardCustomize />,
    icon: require("./assets/images/icons/software-development.png"),
    description:
      "Responsive designs that deliver a stellar user experience on any device. Our mobile optimization services ensure that your website is fully responsive and performs excellently across all devices, enhancing user engagement and satisfaction.",
  },
];

export const appDevelopmentServices = [
  {
    id: 1,
    title: "Custom App Development",
    img: <FaAppStoreIos />,
    icon: require("./assets/images/icons/ios-development.png"),
    description:
      "Bespoke solutions for your unique needs. Our custom app development services ensure that your application is tailored to meet your specific business requirements, providing a seamless user experience and robust functionality.",
  },
  {
    id: 2,
    title: "Enterprise Solutions",
    img: <IoLogoAndroid />,
    icon: require("./assets/images/icons/android-development.png"),
    description:
      "Scalable, robust platforms for business growth. Our enterprise solutions are designed to handle the complexities of large-scale operations, ensuring reliability, security, and efficiency for your business processes.",
  },
  {
    id: 3,
    title: "Mobile Optimization",
    img: <SiFlutter />,
    icon: require("./assets/images/icons/flutter-development.png"),
    description:
      "Flawless performance on every device. Our mobile optimization services ensure that your application runs smoothly across all devices and platforms, providing a consistent and high-quality user experience.",
  },
  {
    id: 4,
    title: "UI/UX Design",
    img: <TbDeviceMobileCode />,
    icon: require("./assets/images/icons/hybrid-app-development.png"),
    description:
      "Engaging, intuitive user experiences. Our UI/UX design services focus on creating visually appealing and user-friendly interfaces that enhance user engagement and satisfaction.",
  },
];

export const iotDevelopmentServices = [
  {
    id: 1,
    title: "Device Integration",
    img: <FaPlug />,
    description:
      "Seamlessly connect diverse smart devices. Our device integration services ensure all your IoT components work together harmoniously, enabling smooth communication and interoperability across your entire ecosystem.",
  },
  {
    id: 2,
    title: "Data Analytics & AI",
    img: <AiOutlineBarChart />,
    description:
      "Transform raw data into actionable insights. Leverage our advanced analytics and AI capabilities to extract valuable business intelligence from your IoT data, driving smarter decisions and operational efficiency.",
  },
  {
    id: 3,
    title: "Security Solutions",
    img: <RiShieldKeyholeLine />,
    description:
      "Protect your network with advanced cybersecurity measures. Our comprehensive IoT security solutions safeguard your devices, data, and infrastructure against evolving threats in an increasingly connected world.",
  },
  {
    id: 4,
    title: "Custom IoT Platforms",
    img: <BiCustomize />,
    description:
      "Tailor-made systems to meet your specific business needs. We design and develop customized IoT platforms that align perfectly with your operational requirements and strategic objectives.",
  },
  {
    id: 5,
    title: "Enterprise Support",
    img: <MdSupportAgent />,
    description:
      "Ongoing support to ensure your system evolves with you. Our enterprise support services provide continuous maintenance, updates, and enhancements to keep your IoT infrastructure performing at its best.",
  },
];

export const cloudComputingServices = [
  {
    id: 1,
    title: "Cloud Migration",
    img: <FaCloudUploadAlt />,
    description:
      "Seamless transition to the cloud with minimal disruption. Our migration services ensure your applications and data move safely to optimized cloud environments with proper security and architecture.",
  },
  {
    id: 2,
    title: "Cloud Architecture",
    img: <FaNetworkWired />,
    description:
      "Designing scalable, secure, and cost-effective cloud infrastructures. We create future-proof architectures tailored to your workload requirements and business objectives.",
  },
  {
    id: 3,
    title: "Cloud Security",
    img: <FaShieldAlt />,
    description:
      "End-to-end protection for your cloud environments. Our security solutions cover identity management, data protection, network security, and compliance with industry standards.",
  },
  {
    id: 4,
    title: "Cloud Optimization",
    img: <FaChartLine />,
    description:
      "Maximize performance while minimizing costs. We analyze your cloud usage and implement FinOps practices to right-size resources and eliminate waste.",
  },
  {
    id: 5,
    title: "Managed Cloud Services",
    img: <FaCogs />,
    description:
      "24/7 monitoring, management, and support for your cloud environment. Our experts handle the complexity so you can focus on your business.",
  },
];

export const aiCallingServices = [
  {
    id: 1,
    title: "AI Sales Calls",
    img: <FaPhoneVolume />,
    description:
      "Boost conversion rates with AI agents that qualify leads, schedule appointments, and close deals with human-like persuasion and 24/7 availability.",
  },
  {
    id: 2,
    title: "Customer Support Calls",
    img: <FaHeadset />,
    description:
      "Handle common customer inquiries, troubleshoot issues, and provide account information with our always-available AI support agents.",
  },
  {
    id: 3,
    title: "Appointment Reminders",
    img: <FaCalendarAlt />,
    description:
      "Reduce no-shows by up to 60% with personalized, conversational reminders that confirm, reschedule, or cancel appointments.",
  },
  {
    id: 4,
    title: "Market Research Surveys",
    img: <FaClipboardList />,
    description:
      "Conduct thousands of research calls with natural conversations that yield higher completion rates than traditional IVR surveys.",
  },
  {
    id: 5,
    title: "Custom AI Call Flows",
    img: <FaProjectDiagram />,
    description:
      "Tailored calling solutions designed for your specific business processes, industry requirements, and integration needs.",
  },
];

export const blockchainServices = [
  {
    id: 1,
    title: "Smart Contract Development",
    img: <FaFileContract />,
    description:
      "Secure, self-executing contracts that automate business processes. We develop audited smart contracts for various use cases including payments, supply chain, and legal agreements.",
  },
  {
    id: 2,
    title: "DApp Development",
    img: <FaMobileAlt />,
    description:
      "Decentralized applications that run on blockchain networks. We build user-friendly DApps with seamless wallet integration and responsive interfaces.",
  },
  {
    id: 3,
    title: "Blockchain Integration",
    img: <FaLink />,
    description:
      "Connect your existing systems with blockchain networks. Our solutions bridge traditional databases and applications with decentralized ledgers.",
  },
  {
    id: 4,
    title: "Tokenization Solutions",
    img: <FaCoins />,
    description:
      "Create and manage digital assets with our token development services. We support fungible tokens, NFTs, and security tokens compliant with regulations.",
  },
  {
    id: 5,
    title: "Blockchain Consulting",
    img: <FaChartLine />,
    description:
      "Strategic guidance for blockchain adoption. We help assess feasibility, select platforms, and develop roadmaps tailored to your business objectives.",
  },
];

export const vrArServices = [
  {
    id: 1,
    title: "VR Training Simulations",
    img: <FaGraduationCap />,
    description:
      "Immersive training environments that improve knowledge retention by up to 75%. We create realistic simulations for equipment operation, safety procedures, and complex tasks.",
  },
  {
    id: 2,
    title: "AR Product Visualization",
    img: <FaCube />,
    description:
      "Let customers visualize products in their space before buying. Our AR solutions enable virtual try-ons, 3D product previews, and interactive demonstrations.",
  },
  {
    id: 3,
    title: "Virtual Showrooms",
    img: <FaStore />,
    description:
      "360° immersive environments that showcase your products beyond physical limitations. Perfect for real estate, automotive, and retail applications.",
  },
  {
    id: 4,
    title: "AR Maintenance Guides",
    img: <FaTools />,
    description:
      "Interactive, step-by-step repair instructions overlaid on equipment. Reduce service times by 40% and improve first-time fix rates.",
  },
  {
    id: 5,
    title: "Metaverse Development",
    img: <FaGlobeAmericas />,
    description:
      "Build your presence in the metaverse with custom 3D spaces, avatars, and interactive experiences that engage customers and employees.",
  },
];

// all services
export const allServices = [
  {
    id: 1,
    img: <MdOutlineDeveloperMode className="w-6 h-6" />,
    image: require("./assets/images/services/serviceswebdevelopment.jpg"),
    title: "Web Development",
    desc: "Build robust, scalable, and responsive websites to enhance your online presence. Our web development services ensure seamless functionality, engaging user interfaces, and compatibility across all devices.",
    detailContent:
      "Our web development team combines technical expertise with creative flair to deliver websites that not only look great but also perform excellently. We specialize in creating dynamic, user-friendly websites using modern frameworks like React, Angular, and Vue.js. From e-commerce platforms to content management systems, our custom solutions are tailored to meet your business goals. With a strong focus on performance optimization, security, and SEO, we ensure your website stands out in today's competitive digital landscape. Our services include full-cycle development, from ideation and wireframing to deployment and maintenance, providing end-to-end support for all your web development needs.",
  },
  {
    id: 2,
    img: <FaMobileScreen className="w-6 h-6" />,
    image: require("./assets/images/services/appdevelopment.webp"),
    title: "App Development",
    desc: "Create intuitive and engaging mobile applications designed to enhance user experiences and streamline operations. Our app development services focus on delivering high-performance, scalable, and visually appealing solutions tailored to your unique business needs.",
    detailContent:
      "We specialize in crafting mobile applications that resonate with your audience and fulfill your business objectives. From concept to deployment, our team ensures each app is user-friendly, feature-rich, and optimized for performance. Using the latest tools and frameworks, we create applications that work seamlessly across various platforms and devices. We prioritize user engagement by incorporating intuitive designs and functionality. Whether you need a standalone mobile app or an extension of your digital ecosystem, our end-to-end app development process includes wireframing, design, development, testing, and support. By integrating advanced technologies like AI and IoT, we deliver innovative apps that drive growth and provide a competitive edge. Our commitment to quality and scalability ensures that your app evolves with your business, offering long-term value and superior user experiences.",
  },
  {
    id: 3,
    img: <MdOutlineSmartToy className="w-6 h-6" />,
    image: require("./assets/images/services/ai.webp"),
    title: "IoT Development",
    desc: "Empower your business with smart IoT solutions that seamlessly connect devices, streamline operations, and enhance decision-making.",
    detailContent:
      "Our IoT development services focus on creating intelligent solutions that integrate seamlessly with your ecosystem. From smart home automation to industrial IoT systems, we deliver tailored applications that enable real-time monitoring, predictive maintenance, and enhanced operational efficiency. Leveraging the latest IoT platforms and protocols, we ensure secure and scalable deployments that drive innovation and business growth.",
  },
  {
    id: 4,
    img: <MdCloudQueue className="w-6 h-6" />,
    image: require("./assets/images/services/cloud.webp"),
    title: "Cloud Computing Services",
    desc: "Scale your business with reliable and secure cloud computing solutions. Our services include cloud migration, infrastructure management, and customized solutions to meet your unique needs.",
    detailContent:
      "Our cloud computing services help businesses transition to the cloud with minimal disruption. We specialize in cloud infrastructure management, data migration, and the development of cloud-native applications. With expertise in AWS, Azure, and Google Cloud, we ensure your cloud infrastructure is secure, scalable, and optimized for performance. From DevOps implementation to disaster recovery planning, we provide end-to-end cloud solutions that drive efficiency and innovation.",
  },
  {
    id: 5,
    img: <MdOutlineSmartToy className="w-6 h-6" />,
    image: require("./assets/images/services/ai.webp"),
    title: "AI Calling Agency",
    desc: "Leverage artificial intelligence to revolutionize customer interactions and streamline communication processes for your business.",
    detailContent:
      "Our AI calling agency services utilize advanced AI-powered solutions to enhance customer engagement and optimize business processes. From personalized voice assistants to automated support systems, we create intelligent tools that provide seamless, real-time interaction while reducing operational costs.",
  },
  {
    id: 6,
    img: <SiHiveBlockchain className="w-6 h-6" />,
    image: require("./assets/images/services/blockchain.webp"),
    title: "Blockchain Development",
    desc: "Revolutionize your business operations with secure, transparent, and decentralized blockchain solutions. Our blockchain development services focus on creating innovative applications tailored to your business needs.",
    detailContent:
      "Our blockchain development services are designed to empower businesses with robust and scalable decentralized applications. We specialize in building custom blockchain solutions, including smart contracts, cryptocurrency wallets, decentralized finance (DeFi) platforms, and supply chain solutions. Leveraging technologies like Ethereum, Hyperledger, and Binance Smart Chain, we ensure your solutions are secure, transparent, and efficient. Whether you're looking to implement blockchain for business transparency or to create innovative blockchain-powered applications, our team has the expertise to help you achieve your goals.",
  },
  {
    id: 7,
    img: <MdOutlineSmartToy className="w-6 h-6" />,
    image: require("./assets/images/services/arvr.jpg"),
    title: "VR-AR Development",
    desc: "Transform experiences with immersive Virtual and Augmented Reality solutions tailored to captivate and engage users.",
    detailContent:
      "Our VR/AR development services focus on creating interactive and visually stunning applications that redefine user engagement. From immersive training modules to augmented reality marketing campaigns, we deliver tailored solutions that integrate seamlessly into your business strategy. Leveraging advanced frameworks and tools, we ensure a flawless blend of reality and technology to enhance customer experiences and drive innovation.",
  },
];

// about us page why choose content
export const whyChooseUsContent = [
  {
    img: <BiBrain className="w-6 h-6" />,
    title: "Innovative Solutions Tailored to Your Vision",
    desc: "We work closely with you to understand your vision and transform it into innovative, tech-driven solutions that exceed your expectations and meet your specific business needs.",
  },
  {
    img: <BiRocket className="w-6 h-6" />,
    title: "Empowering Your Business with Cutting-Edge Technology",
    desc: "Our expertise in advanced technologies ensures that every solution we provide enhances your competitive edge and prepares your business for future success.",
  },
  {
    img: <BiBulb className="w-6 h-6" />,
    title: "Enhancing Efficiency through Innovation",
    desc: "We prioritize innovation to automate processes and develop intelligent solutions that improve the efficiency and effectiveness of your business operations.",
  },
  {
    img: <GoGraph className="w-6 h-6" />,
    title: "Leveraging Data for Strategic Growth",
    desc: "Our data-driven approach provides valuable insights that enable you to make informed decisions, identify growth opportunities, and stay ahead of the competition.",
  },
  {
    img: <SlBadge className="w-6 h-6" />,
    title: "Dedicated to Excellence and Partnership",
    desc: "We are committed to delivering exceptional service and building lasting relationships, supporting you from the initial idea to final implementation and beyond.",
  },
];

export const reviews = [
  {
    id: 1,
    profileImg: require("./assets/images/testimonials/2.jpg"),
    name: "Arjun R",
    role: "Chief Technology Officer, Tech Innovators",
    desc: "“Working with Mecfinity AI Solutions was a game-changer for our startup. Their expertise in web and app development was evident from the start. They delivered a high-quality, user-friendly platform that has significantly boosted our market presence.”",
  },
  {
    id: 2,
    profileImg: require("./assets/images/testimonials/1.jpg"),
    name: "Priya S",
    role: "Co-Founder, Eco Solutions",
    desc: "“Developing VR training simulations with Mecfinity AI Solutions has been one of the best decisions we’ve made. The immersive experience has made training more effective and engaging for our employees. The VR scenarios feel incredibly realistic, which has helped our team prepare for real-world situations without the risks. We are thrilled with the outcome and look forward to exploring more VR solutions in the future.”",
  },
  {
    id: 3,
    profileImg: require("./assets/images/testimonials/4.jpg"),
    name: "Vikram M",
    role: "Owner, Fashion Hub",
    desc: "“We tasked Mecfinity AI Solutions with developing a custom mobile app for our business. They exceeded our expectations by delivering a feature-rich app that our customers love. Their attention to detail and commitment to quality have been outstanding.”",
  },
  {
    id: 4,
    profileImg: require("./assets/images/testimonials/3.jpg"),
    name: "Aarav Kumar",
    role: "CEO, HealthTech Solutions",
    desc: "“The AI-powered customer service solution from Mecfinity AI Solutions has made a huge difference for our business. It has improved response times, streamlined our operations, and freed up our agents to focus on more complex tasks. Customers appreciate the quick and accurate answers they get, and we’ve seen a noticeable increase in satisfaction and efficiency. The team was easy to work with, and their support has been invaluable.”",
  },
  {
    id: 5,
    profileImg: require("./assets/images/testimonials/5.jpg"),
    name: "Rajesh P",
    role: "Data Analyst, Future Insights",
    desc: "“Working with Mecfinity AI Solutions to implement blockchain into our business has been a transformative experience. Their team helped us develop a secure and efficient blockchain system that has improved the transparency and security of our transactions. We’ve gained a competitive edge, and the entire process was smooth and well-managed. We couldn’t be more satisfied with the results.”",
  },
];

export const webPortfolioHomepage = [
  {
    id: 1,
    img: require("./assets/images/web_projects/1.webp"),
    title: "FE-Finance",
    description:
      "A comprehensive finance platform streamlining investments and portfolio management efficiently.",
  },
  {
    id: 2,
    img: require("./assets/images/web_projects/2.webp"),
    title: "Ocxee",
    description:
      "A global relocation service platform for seamless student mobility and accommodations.",
  },
  {
    id: 3,
    img: require("./assets/images/web_projects/3.webp"),
    title: "Leaderbridge",
    description:
      "A networking platform connecting leaders and professionals to foster meaningful collaborations.",
  },
  {
    id: 4,
    img: require("./assets/images/web_projects/4.webp"),
    title: "Gigzio",
    description:
      "An innovative job marketplace connecting freelancers and employers for diverse gig opportunities.",
  },
  {
    id: 5,
    img: require("./assets/images/web_projects/5.webp"),
    title: "FE Group",
    description:
      "A corporate solution provider enhancing business growth with tailored financial services.",
  },
  {
    id: 6,
    img: require("./assets/images/web_projects/6.webp"),
    title: "V Talkz",
    description:
      "A dynamic communication platform revolutionizing team collaboration and connectivity.",
  },
];

export const appPortfolioHomepage = [
  {
    id: 1,
    img: require("./assets/images/app_projects/1.webp"),
    title: "PartEx",
    description:
      "An intuitive platform simplifying vehicle part exchanges and purchases.",
  },
  {
    id: 2,
    img: require("./assets/images/app_projects/2.webp"),
    title: "Find A Driver",
    description:
      "A driver-matching app ensuring efficient and reliable transportation services.",
  },
  {
    id: 3,
    img: require("./assets/images/app_projects/3.webp"),
    title: "Artisan Express",
    description:
      "A platform connecting users with skilled artisans for home services.",
  },
  {
    id: 4,
    img: require("./assets/images/app_projects/4.webp"),
    title: "House of Deliverance",
    description:
      "A spiritual app offering resources for faith-building and inspiration.",
  },
];

export const aboutUsItems = [
  {
    title: "Tailored Solutions",
    description:
      "We specialize in creating personalized solutions that cater to the unique requirements and objectives of each client, ensuring optimal results.",
    image: aboutone,
    gradient: "from-primary/60 to-primary/80",
  },
  {
    title: "Expert Team",
    description:
      "Our team comprises seasoned professionals with extensive experience across various domains, capable of handling everything from user-friendly designs to complex backend systems.",
    image: abouttwo,
    gradient: "from-secondary/60 to-secondary/80",
  },
  {
    title: "Innovation Driven",
    description:
      "We prioritize innovation, constantly exploring new technologies and methodologies to deliver cutting-edge solutions that keep our clients ahead of the curve.",
    image: aboutthree,
    gradient: "from-primary/60 to-primary/80",
  },
  {
    title: "Client-Centric Approach",
    description:
      "Our clients are at the heart of everything we do. We maintain open communication, provide regular updates, and offer continuous support to ensure their success.",
    image: aboutfour,
    gradient: "from-secondary/60 to-secondary/80",
  },
];
