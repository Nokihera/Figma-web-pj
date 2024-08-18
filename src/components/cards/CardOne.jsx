import React from "react";
import image from "../../assets/blogHerophoto.svg";
import second from "../../assets/aboutCard3img.svg";

const CardOne = ({ cardData }) => {
  return (
    <div
      className={`w-full max-w-[1220px] gap-8 flex flex-col sm:flex-row justify-center items-center ${
        cardData.isBg && "bg-[#ccdce0]"
      } rounded-lg`}
    >
      <div
        className={`w-full flex flex-col sm:flex-row ${
          cardData.isImageLeft ? "sm:flex-row-reverse" : ""
        } justify-between gap-10 rounded-lg`}
      >
        <div className="flex flex-col justify-center gap-5 rounded-lg">
          <div className="w-full max-w-[400px]">
            <h1 className="font-futura text-[24px] sm:text-[31px] text-[#223236] font-bold">
              {cardData.title}
            </h1>
          </div>
          <div className="w-full max-w-[434px]">
            <p className="font-lato text-[14px] sm:text-[16px] text-[#7F7D7D]">
              {cardData.text}
            </p>
          </div>
          {cardData.isBtn && (
            <div>
              <button className="bg-[#6596A1] rounded-[8px] py-2 px-4 sm:px-[20px] text-white border-[1px]  sm:w-[148px] h-[40px] sm:h-[46px] flex items-center justify-center gap-[6px] font-lato">
                Read more
              </button>
            </div>
          )}
        </div>
        <div className="flex justify-center items-center rounded-lg">
          <img
            className="w-full h-auto max-w-[300px] sm:max-w-[400px]"
            src={cardData.image}
            alt="Blog Image"
          />
        </div>
      </div>
    </div>
  );
};

export default CardOne;
