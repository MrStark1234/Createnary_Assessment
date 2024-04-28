import React from "react";

const RightCont = ({ number }) => {
  return (
    <div className="w-[80%] ">
      <div className="flex flex-row gap-5 md:-ml-[20px] -ml-[20px]    ">
        <h1 className="w-[70px] h-[35px] md:w-[50px] md:h-[34px] text-[25px]  rounded-md text-white text-center bg-[#4a508e]">
          {number}
        </h1>
        <h1 className="font-semibold  ">
          Share the holidays, stays and experiences with your friends and family
        </h1>
      </div>
      <div className="flex flex-col  ml-8 mt-4 ">
        <p className="text-[12px] ">
          You receive trending & curated Itineraries and Insider deals on Hotels
          & Flights to share
        </p>
        <img
          src="/assets/image.png"
          alt="pict"
          loading="lazy"
          width="1024"
          height="560"
          decoding="async"
          data-ming="1"
          className="h-[200px] w-[350px] aspect-w-1 aspect-h-1 shadow-lg rounded-2xl shadow-gray-500 mt-4"
          style={{ color: "transparent" }}
        />
      </div>
    </div>
  );
};

export default RightCont;
