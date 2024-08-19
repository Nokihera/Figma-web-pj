import React from "react";
import image from "../assets/contactHerophoto.svg";
import PhoneSvg from "../assets/Phone.svg";
import EnvelopSvg from "../assets/Envelope.svg";
import Locationsvg from "../assets/Location.svg";
import HeroSection from "../components/HeroSection";
import contactImg from "../assets/contactImg.jsx.svg";

import image1 from "../assets/aboutCard1img.svg";
import image2 from "../assets/aboutCard2img.svg";
import image3 from "../assets/aboutCard3img.svg";
import CardOne from "../components/cards/CardOne";

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
  const cardData = [
    {
      text: (
        <div className=" my-2">
          <div className="flex flex-col bg-[#F0F5F6] h-auto lg:h-[155px] w-[386px] max-w-[500px] px-6 items-center justify-start gap-2 rounded-lg py-4 mb-2">
            <h1 className="font-futura text-lg w-full font-bold text-[#6596A1]">
              India
            </h1>
            <p className="font-lato text-sm font-light w-full">
              Apt. 172 2622 Hackett Ranch, New Savannaport, MD 22635
            </p>
            <p className=" w-full flex justify-start items-center font-lato text-sm font-light gap-4">
              <span className=" flex gap-1">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4 text-[#6596A1]"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>{" "}
                <span> +9699123456</span>
              </span>{" "}
              <span className=" flex gap-1">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4 text-[#6596A1]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </span>
                <span>info@infoseo.com</span>
              </span>
            </p>
          </div>
          <div className="flex flex-col bg-[#F0F5F6] h-auto lg:h-[155px] w-[386px] max-w-[500px] px-6 items-center justify-start gap-2 rounded-lg py-4">
            <h1 className="font-futura text-lg w-full font-bold text-[#6596A1]">
              USA
            </h1>
            <p className="font-lato text-sm font-light w-full">
              4262 Hane Spring, North Joannieshire, AR 57693-7102.
            </p>
            <p className=" w-full flex justify-start items-center font-lato text-sm font-light gap-4">
              <span className=" flex gap-1">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4 text-[#6596A1]"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>{" "}
                <span> +9698765432</span>
              </span>{" "}
              <span className=" flex gap-1">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4 text-[#6596A1]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </span>
                <span>info@infoseo.com</span>
              </span>
            </p>
          </div>
        </div>
      ),
      image: contactImg,
      isBtn: false,
    },
  ];
  return (
    <div className=" w-full max-w-[1440px] flex flex-col items-center justify-center mx-auto">
      <HeroSection conents={conents} />
      <div className="w-full h-auto flex flex-wrap items-center justify-center gap-3 py-6">
        <div className="flex bg-[#F0F5F6] h-auto lg:h-[186px] w-[386px] max-w-[500px] px-6 items-center justify-start gap-2 rounded-lg py-2">
          <div>
            <img src={Locationsvg} alt="" />
          </div>
          <div className="flex flex-col items-start justify-center">
            <h1 className="font-futura text-lg w-full font-bold">
              Head office:
            </h1>
            <p className="font-lato text-sm font-light w-full">
              Apt. 172 2622 Hackett Ranch, New Savannaport, MD 22635
            </p>
          </div>
        </div>
        <div className="flex bg-[#F0F5F6] h-auto lg:h-[186px] w-[386px] max-w-[500px] px-6 items-center justify-start gap-2 rounded-lg py-2">
          <div>
            <img src={EnvelopSvg} alt="" />
          </div>
          <div className="flex flex-col items-start justify-center">
            <h1 className="font-futura text-lg w-full font-bold">
              Our email address:
            </h1>
            <p className="font-lato text-sm font-light w-full">
              nonneffirahou-9496@yopmail.com
            </p>
          </div>
        </div>
        <div className="flex bg-[#F0F5F6] h-auto lg:h-[186px] w-[386px] max-w-[500px] px-6 items-center justify-start gap-2 rounded-lg py-2">
          <div>
            <img src={PhoneSvg} alt="" />
          </div>
          <div className="flex flex-col items-start justify-center">
            <h1 className="font-futura text-lg w-full font-bold">
              Contact number:
            </h1>
            <p className="font-lato text-sm font-light w-full">+69934526313</p>
          </div>
        </div>
      </div>
      <div className=" w-full flex flex-col justify-center items-center my-4">
        <div className="w-[1216px] h-[184px] flex flex-col items-center gap-[16px]">
          <h1 className="font-futura text-[#6596A1] text-[15px] md:text-[20px] border-[1px] rounded-[20px] border-[#C4C4C4] py-[8px] px-[10px] md:px-[16px] flex items-center justify-center w-[145px] h-[38px] gap-[10px] text-center">
            Our office
          </h1>

          <div className="w-[814px] h-[130px] flex flex-col items-center gap-[16px]">
            <div>
              <h1 className="font-futura text-[25px] md:text-[50px] font-bold text-[#223236]">
                <span className="text-[#6596A1]">Where </span>
                we are?{" "}
              </h1>
            </div>
            <div className="w-[481px] h-[48px]">
              <p className="text-center text-[16px] font-lato text-[#7F7D7D]">
                We are part of th LACS creative community with 3 spaces in the
                lisbon region.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className=" w-full flex flex-col justify-center items-center gap-8">
          <CardOne cardData={cardData[0]} />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
