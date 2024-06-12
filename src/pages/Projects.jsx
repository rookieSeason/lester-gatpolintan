import React from "react";
import Devices from "../components/Devices";
function Projects() {
  return (
    <section
      name="projects"
      className="flex flex-col bg-slate-50 dark:bg-[#303030] min-h-screen w-screen tracking-tight scroll-smooth"
    >
      <div>
        <h1 className="pl-8 font-medium text-left sm:pl-24 text-4xl sm:text-6xl text-gray-600 dark:text-gray-300 pt-8">
          Featured{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-300 animate-text">
            Projects
          </span>
        </h1>
        <p className="pl-8 sm:pl-24 text-md sm:text-xl text-gray-500 dark:text-gray-300 my-4">
          Here are my projects that i worked before
        </p>
      </div>
      <div>
        <Devices />
      </div>
    </section>
  );
}

export default Projects;
