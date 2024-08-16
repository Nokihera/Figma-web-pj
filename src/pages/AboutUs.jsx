import React from "react";
import HeroSection from "../components/HeroSection";
import image from "../assets/aboutHerophoto.svg";

const AboutUs = () => {
  const conents = {
    pagename: "About Us",
    title: (
      <>
        We are changing the whole{" "}
        <span className="text-[#6596A1]">new design</span>
      </>
    ),
    text: "The only corporate card and spent management platform designed to help you spend less.",
    image: image,
  };
  return (
    <div>
      <HeroSection conents={conents} />
    </div>
  );
};

export default AboutUs;
