"use client";

import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { TbListDetails } from "react-icons/tb";
import { RiCustomerServiceLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <nav
      className="text-black fixed w-[1024px] top-4 left-[208px] z-20  rounded-full "
      style={{
        backgroundColor: "rgb(214 214 214 / 43%)",
        padding: "20px 24px 20px 24px",
      }}
    >
      <div className="container mx-auto flex justify-evenly items-center gap-50">
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
      </div>
    </nav>
  );
};

export default Navbar;
