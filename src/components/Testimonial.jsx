import React from "react";
import smallProfile from "../assets/smallProfile.svg";
import smallProfile1 from "../assets/smallProfile1.svg";
import smallProfile2 from "../assets/smallProfile2.svg";
import smallProfile3 from "../assets/smallProfile3.svg";
import smallProfile4 from "../assets/smallProfile4.svg";
import icon from '../assets/Icon.svg';
const Testimonial = () => {
  const currentRating = 4;
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div className="w-[1218px] h-[100px] mx-auto grid grid-flow-row grid-cols-3 items-center relative content-center mt-5">
      <div className="flex flex-col justify-center items-start gap-[16px] w-[248px] h-[96px] mx-auto ">
        <div className="relative w-[155px] h-[35px] ">
          <img src={smallProfile} alt="" className="absolute left-[40px]" />
          <img src={smallProfile1} alt="" className="absolute left-[70px]" />
          <img src={smallProfile2} alt="" className="absolute left-[100px]" />
          <img src={smallProfile3} alt="" className="absolute left-[130px]" />
          <img src={smallProfile4} alt="" className="absolute left-[160px]" />
        </div>
        <div>
          <p className="font-lato text-[18px] text-[#7F7D7D] text-center">
            Repurpose analytics with the possibility to come
          </p>
        </div>
      </div>
      <div className="w-[248px] h-[100px] gap-[24px] flex flex-col mx-auto">
        <div className="flex justify-center">
          {numbers.map((number) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="gray-500"
              className={`size-6 ${number <= currentRating ? "fill-yellow-400" : "fill-gray-500"}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          ))}
        </div>
        <div>
          <p className="text-center text-[18px] font-lato text-[#7F7D7D]">5 out of 5 stars from 123 reviews from our users</p>
        </div>
      </div>
      <div className="flex flex-col w-[248px] h-[92px] mx-auto gap-[16px]">
          <img src={icon} alt="" className="w-[18px] h-[20px] mx-auto"/>
          <p className="font-lato text-[18px] text-[#7F7D7D] text-center ">Repurpose analytics with the possibility to come up.</p>
        </div>
    </div>
  );
};

export default Testimonial;
