import React from "react";
import CardProject from "./CardProject";

import data from "../data/data.json";

function Projects() {
  return (
    <div
      id="projects"
      className="border-t-[2px] border-white-700 mt-10 flex flex-col items-center"
      data-aos="fade-right"
    >
      <div className="mt-10">
        <span className="text-4xl mt-10 text-blue-400 font-bold md:text-5xl">
          Projects
        </span>
      </div>
      <div className="md:flex md:flex-wrap md:items-center md:justify-center">
        {data.map((project) => (
          <CardProject key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
