import React, { useEffect } from "react";
import {
  endlessOpportunitiesImg1,
  endlessOpportunitiesImg2,
  endlessOpportunitiesImg3,
} from "../../constant";
import gsap from "gsap";

const EndlessOpportunitiesSection = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to("#to-bottom", {
      y: -200,
      yoyo: true,
      repeat: -1,
      duration: 1,
      ease: "back.inOut",
    })
      .to("#to-top", {
        y: 200,
        yoyo: true,
        repeat: -1,
        duration: 1,
        ease: "back.inOut",
        delay: 0.5,
      })
      .to("#from-right", {
        x: -300,
        yoyo: true,
        repeat: -1,
        duration: 1,
        ease: "back.inOut",
      })
      .to("#from-left", {
        x: 300,
        yoyo: true,
        repeat: -1,
        duration: 1,
        ease: "back.inOut",
        delay: 1,
      });

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <>
      <section className="wrapper flex flex-col items-center justify-center py-14 text-center md:py-20 text-primarytextcolor">
        <div data-aos="fade-up">
          <div className="flex justify-center flex-col">
            <div data-aos="fade-up" className="flex md:-translate-x-[30%]">
              <h2 className="text-[1rem] sm:text-3xl text-end font-raleway">
                One <br />
                Platform
              </h2>
              <h2 className="text-5xl sm:text-7xl font-raleway font-medium md:mt-1">
                Endless
              </h2>
            </div>
            <h2
              data-aos="fade-up"
              className="text-5xl sm:text-7xl md:translate-x-[30%] font-raleway font-medium"
            >
              Opportunities
            </h2>
          </div>
        </div>
      </section>
      <section className="pt-7 pb-[5rem] bg-black overflow-hidden">
        <div className="wrapper">
          <div className="flex flex-col gap-5 mt-5">
            <div
              id="from-right"
              className="flex items-center gap-2 translate-x-[10%] md:translate-x-[25vw]"
            >
              <img
                src={endlessOpportunitiesImg1}
                className="h-[4rem] md:h-[7rem] object-cover rounded-full"
                alt=""
              />
              <img
                src={endlessOpportunitiesImg2}
                className="h-[4rem] md:h-[7rem] object-cover rounded-full"
                alt=""
              />
              <img
                src={endlessOpportunitiesImg3}
                className="h-[4rem] md:h-[7rem] object-cover rounded-full"
                alt=""
              />
              <img
                src={endlessOpportunitiesImg2}
                className="h-[4rem] md:h-[7rem] object-cover rounded-full"
                alt=""
              />
            </div>

            <div
              id="from-left"
              className="flex items-center gap-2 -translate-x-[100%] md:-translate-x-[25vw]"
            >
              <img
                src={endlessOpportunitiesImg3}
                className="h-[4rem] md:h-[7rem] object-cover rounded-full"
                alt=""
              />
              <img
                src={endlessOpportunitiesImg2}
                className="h-[4rem] md:h-[7rem] object-cover rounded-full"
                alt=""
              />
              <img
                src={endlessOpportunitiesImg3}
                className="h-[4rem] md:h-[7rem] object-cover rounded-full"
                alt=""
              />
              <img
                src={endlessOpportunitiesImg1}
                className="h-[4rem] md:h-[7rem] object-cover rounded-full"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EndlessOpportunitiesSection;
