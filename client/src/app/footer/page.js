import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
const Footer = () => {
  return (
    <div
      className="foot"
      style={{
        height: "385px",
        background: "#4A508E",
        color: "white",
      }}
    >
      <div className="flex w-full justify-around">
        <div className="one w-1/3 ">
          <h1 className=" text-center text-4xl font-bold font-monoton mt-40">
            CREATENARY
          </h1>
        </div>
        <div className="two w-1/3">
          <ul className="ml-60 mt-10 text-nowrap">
            <li className="mt-3">Navigation</li>
            <li className="mt-3">About Createnary</li>
            <li className="mt-3">Contact US</li>
            <li className="mt-3">Refund</li>
            <li className="mt-3">Newsletter</li>
            <li className="mt-3">Terms & Conditions</li>
            <li className="mt-3">Privacy & Policy</li>
          </ul>
        </div>
        <div className="three w-1/3 ml-60 mt-10 flex flex-col items-start gap-2">
          <p>Contact</p>
          <div className="flex justify-center items-center gap-1">
            <CiLocationOn />
            <p className="font-thin ml-2">Delhi , India</p>
          </div>
          <p className="font-thin ml-5">+91 98765 43210</p>
          <div className="flex justify-center items-center gap-1">
            <FiPhone />
            <p className="font-thin">+91 99999 99999</p>
          </div>
        </div>
      </div>
      <div className="w-full h-[0.75px] bg-white mt-16"></div>
      <p className="text-center font-thin text-sm mt-2">© Createnary 2024</p>
    </div>
  );
};

export default Footer;
