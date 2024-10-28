import React from "react";
import Accordion from "../components/Accordion";
import in1go from "../assets/1gos-logo.png";
import pcm from "../assets/pcm-logo.png";

function Work() {
  const works = [
    {
      id: 1,
      position: "Junior Web Developer",
      company: "In1go Technologies Inc.",
      date: "Sep 2023 - Present",
      employment: "Full-Time",
      image: in1go,
      responsibilities: (
        <ul className="list-disc px-4">
          <li>
            Collaborated with cross-functional teams to develop and test web
            applications built on microservices architecture, ensuring high
            performance and seamless integration.
          </li>
          <li>
            Enhanced database performance by optimizing queries and resolving
            issues, leveraging ORM techniques and code refactoring to improve
            efficiency and data handling.
          </li>
          <li>
            Created and validated intuitive, user-friendly interfaces using
            React JS, with a focus on accessibility and smooth navigation,
            contributing to overall user experience testing.
          </li>
          <li>
            Tested and validated API endpoints, ensuring reliable data
            processing and integration for web applications through thorough
            manual and exploratory testing methods.
          </li>
          <li>
            Identified and resolved data inconsistencies during migration
            processes, ensuring smooth transitions and accurate data transfer,
            focusing on both data integrity and functionality from a testing
            perspective.
          </li>
        </ul>
      ),
    },
    {
      id: 2,
      position: "Graphic Designer",
      company: "Phosclay Chemical Mfg.",
      date: "Mar 2023 - Jun 2023",
      employment: "Internship",
      image: pcm,
      responsibilities: (
        <ul className="list-disc px-4">
          <li>
            Assisted in the design and creation of graphics for social media
            posts, website assets, and other digital marketing materials,
            ensuring visually appealing and brand-consistent content across
            platforms.
          </li>
          <li>
            Conducted research and curated design resources, such as images,
            fonts, icons, and other visual elements, to support ongoing and
            upcoming projects, ensuring a diverse and high-quality selection of
            assets.
          </li>
          <li>
            Managed and maintained digital asset libraries, organizing files
            efficiently to facilitate easy access and retrieval for future
            design and marketing initiatives
          </li>
          <li>
            Collaborated on brainstorming sessions and contributed to creative
            concepts, offering constructive feedback and suggestions to enhance
            design quality and alignment with project goals.
          </li>
          <li>
            Supported administrative tasks, including tracking project
            timelines, maintaining schedules, and assisting with coordination
            between teams to ensure smooth workflow and timely project delivery.
          </li>
        </ul>
      ),
    },
  ];
  return (
    <section className="w-screen min-h-screen bg-slate-50 dark:bg-[#303030] justify-center items-center tracking-tight scroll-smooth">
      <div className="grid md:grid-cols-2 pt-[15rem] gap-8">
        <div className="flex justify-center items-center px-4">
          <Accordion items={works} />
        </div>
        <div className="w-full px-8">
          <h1 className="font-medium text-left text-4xl sm:text-6xl text-gray-600 dark:text-gray-300">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-300 animate-text">
              Career
            </span>{" "}
            Journey
          </h1>
          <p className="max-w-[535px] text-md sm:text-lg text-gray-500 dark:text-gray-300 my-4 text-justify">
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
