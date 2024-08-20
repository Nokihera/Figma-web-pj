import React from "react";
import imgSource from "../assets/innovation.svg";
const InovationSection = () => {
  return (
    <div className="w-full h-full md:h-[541px] py-[64px] gap-[64px] flex justify-center items-center content-center">
      <div className="w-full h-full md:h-[413px] grid grid-flow-row grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col gap-[20px] md:items-start items-center content-center md:content-start px-16">
          <div className="">
            <h1 className="font-futura text-[15px] md:text-[20px] text-[#6596A1] border-[1px] border-[#C4C4C4] rounded-[20px] w-[190px] md:w-[230px] h-[32px] py-[5px] px-[15px] flex justify-center items-center ">
              Next-Level Innovation
            </h1>
          </div>
          <div className="w-full md:w-[400px] h-[80px] md:h-[123px]">
            <h1 className="font-futura md:text-start text-center text-[19px] md:text-[31px] text-[#223236] font-bold">
              Demonstrate branding consequently think outside
            </h1>
          </div>
          <div className="w-full md:w-[434px] h-[48px]">
            <p className="font-lato text-[14px] md:text-[16px] md:text-start text-center text-[#7F7D7D] text-wrap">
              Velit purus egestas tellus phasellus. Mattis eget sed faucibus
              magna vulputate pellentesque{" "}
            </p>
          </div>
          <div className="w-full md:w-[495px] h-[92px] flex flex-col gap-[10px] items-center md:mb-0 mb-[54px] md:items-start ">
            <div className="flex items-center gap-3">
              <i class="fa-solid fa-check text-[16px] text-[#6596A1]"></i>
              <span className="font-lato text-[16px] text-[#6596A1]">
                Enterprise-grade security
              </span>
            </div>
            <div className="flex items-center gap-3">
              <i class="fa-solid fa-check text-[16px] text-[#6596A1]"></i>
              <span className="font-lato text-[16px] text-[#6596A1]">
                99.9% guaranteed uptime SLA
              </span>
            </div>
            <div className="flex items-center gap-3">
              <i class="fa-solid fa-check text-[16px] text-[#6596A1]"></i>
              <span className="font-lato text-[16px] text-[#6596A1]">
                Designated customer success team
              </span>
            </div>
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
