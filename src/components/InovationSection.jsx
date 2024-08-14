import React from "react";
import imgSource from "../assets/innovation.svg";
const InovationSection = () => {
  return (
    <div className="w-[1440px] h-[541px] py-[64px] gap-[64px] flex justify-center items-center">
      <div className="w-[1221px] h-[413px] grid grid-flow-row grid-cols-2">
        <div className="flex flex-col gap-[20px]">
          <div className="">
          <h1 className="font-futura text-[20px] text-[#6596A1] border-[1px] border-[#C4C4C4] rounded-[20px] w-[230px] h-[32px] py-[5px] px-[15px] flex justify-center items-center ">
            Next-Level Innovation
          </h1>
          </div>
          <div className="w-[400px] h-[123px]">
            <h1 className="font-futura text-[31px] text-[#223236] font-bold">Demonstrate branding consequently think outside</h1>
          </div>
          <div className="w-[434px] h-[48px]">
            <p className="font-lato text-[16px] text-[#7F7D7D]">Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque  </p>
          </div>
          <div className="w-[495px] h-[92px] flex flex-col gap-[10px]">
          </div>
        </div>
        <div>
          <img src={imgSource} alt="" />
        </div>
      </div>
    </div>
  );
};

export default InovationSection;
