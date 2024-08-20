import React from "react";
import illustrationGirl from "../assets/illustrationGirl.svg";

const Talent = () => {
  return (
    <div className="w-full h-full md:h-[875px] pt-[100px] gap-[60px] flex flex-col items-center overflow-hidden">
      <div className="md:w-[1219px] w-full h-[184px] flex flex-col gap-[20px] items-center">
        <h1 className="font-futura text-[15px] md:text-[17px] lg:text-[20px] text-[#6596A1] border-[1px] border-[#C4C4C4] text-nowrap rounded-[20px] w-[140px] md:w-[160px] lg:w-[186px] h-[38px] py-[8px] px-[16px] flex items-center">
          Masterful Design
        </h1>
        <h1 className="font-futura text-[25px] md:text-[34px] lg:text-[50px] font-bold text-[#223236]">
          A New Era of <span className="text-[#6596A1]">Design Excellence</span>
        </h1>
        <div className="w-4/5 md:w-[478px] h-[48px]">
          <p className="font-lato text-[16px] text-center text-[#7F7D7D]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's{" "}
          </p>
        </div>
      </div>
      <div className="w-full px-8 h-full lg:h-[531px] gap-[80px] md:gap-[140px] grid grid-flow-row grid-cols-1 md:grid-cols-2 content-center items-center ">
        <div>
          <img src={illustrationGirl} alt="" />
        </div>
        <div className="flex flex-col w-full h-full gap-[28px] justify-center">
          <div className="lg:w-[516px] h-full w-full lg:h-[83px] gap-[16px] flex flex-col ">
            <div className="flex gap-[16px]">
              <p className="px-[13px] py-[7px] text-[12px] text-[#223236] border-[1px] items-center border-[#223236] rounded-full">
                1
              </p>
              <h3 className="font-futura text-[20px] text-[#223236] font-bold">
                Explore ideas together
              </h3>
            </div>
            <div className="flex w-full justify-start ">
              <div className="w-[60px] md:w-[110px] lg:w-[60px] h-[2px]"></div>
              <p className="text-[#7F7D7D] text-[16px] font-lato w-[400px] md:w-[465px] h-full ">
                Engage audience segments and finally create actionable insights.
                Amplify vertical integration.
              </p>
            </div>
          </div>
          <div className="lg:w-[516px] h-full w-full lg:h-[83px] gap-[16px] flex flex-col ">
            <div className="flex gap-[16px]">
              <p className="px-[13px] py-[7px] text-[12px] text-[#223236] border-[1px] items-center border-[#223236] rounded-full">
                2
              </p>
              <h3 className="font-futura text-[20px] text-[#223236] font-bold">
                Bring those ideas to life
              </h3>
            </div>
            <div className="flex w-full justify-start ">
              <div className="w-[60px] md:w-[110px] lg:w-[60px] h-[2px]"></div>
              <p className="text-[#7F7D7D] text-[16px] font-lato w-[400px] md:w-[465px] h-full ">
                Engage audience segments and finally create actionable insights.
                Amplify vertical integration.
              </p>
            </div>
          </div>
          {/* <div className="w-[516px] h-[83px] gap-[16px] flex flex-col">
            <div className="flex gap-[16px]">
              <p className="px-[13px] py-[7px] text-[12px] text-[#223236] border-[1px] items-center border-[#223236] rounded-full">
                2
              </p>
              <h3 className="font-futura text-[20px] text-[#223236] font-bold">
                Bring those ideas to life
              </h3>
            </div>
            <div className="flex w-full justify-center md:justify-end">
              <p className="text-[#7F7D7D] text-[16px] font-lato w-[400px] md:w-[465px] h-[48px]">
                Engage audience segments and finally create actionable insights.
                Amplify vertical integration.
              </p>
            </div>
          </div> */}
          {/* <div className="w-[516px] h-[83px] gap-[16px] flex flex-col">
            <div className="flex gap-[16px]">
              <p className="px-[13px] py-[7px] text-[12px] text-[#223236] border-[1px] items-center border-[#223236] rounded-full">
                3
              </p>
              <h3 className="font-futura text-[20px] text-[#223236] font-bold">
                Ship better outcomes
              </h3>
            </div>
            <div className="flex w-full justify-center md:justify-end">
              <p className="text-[#7F7D7D] text-[16px] font-lato w-[400px] md:w-[465px] h-[48px]">
                Engage audience segments and finally create actionable insights.
                Amplify vertical integration.
              </p>
            </div>
          </div> */}
          <div className="lg:w-[516px] h-full w-full lg:h-[83px] gap-[16px] flex flex-col ">
            <div className="flex gap-[16px]">
              <p className="px-[13px] py-[7px] text-[12px] text-[#223236] border-[1px] items-center border-[#223236] rounded-full">
                3
              </p>
              <h3 className="font-futura text-[20px] text-[#223236] font-bold">
                Ship better outcomes
              </h3>
            </div>
            <div className="flex w-full justify-start ">
              <div className="w-[60px] md:w-[110px] lg:w-[60px] h-[2px]"></div>
              <p className="text-[#7F7D7D] text-[16px] font-lato w-[400px] md:w-[465px] h-full ">
                Engage audience segments and finally create actionable insights.
                Amplify vertical integration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Talent;
