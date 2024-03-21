function Projects() {
  const projects = [
    {
      id: 1,
      name: "Online Relocation MIS",
      description: "Capstone Project",
      technologies: "PHP, My SQL, Bootstrap",
    },
    {
      id: 2,
      name: "Basic Student System",
      description: "Basic CRUD Practices",
      technologies: "Laravel, Tailwind, Alpine, My SQL",
    },
    {
      id: 3,
      name: "Personal Portfolio Webiste",
      description: "Personal Website",
      technologies: "HTML, CSS, JavaScript",
    },
    {
      id: 4,
      name: "Air FIbr Queueing System",
      description: "School Project",
      technologies: "ASP.NET, HTML, CSS, Data Tables",
    },
  ];
  return (
    <section
      name="projects"
      className="flex flex-col bg-white dark:bg-[#243447] min-h-screen w-screen"
    >
      <h1 className="animate-float pl-8 font-bold text-left sm:pl-24 text-3xl sm:text-5xl text-gray-700 dark:text-gray-200 pt-8">
        Portfolio
      </h1>
      <p className="pl-8 sm:pl-24 text-xl text-gray-600 dark:text-gray-300 my-4">
        Here are my projects that i worked before
      </p>
      <div className="w-full px-8 md:px-28 grid md:grid-cols-3 gap-x-8 gap-y-4 py-4">
        {projects.map((project) => {
          return (
            <div
              className="rounded-2xl shadow-md p-8 border border-gray-300 dark:border-gray-400"
              key={project.id}
            >
              <h4 className="font-semibold text-lg sm:text-xl text-gray-600 dark:text-gray-300">
                {project.name}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
              <p className="text-sm sm:text-md text-gray-500 dark:text-gray-400">
                {project.technologies}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
