import React, { useEffect, useState } from "react";
import NewblogCard from "./cards/NewblogCard";
import CardTwo from "./cards/CardTwo";
import CardThree from "./cards/CardThree";

const Slideshow = ({
  cardData,
  interval = 3000,
  isBlogPage,
  bestWeekCardData,
}) => {
  const itemsPerSlide = isBlogPage
  ? window.innerWidth < 640
    ? 1
    : window.innerWidth < 1280
    ? 4
    : 6
  : window.innerWidth < 640
  ? 1
  : window.innerWidth < 1280
  ? 2
  : 3;

  const length = Math.ceil(cardData.length / itemsPerSlide);
  const indicateArr = Array.from({ length }, (_, i) => i + 1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerSlide >= cardData.length
        ? 0
        : prevIndex + itemsPerSlide
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? cardData.length - (cardData.length % itemsPerSlide || itemsPerSlide)
        : prevIndex - itemsPerSlide
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [currentIndex, interval]);

  return (
    <div className={`relative w-full flex justify-center items-start pb-6 ${isBlogPage && 'sm:h-[850px] lg:h-[850px] md:h-[850px]'}`}>
      <div
        name="card"
        className="w-full max-w-[1211px] mx-auto h-full gap-8 grid grid-cols-1"
      >
        {bestWeekCardData ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {cardData
                  .slice(currentIndex, currentIndex + itemsPerSlide)
                  .map((data, index) => (
                    <CardThree key={index} data={data}/>
                  ))}
              </div>
          </>
        ) : (
          <>
            {isBlogPage ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 h-full max-h-[850px]">
                {cardData
                  .slice(currentIndex, currentIndex + itemsPerSlide)
                  .map((data, index) => (
                    <NewblogCard key={index} data={data} />
                  ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {cardData
                  .slice(currentIndex, currentIndex + itemsPerSlide)
                  .map((data, index) => (
                    <CardTwo key={index} data={data} />
                  ))}
              </div>
            )}
          </>
        )}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-gray-500 p-2 rounded-l"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-gray-500 p-2 rounded-r"
      >
        ❯
      </button>
      <div className="absolute bottom-2 flex gap-2">
        {indicateArr.map((i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 ${
              i === currentIndex / itemsPerSlide + 1
                ? "bg-gray-500"
                : "bg-gray-200"
            } rounded-full`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
