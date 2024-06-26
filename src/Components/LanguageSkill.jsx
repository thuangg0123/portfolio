import React from "react";
import {
  frontendSkills,
  backendSkills,
  testingSkills,
  DBSkills,
  Tool,
} from "../data/language";

function Language() {
  const renderSkills = (skills) => (
    <div className="flex flex-wrap text-black">
      {skills.map((skill) => (
        <div
          className="flex items-center mr-2 mb-2 bg-blue-400 font-bold py-1 px-2 rounded-md"
          key={skill.id}
        >
          <img
            src={skill.img}
            alt={skill.value}
            className="w-5 h-5 mr-1 ml-1"
          />
          <p className="md:text-sm text-xs">{skill.value}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div
      id="skills"
      className="border-t-[2px] border-white-700 mt-10"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <div className="mt-10 text-center">
        <span className="text-4xl mt-10 text-blue-400 font-bold md:text-5xl">
          Language Skills
        </span>
      </div>
      <div className="mt-10 flex flex-col gap-2">
        <div className="md:flex gap-4">
          <h2 className="md:text-xl font-bold mb-2 text-base">
            Frontend Skills:
          </h2>
          {renderSkills(frontendSkills)}
        </div>
        <div className="md:flex gap-4">
          <h2 className="md:text-xl font-bold mb-2 text-base">
            Backend Skills:
          </h2>
          {renderSkills(backendSkills)}
        </div>
        <div className="md:flex gap-4">
          <h2 className="md:text-xl font-bold mb-2 text-base">
            Testing Skills:
          </h2>
          {renderSkills(testingSkills)}
        </div>
        <div className="md:flex gap-4">
          <h2 className="md:text-xl font-bold mb-2 text-base">
            Database Skills:
          </h2>
          {renderSkills(DBSkills)}
        </div>
        <div className="md:flex gap-4">
          <h2 className="md:text-xl font-bold mb-2 text-base">
            Tool & Management:
          </h2>
          {renderSkills(Tool)}
        </div>
      </div>
    </div>
  );
}

export default Language;
