import React from "react";
// import bgImg from "../../assets/images/bg-img.webp";
import { useKeenSlider } from "keen-slider/react";
import img1 from "../../assets/images/client-logos/1.jpeg";
import img2 from "../../assets/images/client-logos/2.jpeg";
import img3 from "../../assets/images/client-logos/3.jpeg";
import img4 from "../../assets/images/client-logos/4.jpeg";
import img5 from "../../assets/images/client-logos/5.jpeg";
import img6 from "../../assets/images/client-logos/6.jpeg";
import img7 from "../../assets/images/client-logos/7.jpeg";
import img8 from "../../assets/images/client-logos/8.jpeg";
import img9 from "../../assets/images/client-logos/9.jpeg";
import img10 from "../../assets/images/client-logos/10.jpeg";

const animation = { duration: 10000, easing: (t) => t };

const Credibility = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 4,
      spacing: 15,
    },
    breakpoints: {
      "(max-width: 450px)": {
        slides: {
          perView: 2,
          spacing: 15,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 5,
          spacing: 30,
        },
      },
      "(min-width: 1280px)": {
        slides: {
          perView: 6,
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
      className="py-[1rem] sm:py-[3rem] bg-center bg-cover relative text-white"
      //   style={{ backgroundImage: `url(${bgImg})` }}
      //   data-aos="fade-up"
      //   data-aos-offset={-200}
    >
      <div className="absolute top-0 w-full h-full bg-backgroundcolor"></div>
      <div className="relative z-10 text-headertextcolor">
        <div className="wrapper">
          <h2 className="heading-2 max-w-[60rem] mx-auto text-center">
            Join Our <span className="text-primary">100+</span> Happy Clients
          </h2>
        </div>
        <div ref={sliderRef} className="keen-slider mt-5">
          {[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10].map(
            (img, index) => (
              <div
                key={index}
                className="keen-slider__slide w-full flex my-[2rem] justify-center px-3 rounded-3xl"
              >
                <img
                  width="200"
                  height="100"
                  loading="lazy"
                  src={img}
                  alt="featured in"
                  className="object-contain w-full rounded-2xl"
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Credibility;
