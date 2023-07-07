"use client";

import CardGrid from "@/components/CardGrid";
import { useTypingEffect } from "@/hooks/typing";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [cursorVisible, setCursorVisible] = useState<boolean>(true);

  const typedText = useTypingEffect("Hey, I'm Mason.", 100);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 500);

    return () => {
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <>
      <div className={"font-bold text-4xl mb-2"}>
        {typedText}
        <span
          className={`inline-block w-0.5 h-10 bg-black align-top ${
            cursorVisible ? "opacity-100" : "opacity-0"
          }`}
        ></span>
      </div>

      <div className={"text-gray-700 text-base"}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Welcome to my digital space! I'm an innovative tech entrepreneur and
        advocate with a passion for gaming and the software developer community.
        Dive in below to explore my blend of technical expertise, creative
        thinking, and commitment to creating solutions that unite and empower
        communities.
      </div>

      <div className={"mt-10"}>
        <CardGrid />
      </div>
    </>
  );
};

export default HomePage;
