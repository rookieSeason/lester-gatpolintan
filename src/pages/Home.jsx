import React from "react";
import { MdDownload } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa";
import logo1 from "../assets/logo1.png";
import "aos/dist/aos.css";
import AOS from "aos";
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
        className="top-0 duration-300 flex flex-col mx-auto justify-center items-center min-h-screen w-screen"
      >
        <div className="area">
          <ul className="circles min-h-screen w-screen">
            <li className="bg-gray-300"></li>
            <li className="bg-gray-300"></li>
            <li className="bg-gray-300"></li>
            <li className="bg-gray-300"></li>
            <li className="bg-gray-300"></li>
            <li className="bg-gray-300"></li>
            <li className="bg-gray-300"></li>
            <li className="bg-gray-300"></li>
            <li className="bg-gray-300"></li>
            <li className="bg-gray-300"></li>
          </ul>
        </div>

        <p className="text-gray-800 text-3xl sm:text-4xl font-bold tracking-tight">
          Hello, I'm
        </p>
        <div className="text-center text-5xl sm:text-7xl font-black animate-float tracking-tight">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-400 animate-text py-2">
            {person.name}
          </h1>
        </div>
        <div className="mx-auto text-center font-bold pb-4 tracking-tight">
          <p className="max-w-[250px] text-3xl sm:max-w-full sm:text-4xl text-gray-800 ">
            {person.description}
          </p>
        </div>
        <div className="mx-auto py-2">
          <button className="inline-flex items-center bg-cyan-500 text-gray-100 p-3 rounded-lg hover:scale-105 duration-300 text-md me-3">
            Download CV <MdDownload className=" ms-2" />
          </button>
          <button className="inline-flex items-center border border-cyan-500 text-cyan-500 p-3 rounded-lg hover:scale-105 duration-300 text-md">
            View More <FaArrowDown className=" ms-2" />
          </button>
        </div>
      </section>
    </>
  );
}

export default Home;
