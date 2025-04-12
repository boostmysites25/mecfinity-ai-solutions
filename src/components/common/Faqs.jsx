import React, { useState } from "react";
import { faqPng, faqs, webDevelopmentFAQs } from "../../constant";
import { BiCaretDown } from "react-icons/bi";

const Faqs = ({ page }) => {
  const [isOpen, setIsOpen] = useState(false);

  let faqList;

  if (page === "web-development") {
    faqList = webDevelopmentFAQs;
  } else if (page === "app-development") {
  } else {
    faqList = faqs;
  }
  return (
    <div className="sm:py-[5rem] bg-backgroundcolor">
      <div className="wrapper grid lg:grid-cols-1 gap-10 lg:gap-0 items-center">
        {/* <div className="lg:flex hidden items-end justify-end">
          <div className="hover:scale-105 transition-all duration-500 bg-gradient-to-r min-w-[13rem] flex flex-col items-center text-white w-fit from-secondary/80 to-primary/80 rounded-xl p-5">
            <div className="flex flex-col justify-center gap-3 relative w-fit">
              <h1 className="heading-2">5</h1>
              <span className="absolute top-1 -right-3 text-lg">+</span>
            </div>
            <p className="font-medium mt-3">Years of Experience</p>
          </div>
          <div className="h-full max-h-[32rem]">
            <img
              loading="lazy"
              src={faqPng}
              className="h-full max-h-[32rem] object-contain hover:scale-105 transition-all duration-500"
              alt=""
            />
          </div>
        </div> */}
        <div className="flex flex-col items-center gap-7 text-primarytextcolor">
          <div className="gradient-rounded-text-box">FAQs</div>
          <h2 className="heading-2">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-2 mt-3 w-full">
            {faqList.map((faq, i) => (
              <FaqItem
                key={faq.id}
                {...faq}
                i={i}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;

const FaqItem = ({ question, answer, i, isOpen, setIsOpen }) => {
  return (
    <div className="flex flex-col w-full text-white">
      <div
        // className={`${
        //   isOpen === i && "bg-gradient-to-r from-secondary/10 to-primary/80"
        // } rounded-md bg-gradient-to-r from-secondary/10 to-primary/80`}
        className="bg-secondary/5"
      >
        <div
          onClick={() => setIsOpen((prev) => (prev === i ? "" : i))}
          className="cursor-pointer rounded-md p-3 text-primarytextcolor flex justify-between gap-4"
        >
          <p className="font-inter">{question}</p>
          <BiCaretDown
            className={`${
              isOpen === i && "rotate-180"
            } transition-all duration-200`}
          />
        </div>
      </div>

      <p
        className={`${
          isOpen === i ? "max-h-64 opacity-100 py-3" : "max-h-0 opacity-0"
        } transition-all duration-200 px-5 desc text-[.9rem] text-primarytextcolor`}
      >
        {answer}
      </p>
    </div>
  );
};
