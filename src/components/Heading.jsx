import React, { useState } from "react";
import LOGO from "../assets/LOGO.svg";
import NavBtn from "./NavBtn";
import useThemeStore from "../UseStore/UseThemeStore";
import { UseNavButton } from "../UseStore/UseNavButton";
import MobileNavBtn from "./MobileNavBtn";

const Heading = () => {
  const [navButtons, setNavButtons] = useState([
    { id: 1, name: "Home", url: "/", isActive: true },
    { id: 2, name: "About", url: "/AboutUs", isActive: false },
    { id: 3, name: "Blog", url: "/Blog", isActive: false },
    { id: 4, name: "Contact", url: "/ContactUs", isActive: false },
  ]);
  const { theme, toggleTheme } = useThemeStore();
  const handlerChanger = (id) => {
    setNavButtons(
      navButtons.map((btn) =>
        btn.id === id ? { ...btn, isActive: true } : { ...btn, isActive: false }
      )
    );
  };
  const { isActive, handlerOnChange } = UseNavButton();
  return (
    <div
      className={`py-5 shadow-lg border-[1px] border-[#5F6D7E66] h-[72px] px-5 flex justify-between ${
        theme == "light" ? "bg-white" : "bg-slate-800"
      } transition-all duration-300 relative`}
    >
      <img src={LOGO} alt="" />
      <div className="md:hidden space-x-3">
        <button
          onClick={toggleTheme}
          className="transition-all duration-300 ml-3"
        >
          {theme === "light" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 transition-all duration-300"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-white transition-all duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          )}
        </button>
        <button
          onClick={() => handlerOnChange()}
          className="transition-all duration-300 bg-slate-400 px-2 py-1"
        >
          {isActive ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 transition-all duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 transition-all duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
        <div
          className={`${
            isActive
              ? theme === "light"? "hidden": "hidden"
              : theme === "light"? "absolute z-40 w-[130px] right-0 bg-slate-800 px-5 py-3 flex flex-col": "absolute z-40 w-[130px] right-0 bg-slate-300 px-5 py-3 flex flex-col"
          }`}
        >
          {navButtons.map((btn) => (
            <MobileNavBtn
              key={btn.id}
              btn={btn}
              theme={theme}
              handlerChanger={handlerChanger}
            />
          ))}
        </div>
      </div>
      <div className="lg:flex gap-5 w-[300px] items-center md:flex hidden">
        {navButtons.map((item) => (
          <NavBtn key={item.id} item={item} handlerChanger={handlerChanger} />
        ))}
        <button onClick={toggleTheme} className="transition-all duration-300">
          {theme === "light" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 transition-all duration-300"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-white transition-all duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default Heading;
