import Contact from "../../components/common/Contact";
import { gameDevelopmentServices } from "../../constant";
import { Link as ScrollLink } from "react-scroll";
import WhyChooseUs from "../../components/common/WhyChooseUs";
import Testimonials from "../../components/common/Testimonials";
import ReactPlayer from "react-player";
import gameBanner from "../../assets/videos/game-development.mp4";
import Faqs from "../../components/common/Faqs";
import Credibility from "../../components/common/Credibility";
import ProcessFlowchart from "../../components/landingPages/ProcessFlowChart";
import KeyBenefits from "../../components/landingPages/KeyBenefits";
import CTA from "../../components/landingPages/CTA";
import gameLandingAbout from "../../assets/images/app-landing-about.webp";

const gameReviews = [
  {
    id: 1,
    name: "Alex Chen",
    role: "Game Director, Pixel Studios",
    desc: "MecfinityAI delivered an exceptional mobile game that exceeded our expectations. Their Unity expertise and attention to detail resulted in a polished, engaging experience that our players love.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Producer, Indie Game Studio",
    desc: "Working with MecfinityAI was a game-changer for our indie project. They brought our vision to life with stunning visuals and smooth gameplay mechanics that captivated our audience.",
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    role: "CEO, VR Gaming Company",
    desc: "Their Unreal Engine expertise helped us create a breathtaking VR experience. The team's technical skills and creative approach made our ambitious project a reality.",
  },
  {
    id: 4,
    name: "Emily Watson",
    role: "Creative Director, Casual Games Inc",
    desc: "MecfinityAI's mobile game development services helped us launch a successful puzzle game series. Their optimization techniques ensured smooth performance across all devices.",
  },
];

const GameDevelopment = () => {
  return (
    <>
      <div id="banner" className="landing-page min-h-screen relative">
        <ReactPlayer
          url={gameBanner}
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
        <div className="bg-black/40 absolute w-full h-full"></div>
        <div
          data-aos="fade-up"
          className="pt-[8rem] sm:pt-[3rem] pb-[3rem] min-h-screen wrapper flex items-center h-full"
        >
          <div className="relative z-10 px-6 justify-center h-full flex flex-col items-center gap-5 text-center md:max-w-[60rem] mx-auto">
            <div className="rounded-text-box border-white/70 font-medium text-white">
              Game Development
            </div>
            <h1 className="heading-1 text-white leading-tight">
              Bring Your Game Ideas to Life with Professional Development
            </h1>
            <p className="text-white desc font-medium">
              From concept to launch, we create engaging games across all platforms. 
              Our expert team delivers high-quality games with stunning visuals, 
              smooth gameplay, and immersive experiences that captivate players.
            </p>
            <ScrollLink
              to="contact"
              smooth
              offset={-90}
              className="primary-btn mt-2"
            >
              Start Your Game Project
            </ScrollLink>
          </div>
        </div>
      </div>

      <section
        id="about"
        className="py-[3rem] bg-backgroundcolor text-primarytextcolor relative"
        style={{
          backgroundImage: `url(${require("../../assets/images/pattern2.png")})`,
        }}
      >
        <div className="bg-backgroundcolor/70 absolute inset-0 h-full w-full" />

        <div className="wrapper">
          <div
            data-aos="fade-up"
            className="gradient-rounded-text-box mx-auto lg:mx-0"
          >
            Game Services
          </div>
          <div className="flex flex-col-reverse items-center lg:grid grid-cols-2 gap-10 mt-7">
            <div
              data-aos="fade-right"
              className="flex h-full flex-col gap-7 text-center lg:text-start"
            >
              <div className="flex flex-col gap-7">
                <h2 className="heading-2">
                  Professional Game Development Across All Platforms
                </h2>
                <p className="desc">
                  We specialize in creating engaging games for mobile, PC, and console platforms. 
                  From casual mobile games to complex AAA titles, our team combines technical 
                  expertise with creative vision to deliver games that players love and remember.
                </p>
              </div>

              <div className="flex justify-center lg:justify-start gap-5 mt-4">
                <ScrollLink
                  to="contact"
                  smooth
                  offset={-90}
                  className="primary-btn"
                >
                  Contact Us
                </ScrollLink>
                <ScrollLink
                  to="services"
                  smooth
                  offset={-80}
                  className="secondary-btn"
                >
                  Our Services
                </ScrollLink>
              </div>
            </div>
            <div data-aos="fade-left" className="h-full">
              <img
                loading="lazy"
                src={gameLandingAbout}
                className="object-contain max-h-[30rem] w-full rounded-lg"
                alt="Game development process"
              />
            </div>
          </div>
        </div>
      </section>
      <Contact service="Game Development" />
      <KeyBenefits
        title="Why Choose Our Game Development Services"
        benefits={[
          "Expert team with 5+ years of game development experience",
          "Support for Unity, Unreal Engine, and custom engines",
          "Cross-platform development for maximum reach",
          "Professional game art and animation services",
          "Comprehensive testing and quality assurance",
          "Post-launch support and updates",
        ]}
      />
      <div id="services" className="flex justify-center relative">
        <div className="wrapper py-10 flex flex-col items-center gap-5 z-10 text-primarytextcolor">
          <div data-aos="fade-up" className="gradient-rounded-text-box mx-auto">
            Our Game Services
          </div>
          <h1 data-aos="fade-up" className="heading-2 text-center max-w-2xl">
            Complete Game Development Solutions
          </h1>
          <p data-aos="fade-up" className="text-center max-w-2xl desc">
            From initial concept to final release, we provide end-to-end game 
            development services tailored to your vision and target audience.
          </p>
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 py-[2rem] mx-auto max-w-6xl"
          >
            {gameDevelopmentServices.map((item) => {
              const isLastItem = item.id === gameDevelopmentServices.length;
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
          Ready to create your next hit game? Let's discuss your vision!
        </h6>
        <ScrollLink
          to="contact"
          smooth
          offset={-90}
          className="primary-btn w-fit mt-4"
        >
          Get Game Consultation
        </ScrollLink>
      </div>
      <ProcessFlowchart
        steps={[
          "Game Concept & Design",
          "Technical Architecture Planning",
          "Art & Asset Creation",
          "Core Gameplay Development",
          "Level Design & Content",
          "Testing & Quality Assurance",
          "Platform Optimization",
          "Launch & Post-Release Support",
        ]}
      />
      <WhyChooseUs
        points={[
          "Certified Unity and Unreal Engine developers",
          "5+ years of game development experience",
          "Cross-platform expertise (Mobile, PC, Console)",
          "Professional game art and animation team",
          "Comprehensive testing and QA processes",
          "Post-launch support and updates",
        ]}
      />
      <Testimonials reviews={gameReviews} />
      <Credibility />
      <CTA
        title={"Have a game idea but don't know where to start?"}
        desc={
          "Our game development team can help bring your vision to life, from initial concept to successful launch across all platforms."
        }
      />
      <Faqs
        questions={[
          {
            question: "What game engines do you work with?",
            answer:
              "We specialize in Unity and Unreal Engine, the industry's leading game development platforms. We also work with custom engines and can recommend the best solution for your specific project.",
          },
          {
            question: "Do you develop games for all platforms?",
            answer:
              "Yes! We develop games for mobile (iOS/Android), PC (Windows/Mac/Linux), and console platforms (PlayStation, Xbox, Nintendo Switch). We can also create cross-platform games that work on multiple devices.",
          },
          {
            question: "What's included in your game development process?",
            answer:
              "Our comprehensive process includes concept design, technical architecture, art creation, programming, level design, testing, optimization, and post-launch support. We handle everything from idea to store release.",
          },
          {
            question: "Can you help with game art and animation?",
            answer:
              "Absolutely! We have a dedicated team of game artists and animators who create characters, environments, UI/UX, and animations. We can also work with your existing art assets or collaborate with your art team.",
          },
          {
            question: "How long does game development take?",
            answer:
              "Development time varies based on complexity, platform, and features. Simple mobile games typically take 2-4 months, while complex PC/console games can take 6-18 months. We provide detailed timelines during project planning.",
          },
          {
            question: "Do you provide post-launch support?",
            answer:
              "Yes! We offer ongoing support including bug fixes, updates, new content, and platform-specific optimizations. We can also help with marketing assets and store optimization.",
          },
        ]}
      />
      <Contact
        heading="Ready to Create Your Next Game?"
        desc="At Mecfinity AI Solutions, we turn game ideas into reality. Whether you're 
                an indie developer with a creative vision or an established studio looking 
                to expand, our experienced team is ready to bring your game to life. 
                Let's discuss your project and create something amazing together."
        service="Game Development"
      />
    </>
  );
};

export default GameDevelopment;
