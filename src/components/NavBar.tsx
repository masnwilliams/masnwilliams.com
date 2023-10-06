"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import SocialLinks from "@/components/SocialLinks";

const navItems = [
  {
    href: "/",
    text: "Home",
    newTab: false
  },
  {
    href: '/newsletter',
    text: 'Newsletter',
    newTab: true
  },
  // {
  //   href: "/podcast",
  //   text: "Podcast",
  //   newTab: true
  // }
];

const NavBar = () => {
  const pathname = usePathname();

  const linkClasses = (href: string) => {
    return pathname === href
      ? "text-blue-500 hover:text-blue-700"
      : "text-black hover:text-gray-500";
  };

  return (
    <div className={"flex px-32 justify-center sm:justify-between my-10 gap-5"}>
      <Link
        href={"/"}
        className={"hidden sm:inline hover:scale-105 transition-all"}
      >
        <Image
          src={"/mason.png"}
          alt={"Me"}
          width={60}
          height={60}
          className={"rounded-full"}
        />
      </Link>

      <div className={'flex font-bold items-center justify-evenly space-x-4 sm:space-x-8'}>
        {navItems.map((item) => (
          <Link
            href={item.href}
            key={item.href}
            className={`${linkClasses(item.href)}`}
            target={item.newTab ? "_blank" : ""}
            rel={item.newTab ? "noopener noreferrer" : ""}
          >
            {item.text}
          </Link>
        ))}
      </div>

      <SocialLinks />
    </div>
  );
};

export default NavBar;
