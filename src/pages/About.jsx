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
      className="flex flex-col bg-white min-h-screen justify-center items-center min-w-screen sm:p-12"
    >
      <div className="max-w-screen w-full grid md:grid-cols-2 gap-4 tracking-tight">
        <div className="text-left px-8">
          <h1 className="animate-float text-4xl font-bold text-left md:text-6xl text-gray-700 ">
            I'm a, <span className="text-cyan-600">Software Engineer</span>
          </h1>
          <p className="mt-4 sm:text-md lg:text-lg text-gray-700 text-justify">
            {about.greet}
          </p>
        </div>
        <div className="mx-auto px-4">
          <img src={avatar} height={305} width={373} />
        </div>
      </div>
    </section>
  );
}
export default About;
