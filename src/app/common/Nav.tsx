"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import HomeIcon from "./ui/icons/HomeIcon";
import HomeFillIcon from "./ui/icons/HomeFillIcon";
import SearchIcon from "./ui/icons/SearchIcon";
import SearchFillIcon from "./ui/icons/SearchFillIcon";
import NewIcon from "./ui/icons/NewIcon";
import NewFillIcon from "./ui/icons/NewFillIcon";
import ColorButton from "./ui/ColorButton";
import { useSession, signIn, signOut } from "next-auth/react";

const Nav = () => {
  const pathname = usePathname();
  const { data: session } = useSession();

  console.log(session);
  const menu = [
    { href: "/", icon: <HomeIcon />, clickedIcon: <HomeFillIcon /> },
    { href: "/search", icon: <SearchIcon />, clickedIcon: <SearchFillIcon /> },
    { href: "/new", icon: <NewIcon />, clickedIcon: <NewFillIcon /> },
  ];

  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-200 shadow-md sticky top-0 h-16 px-6">
      <Link href="/">
        <h1 className="font-bold text-3xl cursor-pointer">Instantgram</h1>
      </Link>
      <nav className="flex">
        <ul className="flex items-center p-2 gap-4">
          {menu.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                {pathname === item.href ? item.clickedIcon : item.icon}
              </Link>
            </li>
          ))}
        </ul>
        {session ? (
          <ColorButton text="Sign out" onClick={() => signOut()} />
        ) : (
          <ColorButton text="Sign in" onClick={() => signIn()} />
        )}
      </nav>
    </header>
  );
};

export default Nav;
