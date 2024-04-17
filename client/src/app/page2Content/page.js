import React from "react";

import RightCont from "../p2ContentRight/page";

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
            <button className="rounded-lg px-4 py-3 mt-10 text-white bg-[#4A508E] text-sm">
              Get Started
            </button>
          </div>
        </div>
        <div className="right w-[55%] h-[1925px] ">
          <RightCont number="1" />
          <RightCont number="2" />
          <RightCont number="3" />

          {/* <div className="m-[40px] p-[80px]">
            <div className="flex justify-center items-center gap-[50px]">
              <div className="w-[80px] h-[45px] rounded-lg flex justify-center items-center bg-[#4a508e]">
                <h1 className="text-white text-lg font-bold">1</h1>
              </div>
              <h1 className="text-2xl font-semibold head">
                Share the holidays, stays and experiences with your friends and
                family
              </h1>
            </div>

            <p className="font-light mt-4 ml-[100px]">
              You receive trending & curated Itineraries and Insider deals on
              Hotels & Flights to share
            </p>
            <div className="flex justify-center items-center flex-col">
              <img src="/assets/image.png" className="mt-6 ml-[100px]" />

              <button className="rounded-lg px-4 py-3 mt-10 text-white bg-[#5740e4] text-sm ml-[100px]">
                Share
              </button>
            </div>

          
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Page2Content;
