import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <div className=" bg-[#4a508e]">
      <div className="w-[100%] sm:px-[16px] xsm:px-[16px] md:px-[40px] lg:px-[70px] xl:px-[120px] flex text-white py-10 md:flex-row  flex-col ">
        <div className=" flex flex-1 items-center text-[32px] ">Createnary</div>
        <div className="flex-1 ">
          <div className=" md:mt-0 mt-6">
            <ul>
              <li>Navigation</li>
              <li>About Createnary</li>
              <li>Contact Us</li>
              <li>Refund</li>
              <li>NewsLetter</li>
              <li>Terems & Conditions</li>
              <li>Privacy & Policy</li>
            </ul>
          </div>
        </div>
        <div className="mt-9 md:mt-0">
          <h1 className="text-[18px] mb-4 ">Contacts</h1>
          <div className="flex-row  flex items-center gap-1 text-[16px]">
            <CiLocationOn />

            <h2>Delhi, India</h2>
          </div>
          <h1 className="ml-[20px]">+91 98765 43210</h1>
          <div className="flex-row  flex items-center gap-1">
            <FiPhone />
            <h2>+91 99999 99999</h2>
          </div>
        </div>
      </div>
      <div className="w-full border-t-2 text-white pb-4 pt-[10px] text-center">
        © Createnary 2024
      </div>
    </div>
  );
};

export default Footer;
