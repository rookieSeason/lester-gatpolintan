import React from "react";
import avatar from "../assets/3d-casual-life-smiling-man-with-laptop-waving-hand.png";
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
        className="top-0 bg-white dark:bg-[#243447] duration-300 flex flex-col mx-auto justify-center items-center min-h-screen w-screen"
      >
        <p className="text-gray-600 dark:text-gray-300 text-2xl">Hi, I'm</p>
        <div className="text-center text-5xl sm:text-7xl font-medium animate-float">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-300 animate-text py-2">
            {person.name}
          </h1>
        </div>
        <div className="mx-auto text-center font-normal pb-4">
          <p className="max-w-[250px] text-lg sm:max-w-full sm:text-3xl text-gray-600 dark:text-gray-300">
            {person.description}
          </p>
        </div>

        <div className="w-80 h-80 relative bottom-0 mx-auto mt-2">
          <img src={avatar} alt="avatar" />
        </div>
      </section>
    </>
  );
}

export default Home;
