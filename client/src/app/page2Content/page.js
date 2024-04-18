import React from "react";

import RightCont from "../p2ContentRight/page";
import Link from "next/link";

const Page2Content = () => {
  return (
    <div className="w-full h-[1925px] bg-[#f8f9fb] text-black">
      <div className="main flex justify-center">
        <div className="left w-[45%] h-[1925px]l ">
          <div className="m-[60px] p-[20px] mt-[200px]">
            <h1 className="text-3xl font-semibold">
              GetSetYo handholds you at every step of the way
            </h1>
            <p className="font-light mt-4">
              You focus on helping your friends and family, we take care of
              everything else.
            </p>
            <Link href="/">
              <button className="rounded-lg px-4 py-3 mt-10 text-white bg-[#4A508E] text-sm">
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <div className="right w-[55%] h-[1925px] ">
          <RightCont number="1" />
          <RightCont number="2" />
          <RightCont number="3" />
        </div>
      </div>
    </div>
  );
};

export default Page2Content;
