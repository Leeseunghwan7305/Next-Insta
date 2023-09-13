import React from "react";
type Props = {
  text: string;
  onClick: () => void;
  size?: "small" | "big";
};
const ColorButton = ({ text, onClick, size = "small" }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 cursor-pointer ${
        size === "big" ? "p-[0.3rem]" : "p-[0.15rem]"
      }`}
    >
      <div
        className={`bg-white p-1 ${
          size === "big" ? "p-4 text-2xl" : "p-[0.3rem] text-base"
        }`}
      >
        {text}
      </div>
    </button>
  );
};

export default ColorButton;
