import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiSequelize,
  SiPhp,
  SiExpress,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { DiLaravel } from "react-icons/di";

function Skills() {
  const skillset = [
    { id: 1, name: "React JS" },
    { id: 2, name: "Node JS" },
    { id: 3, name: "JavaScript" },
    { id: 4, name: "PHP" },
    { id: 5, name: "Bootstrap" },
    { id: 6, name: "Manual Testing" },
    { id: 7, name: "Functional Testing" },
    { id: 8, name: "API Testing" },
  ];

  const skillDescription = {
    description:
      "Skilled in front-end and back-end development, I bring expertise in React JS for creating dynamic interfaces, Node JS for scalable server-side solutions, and JavaScript for enhancing client-side functionality. With a strong foundation in PHP and Bootstrap, I design responsive, efficient applications with consistent UI. In QA, I excel in Manual Testing to ensure software quality, Functional Testing to validate features against requirements, and API Testing to verify reliability and seamless data interactions across systems.",
  };
  return (
    <section className="flex flex-col-reverse min-h-screen w-screen bg-slate-50 dark:bg-[#303030] justify-center items-center sm:p-12 scroll-smooth">
      <div className="max-w-screen w-full grid md:grid-cols-2 gap-8 tracking-tight">
        <span className="mx-auto sm:flex flex-col items-center justify-center">
          <div className="sm:max-w-[700px] justify-center items-center w-full grid grid-cols-4 gap-4 px-4 text-gray-500">
            {skillset.map((skills) => {
              return (
                <div
                  key={skills.id}
                  className="inline-flex items-center gap-4 rounded-full shadow-lg bg-white dark:bg-[#424242] p-2 text-center"
                >
                  <span className=" text-gray-600 dark:text-gray-300 text-sm sm:text-md">
                    {skills.name}
                  </span>
                </div>
              );
            })}
          </div>
        </span>

        <div className="max-w-[600px] text-justify justify-center items-center px-8">
          <h1 className="text-gray-600 dark:text-gray-300 text-4xl sm:text-6xl font-medium mb-4">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-300 animate-text">
              Skills
            </span>
          </h1>
          <span className="text-sm sm:text-lg text-gray-500 dark:text-gray-300">
            {skillDescription.description}
          </span>
        </div>
      </div>
    </section>
  );
}

export default Skills;
