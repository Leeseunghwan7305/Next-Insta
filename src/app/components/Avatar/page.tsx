import React from "react";

type Props = { image?: string | null };
const Avatar = ({ image }: Props) => {
  return (
    <div
      className={`w-9 h-9 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500  cursor-pointer`}
    >
      {/*eslint-disable-next-line @next/next/no-img-element*/}
      <img
        className="rounded-full p-[0.1rem]"
        alt="user profile"
        src={image ?? undefined}
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

export default Avatar;
