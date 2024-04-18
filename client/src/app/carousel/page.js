"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import { EffectFlip, Pagination, Navigation } from "swiper/modules";
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
    <div>
      <div className="w-full h-[724px] bg-[#4A508E]">
        {data.map((item, index) => (
          <div key={index}>
            <h1 className="text-center py-8 font-semibold text-4xl">
              {item.title}
            </h1>
            <p className="text-center font-light">{item.description}</p>
          </div>
        ))}

        <Swiper
          effect={"flip"}
          loop={true}
          grabCursor={true}
          navigation={true}
          modules={[EffectFlip, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image src="/assets/crsl.png" width={500} height={300} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/assets/crsl.png" width={500} height={300} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/assets/crsl.png" width={500} height={300} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/assets/crsl.png" width={500} height={300} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/assets/crsl.png" width={500} height={300} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/assets/crsl.png" width={500} height={300} />
          </SwiperSlide>
        </Swiper>
        <div className="flex justify-center items-center">
          <Link href="/page2">
            <button className="bg-[#f8f9fb] rounded-lg px-2 py-2 text-black mt-20">
              Try for free
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
