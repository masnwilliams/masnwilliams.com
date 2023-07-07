"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import SocialLinks from "@/components/SocialLinks";

const navItems = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/projects",
    text: "Projects",
  },
  {
    href: "/blog",
    text: "Blog",
  },
];

const NavBar = () => {
  const pathname = usePathname();

  const linkClasses = (href: string) => {
    return pathname === href
      ? "text-blue-500 hover:text-blue-700"
      : "text-black hover:text-gray-500";
  };

  return (
    <div className={"flex justify-center my-10 gap-5"}>
      <Link
        href={"/"}
        className={
          "absolute top-7 left-32 invisible sm:visible hover:scale-105 transition-all"
        }
      >
        <Image
          src={"/mason.png"}
          alt={"Me"}
          width={60}
          height={60}
          className={"rounded-full"}
        />
      </Link>

      {/*{navItems.map((item) => (*/}
      {/*  <Link*/}
      {/*    href={item.href}*/}
      {/*    key={item.href}*/}
      {/*    className={linkClasses(item.href)}*/}
      {/*  >*/}
      {/*    {item.text}*/}
      {/*  </Link>*/}
      {/*))}*/}

      <SocialLinks />
    </div>
  );
};

export default NavBar;
