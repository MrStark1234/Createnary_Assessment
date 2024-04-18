import Image from "next/image";
import React from "react";

const RightCont = ({ number }) => {
  return (
    <div className="m-[40px] p-[80px] pb-0">
      <div className="flex justify-center items-center gap-[50px]">
        <div className="w-[80px] h-[45px] rounded-lg flex justify-center items-center bg-[#4a508e]">
          <h1 className="text-white text-lg font-bold">{number}</h1>
        </div>
        <h1 className="text-2xl font-semibold head">
          Share the holidays, stays and experiences with your friends and family
        </h1>
      </div>

      <p className="font-light mt-4 ml-[100px]">
        You receive trending & curated Itineraries and Insider deals on Hotels &
        Flights to share
      </p>
      <div className="flex justify-center items-center">
        <Image
          src="/assets/image.png"
          className="mt-6 ml-[100px]"
          layout="responsive"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default RightCont;
