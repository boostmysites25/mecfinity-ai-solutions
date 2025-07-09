import React, { useState } from "react";
import { appDevelopmentFAQs, faqs, webDevelopmentFAQs } from "../../constant";
import { BiCaretDown } from "react-icons/bi";

const Faqs = ({ page }) => {
  const [isOpen, setIsOpen] = useState(false);

  let faqList;

  if (page === "web-development") {
    faqList = webDevelopmentFAQs;
  } else if (page === "app-development") {
    faqList = appDevelopmentFAQs;
  } else {
    faqList = faqs;
  }
  return (
    <div
      className="sm:py-[5rem] bg-backgroundcolor relative"
      style={{
        backgroundImage: `url(${require("../../assets/images/pattern2.png")})`,
      }}
    >
      <div className="bg-backgroundcolor/70 absolute inset-0 h-full w-full" />
      <div className="wrapper grid lg:grid-cols-1 gap-10 lg:gap-0 items-center relative z-[1]">
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
        className="bg-backgroundcolor"
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
        } transition-all duration-200 px-5 desc text-[.9rem] text-primarytextcolor bg-backgroundcolor`}
      >
        {answer}
      </p>
    </div>
  );
};
