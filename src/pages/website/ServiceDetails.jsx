import React from "react";
import { useParams } from "react-router-dom";
import Testimonials from "../../components/common/Testimonials";
import { allServices, reviews } from "../../constant";
import { createUrlParam } from "../../utils/helper";

const ServiceDetails = () => {
  const { title } = useParams();
  const details = allServices.find(
    (service) => createUrlParam(service.title) === title
  );

  const splitIntoParagraphs = (text, numParagraphs = 3) => {
    const sentences = text.split(". ").map((sentence) => sentence + ".");
    const chunkSize = Math.ceil(sentences.length / numParagraphs);
    const paragraphs = [];

    for (let i = 0; i < sentences.length; i += chunkSize) {
      paragraphs.push(sentences.slice(i, i + chunkSize).join(" "));
    }

    return paragraphs;
  };

  return (
    <div className="flex flex-col gap-10">
      <img 
loading="lazy"
        data-aos="fade-up"
        src={details.image}
        
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt={details.title}
      />
      <div className="flex flex-col gap-4 md:px-5">
        {/* Service Title */}
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          {details.title}
        </h2>

        {/* Service Description */}
        <p data-aos="fade-up" className="description">
          {splitIntoParagraphs(details.detailContent).map(
            (paragraph, index) => (
              <p key={index} className="py-2">
                {paragraph}
              </p>
            )
          )}
        </p>
        <Testimonials reviews={reviews} />
      </div>
    </div>
  );
};

export default ServiceDetails;
