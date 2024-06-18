import React from "react";
import { MdDownload } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa";
import file from "../assets/Lester-John-Gatpolintan-Resume.pdf";
import "aos/dist/aos.css";
import AOS from "aos";
import { Link } from "react-scroll";
function Home() {
  AOS.init();

  const person = {
    name: "Lester John Gatpolintan",
    description: "I build web application and provide efficient solutions",
  };

  return (
    <>
      <section
        data-aos="fade-up"
        data-aos-delay="100"
        name="home"
        data-aos-duration="500"
        className="bg-slate-50 dark:bg-[#303030] top-0 duration-300 flex flex-col mx-auto justify-center items-center min-h-screen w-screen"
      >
        <div className="area">
          <ul className="circles min-h-screen w-screen blur-sm">
            <li className="bg-gray-300 dark:bg-gray-500"></li>
            <li className="bg-gray-300 dark:bg-gray-500"></li>
            <li className="bg-gray-300 dark:bg-gray-500"></li>
            <li className="bg-gray-300 dark:bg-gray-500"></li>
            <li className="bg-gray-300 dark:bg-gray-500"></li>
            <li className="bg-gray-300 dark:bg-gray-500"></li>
            <li className="bg-gray-300 dark:bg-gray-500"></li>
            <li className="bg-gray-300 dark:bg-gray-500"></li>
            <li className="bg-gray-300 dark:bg-gray-500"></li>
            <li className="bg-gray-300 dark:bg-gray-500"></li>
          </ul>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-3xl sm:text-5xl font-medium tracking-tight antialiased">
          Hello, I'm
        </p>
        <div className="text-center text-5xl sm:text-8xl font-medium animate-float tracking-tight">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-300 animate-text py-2">
            {person.name}
          </h1>
        </div>
        <div className="mx-auto text-center font-medium pb-4 tracking-tight">
          <p className="max-w-[250px] text-3xl sm:max-w-full sm:text-5xl text-gray-600 dark:text-gray-300 ">
            {person.description}
          </p>
        </div>
        <div className="mx-auto py-2">
          <a
            href={file}
            type="button"
            download
            className="inline-flex items-center bg-white dark:bg-[#424242] text-gray-500 dark:text-gray-300 border border-gray-400 p-4 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 text-md me-3"
          >
            Download CV <MdDownload className=" ms-2" />
          </a>
          <Link
            type="button"
            to="about"
            smooth={true}
            className="inline-flex items-center bg-[#4285F4] text-gray-100 rounded-full p-4 hover:bg-blue-600 duration-300"
          >
            View More <FaArrowDown className=" ms-2" />
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
