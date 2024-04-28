import React from "react";
import Navbar from "../navbar/page";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="main">
      <div
        className="w-[100%] md:h-auto h-auto bg-cover bg-opacity-0"
        style={{ backgroundImage: "url('/assets/background.png')" }}
      >
        <div className="pt-4">
          <Navbar />
        </div>
        <div className="flex  gap-10 flex-col items-center justify-between w-screen md:flex-row   sm:px-[16px] md:px-[40px] lg:px-[70px] xl:px-[120px] ">
          <div className="font-bold text-[20px] lg:text-[40px]   md:text-[20px] text-black ">
            <h1>Welcome To India's First </h1>
            <h1 className="text-[#4a508e]">Creater's Marketplace</h1>
            <h2 className="text-[12px] md:text-[18px] lg:text-[22px] md:mt-[44px] ">
              Create your first E-Store @ Zero Cost
            </h2>
            <p className="text-[18px]  hidden md:block font-normal mt-[28px] w-full ">
              Empower your creativity with Createnary. Showcase, sell, and
              connect with a global audience effortlessly, turn your products
              into profits.
            </p>
            <Link href="/page2">
              <button className="text-[14px] bg-[#4a508e] p-[10px] rounded-xl text-white mx-auto md:mx-0 block font-normal mt-[20px] mb-[20px] animate-slide-in hover:scale-110 transition-all">
                Get Started
              </button>
            </Link>
          </div>
          <div className="flex-grow sm:w-[450px] md:w-full ">
            <img
              loading="lazy"
              decoding="async"
              data-ming="1"
              className="w-auto h-full object-cover"
              src="/assets/hero.png"
              style={{ color: "transparent" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
