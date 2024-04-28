"use client";
import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import { Pagination, Navigation } from "swiper/modules";

import Image from "next/image";

const Carousel = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://createnary-server.onrender.com/data"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const responseData = await response.json();
      console.log("Response Data:", responseData); // Log response data
      setData(responseData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div className="w-[100%]  bg-[#4a508e]  sm:px-[16px] xsm:px-[16px] md:px-[40px] lg:px-[70px] xl:px-[120px]  -mt-[100px]   md:mt-0 h-full carousel ">
      <div className="sm:mt-[100px] xsm:mt-[100px] md:mt-0 lg:mt-0">
        {data.map((item, index) => (
          <div key={index}>
            <h1 className="md:text-[35px]  text-[25px] font-semibold  text-white text-center pt-[25px]">
              {item.title}
            </h1>
            <p className=" text-white text-center pt-[5px] ">
              {item.description}
            </p>
          </div>
        ))}

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image src="/assets/crsl.png" width={500} height={300} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/assets/image.png" width={500} height={300} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/assets/two.png" width={500} height={300} />
          </SwiperSlide>
        </Swiper>
        <div className="md:pb-[20px] sm:pb-[10px] xsm:pb-[10px]">
          <button className="text-[14px]    font-semibold bg-white p-[10px] rounded-xl mx-auto block mt-7 animate-slide-in hover:scale-110 transition-all">
            Try for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
