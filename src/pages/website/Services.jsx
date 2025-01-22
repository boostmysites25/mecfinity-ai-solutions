import React from "react";
// import OurServices from "../../components/website/OurServices";
import UnlockEfficiency from "../../components/common/UnlockEfficiency";
import Testimonials from "../../components/common/Testimonials";
import Banner from "../../components/website/Banner";
import CommonProject from "../../components/website/CommonProject";
import ServiceItems from "../../components/common/ServiceItems";
import PopupForm from "../../components/common/PopupForm";

const Services = () => {
  return (
    <>
      <PopupForm storageKey={"formModalClosed"} />
      <Banner page="Services" />
      <ServiceItems />
      {/* <OurServices /> */}
      <CommonProject />
      <UnlockEfficiency />
      <Testimonials />
    </>
  );
};

export default Services;
