import React from "react";
import { Link } from "react-router-dom";

const MobileNavBtn = ({
  btn: { name, url, isActive, id },
  handlerChanger,
  theme,
}) => {
  console.log(isActive);
  return (
    <>
      <Link
        to={url}
        className={` underline ${
          isActive
            ? theme === "light"
              ? "text-blue-500"
              : "text-blue-500"
            : theme === "light"
            ? "text-gray-400"
            : "text-gray-700"
        }`}
        onClick={() => handlerChanger(id)}
      >
        {name}
      </Link>
    </>
  );
};

export default MobileNavBtn;
