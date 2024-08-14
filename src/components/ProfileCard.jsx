import React from "react";
import profile from "../assets/profile1.svg";
import profile2 from "../assets/profile2.svg";
import profile3 from "../assets/profile3.svg";

const ProfileCard = ({data}) => {
  return (
    <div className="bg-[#F0F5F6] py-[24px] px-[32px] border-[1px] gap-[24px] rounded-[20px] border-[#F7F7F7] shadow-lg hover:shadow-custom-shadow transition-all duration-300">
      <div className="flex justify-between">
      <img src={data.img} alt="" />
        <button className="w-[88px] h-[46px] rounded-[8px] border-[1px] py-[8px] px[18px] border-[#6596A1] text-[#6596A1] text-[14px] font-lato">
          View All
        </button>
      </div>
      <div className="pt-5 flex flex-col">
        <h1 className="text-[25px] font-bold text-[#223236]">{data.title}</h1>
        <p className=" text-[16px] font-lato text-[#7F7D7D]">
          {data.para}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
