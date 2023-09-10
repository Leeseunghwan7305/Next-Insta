import React from "react";
type Props = {
  text: string;
  onClick: () => void;
};
const ColorButton = ({ text, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 cursor-pointer"
    >
      <div className=" bg-white p-1">{text}</div>
    </button>
  );
};

export default ColorButton;
