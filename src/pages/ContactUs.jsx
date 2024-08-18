import React from "react";
import image from "../assets/contactHerophoto.svg";
import PhoneSvg from "../assets/Phone.svg";
import EnvelopSvg from "../assets/Envelope.svg";
import Locationsvg from "../assets/Location.svg";
import HeroSection from "../components/HeroSection";

const ContactUs = () => {
  const conents = {
    pagename: "Contact us",
    title: (
      <>
        Let’s talk about your next
        <span className="text-[#6596A1]"> success?</span>
      </>
    ),
    text: "The only corporate card and spent management platform designed to help you spend less.",
    image: image,
  };
  return (
    <div className=" w-full max-w-[1440px] flex flex-col items-center justify-center mx-auto">
      <HeroSection conents={conents} />
      <div className=" w-full h-[331px] flex items-center justify-center gap-3">
        <div
          className=" flex bg-[#F0F5F6] h-[181px] w-[386px] px-6 items-center justify-start gap-2 rounded-lg"
        >
          <div className=""><img src={Locationsvg} alt="" /></div>
          <div className=" flex flex-col items-center justify-center">
            <h1 className=" font-futura text-lg w-full font-bold">Head office:</h1>
            <p className=" font-lato text-sm font-light w-full">Apt. 172 2622 Hackett Ranch, New Savannaport, MD 22635</p>
          </div>
        </div>
        <div
          className=" flex bg-[#F0F5F6] h-[181px] w-[386px] px-6 items-center justify-start gap-2 rounded-lg"
        >
          <div className=""><img src={EnvelopSvg} alt="" /></div>
          <div className=" flex flex-col items-center justify-center">
            <h1 className=" font-futura text-lg w-full font-bold">Our email address:</h1>
            <p className=" font-lato text-sm font-light w-full">nonneffirahou-9496@yopmail.com</p>
          </div>
        </div>
        <div
          className=" flex bg-[#F0F5F6] h-[181px] w-[386px] px-6 items-center justify-start gap-2 rounded-lg"
        >
          <div className=""><img src={PhoneSvg} alt="" /></div>
          <div className=" flex flex-col items-center justify-center">
            <h1 className=" font-futura text-lg w-full font-bold">Contact number:</h1>
            <p className=" font-lato text-sm font-light w-full">+69934526313</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
