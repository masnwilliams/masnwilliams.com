"use client";

import CardGrid from "@/components/CardGrid";
import { useTypingEffect } from "@/hooks/typing";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [cursorVisible, setCursorVisible] = useState<boolean>(true);

  const typedText = useTypingEffect("Hey, I'm Mason 👋", 100);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 500);

    return () => {
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="bg-white rounded-2xl p-8 sm:p-12 mb-8 shadow-sm border border-gray-100">
        <div className="text-center sm:text-left">
          <div className="font-bold text-4xl sm:text-5xl mb-4 text-gray-900">
            {typedText}
            <span
              className={`inline-block w-0.5 h-10 sm:h-12 bg-gray-900 align-top ml-1 ${
                cursorVisible ? "opacity-100" : "opacity-0"
              } transition-opacity duration-500`}
            ></span>
          </div>
          
          <p className="text-gray-600 text-lg sm:text-xl max-w-2xl">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Check out what I've built 👇
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <div>
        <CardGrid />
      </div>
    </div>
  );
};

export default HomePage;
