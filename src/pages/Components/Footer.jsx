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
          <div>Helping you connect with voters and win their hearts.</div>
        </div>
        <div className="">
          <h1 className="text-2xl">Address</h1>
          <div className="flex items-center gap-4 mt-4 justify-center ">
            <AiOutlineHome className="text-blue-800 text-2xl" />
            <div>Sector 168, Noida</div>
          </div>
          <div className="flex items-center gap-4 mt-4 justify-center">
            <BiPhoneCall className="text-blue-800 text-2xl" />
            <div>+91 82793 62030</div>
          </div>
          <div className="flex items-center gap-4 mt-4 justify-center">
            <AiOutlineMail className="text-blue-800 text-2xl" />

            <Link href="mailto:info@poltek.in">info@poltek.in</Link>
          </div>
        </div>
        <div className="hidden lg:block">
          <h1 className="text-2xl">Services</h1>
          <div className="flex items-center gap-4 mt-4">
            <div>Home</div>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <div>About Us</div>
          </div>
          <div className="flex items-center gap-4 mt-4">
            {/* <AiOutlineMail className="text-blue-800 text-2xl" /> */}

            <div className="">Services</div>
          </div>
          <div className="flex items-center gap-4 mt-4">
            {/* <AiOutlineMail className="text-blue-800 text-2xl" /> */}

            <div>Contact Us</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
