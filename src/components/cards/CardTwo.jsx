import React from "react";

const CardTwo = ({data}) => {
  return (
    <div
      className="bg-[#F0F5F6] py-6 px-8 border gap-6 rounded-2xl border-[#F7F7F7] shadow-lg hover:shadow-custom-shadow transition-all duration-300 min-h-[300px]"
    >
      <div className="flex justify-between items-center">
        <img
          src={data.img}
          alt={``}
          className="w-16 h-16 object-cover rounded-lg"
        />
        <button className="w-24 h-12 rounded-md border border-[#6596A1] text-[#6596A1] text-sm font-lato">
          View All
        </button>
      </div>
      <div className="pt-5 flex flex-col">
        <h1 className="text-xl md:text-2xl font-bold text-[#223236]">
          {data.title}
        </h1>
        <p className="text-sm md:text-base font-lato text-[#7F7D7D]">
          {data.text}
        </p>
      </div>
    </div>
  );
};

export default CardTwo;
