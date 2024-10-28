import React from "react";
import avatar from "../assets/avatar.jpg";
function About() {
  const about = {
    fullname: "Lester John Gatpolintan",
    greet:
      "Transitioning from development to QA, I'm eager to leverage my coding and troubleshooting skills to enhance software quality and ensure a seamless, reliable user experience through detailed testing practices.",
    position: "Software Engineer",
    address: "Bacoor, Cavite, Philippines",
    quote: `${"Sometimes, stupid things are valuable thing"}`,
  };

  return (
    <section
      name="about"
      className="flex flex-col bg-slate-50 dark:bg-[#303030] min-h-screen justify-center items-center w-screen scroll-smooth"
    >
      <div className="w-full grid md:grid-cols-2 gap-4 tracking-tight">
        <div className="w-full sm:pl-12">
          <div className="text-left p-8">
            <h1 className="text-4xl font-medium text-left md:text-6xl text-gray-600 dark:text-gray-300">
              I'm a,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-300 animate-text">
                Web Developer
              </span>
            </h1>
            <p className="mt-4 sm:text-md lg:text-lg text-gray-500 dark:text-gray-300 text-justify">
              {about.greet}
            </p>
          </div>
        </div>
        <div className="bg-white dark:bg-[#424242] rounded-s-full shadow-lg p-4">
          <img src={avatar} className="rounded-full my-auto ms-2 w-80 h-80" />
        </div>
      </div>
    </section>
  );
}
export default About;
