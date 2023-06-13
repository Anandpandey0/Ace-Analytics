import Link from "next/link";
import React from "react";
import MobileHeader from "./MobileHeader";

const Header = () => {
  return (
    <div className="border-2 border-solid border-black w-full absolute top-0 left-0 z-[1000] bg-green-200 ">
      <div className="flex w-5/6 py-4  justify-between items-center mx-auto text-white font-semibold">
        <div className="border-2 border-solid p-4 px-8"> Image</div>
        <div className="navbar-items hidden lg:flex gap-8 w-1/2 justify-end items-center">
          <Link href="/">Home</Link>
          <Link href="/">About Us</Link>
          <Link href="/">Services + </Link>
          <Link href="/">Contact Us</Link>
          <button className="bg-blue-700 text-white p-2 px-4">
            Get a Quote{" "}
          </button>
        </div>
        <div className="lg:hidden">
          <MobileHeader />
        </div>
      </div>
    </div>
  );
};

export default Header;
