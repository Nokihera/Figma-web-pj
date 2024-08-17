import React from "react";
import CardOne from "./cards/CardOne";

const HeroSection = ({ conents }) => {
  return (
    <div className="w-full h-auto min-h-screen bg-no-repeat bg-center bg-cover flex flex-col items-center content-start bg-gradient-to-b from-herobgColor">
    <div className="w-full max-w-[885px] h-auto py-10 flex flex-col justify-center items-center">
      <p className="text-[#6596A1] font-futura text-lg sm:text-xl">
        {conents.pagename}
      </p>
      <div className="flex flex-col items-center">
        <p className="text-4xl sm:text-5xl md:text-6xl font-futura text-center text-[#223236] font-bold">
          {conents.title}
        </p>
        <div className="w-11/12 max-w-[521px]">
          <p className="text-center text-[#7F7D7D] text-base sm:text-lg md:text-xl mb-5">
            {conents.text}
          </p>
        </div>
        {conents.isButton && (
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
            <button className="border border-[#6596A1] rounded-md px-5 py-2 text-[#6596A1] font-lato">
              Learn More
            </button>
            <button className="bg-[#6596A1] rounded-md py-2 px-5 text-white w-full sm:w-auto flex items-center gap-2 font-lato">
              Get Started <i className="fa-solid fa-arrow-right text-[#F8F9FB]"></i>
            </button>
          </div>
        )}
        {conents.isSearchBar && (
          <div className="w-full sm:w-1/2">
            <form className="w-full mx-auto">
              <div className="flex">
                <div className="relative w-full">
                  <input
                    type="search"
                    id="location-search"
                    className="block p-2.5 w-full text-sm rounded-lg"
                    placeholder="Enter your email"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-white rounded-e-lg bg-[#6596A1]"
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
      <div className="w-full max-w-[500px]">
        <img src={conents.image} alt="" className="w-full h-auto object-cover" />
      </div>
    )}
    {conents.card && <CardOne cardData={conents.cardData} />}
  </div>
  
  );
};

export default HeroSection;
