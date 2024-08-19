import React from "react";
import LOGO from '../assets/LOGO.svg'
import socialIcon from '../assets/Socia-icons.svg'
const Footer = () => {
  return (
    <div className="w-full h-full md:h-[415px] py-[64px] bg-[#F7F7F7] flex justify-center items-center ">
      <div className="w-full h-full md:h-[284px] flex flex-col gap-[64px] justify-center items-center">
        <div className="md:flex grid grid-flow-row grid-cols-2 justify-items-center items-center md:justify-between  w-full h-full md:gap-0 gap-5 md:h-[168px] px-5">
          <div className="flex flex-col md:items-start items-center col-span-2 gap-[16px] w-[247px] h-[168px]">
            <div><img src={LOGO} alt="" /></div>
            <p className="font-lato text-[16px] text-[#7F7D7D] md:text-left text-center">Generate outside the box thinking with the possibility to target the low.</p>
            <div><img src={socialIcon} alt="" /></div>
          </div>
          <div className="flex flex-col gap-[24px] w-[96px] h-[149px]">
            <h1 className="font-futura text-[16px] text-[#6596A1]">Products</h1>
            <div className="flex flex-col">
              <p className="font-lato text-[14px] text-[#7F7D7D]">Features</p>
              <p className="font-lato text-[14px] text-[#7F7D7D]">Integration</p>
              <p className="font-lato text-[14px] text-[#7F7D7D]">Enterprise</p>
              <p className="font-lato text-[14px] text-[#7F7D7D]">Solutions</p>
            </div>
          </div>
          <div className="flex flex-col gap-[24px] w-[96px] h-[149px]">
          <h1 className="font-futura text-[16px] text-[#6596A1]">Quick Links</h1>
            <div className="flex flex-col">
              <p className="font-lato text-[14px] text-[#7F7D7D]">About</p>
              <p className="font-lato text-[14px] text-[#7F7D7D]">Contact Us</p>
              <p className="font-lato text-[14px] text-[#7F7D7D]">Login</p>
              <p className="font-lato text-[14px] text-[#7F7D7D]">Products</p>
            </div>
          </div>
          <div className="flex flex-col gap-[24px] w-[96px] h-[149px]">
            <h1 className="font-futura text-[16px] text-[#6596A1]">Products</h1>
            <div className="flex flex-col">
              <p className="font-lato text-[14px] text-[#7F7D7D]">Features</p>
              <p className="font-lato text-[14px] text-[#7F7D7D]">Integration</p>
              <p className="font-lato text-[14px] text-[#7F7D7D]">Enterprise</p>
              <p className="font-lato text-[14px] text-[#7F7D7D]">Solutions</p>
            </div>
          </div>
          <div className="flex flex-col gap-[24px] w-[96px] h-[149px]">
            <h1 className="font-futura text-[16px] text-[#6596A1]">Products</h1>
            <div className="flex flex-col">
              <p className="font-lato text-[14px] text-[#7F7D7D]">Features</p>
              <p className="font-lato text-[14px] text-[#7F7D7D]">Integration</p>
              <p className="font-lato text-[14px] text-[#7F7D7D]">Enterprise</p>
              <p className="font-lato text-[14px] text-[#7F7D7D]">Solutions</p>
            </div>
          </div>
        </div>
        <div className="w-full h-[55px] flex flex-col gap-[16px] justify-center items-center">
          <img src={LOGO} alt="" className="size-7"/>
          <p className="font-lato text-[12px] text-[#7F7D7D]">© 2023 MMSIT@PUD. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
