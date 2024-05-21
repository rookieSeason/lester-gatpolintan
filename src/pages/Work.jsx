import React from "react";
import Accordion from "../components/Accordion";

function Work() {
  const works = [
    {
      id: 1,
      position: "Junior Software Developer",
      company: "In1go Technologies Inc.",
      date: "Sep 2023 - Present",
      employment: "Full-Time",
      responsibilities: (
        <ul className="list-disc px-4">
          <li>
            Collaborated with a team to build web applications using a
            microservices architecture design.
          </li>
          <li>
            Improved database performance by optimizing queries through
            techniques like using ORM and refactoring the code.
          </li>
          <li>
            Utilized React JS to create intuitive, user-friendly interfaces that
            prioritized accessibility and ease of navigation.
          </li>
          <li>
            Tested and validated various API endpoints, ensuring seamless data
            processing and integration for web applicatiion.
          </li>
          <li>
            Successfully adapted and implemented existing project features using
            new technologies, demonstrating a strong ability to learn and apply
            new skills.
          </li>
          <li>
            Embraced challenging assignments as opportunities for growth,
            adapting quickly to new technologies and methodologies to achieve
            successful outcomes.
          </li>
          <li>
            RIdentified and resolved data inconsistencies and errors during
            migration to a new application, ensuring a smooth transition and
            accurate data transfer.
          </li>
        </ul>
      ),
      technologies: (
        <ul className="list-disc px-4">
          <li>React Js</li>
          <li>Node Js</li>
          <li>Sequelize</li>
          <li>MS SQL Server</li>
          <li>JavaScript</li>
          <li>Reactstrap</li>
        </ul>
      ),
    },
    {
      id: 2,
      position: "Graphic Designer",
      company: "Phosclay Chemical Mfg.",
      date: "Mar 2023 - Jun 2023",
      employment: "Internship",
      responsibilities: (
        <ul className="list-disc px-4">
          <li>
            Assist with design projects in creating graphics for social media,
            and website assets.
          </li>
          <li>
            Research and collect images, fonts, and design elements for
            projects.
          </li>
          <li>Maintain digital asset libraries.</li>
          <li>
            Collaborate on creative concepts and provide feedback on designs.
          </li>
          <li>
            Assist with administrative tasks and help maintain project
            schedules.
          </li>
        </ul>
      ),
      technologies: (
        <ul className="list-disc px-4">
          <li>Adobe Photoshop</li>
          <li>Canva</li>
          <li>Filmora</li>
          <li>Capcut</li>
        </ul>
      ),
    },
  ];
  return (
    <section className="w-screen min-h-screen bg-slate-50 justify-center items-center tracking-tight scroll-smooth">
      <div className="grid md:grid-cols-2 py-12 gap-8">
        <div className="flex justify-center items-center px-4">
          <Accordion items={works} />
        </div>
        <div className="w-full px-8">
          <h1 className="font-medium text-left text-4xl sm:text-6xl text-gray-800">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-400 animate-text">
              Career
            </span>{" "}
            Journey
          </h1>
          <p className="max-w-[535px] text-md sm:text-lg text-gray-500 my-4 text-justify">
            Explore my diverse work experiences, ranging from internships to
            full-time roles across multiple industries. Each engagement
            showcases my skills, expertise, and achievements, contributing to a
            rich tapestry of professional growth and learning. Discover how my
            varied experiences have shaped my career journey and contributed to
            my success.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Work;
