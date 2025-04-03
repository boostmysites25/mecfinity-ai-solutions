import Contact from "../../components/common/Contact";
import { vrArServices } from "../../constant";
import { Link as ScrollLink } from "react-scroll";
import WhyChooseUs from "../../components/common/WhyChooseUs";
import Testimonials from "../../components/common/Testimonials";
import ReactPlayer from "react-player";
import vrArBanner from "../../assets/videos/vrar.mp4";
import Faqs from "../../components/common/Faqs";
import Credibility from "../../components/common/Credibility";
import ProcessFlowchart from "../../components/landingPages/ProcessFlowChart";
import KeyBenefits from "../../components/landingPages/KeyBenefits";
import CTA from "../../components/landingPages/CTA";
import vrArLandingAbout from "../../assets/images/vrar.webp";

const vrArReviews = [
  {
    id: 1,
    name: "Sanjay Verma",
    role: "Training Head, Automotive Manufacturer",
    desc: "“Our VR training modules reduced equipment training costs by 60% while improving knowledge retention by 45% among technicians.”",
  },
  {
    id: 2,
    name: "Priya Nair",
    role: "Marketing Director, Real Estate Developer",
    desc: "“The AR property tours increased customer engagement by 300% and reduced physical site visits by 50%.”",
  },
  {
    id: 3,
    name: "Rahul Sharma",
    role: "CEO, Medical Education Startup",
    desc: "“MecfinityAI's surgical simulation platform has transformed how medical students practice complex procedures risk-free.”",
  },
  {
    id: 4,
    name: "Anjali Patel",
    role: "Retail Experience Manager",
    desc: "“Our AR virtual try-on solution increased conversion rates by 35% and reduced returns by 28%.”",
  },
];

const VRARDevelopment = () => {
  return (
    <>
      <div id="banner" className="landing-page min-h-screen relative">
        <ReactPlayer
          url={vrArBanner}
          loop
          muted
          width="100%"
          height="100%"
          playsinline
          playing
          pip={false}
          config={{
            file: {
              attributes: {
                style: {
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                },
                controlsList: "nodownload noplaybackrate",
                disablePictureInPicture: true,
                playsinline: true,
              },
            },
          }}
          className="react-player left-0 top-0 absolute object-cover h-full w-full"
        />
        <div className="bg-black/30 absolute w-full h-full"></div>
        <div
          data-aos="fade-up"
          className="pt-[8rem] sm:pt-[3rem] pb-[3rem] wrapper flex items-center min-h-screen"
        >
          <div className="relative z-10 px-6 justify-center h-full flex flex-col items-center gap-5 text-center md:max-w-[60rem] mx-auto">
            <div className="rounded-text-box border-white/70 font-medium text-white">
              VR/AR Development
            </div>
            <h1 className="heading-1 text-white leading-tight">
              Immersive Experiences That Transform Business Outcomes
            </h1>
            <p className="text-white desc font-medium">
              From virtual training to augmented commerce, we create
              cutting-edge VR/AR solutions that engage customers, train
              employees, and visualize the impossible.
            </p>
            <ScrollLink
              to="contact"
              smooth
              offset={-90}
              className="primary-btn mt-2"
            >
              Request Demo
            </ScrollLink>
          </div>
        </div>
      </div>

      <section
        id="about"
        className="py-[3rem] bg-backgroundcolor text-primarytextcolor wrapper"
      >
        <div
          data-aos="fade-up"
          className="gradient-rounded-text-box mx-auto lg:mx-0"
        >
          Extended Reality
        </div>
        <div className="flex flex-col-reverse items-center lg:grid grid-cols-2 gap-10 mt-7">
          <div
            data-aos="fade-right"
            className="flex h-full flex-col gap-7 text-center lg:text-start"
          >
            <div className="flex flex-col gap-7">
              <h2 className="heading-2">
                Bridging Physical and Digital Worlds with Immersive Technology
              </h2>
              <p className="desc">
                We design and develop VR/AR solutions that solve real business
                challenges across industries. Whether you need virtual product
                demonstrations, augmented maintenance guides, or immersive
                training simulations, our solutions drive measurable results
                through next-generation experiences.
              </p>
            </div>

            <div className="flex justify-center lg:justify-start gap-5 mt-4">
              <ScrollLink
                to="contact"
                smooth
                offset={-90}
                className="primary-btn"
              >
                Get Started
              </ScrollLink>
              <ScrollLink
                to="services"
                smooth
                offset={-80}
                className="secondary-btn"
              >
                Our Solutions
              </ScrollLink>
            </div>
          </div>
          <div data-aos="fade-left" className="h-full">
            <img
              loading="lazy"
              src={vrArLandingAbout}
              className="object-contain max-h-[30rem] w-full rounded-lg"
              alt="VR/AR experience visualization"
            />
          </div>
        </div>
      </section>
      <Contact />
      <KeyBenefits
        title="Business Advantages of VR/AR Technology"
        benefits={[
          "Enhance training effectiveness by up to 75%",
          "Reduce physical prototyping costs by 60%+",
          "Increase customer engagement by 3-5x",
          "Enable remote collaboration in 3D spaces",
          "Improve product understanding through visualization",
          "Create memorable brand experiences",
        ]}
      />
      <div id="services" className="flex justify-center relative">
        <div className="wrapper py-10 flex flex-col items-center gap-5 z-10 text-primarytextcolor">
          <div data-aos="fade-up" className="gradient-rounded-text-box mx-auto">
            Our VR/AR Services
          </div>
          <h1 data-aos="fade-up" className="heading-2 text-center max-w-2xl">
            End-to-End Immersive Technology Solutions
          </h1>
          <p data-aos="fade-up" className="text-center max-w-2xl desc">
            Comprehensive VR/AR development services from concept to deployment,
            tailored to your specific industry and use case.
          </p>
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 py-[2rem] mx-auto max-w-6xl"
          >
            {vrArServices.map((item) => {
              const isLastItem = item.id === vrArServices.length;
              const isLastItemOdd = isLastItem && item.id % 2 !== 0;

              return (
                <div
                  key={item.id}
                  className={`${
                    isLastItemOdd && "sm:col-span-2 sm:w-1/2"
                  } mx-auto shadow-2xl transition-all  bg-primary/15 hover:-translate-y-1 hover:bg-primary/25 duration-300 rounded-lg`}
                >
                  <div className="group rounded-lg bg-backgro-gradient hover:scale-105 shadow-2xl hover:shadow-primary/10 p-[1px] transition-all h-full duration-500 overflow-hidden">
                    <div className="rounded-lg bg-white hover:bg-custom-gradient p-5 flex flex-col justify-between items-start text-start h-full gap-4">
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            {item.img}
                          </div>
                        </div>
                        <h5 className="font-semibold text-2xl font-raleway transition-colors duration-300 text-primary">
                          {item.title}
                        </h5>
                        <p className="desc text-primarytextcolor">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="py-14 wrapper text-center space-y-5 flex flex-col items-center">
        <h6 className="heading-2">
          Special offer: Free VR/AR feasibility consultation for qualified
          businesses!
        </h6>
        <ScrollLink
          to="contact"
          smooth
          offset={-90}
          className="primary-btn w-fit mt-4"
        >
          Book Your Consultation
        </ScrollLink>
      </div>
      <ProcessFlowchart
        steps={[
          "Use Case Discovery & Strategy",
          "Experience Design & Storyboarding",
          "3D Asset Creation",
          "Development & Programming",
          "Hardware Integration",
          "User Testing & Iteration",
          "Deployment & Distribution",
          "Analytics & Optimization",
        ]}
      />
      <WhyChooseUs
        points={[
          "Unity and Unreal Engine certified developers",
          "Cross-platform deployment expertise",
          "Industry-specific solution frameworks",
          "Hardware-agnostic approach",
          "Proven track record across verticals",
          "Ongoing support and maintenance",
        ]}
      />
      <Testimonials reviews={vrArReviews} />
      <Credibility />
      <CTA
        title={
          "Still relying on flat, 2D experiences to showcase your products?"
        }
        desc={
          "Our VR/AR solutions can increase customer engagement by 300% while reducing physical sample costs by up to 60%."
        }
      />
      <Faqs
        questions={[
          {
            question:
              "What industries do you specialize in for VR/AR solutions?",
            answer:
              "We have delivered immersive solutions for manufacturing, healthcare, real estate, retail, education, and entertainment. Our team understands the unique requirements of each vertical and tailors experiences accordingly.",
          },
          {
            question: "What hardware platforms do you support?",
            answer:
              "We develop for all major VR headsets (Oculus, HTC Vive, HoloLens, etc.), mobile AR (iOS/Android), and web-based AR. We'll recommend the best platform based on your use case, budget, and audience.",
          },
          {
            question: "How long does VR/AR development typically take?",
            answer:
              "Most projects take 3-6 months depending on complexity. A basic proof-of-concept can be delivered in 4-8 weeks, with full development following requirements finalization.",
          },
          {
            question: "Can VR/AR work with our existing systems?",
            answer:
              "Absolutely. We integrate with your CRM, LMS, e-commerce platforms, and other enterprise systems through APIs. Our solutions are designed to complement and enhance your current tech stack.",
          },
        ]}
      />
      <Contact
        heading="Ready to Explore Immersive Technology?"
        desc="At Mecfinity AI Solutions, we're passionate about helping
                businesses harness the power of VR and AR. Whether you're
                looking to revolutionize training, enhance customer experiences,
                or visualize complex data, our team of immersive technology
                experts is ready to bring your vision to life. Let's discuss how
                extended reality can transform your business."
      />
    </>
  );
};

export default VRARDevelopment;
