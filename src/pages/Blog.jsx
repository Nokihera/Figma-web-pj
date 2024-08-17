import React from "react";
import HeroSection from "../components/HeroSection";
import image from "../assets/contactHerophoto.svg";

const Blog = () => {
  const conents = {
    pagename: "Our Blog",
    title: (
      <>
        Tales and
        <span className="text-[#6596A1]"> discussion</span>
      </>
    ),
    text: "Subscribe to learn about product features, the latest in technology, solutions and updates.",
    // image: image,
    isSearchBar: true,
    card:true,
  };
  return (
    <div>
      <HeroSection conents={conents} />
    </div>
  );
};

export default Blog;
