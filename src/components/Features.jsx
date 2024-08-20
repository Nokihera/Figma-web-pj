import React from "react";
import profile from "../assets/profile1.svg";
import profile2 from "../assets/profile2.svg";
import profile3 from "../assets/profile3.svg";
import ProfileCard from "./ProfileCard";
import Slideshow from "./SlideShow";
const Features = () => {
  const cardData = [
    {
      img: profile,
      title: "Wireless",
      text: "Enim nec rhoncus volutpat nullam eros sapien pharetra.",
    },
    {
      img: profile,
      title: "Wireless",
      text: "Enim nec rhoncus volutpat nullam eros sapien pharetra.",
    },
    {
      img: profile,
      title: "Wireless",
      text: "Enim nec rhoncus volutpat nullam eros sapien pharetra.",
    },
    {
      img: profile2,
      title: "Synergistic",
      text: "Neque ut integer nulla tellus semper amet id scelerisque eros.",
    },
    {
      img: profile2,
      title: "Synergistic",
      text: "Neque ut integer nulla tellus semper amet id scelerisque eros.",
    },
    {
      img: profile2,
      title: "Synergistic",
      text: "Neque ut integer nulla tellus semper amet id scelerisque eros.",
    },
    {
      img: profile3,
      title: "Distributed",
      text: " Aliquet et cras nam sed mauris laoreet bibendum et.",
    },
    {
      img: profile3,
      title: "Wireless",
      text: "Enim nec rhoncus volutpat nullam eros sapien pharetra.",
    },
    {
      img: profile3,
      title: "Wireless",
      text: "Enim nec rhoncus volutpat nullam eros sapien pharetra.",
    },
  ];
  const keys = cardData.map((i, index) => index);
  return (
    <div className="w-full h-[763px] flex flex-col items-center py-[100px] gap-[24px]">
      <div className="w-full md:w-full lg:w-[1216px] h-[184px] flex flex-col items-center gap-[16px]">
        <p className="font-futura text-[#6596A1] text-[15px] md:text-[17px] lg:text-[20px] border-[1px] rounded-[20px] border-[#C4C4C4] py-[8px] px:[10px] md:px-[13px] lg:px-[16px] flex justify-center items-center w-[145px] h-[38px] gap-[10px] text-center">
          The Best UI
        </p>
        <div className="w-full md:w-[814px] h-[130px] flex flex-col items-center gap-[16px]">
          <div>
            <h1 className="font-futura text-[25px] md:text-[34px] lg:text-[50px] font-bold text-[#223236]">
              Crafting Seamless{" "}
              <span className="text-[#6596A1]">Experiences</span>
            </h1>
          </div>
          <div className="w-4/5 md:w-[481px] h-[48px]">
            <p className="text-center text-[16px] font-lato text-[#7F7D7D]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's{" "}
            </p>
          </div>
        </div>
      </div>
      {<Slideshow key={keys} cardData={cardData}/>}
    </div>
  );
};

export default Features;
