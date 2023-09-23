import React from "react";

type Props = {
  image?: string | null;
  size?: "small" | "normal";
  highlight: boolean;
};
const Avatar = ({ image, size = "small", highlight = false }: Props) => {
  return (
    <div className={getContainerStyle(size, highlight)}>
      {/*eslint-disable-next-line @next/next/no-img-element*/}
      <img
        className={`rounded-full p-[0.1rem] ${getImageSizeStyle(size)}`}
        alt="user profile"
        src={image ?? undefined}
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
function getContainerStyle(size: string, highlight: boolean): string {
  const baseStyle = "rounded-full flex justify-center items-center";
  const highlightStyle = highlight
    ? "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
    : "";

  const sizeStyle = size === "small" ? "w-9 h-9" : "w-[68px] h-[68px]";

  return `${baseStyle} ${highlightStyle} ${sizeStyle}`;
}

function getImageSizeStyle(size: string): string {
  return size === "small"
    ? "w-[34px] h-[34px] p-[0.1rem]"
    : "w-16 h-16 p-[0.2rem]";
}

export default Avatar;
