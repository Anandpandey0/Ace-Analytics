import React from "react";
import { useRouter } from "next/router";

const ScrollToAbout = () => {
  const router = useRouter();

  const handleScrollToAbout = (event) => {
    event.preventDefault();
    const homeSection = document.getElementById("home");

    if (homeSection) {
      window.scrollTo({
        top: homeSection.offsetTop,
        behavior: "smooth",
      });
    }

    // Update the URL to include the hash fragment
    router.push(`${router.pathname}#home`, undefined, { shallow: true });
  };

  return (
    <a
      href="#"
      onClick={handleScrollToAbout}
      className="block py-2 pl-3 pr-4 text-black lg:text-blue-800  rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
    >
      Home
    </a>
  );
};

export default ScrollToAbout;
