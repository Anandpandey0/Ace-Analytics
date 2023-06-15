import Link from "next/link";
import React from "react";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";

const Footer = () => {
  return (
    <footer
      className=" lg:h-[30vh] bg-cover w-full text-white  text-center lg:text-left"
      style={{
        backgroundImage:
          'url("https://raw.githubusercontent.com/Anandpandey0/portfolio-images/main/background-footer.png")',
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-5/6 flex flex-col lg:flex-row justify-evenly mx-auto mt-24 p-4">
        <div>
          <h1 className="">LOGO</h1>
          <p>Helping you connect with voters and win their hearts.</p>
        </div>
        <div className="">
          <h1 className="text-2xl">Address</h1>
          <div className="flex items-center gap-4 mt-4 justify-center ">
            <AiOutlineHome className="text-blue-800 text-2xl" />
            <p>Sector 168, Noida</p>
          </div>
          <div className="flex items-center gap-4 mt-4 justify-center">
            <BiPhoneCall className="text-blue-800 text-2xl" />
            <p>+91 82793 62030</p>
          </div>
          <div className="flex items-center gap-4 mt-4 justify-center">
            <AiOutlineMail className="text-blue-800 text-2xl" />

            <Link href="mailto:info@poltek.in">info@poltek.in</Link>
          </div>
        </div>
        <div className="hidden lg:block">
          <h1 className="text-2xl">Services</h1>
          <div className="flex items-center gap-4 mt-4">
            <p>Home</p>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <p>About Us</p>
          </div>
          <div className="flex items-center gap-4 mt-4">
            {/* <AiOutlineMail className="text-blue-800 text-2xl" /> */}

            <p className="">Services</p>
          </div>
          <div className="flex items-center gap-4 mt-4">
            {/* <AiOutlineMail className="text-blue-800 text-2xl" /> */}

            <p>Contact Us</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
