import React from "react";
import HeroSection from "../components/HeroSection";
import image from "../assets/aboutHerophoto.svg";
import CardOne from "../components/cards/CardOne";
import image1 from "../assets/aboutCard1img.svg";
import image2 from "../assets/aboutCard2img.svg";
import image3 from "../assets/aboutCard3img.svg";
import HTMLSVG from "../assets/HTMLFiletype.svg";
import CssSvg from "../assets/CSSFiletype.svg";
import WordpressSvg from "../assets/WordPress.svg";
import ReactSvg from "../assets/ReactNative.svg";

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
  const cardData = [
    {
      title: "Transforming business since 2014",
      text: (
        <>
          <span className=" block">
            The passion with which we work allows us to transform a problem into
            a challenge!
          </span>
          <span className=" block">
            Technology has made our lives easier in so many ways, which include
            a more convient.
          </span>
        </>
      ),
      image: image1,
      isBtn: true,
    },
    {
      title: "What to expect from us",
      text: "Our ambition is to develop a lasting relationship with the customer and become their trusted technology partner. We seek continuous improvement of process.",
      image: image2,
      isBtn: true,
      isImageLeft: true,
    },
    {
      title: "About the Founder",
      text: (
        <>
          <span className=" block">Mr.Peter, Founder of techno skill</span>
          <span className=" block font-futura text-[#6596A1]">
            “Join us for an exciting journey towards digital success”
          </span>
        </>
      ),
      image: image3,
      isBtn: false,
      isBg: true,
    },
  ];
  return (
    <div className=" w-full flex flex-col items-center justify-center mx-auto">
      <div className=" w-full flex flex-col items-center justify-center mx-auto">
        <HeroSection conents={conents} />
      </div>
      <div className=" flex flex-col justify-center items-center gap-8">
        <CardOne cardData={cardData[0]} />
        <CardOne cardData={cardData[1]} />
        <CardOne cardData={cardData[2]} />
        <div className="w-full flex flex-col gap-2 py-4">
          <div className="w-full flex justify-center items-center">
            <h1 className="font-futura text-[36px] sm:text-[50px] text-[#6596A1] text-center">
              Technologies
            </h1>
          </div>
          <div className="w-full">
            <ul className="flex flex-wrap justify-center sm:justify-around items-center gap-4">
              <li className="flex flex-col sm:flex-row justify-center items-center gap-1 font-futura font-bold text-[18px] sm:text-[25px] text-[#7F7D7D]">
                <img
                  className="w-[40px] sm:w-[70px] inline"
                  src={HTMLSVG}
                  alt="HTML"
                />
                <span>HTML</span>
              </li>
              <li className="flex flex-col sm:flex-row justify-center items-center gap-1 font-futura font-bold text-[18px] sm:text-[25px] text-[#7F7D7D]">
                <img
                  className="w-[40px] sm:w-[70px] inline"
                  src={CssSvg}
                  alt="CSS"
                />
                <span>CSS</span>
              </li>
              <li className="flex flex-col sm:flex-row justify-center items-center gap-1 font-futura font-bold text-[18px] sm:text-[25px] text-[#7F7D7D]">
                <img
                  className="w-[40px] sm:w-[70px] inline"
                  src={WordpressSvg}
                  alt="Wordpress"
                />
                <span>Wordpress</span>
              </li>
              <li className="flex flex-col sm:flex-row justify-center items-center gap-1 font-futura font-bold text-[18px] sm:text-[25px] text-[#7F7D7D]">
                <img
                  className="w-[40px] sm:w-[70px] inline"
                  src={ReactSvg}
                  alt="React Native"
                />
                <span>React Native</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
