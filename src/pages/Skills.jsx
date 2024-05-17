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
    { id: 1, icon: <FaReact />, name: "React" },
    { id: 2, icon: <FaNodeJs />, name: "Node" },
    { id: 3, icon: <SiExpress />, name: "Express" },
    { id: 4, icon: <SiPhp />, name: "Php" },
    { id: 5, icon: <SiTailwindcss />, name: "Tailwind" },
    { id: 6, icon: <RiJavascriptFill />, name: "JavaScript" },
    { id: 7, icon: <FaGitAlt />, name: "Git" },
    { id: 8, icon: <SiSequelize />, name: "Sequelize" },
    { id: 9, icon: <FaDatabase />, name: "SQL" },
    { id: 10, icon: <SiVite />, name: "Vite" },
    { id: 11, icon: <FaBootstrap />, name: "Bootstrap" },
    { id: 12, icon: <DiLaravel />, name: "Laravel" },
  ];

  const skillDescription = {
    description:
      "Skilled in JavaScript, React, and Express for building dynamic web applications. Proficient in SQL and Sequelize for database management. Experienced in Vite and Node.js for efficient development and server-side scripting. Familiar with Tailwind CSS for responsive styling. Utilizes Git for version control and collaboration. Additionally, possesses knowledge in PHP for server-side scripting.",
  };
  return (
    <section className="flex flex-col-reverse min-h-screen min-w-screen bg-slate-50 justify-center items-center sm:p-12">
      <div className="max-w-screen w-full grid md:grid-cols-2 gap-8 tracking-tight">
        <span className="mx-auto sm:flex flex-col items-center justify-center">
          <div className="sm:max-w-[700px] justify-center items-center w-full grid grid-cols-4 gap-4 px-8 text-gray-500">
            {skillset.map((skills) => {
              return (
                <div
                  key={skills.id}
                  className="flex items-center gap-8 rounded-xl shadow-lg bg-white p-4 hover:-rotate-6 duration-300"
                  title={skills.name}
                >
                  <span className="text-gray-600 text-4xl sm:text-5xl">
                    {skills.icon}
                  </span>
                  {/* <span className="hidden xl:block text-gray-700 text-md ">
                    {skills.name}
                  </span> */}
                </div>
              );
            })}
          </div>
        </span>

        <div className="max-w-[600px] text-justify justify-center items-center px-8">
          <h1 className="text-gray-800 text-4xl sm:text-6xl font-medium mb-4">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-400 animate-text">
              Skills
            </span>
          </h1>
          <span className="text-md sm:text-lg text-gray-500">
            {skillDescription.description}
          </span>
        </div>
      </div>
    </section>
  );
}

export default Skills;
