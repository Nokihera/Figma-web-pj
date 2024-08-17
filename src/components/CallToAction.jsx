import React from "react";

const CallToAction = () => {
  return (
    <div className="w-full h-[439px] py-[100px] flex justify-center items-center   ">
      <div className="w-[1216px] h-[300px] rounded-[10px] grid grid-flow-row grid-cols-2 gap-[80px] items-center bg-[#F0F5F6] py-[40px] px-[64px] justify-center">
        <div className=" gap-[24px] flex flex-col items-start justify-start">
          <h3 className="font-futura text-[20px] text-[#6596A1]">
            Seamless Interaction
          </h3>
          <div className="w-[530px] h-[66px]">
            <h1 className="font-futura text-[25px] text-[#223236] font-bold ">
              Welcome to your new digital reality that which will rock your
              world.
            </h1>
          </div>
          <div className="w-[470px] h-[48px] pb-4">
            <p className=" font-lato text-[16px] text-[#7F7D7D]">
              Let us help you take you from zero to serious business and beyond.
              Our no-strings attached free trial lets you test our product
              today.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <input
            type="text"
            className="rounded-l-[8px] py-[8px] px-[18px] shadow-md outline-none border-b-[1px] border-t-[1px] border-l-[1px] focus:border-blue-500"
          />
          <button className="font-lato text-[16px] text-[#E6E9EC] border-[1px] border-[#6596A1] bg-[#6596A1] rounded-r-[8px] py-[8px] px-[18px]">
            Primary
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
