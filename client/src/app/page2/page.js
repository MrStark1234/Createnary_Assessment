import React from "react";
import Navbar from "../navbar/page";
import Footer from "../footer/page";
import Page2Content from "../page2Content/page";

const page = () => {
  return (
    <>
      <div className="bg-[#f8fafb] sm:px-[16px] xsm:px-[16px] md:px-[40px] lg:px-[70px] xl:px-[120px]  text-black">
        <Navbar />
        <Page2Content />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default page;
