import React from "react";

import { FaGithub, FaHtml5, FaBootstrap, FaCss3 } from "react-icons/fa";
// import { RiJavascriptFill } from "react-icons/ri";
import { DiLaravel, DiMysql } from "react-icons/di";
import {
  SiMysql,
  SiPhp,
  SiTailwindcss,
  SiAlpinedotjs,
  SiJavascript,
} from "react-icons/si";

function Projects() {
  const projects = [
    {
      id: 1,
      name: "Online Relocation MIS",
      description: "Capstone Project",
      link: "https://github.com/rookieSeason/Online-Relocation-MIS.git",
      icons: [
        <SiPhp title="Php" />,
        <DiMysql title="My SQL" />,
        <FaBootstrap title="Bootstrap" />,
      ],
    },
    {
      id: 2,
      name: "Basic Student System",
      description: "Basic CRUD Practices",
      link: "https://github.com/rookieSeason/laravel_practice.git",
      icons: [
        <DiLaravel title="Laravel" />,
        <SiTailwindcss title="Tailwind CSS" />,
        <SiAlpinedotjs title="Alpine JS" />,
        <DiMysql title="My SQL" />,
      ],
    },
    {
      id: 3,
      name: "Personal Portfolio Webiste",
      description: "Personal Website",
      link: "https://github.com/rookieSeason/Portfolio.git",
      icons: [
        <FaHtml5 title="HTML 5" />,
        <FaCss3 title="CSS 3" />,
        <SiJavascript title="JavaScript" />,
      ],
    },
  ];
  return (
    <section
      name="projects"
      className="flex flex-col bg-slate-50 min-h-screen w-screen tracking-tight"
    >
      <div>
        <h1 className="pl-8 font-medium text-left sm:pl-24 text-4xl sm:text-6xl text-gray-800 pt-8">
          Featured{" "}
          <span className="text-cyan-600 dark:text-cyan-400">Projects</span>
        </h1>
        <p className="pl-8 sm:pl-24 text-md sm:text-xl text-gray-600 my-4">
          Here are my projects that i worked before
        </p>
        <div className="w-full px-4 md:px-28 grid md:grid-cols-3 gap-8 py-4">
          {projects.map((project) => {
            return (
              <div
                className="shadow-xl p-8 rounded-2xl bg-white"
                key={project.id}
              >
                <div className="text-center w-full">
                  <h4 className="font-medium text-lg sm:text-xl text-gray-600 ">
                    {project.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                  <p className="flex flex-row justify-center space-x-3 text-3xl">
                    {project.icons.map((icon, index) => (
                      <div
                        key={index}
                        className=" text-gray-500 hover:text-gray-600 duration-300"
                      >
                        {icon}
                      </div>
                    ))}
                  </p>
                  <div className="mt-2">
                    <a
                      href={project.link}
                      className="text-gray-200 inline-flex bg-gray-800 hover:bg-gray-700 font-medium rounded-full text-sm px-2.5 py-2.5"
                    >
                      View on Github <FaGithub className="text-xl ms-2" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
