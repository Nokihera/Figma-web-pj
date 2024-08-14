import React from "react";
import { Link } from "react-router-dom";
import useThemeStore from "../UseStore/UseThemeStore";

const NavBtn = ({ item: { id, name, isActive, url }, handlerChanger }) => {
  const handleClick = () => {
    handlerChanger(id);
  };
  const { theme } = useThemeStore();
  return (
    <Link
      to={url}
      onClick={() => handleClick(id)}
      className={` font-lato transition-all duration-300 hover:text-[#6596A1] ${
        isActive === true
          ? theme === "light"
            ? "text-[#6596A1]"
            : "text-[#6596A1]"
          : theme === "light"
          ? "text-[#7F7D7D]"
          : "text-white"
      }`}
    >
      {name}
    </Link>
  );
};

export default NavBtn;
