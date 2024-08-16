import React from "react";
import Heading from "../components/heading";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Talent from "../components/Talent";
import InovationSection from "../components/InovationSection";
import BlogPost from "../components/BlogPost";
import image from "../assets/homeHerophoto.svg";
import HeroSection from "../components/HeroSection";

const Home = () => {
  const conents = {
    pagename: "The Art of UI Design",
    title: (
      <>
        Come for the <span className="text-[#6596A1]">features</span>
        of it. Stay for best ever help.
      </>
    ),
    text: "We’ve been told it is possible to revolutionize the payment industry. We have not reinvented the wheel, we decide",
    image: image,
    isButton: true,
  };
  return (
    <div>
      {/* <Hero /> */}
      <HeroSection conents={conents} />
      <Features />
      <Talent />
      <InovationSection />
      <BlogPost />
    </div>
  );
};

export default Home;
