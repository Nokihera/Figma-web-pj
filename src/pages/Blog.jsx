import React from "react";
import HeroSection from "../components/HeroSection";
import image from "../assets/blogHerophoto.svg";
import newBlogimg1 from "../assets/newBlogimg1.svg";
import newBlogimg2 from "../assets/newBlogimg2.svg";
import newBlogimg3 from "../assets/newBlogimg3.svg";
import newBlogimg4 from "../assets/newBlogimg4.svg";
import Slideshow from "../components/SlideShow";

const Blog = () => {
  const cardData = [
    {
      img: newBlogimg1,
      title: "Organize your digital assets with a methodology.",
      text: "Leverage agile frameworks to provide a robust synopsis for high-level overviews.",
    },
    {
      img: newBlogimg1,
      title: "Organize your digital assets with a methodology.",
      text: "Leverage agile frameworks to provide a robust synopsis for high-level overviews.",
    },
    {
      img: newBlogimg1,
      title: "Organize your digital assets with a methodology.",
      text: "Leverage agile frameworks to provide a robust synopsis for high-level overviews.",
    },
    {
      img: newBlogimg1,
      title: "Organize your digital assets with a methodology.",
      text: "Leverage agile frameworks to provide a robust synopsis for high-level overviews.",
    },
    {
      img: newBlogimg1,
      title: "Organize your digital assets with a methodology.",
      text: "Leverage agile frameworks to provide a robust synopsis for high-level overviews.",
    },
    {
      img: newBlogimg2,
      title: "Organize your digital assets with a methodology.",
      text: "Leverage agile frameworks to provide a robust synopsis for high-level overviews.",
    },
    {
      img: newBlogimg2,
      title: "Organize your digital assets with a methodology.",
      text: "Leverage agile frameworks to provide a robust synopsis for high-level overviews.",
    },
    {
      img: newBlogimg2,
      title: "Organize your digital assets with a methodology.",
      text: "Leverage agile frameworks to provide a robust synopsis for high-level overviews.",
    },
    {
      img: newBlogimg2,
      title: "Organize your digital assets with a methodology.",
      text: "Leverage agile frameworks to provide a robust synopsis for high-level overviews.",
    },
    {
      img: newBlogimg3,
      title: "Organize your digital assets with a methodology.",
      text: "Leverage agile frameworks to provide a robust synopsis for high-level overviews.",
    },
    {
      img: newBlogimg3,
      title: "Organize your digital assets with a methodology.",
      text: "Leverage agile frameworks to provide a robust synopsis for high-level overviews.",
    },
    {
      img: newBlogimg3,
      title: "Organize your digital assets with a methodology.",
      text: "Leverage agile frameworks to provide a robust synopsis for high-level overviews.",
    },
    {
      img: newBlogimg4,
      title: "Organize your digital assets with a methodology.",
      text: "Leverage agile frameworks to provide a robust synopsis for high-level overviews.",
    },
    {
      img: newBlogimg4,
      title: "Organize your digital assets with a methodology.",
      text: "Leverage agile frameworks to provide a robust synopsis for high-level overviews.",
    },
    {
      img: newBlogimg4,
      title: "Organize your digital assets with a methodology.",
      text: "Leverage agile frameworks to provide a robust synopsis for high-level overviews.",
    },
  ];
  const bestWeekCardData = [
    {
      title: "Real talk in a corporate world",
      text: "Become a broadcast member",
    },
    {
      title: "Real talk in a corporate world",
      text: "Become a broadcast member",
    },
    {
      title: "Real talk in a corporate world",
      text: "Become a broadcast member",
    },
    { title: "How to boost productivity", text: "Insight and inspiration" },
    { title: "How to boost productivity", text: "Insight and inspiration" },
    { title: "How to boost productivity", text: "Insight and inspiration" },
    {
      title: "Quality assurance in project managment.",
      text: "Become a project management",
    },
    {
      title: "Quality assurance in project managment.",
      text: "Become a project management",
    },
    {
      title: "Quality assurance in project managment.",
      text: "Become a project management",
    },
  ];
  const contents = {
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
      text: "Discover expert tips, latest trends, and valuable insights in digital design and project management",
      isBtn: true,
      image: image,
    },
  };

  return (
    <div className="max-w-[1440px] mx-auto">
      <HeroSection conents={contents} />

      <div className="w-full h-full max-w-[1440px] px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="w-full max-w-[1220px] h-full mx-auto">
          <h1 className=" text-[31px] font-futura font-bold text-start my- ">
            New Blog Sections
          </h1>
          <div className="h-full">
            <Slideshow isBlogPage={true} cardData={cardData} />
          </div>
        </div>
        <div className="w-full max-w-[1220px] h-full mx-auto">
          <h1 className=" text-[31px] font-futura font-bold text-start my- ">
            Best of the week
          </h1>
          <div className="h-full">
            <Slideshow bestWeekCardData={true} cardData={bestWeekCardData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
