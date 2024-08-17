import React from "react";
import HeroSection from "../components/HeroSection";
import image from "../assets/blogHerophoto.svg";

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
    isSearchBar: true,
    card: true,
    cardData: {
      title: "How to start a blog in 2024: The ultimate guide ",
      text: "Discover expect tips, latest trends, and valuable insights in digital design and project management",
      isBtn: true,
      image: image,
    },
  };
  return (
    <div>
      <HeroSection conents={conents} />
    </div>
  );
};

export default Blog;
