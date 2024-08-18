import React from "react";

const CardThree = ({data}) => {
  return (
    <div
      className=" bg-[#F0F5F6] rounded-lg px-6 py-4 flex flex-col justify-between mx-auto gap-2 w-full max-w-[400px] min-h-[250px]"
    >
      <div className=" flex justify-between items-center">
        <button className=" border-2 rounded-full px-2 py-1 bg-white text-[#6596A1] ">
          Design
        </button>
        <button className=" text-white bg-[#6596A1] rounded-full p-1 flex justify-center items-center">
          <h1 className="px-1.5 text-lg font-bold">+</h1>
        </button>
      </div>
      <div>
        <h1 className=" text-start">{data.text}</h1>
      </div>
      <div>
        <h1 className=" font-futura text-[25px] sm:text-lg">{data.title}</h1>
      </div>
      <div>
        <button className=" bg-[#6596A1] px-2 py-1 rounded-lg text-white">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default CardThree;
