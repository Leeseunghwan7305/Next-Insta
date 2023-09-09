"use client";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { BsPlusSquare } from "react-icons/bs";
import { BsPlusSquareFill } from "react-icons/bs";
import { RiSearchLine } from "react-icons/ri";
import { RiSearchFill } from "react-icons/ri";
import { useRouter, usePathname } from "next/navigation";

type NavlinkItem = {
  destination: string;
  link: React.ReactNode; // React 노드 타입을 사용하여 JSX를 포함한 모든 것을 허용합니다.
};

const Nav = () => {
  const router = useRouter();
  const pathname = usePathname();
  const ICONSTYLE = "text-xl cursor-pointer";
  const NAVLINK: NavlinkItem[] = [
    {
      destination: "/",
      link:
        "/" === pathname ? (
          <AiFillHome className={ICONSTYLE} />
        ) : (
          <AiOutlineHome className={ICONSTYLE} />
        ),
    },
    {
      destination: "/post",
      link:
        "/post" === pathname ? (
          <BsPlusSquareFill className={ICONSTYLE} />
        ) : (
          <BsPlusSquare className={ICONSTYLE} />
        ),
    },
    {
      destination: "/search",
      link:
        "/search" === pathname ? (
          <RiSearchFill className={ICONSTYLE} />
        ) : (
          <RiSearchLine className={ICONSTYLE} />
        ),
    },
  ];

  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-200 shadow-md sticky top-0 h-16">
      <h1 className="font-bold text-xl">Instantgram</h1>
      <nav className="flex">
        {NAVLINK.map((nav, index) => {
          return (
            <a
              onClick={() => router.push(nav.destination)}
              className="p-2"
              key={index}
            >
              {nav.link}
            </a>
          );
        })}
        <button className="rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 cursor-pointer">
          <div className=" bg-white p-1">Sign in</div>
        </button>
      </nav>
    </header>
  );
};

export default Nav;
