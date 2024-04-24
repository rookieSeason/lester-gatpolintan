import React from "react";
import avatar from "../assets/3d-casual-life-smiling-man-with-laptop-waving-hand.png";
import { MdDownload } from "react-icons/md";

import NavBar from "../components/NavBar";

function Home() {
  const person = {
    name: "Lester John Gatpolintan",
    description: "I build web application and provide efficient solutions",
  };
  return (
    <>
      <NavBar />

      <section
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1000"
        name="home"
        className="top-0 duration-300 bg-white dark:bg-[#243447] flex flex-col mx-auto justify-center items-center min-h-screen min-w-screen"
      >
        <div className="area">
          <ul className="circles">
            <li className="bg-gray-300 dark:bg-gray-500 blur-xl"></li>
            <li className="bg-gray-300 dark:bg-gray-500 blur-xl"></li>
            <li className="bg-gray-300 dark:bg-gray-500 blur-xl"></li>
            <li className="bg-gray-300 dark:bg-gray-500 blur-xl"></li>
            <li className="bg-gray-300 dark:bg-gray-500 blur-xl"></li>
            <li className="bg-gray-300 dark:bg-gray-500 blur-xl"></li>
            <li className="bg-gray-300 dark:bg-gray-500 blur-xl"></li>
            <li className="bg-gray-300 dark:bg-gray-500 blur-xl"></li>
            <li className="bg-gray-300 dark:bg-gray-500 blur-xl"></li>
            <li className="bg-gray-300 dark:bg-gray-500 blur-xl"></li>
          </ul>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-4xl">Hello, I'm</p>
        <div className="text-center text-5xl sm:text-7xl font-medium animate-float">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-300 animate-text py-2">
            {person.name}
          </h1>
        </div>
        <div className="mx-auto text-center font-normal pb-4">
          <p className="max-w-[250px] text-xl sm:max-w-full sm:text-4xl text-gray-600 dark:text-gray-300">
            {person.description}
          </p>
        </div>
        <div className=" mx-auto py-2">
          <button className="inline-flex items-center bg-cyan-500 text-gray-100 p-3 rounded-lg hover:scale-105 text-md">
            Download CV <MdDownload className=" ms-2" />
          </button>
        </div>
      </section>
    </>
  );
}

export default Home;
