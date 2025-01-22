import React from "react";
import { appPortfolioHomepage, webPortfolioHomepage } from "../../constant";
import { useKeenSlider } from "keen-slider/react";

const animation = { duration: 60000, easing: (t) => t };

const Portfolio = ({ page }) => {
  const isWebDevelopment = Boolean(page === "web-development");
  let portfolio = isWebDevelopment
    ? webPortfolioHomepage
    : appPortfolioHomepage;

  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 1,
      spacing: 30,
    },
    breakpoints: {
      "(max-width: 639px)": {
        // Tailwind 'sm' and below
        slides: {
          perView: 1, // Show 1 slide
          spacing: 30,
        },
      },
      "(min-width: 640px) and (max-width: 767px)": {
        // Tailwind 'md' below (640px to 767px)
        slides: {
          perView: 2, // Show 2 slides
          spacing: 30,
        },
      },
      "(min-width: 768px) and (max-width: 1023px)": {
        // Tailwind 'lg' below (768px to 1023px)
        slides: {
          perView: 3, // Show 3 slides
          spacing: 30,
        },
      },
      "(min-width: 1024px)": {
        // Tailwind 'lg' and above (1024px and above)
        slides: {
          perView: 3, // Show 4 slides
          spacing: 30,
        },
      },
    },

    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  return (
    <div
      data-aos="fade-up"
      id="portfolio"
      className="text-black py-[2rem] relative"
    >
      {/* <div className="blue-bg-shape rotate-[-45deg] top-[2rem] right-3 -z-10"></div> */}
      {/* <div className="blurred-red-circle h-[25rem] w-[25rem] bottom-[-2rem] left-[-2rem] -z-10"></div> */}
      <div className="">
        <div className="flex flex-col items-center gap-5 text-black">
          <p className="gradient-text uppercase gradient-rounded-text-box">
            Portfolio
          </p>
          <h2 className="heading-2 text-center mt-16 mb-5">Our Selected Projects</h2>
          <div ref={sliderRef} className="keen-slider">
            {portfolio.map((obj) => (
              <div
                key={obj.title}
                className="keen-slider__slide border-2 border-primary/40 rounded-xl bg-custom-gradient "
                // data-aos="fade-up"
              >
                {/* <div
                  className={`  lg:max-h-[316px]  2xl:max-h-[467px] 2xl:min-h-[467px]
                  w-full overflow-hidden `}
                > */}
                {/* ${obj.title === "House of Deliverance" && `2xl:min-h-[480px]`} */}
                <img
                  src={obj.img}
                  alt={obj.title}
                  className="rounded-t-xl hover:scale-105 transition-all duration-300 lg:max-h-[316px] w-full  2xl:max-h-[467px] object-cover"
                />
                {/* ${obj.title === "House of Deliverance" && `2xl:min-h-[480px]`} */}
                {/* </div> */}
                <div className="px-3 mt-3 pb-5 max-h-[96px]">
                  <h4 className="font-semibold text-xl">{obj.title}</h4>
                  <p className="desc">{obj.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
