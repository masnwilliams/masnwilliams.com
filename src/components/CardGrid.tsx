"use client";

import Card from "./Card";
import { ChangeEvent, useState } from "react";
import { projects } from "@/lib/const";

const CardGrid = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.link.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="flex justify-center sm:justify-end mb-8">
        <div className="relative w-full max-w-xs sm:w-80">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={handleChange}
            className="bg-white border border-gray-200 rounded-2xl px-6 py-3 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-300 transition-all placeholder-gray-500"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start justify-items-center">
        {filteredProjects.map((project, index) => (
          <Card
            key={project.title}
            title={project.title}
            image={project.image}
            description={project.description}
            link={project.link}
            status={project.status}
          />
        ))}
      </div>
    </>
  );
};

export default CardGrid;
