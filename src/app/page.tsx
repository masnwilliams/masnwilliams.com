"use client";

import CardGrid from "@/components/CardGrid";
import { useTypingEffect } from "@/hooks/typing";
import { useEffect, useState } from "react";
import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
}

const posts: BlogPost[] = [
  // {
  //   slug: "local-vs-cloud-agents",
  //   title: "Why Coding Agents Are Local-First and Browser Agents Are Cloud-First",
  //   date: "2026-01-11",
  // },
];

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

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
            Check out what I've done 👇
          </p>
        </div>
      </div>

      {/* Latest Posts Section */}
      {posts.length > 0 && (
        <div className="bg-white rounded-2xl p-8 sm:p-12 mb-8 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Posts</h2>
          <div className="space-y-4">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block group"
              >
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-1 sm:gap-4">
                  <h3 className="text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <time className="text-sm text-gray-500 shrink-0">
                    {formatDate(post.date)}
                  </time>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Projects Section */}
      <div>
        <CardGrid />
      </div>
    </div>
  );
};

export default HomePage;
