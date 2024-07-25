import React from "react";

const HoverButton = ({ children, textHover, selected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`hover:bg-[#e7e7e7] p-1.5 rounded-md hover:text-black text-sm duration-300  ${
        textHover ? "text-gray-500" : ""
      } ${selected ? "text-black font-semibold" : "font-thin"}`}
    >
      {children}
    </button>
  );
};

export default HoverButton;
