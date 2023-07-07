"use client";

import { useEffect, useState } from "react";

export const useTypingEffect = (text: string, typingSpeed: number): string => {
  const [typedText, setTypedText] = useState<string>("");

  useEffect(() => {
    const startTime = Date.now();

    const timer = setInterval(() => {
      const timeElapsed = Date.now() - startTime;
      const charsToShow = Math.floor(timeElapsed / typingSpeed);

      setTypedText(text.substring(0, charsToShow));

      if (charsToShow >= text.length) {
        clearInterval(timer);
      }
    }, typingSpeed);

    return () => clearInterval(timer);
  }, [text, typingSpeed]);

  return typedText;
};
