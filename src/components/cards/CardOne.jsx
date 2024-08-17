import React from "react";
import image from "../../assets/blogHerophoto.svg";
import second from '../../assets/aboutCard3img.svg'

const CardOne = ({ cardData }) => {
  console.log(cardData)
  console.log(image)
  return (
    <div className={`w-[1440px] gap-[64px] flex justify-center items-center ${cardData.isBg && 'bg-[#ccdce0]'} rounded-lg`}>
      <div
        className={`w-[1221px] flex ${
          cardData.isImageLeft && "flex-row-reverse"
        }  justify-center gap-40`}
      >
        <div className="flex flex-col justify-center gap-[20px]">
          <div className="w-[400px]">
            <h1 className="font-futura text-[31px] text-[#223236] font-bold">
              {cardData.title}
            </h1>
          </div>
          <div className="w-[434px]">
            <p className="font-lato text-[16px] text-[#7F7D7D]">
              {cardData.text}
            </p>
          </div>
          {cardData.isBtn && (
            <div>
              <button className="bg-[#6596A1] rounded-[8px] py-[8px] px-[20px] text-white border-[1px] w-[148px] h-[46px] flex items-center gap-[6px] font-lato">
                Read more
              </button>
            </div>
          )}
        </div>
        <div className="flex justify-center items-center">
          <img className="size-96" src={cardData.image} alt="Blog Image" />
        </div>
      </div>
    </div>
  );
};

export default CardOne;
