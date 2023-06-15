import React from "react";
import { useRouter } from "next/router";

const ScrollToAbout = () => {
  const router = useRouter();

  const handleScrollToAbout = (event) => {
    event.preventDefault();
    const aboutSection = document.getElementById("about");

    if (aboutSection) {
      const scrollOptions = {
        top: aboutSection.offsetTop,
        behavior: "smooth",
      };

      // Add a CSS transition class to the body for smoother scrolling animation
      document.body.classList.add("scroll-transition");

      // Scroll to the about section
      window.scrollTo(scrollOptions);

      // Remove the CSS transition class after scrolling is complete
      setTimeout(
        () => {
          document.body.classList.remove("scroll-transition");
        },
        scrollOptions.behavior === "smooth" ? 800 : 0
      ); // Adjust the timeout value based on the scroll behavior duration
    }

    // Update the URL to include the hash fragment
    router.push(`${router.pathname}#about`, undefined, { shallow: true });
  };
  return (
    <a
      href="#"
      onClick={handleScrollToAbout}
      className="block py-2 pl-3 pr-4 text-black lg:text-blue-800  rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
    >
      About
    </a>
  );
};

export default ScrollToAbout;
