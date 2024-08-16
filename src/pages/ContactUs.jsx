import React from "react";
import image from "../assets/contactHerophoto.svg";
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
    <div>
      <HeroSection conents={conents} />
    </div>
  );
};

export default ContactUs;
