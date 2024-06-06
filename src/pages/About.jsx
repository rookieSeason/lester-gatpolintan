import React from "react";
import avatar from "../assets/3d-casual-life-smiling-man-with-laptop-waving-hand.png";
function About() {
  const about = {
    fullname: "Lester John Gatpolintan",
    greet:
      "I'm a Full Stack Software Engineer with a focus on creating user-friendly interfaces using React on the front end, and building strong, efficient back-end solutions with Node Js.",
    position: "Software Engineer",
    address: "Bacoor, Cavite, Philippines",
    quote: `${"Sometimes, stupid things are valuable thing"}`,
  };

  return (
    <section
      name="about"
      className="flex flex-col bg-slate-50 dark:bg-[#303030] min-h-screen justify-center items-center w-screen scroll-smooth"
    >
      <div className="w-full grid md:grid-cols-2 gap-8 tracking-tight">
        <div className="w-full sm:pl-12">
          <div className="text-left p-8">
            <h1 className="text-4xl font-medium text-left md:text-7xl text-gray-600 dark:text-gray-300 ">
              I'm a,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-300 animate-text">
                Software Engineer
              </span>
            </h1>
            <p className="mt-4 sm:text-md lg:text-lg text-gray-500 dark:text-gray-300 text-justify">
              {about.greet}
            </p>
          </div>
        </div>
        <div className="bg-white dark:bg-[#424242] rounded-l-2xl shadow-lg w-full">
          <img src={avatar} height={308} width={376} className="mx-auto py-8" />
        </div>
      </div>
    </section>
  );
}
export default About;
