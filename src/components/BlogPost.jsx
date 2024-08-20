import React from "react";
import img1 from "../assets/BlogPostImg.svg";
import img2 from "../assets/blogImg.svg";
import img3 from "../assets/blogImg2.svg";
const BlogPost = () => {
  return (
    <div className="w-full flex justify-center items-center px-4">
      <div className="w-full h-full md:h-full lg:h-[991px] gap-[64px] py-[100px]  flex flex-col items-center justify-center content-center justify-items-center">
        <div className="flex flex-col gap[16px] items-center">
          <h1 className="font-futura text-[15px] md:text-[20px] text-[#6596A1] border-[1px] border-[#C4C4C4] rounded-[20px] w-[150px] md:w-[192px] h-[38px] py-[5px] px-[15px] flex justify-center items-center ">
            Magic Unleashed
          </h1>
          <h1 className="w-4/5 md:w-[850px] h-[66px] text-[25px] md:text-[50px] font-futura text-[#223236] text-center font-bold mt-[16px]">
            <span className="text-[#6596A1]">A New Era </span> of Design
            Excellence
          </h1>
          <p className="w-4/5 md:w-[476px] h-[48px] font-lato text-[16px] text-[#7F7D7D] text-center mt-[16px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's{" "}
          </p>
          <div className="w-full h-full lg:h-[575px] gap-[32px] grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center mt-[64px] px-5 md:px-14 lg:px-5">
            <div className="flex flex-col justify-center shadow-custom-2 rounded-[20px]  ">
              <div>
                <img src={img1} alt="" />
              </div>
              <div className="w-full px-[26px]  h-[310px] py-[24px]  gap-[24px] flex flex-col bg-[#F0F5F6] rounded-[20px]">
                <div className="flex gap-[16px] items-center">
                  <span className="w-[79px] h-[28px] rounded-[5px] py-[2px] px-[8px] bg-[#6596A1] text-white font-lato text-[14px] flex justify-center ">
                    Marketing
                  </span>
                  <span className="font-lato text-[14px] w-[85px] h-[28px] text-[#7F7D7D] py-[2px] px-[8px] text-nowrap">
                    2 Apr. 2023
                  </span>
                </div>
                <div className="w-full h-[154px] flex flex-col gap-[10px] md:gap-[16px] pb-4">
                  <h1 className="font-futura text-[20px] md:text-[25px] text-[#223236]">
                    Organize your digital assets with a methodology.
                  </h1>
                  <p className="font-lato text-[14px] md:text-[16px] text-[#7F7D7D]">
                    Leverage agile frameworks to provide a robust synopsis for
                    high level overviews. Iterative approaches to corporate.
                  </p>
                  <button className="text-left text-[#6596A1] flex items-center gap-2">
                    Link <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center shadow-custom-2 rounded-[20px]">
              <img src={img2} alt="" />
              <div className="w-full h-[310px] py-[24px] px-[26px] gap-[24px] flex flex-col bg-[#F0F5F6] rounded-[20px]">
                <div className="flex gap-[16px] items-center">
                  <span className="w-[79px] h-[28px] rounded-[5px] py-[2px] px-[8px] bg-[#6596A1] text-white font-lato text-[14px] flex justify-center ">
                    Design
                  </span>
                  <span className="font-lato text-[14px] w-[85px] h-[28px] text-[#7F7D7D] py-[2px] px-[8px] text-nowrap">
                    2 Apr. 2023
                  </span>
                </div>
                <div className="w-full md:w-[320px] h-[154px] flex flex-col gap-[10px] md:gap-[16px] pb-4">
                  <h1 className="font-futura text-[20px] md:text-[25px] text-[#223236]">
                    Gestalt psychology in UI/UX design and beyond.
                  </h1>
                  <p className="font-lato text-[14px] md:text-[16px] text-[#7F7D7D]">
                    Bring to the table win-win strategies to proactive
                    domination. At the end of the day, going forward.
                  </p>
                  <button className="text-left text-[#6596A1] flex items-center gap-2">
                    Link <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center shadow-custom-2 rounded-[20px] ">
              <img
                src={img3}
                alt=""
                className=" z-0 relative top-5 "
              />
              <div className="w-full h-[310px] py-[24px] px-[32px] gap-[24px] flex flex-col bg-[#F0F5F6] rounded-[20px] z-30">
                <div className="flex gap-[16px] items-center ">
                  <span className="w-[100px] h-[28px] rounded-[5px] py-[2px] px-[8px] bg-[#6596A1] text-white font-lato text-[14px] flex justify-center ">
                    Development
                  </span>
                  <span className="font-lato text-[14px] w-[85px] h-[28px] text-[#7F7D7D] py-[2px] px-[8px] text-nowrap">
                    2 Apr. 2023
                  </span>
                </div>
                <div className="w-full md:w-[320px] h-[154px] flex flex-col gap-[10px] md:gap-[16px] pb-4">
                  <h1 className="font-futura text-[20px] md:text-[25px] text-[#223236]">
                    Faster ways to reach your customers and their needs.
                  </h1>
                  <p className="font-lato text-[14px] md:text-[16px] text-[#7F7D7D]">
                    Capitalize on low hanging fruit to identify a ballpark value
                    added activity to beta test override the digital divide.
                  </p>
                  <button className="text-left text-[#6596A1] flex items-center gap-2">
                    Link <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
