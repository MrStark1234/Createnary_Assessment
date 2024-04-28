"use client";
import React, { useState } from "react";

import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import "./range.css";

const RangeSlide = () => {
  const [products, setProduct] = useState(0);
  const [followers, setFollowers] = useState(0);
  const [earning, setEarning] = useState(0);
  const [yearning, setYearning] = useState(0);

  const handleProduct = (event) => {
    setProduct(parseInt(event.target.value));
  };
  const handleFollower = (event) => {
    setFollowers(parseInt(event.target.value));
  };

  const productScroll = (event) => {
    if (event.deltaY > 0) {
      setProduct((prevValue) => Math.max(prevValue - 1, 0));
    } else {
      setProduct((prevValue) => Math.min(prevValue + 1, 10));
    }
  };
  const followerScroll = (event) => {
    if (event.deltaY > 0) {
      setFollowers((prevValue) => Math.max(prevValue - 10, 0));
    } else {
      setFollowers((prevValue) => Math.min(prevValue + 10, 100));
    }
  };

  const calculateEarnings = () => {
    const earning = (followers / 10000) * products * 1000000;
    const yearning = earning * 12;
    setEarning(earning);
    setYearning(yearning);
  };

  return (
    <div className="sm:px-[16px] xsm:px-[16px] md:px-[40px] lg:px-[70px] xl:px-[120px]">
      <h1 className="font-semibold md:text-center text-[18px] md:text-[22px] pt-4 md:pt-[70px]">
        ESTIMATE EARNING POTENTIAL
      </h1>
      <div className=" flex md:flex-row  flex-col md:gap-[100px] mt-4 md:mt-[50px]">
        <div className="flex-1">
          <h3 className="pb-[15px]">What Kind of Influencer you are ?</h3>
          <select className="border-gray-400 bg-white px-[10px] border w-full  rounded-md py-[5px]">
            <option className="text-gray-400" disabled selected>
              Select Influencer Type?
            </option>
            <option value="micro">Micro Influencer</option>
            <option value="macro">Macro Influencer</option>
            <option value="celebrity">Celebrity Influencer</option>
            <option value="expert">Industry Expert</option>
            <option value="ambasador">Brand Ambasador</option>
            <option value="creator">Content Creater</option>
            <option value="social">Social Media Influencer</option>
          </select>
          <h3 className="py-[15px]">How many followers do you have? </h3>
          <div onWheel={followerScroll}>
            <input
              type="range"
              min={0}
              max={100}
              step={10}
              onChange={handleFollower}
              className="border-gray-400 [-webkit-slider-runnable-track ]  accent-[#4a508e]  bg-[#4a508e] thumb-blue-500 px-2 border w-full rounded-md py-1"
              value={followers}
            />
          </div>
          <div className=" mx-auto w-fit rounded-lg px-2 py-1 border-[#4a508e] border-b-2">
            <p>{followers} K</p>
          </div>

          <h3 className="py-[15px]"> How many products do you list monthly?</h3>
          <div onWheel={productScroll}>
            <input
              type="range"
              min={0}
              max={10}
              step={1}
              value={products}
              onChange={handleProduct}
              className="border-gray-400 [-webkit-slider-runnable-track ] accent-[#4a508e]  px-2 border w-full rounded-md py-1 bg-[#4a508e] "
            />
          </div>
          <div className=" mx-auto w-fit rounded-lg px-2 py-1 border-[#4a508e] border-b-2">
            <p>{products}</p>
          </div>
        </div>
        <button
          onClick={calculateEarnings}
          className="text-[14px]  md:hidden mx-auto block   bg-[#4a508e] px-[15px] py-[8px] rounded-xl text-white  font-semibold mt-[20px] animate-slide-in hover:scale-110 transition-all"
        >
          Calculate
        </button>
        <div className="w-[350px]  gap-4 md:gap-0 md:mt-0 mt-[30px] md:flex-col flex-row flex mx-auto justify-center items-center text-start  ">
          <div>
            <h1 className="font-medium md:mt-[100px]">Monthly Earning</h1>
            <div className="text-[#4a508e] font-semibold text-[30px] text-center">
              ₹ {earning.toLocaleString("en-IN")}
            </div>
          </div>
          <div>
            <h1 className="font-medium md:mt-[20px]">Yearly Earning</h1>
            <div className="text-[#4a508e] font-semibold text-[30px] text-center">
              ₹ {yearning.toLocaleString("en-IN")}
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={calculateEarnings}
        className="text-[14px] mx-auto  md:block hidden  bg-[#4a508e] px-[15px] py-[8px] rounded-xl text-white  font-semibold mt-[50px] animate-slide-in hover:scale-110 transition-all"
      >
        Calculate
      </button>
    </div>
  );
};

export default RangeSlide;
