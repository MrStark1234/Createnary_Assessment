"use client";
import React, { useState } from "react";
import RangeSlider from "react-bootstrap-range-slider";

import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import "./range.css";

const RangeSlide = () => {
  const [productsSold, setProductsSold] = useState(0);

  const calculateEarnings = () => {
    const earning = (followers / 10000) * productsSold * 1000;

    return earning;
  };
  const calculateYearly = () => {
    const yearning = (followers / 10000) * (productsSold * 1000) * 12;

    return yearning;
  };

  const [followers, setFollowers] = useState(0);

  return (
    <div className="w-full h-[700px] bg-[#f8f9fb] text-black flex justify-center items-center flex-col">
      <h1 className="text-center font-semibold text-2xl">
        ESTIMATE EARNING POTENTIAL
      </h1>
      <div className="w-[60%] h-auto mt-10">
        <label for="influencer">What kind of influencer you are?</label>
        <br />
        <select
          id="influencer"
          className="w-96 sm:w-full h-8 border-2 rounded-md mt-4"
        >
          <option value="1">Select influencer type ?</option>
          <option value="2">Option2</option>
          <option value="3">Option3</option>
          <option value="4">Option4</option>
        </select>
        <p className="mt-4">How many followers do you have?</p>

        <div className="flex justify-between mt-4 items-center sm:gap-[50px]">
          <RangeSlider
            className="w-[50%] "
            size="lg"
            variant="dark"
            max={20000}
            value={followers}
            onChange={(changeEvent) => setFollowers(changeEvent.target.value)}
          />
          <p className="text-xl font-semibold">
            Monthly Earnings: <br />{" "}
            <span className="text-[#4A508E] font-semibold text-2xl">
              {" "}
              ₹ {calculateEarnings()}
            </span>
          </p>
        </div>
        <p className="mt-20">How many products do you list monthly?</p>
        <div className="flex justify-between mt-4 items-center sm:gap-[50px]">
          <RangeSlider
            className="w-[50%]"
            size="lg"
            variant="dark"
            max={100}
            value={productsSold}
            onChange={(changeEvent) =>
              setProductsSold(changeEvent.target.value)
            }
          />
          <p className="text-xl font-semibold mr-4">
            Yearly Earnings: <br />{" "}
            <span className="text-[#4A508E] font-semibold text-2xl">
              {" "}
              ₹ {calculateYearly()}
            </span>
          </p>
        </div>
        <div className="flex justify-center mt-16">
          <button className="rounded-lg px-4 py-3 mt-10 text-white bg-[#4A508E] text-sm">
            Calculate
          </button>
        </div>

        {/* <div>
          <label htmlFor="followers"> {followers}</label>
          <input
            type="range"
            id="followers"
            min="0"
            max="20000"
            value={followers}
            onChange={(e) => setFollowers(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="productsSold">Products Sold: {productsSold}</label>
          <input
            type="range"
            id="productsSold"
            min="0"
            max="100"
            value={productsSold}
            onChange={(e) => setProductsSold(e.target.value)}
          />
        </div> */}
        {/* <div>
         
        </div> */}
      </div>
    </div>
  );
};

export default RangeSlide;
