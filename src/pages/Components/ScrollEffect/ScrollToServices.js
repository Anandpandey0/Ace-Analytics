import React from "react";
import { useRouter } from "next/router";

const ScrollToAbout = () => {
  const router = useRouter();

  const handleScrollToAbout = (event) => {
    event.preventDefault();
    const servicesSection = document.getElementById("services");

    if (servicesSection) {
      window.scrollTo({
        top: servicesSection.offsetTop,
        behavior: "smooth",
      });
      console.log("Found");
    }

    // Update the URL to include the hash fragment
    router.push(`${router.pathname}#services`, undefined, { shallow: true });
  };

  return (
    <a
      href="#"
      onClick={handleScrollToAbout}
      className="block py-2 pl-3 pr-4 text-black lg:text-blue-800  rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
    >
      Services
    </a>
  );
};

export default ScrollToAbout;
