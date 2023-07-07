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
      <div className="flex justify-center sm:justify-end mb-4">
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={handleChange}
          className="border p-2 rounded w-80"
        />

        {/*<button className={"pl-2"} onClick={() => setSearchTerm("acquired")}>*/}
        {/*  <span*/}
        {/*    className={*/}
        {/*      "hover:text-blue-600 hover:bg-blue-400 bg-blue-200 text-blue-600 inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"*/}
        {/*    }*/}
        {/*  >*/}
        {/*    acquired*/}
        {/*  </span>*/}
        {/*</button>*/}
      </div>

      <div className="grid place-items-center align-middle grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
