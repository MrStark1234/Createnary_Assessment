"use client";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { TbListDetails } from "react-icons/tb";
import { RiCustomerServiceLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="text-black fixed w-[1024px] top-4 left-[208px] z-10  rounded-full "
      style={{
        backgroundColor: "rgb(214 214 214 / 43%)",
        padding: "20px 24px 20px 24px",
      }}
    >
      <div className="container mx-auto flex justify-evenly items-center gap-50">
        {/* <div className="flex items-center mr-6 ml-6">
          <div className="hidden md:block "> */}
        <a href="/" className="ml-6 text-lg text-black font-bold ">
          Createnary
        </a>
        <div className="flex items-center gap-[2px]">
          <CiSearch
            className="absolute text-gray-500"
            style={{ fontSize: "1rem", margin: "10px" }}
          />
          <input
            className=" rounded-full py-3 px-2 text-xs pl-8" // Add left padding to make room for the icon
            type="text"
            placeholder="Search Creator..."
          />
        </div>

        <a href="#" className="flex items-center gap-[2px]">
          <CiShoppingCart />
          Cart
        </a>

        <a href="#" className="flex items-center gap-[2px]">
          <TbListDetails />
          About
        </a>

        <a href="#" className="flex items-center gap-[2px]">
          <RiCustomerServiceLine />
          Contact
        </a>
        <button
          className="flex items-center gap-[2px]"
          style={{
            border: "1px solid black",
            borderRadius: "10px",
            padding: "4px 20px",
          }}
        >
          Login
          <IoIosArrowDown />
        </button>
        {/* </div>
        </div> */}
        {/* <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <div className={`md:flex ${isOpen ? "block" : "hidden"}`}>
          <a href="#" className="block md:inline-block mt-4 md:mt-0 mr-4">
            Home
          </a>
          <a href="#" className="block md:inline-block mt-4 md:mt-0 mr-4">
            About
          </a>
          <a href="#" className="block md:inline-block mt-4 md:mt-0 mr-4">
            Services
          </a>
          <a href="#" className="block md:inline-block mt-4 md:mt-0">
            Contact
          </a>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
