import React from "react";
import HeroSection from "../components/HeroSection";
import image from "../assets/aboutHerophoto.svg";
import CardOne from "../components/cards/CardOne";
import image1 from "../assets/aboutCard1img.svg";
import image2 from "../assets/aboutCard2img.svg";
import image3 from "../assets/aboutCard3img.svg";

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
  const cardData=[
    {
      title:"Transforming business since 2014",
      text : "The passion with which we work allows us to transform a problem into a challenge!",
      image:image1,
      isBtn:true,
    },
    {
      title:"What to expect from us",
      text : "Our ambition is to develop a lasting relationship with the customer and become their trusted technology partner. We seek continuous improvement of process.",
      image : image2,
      isBtn:true,
      isImageLeft:true,
    },
    {
      title:"About the Founder",
      text : "Mr.Peter, Founder of techno skill",
      image : image3,
      isBtn:false,
      isBg:true
    }
  ]
  return (
    <div>
      <HeroSection conents={conents} />
      <div className=" flex flex-col justify-center items-center gap-2">
        <CardOne cardData={cardData[0]}/>
        <CardOne cardData={cardData[1]}/>
        <CardOne cardData={cardData[2]}/>
        <div className=" w-full flex flex-col gap-4 py-4">
          <div className=" w-full flex justify-center items-center">
            <h1 className="  font-futural text-[50px] text-[#6596A1]">Techonologies</h1>
          </div>
          <div className=" w-full">
            <ul className=" flex justify-around items-center">
              <li className=" font-futura font-bold text-[25px] text-[#7F7D7D]">HTML</li>
              <li className=" font-futura font-bold text-[25px] text-[#7F7D7D]">CSS</li>
              <li className=" font-futura font-bold text-[25px] text-[#7F7D7D]">Wordpress</li>
              <li className=" font-futura font-bold text-[25px] text-[#7F7D7D]">React Native</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
