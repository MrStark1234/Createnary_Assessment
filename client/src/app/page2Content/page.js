import React from "react";

import RightCont from "../p2ContentRight/page";
import Link from "next/link";

const Page2Content = () => {
  return (
    <div className="  h-[100%] w-full flex md:flex-row flex-col p-4 ">
      <div className=" flex-1  h-full  flex  items-center  ">
        <div className="font-bold text-[20px] md:ml-auto mr-14   mt-[50px] md:w-[48%]    ">
          <h1 className="md:hidden text-[16px] mb-3">HOW IT WORKS</h1>

          <h2 className="text-[18px]  ">
            GetSetYo handholds you at every step of the way
          </h2>
          <p className="text-[14px]   font-normal mt-[28px] ">
            You focus on helping your friends and family, we take care of
            everything else.
          </p>
          <Link href="/">
            <button className="text-[14px] bg-[#4a508e] p-[10px] rounded-xl text-white   block font-normal mt-[20px] mb-[20px] animate-slide-in hover:scale-110 transition-all">
              Get Started
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-1 flex-col h-full border-l-2 gap-10 border-[#d6d6d6]  ml-5">
        <RightCont number="1" />
        <RightCont number="2" />
        <RightCont number="3" />
        <RightCont number="4" />
      </div>
    </div>
  );
};

export default Page2Content;
