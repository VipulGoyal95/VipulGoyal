import React, { useEffect } from "react";
import "./Scrollup.css";

const Scrollup = () => {
  useEffect(() => {
    const scrollUpButton = document.getElementById("scroll-up");

    const handleScroll = () => {
      if (window.scrollY >= 350) {
        scrollUpButton?.classList.add("show-scroll");
      } else {
        scrollUpButton?.classList.remove("show-scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a href="#home" className="scrollup" id="scroll-up">
      <i className="ri-arrow-up-line"></i>
    </a>
  );
};

export default Scrollup;
