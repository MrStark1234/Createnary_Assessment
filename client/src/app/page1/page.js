import React from "react";
import Navbar from "../navbar/page";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="main">
      <Navbar />
      <img
        className="h-full w-full absolute  sm:h-[115%]"
        src="/assets/background.png"
        alt="img"
      />
      <div className="relative flex items-center justify-center">
        <div className="left w-1/2 text-black sm:mt-[220px] sm:mb-[220px] sm:ml-[12%] ml-[8%] mt-[5%] sm:w-auto sm:text-center">
          <h1 style={{ fontSize: "xxx-large", fontWeight: "600" }}>
            Welcome To India’s First
          </h1>
          <h1
            className="text-[#4A508E] sm:text-[#34396c]"
            style={{
              fontSize: "xxx-large",
              fontWeight: "600",
            }}
          >
            Creator’s Marketplace
          </h1>

          <h4
            style={{
              fontWeight: "800",
              margin: "20px 0px 20px 0px",
            }}
          >
            Create your first E-Store @ Zero Cost
          </h4>
          <p>
            Empower your creativity with Createnary. Showcase, sell, and connect
            with a global audience effortlessly, turn your products into
            profits.
          </p>
          <Link href="/page2">
            <button className="rounded-lg px-4 py-3 mt-10 text-white bg-[#4A508E] text-sm">
              Get Started
            </button>
          </Link>
        </div>

        <div
          className="right w-1/2 "
          style={{ marginRight: "8%", marginTop: "7%" }}
        >
          <img
            src="/assets/hero.png"
            alt="img"
            className="sm:absolute sm:w-[60%] sm:bottom-[-4%] sm:right-[20%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
