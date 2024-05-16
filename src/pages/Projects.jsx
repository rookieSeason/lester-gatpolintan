import { FaGithub } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      id: 1,
      name: "Online Relocation MIS",
      description: "Capstone Project",
      technologies: "PHP, My SQL, Bootstrap",
      link: "View on Github",
    },
    {
      id: 2,
      name: "Basic Student System",
      description: "Basic CRUD Practices",
      technologies: "Laravel, Tailwind, Alpine, My SQL",
      link: "View on Github",
    },
    {
      id: 3,
      name: "Personal Portfolio Webiste",
      description: "Personal Website",
      technologies: "HTML, CSS, JavaScript",
      link: "View on Github",
    },
    {
      id: 4,
      name: "Air Fibr Queueing System",
      description: "School Project",
      technologies: "ASP.NET, HTML, CSS, Data Tables",
      link: "View on Github",
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
                className="shadow-xl p-8 rounded-2xl bg-white hover:-rotate-3 duration-300"
                key={project.id}
              >
                <h4 className="font-medium text-lg sm:text-xl text-gray-600 ">
                  {project.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
                <p className="text-sm sm:text-md text-gray-500 ">
                  {project.technologies}
                </p>
                <button className="bg-[#2b3137] rounded-full hover:bg-gray-700 hover:scale-105 duration-300 flex items-center gap-2 p-3 mt-2 text-gray-200 text-sm">
                  {project.link} <FaGithub className="text-xl" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
