import React from "react";
import CardOne from "./cards/CardOne";

const HeroSection = ({ conents }) => {
  const cardData={
    title:"How to start a blog in 2024: The ultimate guide ",
    text : "Discover expect tips, latest trends, and valuable insights in digital design and project management",
    isBtn:true,
  }
  return (
    <div className="w-full h-[938.66px] bg-no-repeat bg-center bg-cover flex flex-col items-center content-start bg-gradient-to-b from-herobgColor">
      <div className="w-[885px] h-[475px] py-[80px] flex flex-col justify-center items-center">
        <p className="text-[#6596A1] font-futura text-[22px]">
          {conents.pagename}
        </p>
        <div className="flex flex-col items-center ">
          <p className="text-[61px] font-futura text-center text-[#223236] font-bold">
            {conents.title}
          </p>
          <div className="w-[521px]">
            <p className="text-center text-[#7F7D7D] text-[20px] mb-[20px]">
              {conents.text}
            </p>
          </div>
          {conents.isButton && (
            <div className="w-[286] flex justify-center items-center gap-[16px] h-[46px]">
              <button className="border-[1px] border-[#6596A1] rounded-[8px] px-[20px] py-[8px] text-[#6596A1] font-lato">
                Learn More
              </button>
              <button className="bg-[#6596A1] rounded-[8px] py-[8px] px-[20px] text-white border-[1px] w-[148px] h-[46px] flex items-center gap-[6px] font-lato">
                Get Started{" "}
                <i className="fa-solid fa-arrow-right text-[#F8F9FB]"></i>
              </button>
            </div>
          )}
          {conents.isSearchBar && (
            <div className=" w-1/2">
              <form className="w-full mx-auto">
                <div className="flex">
                  <div className="relative w-full">
                    <input
                      type="search"
                      id="location-search"
                      className="block p-2.5 w-full z-20 text-sm rounded-lg "
                      placeholder="Enter your email"
                      required
                    />
                    <button
                      type="submit"
                      className=" w-1/3 absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-white rounded-e-lg bg-[#6596A1]"
                    >
                      Subscribe
                      <span className="sr-only">Search</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
      {conents.image && (
        <div className="">
          <img src={conents.image} alt="" />
        </div>
      )}
      {conents.card && (
        <CardOne cardData={cardData}/>
      )}
    </div>
  );
};

export default HeroSection;
