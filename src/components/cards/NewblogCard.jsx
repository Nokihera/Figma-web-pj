import React from "react";

const NewblogCard = ({data}) => {
  return (
    <div
      className="w-full max-w-[400px] h-[300px] min-h-[350px] mx-auto flex flex-col shadow-custom-2 rounded-2xl"
    >
      {/* Blog Image */}
      <img
        src={data.img}
        alt={``}
        className="w-full h-1/3 sm:h-[150px] rounded-t-2xl object-cover"
      />
      {/* Blog Content */}
      <div className="w-full h-2/3 py-4 sm:py-6 px-4 sm:px-6 md:px-8 gap-1 flex flex-col justify-between bg-[#F0F5F6] rounded-b-2xl">
        {/* Tag and Date */}
        <div className="flex flex-wrap gap-2 items-center">
          <span className="py-1 px-3 bg-[#6596A1] text-white font-lato text-xs sm:text-sm rounded-md">
            Marketing
          </span>
          <span className="font-lato text-xs sm:text-sm text-[#7F7D7D]">
            2 Apr. 2023
          </span>
        </div>

        {/* Title */}
        <h1 className="font-futura text-lg sm:text-lg md:text-lg text-[#223236] leading-tight">
          Organize your digital assets with a methodology.
        </h1>

        {/* Description */}
        <p className="font-lato text-xs sm:text-sm md:text-base text-[#7F7D7D] leading-relaxed">
          Leverage agile frameworks to provide a robust synopsis for high-level
          overviews.
        </p>

        {/* Button */}
        <button className="self-start mt-2 text-[#6596A1] font-semibold flex items-center gap-2 text-sm sm:text-base hover:underline">
          Read More <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default NewblogCard;
