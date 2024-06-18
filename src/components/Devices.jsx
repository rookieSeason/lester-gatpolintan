import React from "react";
import landing from "../assets/landing-picsay.jpg";
import laravel from "../assets/laravel_practice.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-scroll";

const Devices = () => {
  const project1 = {
    name: "Online Relocation Management Information System",
    details:
      "A Capstone Project that build to help User to speed-up the relocation process by uploading necessary documents and reduce human errors",
    webLinks: "hudrd-mis.online",
    githubLink: "https://github.com/rookieSeason/Online-Relocation-MIS.git",
  };

  const project2 = {
    name: "Student Information System",
    details:
      "A web application that built in Laravel 10 to help the user to manage the student information by using CRUD operations",
    webLinks: "localhost:8080",
    githubLink: "https://github.com/rookieSeason/laravel_practice.git",
  };
  return (
    <>
      <div className="w-screen">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="grid md:grid-cols-2 gap-12 py-8">
            <div className="w-full px-8 my-auto sm:pl-24">
              <h3 className="text-2xl sm:text-3xl font-medium text-gray-600 dark:text-gray-300">
                {project1.name}
              </h3>
              <p className="text-md sm:text-lg text-gray-500 dark:text-gray-300 text-justify mt-4">
                {project1.details}
              </p>
              <a
                href={project1.githubLink}
                type="button"
                className="inline-flex items-center my-3 hover:bg-gray-800 text-gray-600 hover:text-gray-100 dark:text-gray-300 dark:hover:text-gray-600 duration-300 dark:hover:bg-gray-100 hover:rounded-full p-3"
              >
                View in Github <FaLongArrowAltRight className="ms-2" />
              </a>
            </div>

            <div className="w-full px-4">
              <figure className="ms-auto me-20 top-8 relative z-[1] max-w-[600px] w-full h-auto rounded-b-lg sm:pr-8">
                <div className="relative flex items-center max-w-[600px] bg-gray-800 rounded-t-2xl py-2 px-24 dark:bg-neutral-100">
                  <div className="flex space-x-1 absolute top-2/4 start-4 -translate-y-1">
                    <span className="size-2 bg-gray-600 rounded-full dark:bg-neutral-300"></span>
                    <span className="size-2 bg-gray-600 rounded-full dark:bg-neutral-300"></span>
                    <span className="size-2 bg-gray-600 rounded-full dark:bg-neutral-300"></span>
                  </div>
                  <div className="flex justify-center items-center size-full bg-gray-700 text-[.25rem] text-gray-400 rounded-sm sm:text-[.5rem] dark:bg-neutral-200 dark:text-neutral-600">
                    {project1.webLinks}
                  </div>
                </div>

                <div className="bg-gray-800 rounded-b-2xl">
                  <img
                    className="w-screen md:max-w-full h-auto rounded-b-2xl"
                    src={landing}
                    alt="Image Description"
                  />
                </div>
              </figure>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse items-center justify-center w-full top-4">
          <div className="px-4 grid md:grid-cols-2 gap-12 py-8">
            <div className="w-full sm:pl-12">
              <figure className="ms-auto me-20 top-8 relative z-[1] max-w-[600px] w-full h-auto rounded-b-lg">
                <div className="relative flex items-center max-w-[600px] bg-gray-800 rounded-t-2xl py-2 px-24 dark:bg-neutral-100">
                  <div className="flex space-x-1 absolute top-2/4 start-4 -translate-y-1">
                    <span className="size-2 bg-gray-600 rounded-full dark:bg-neutral-300"></span>
                    <span className="size-2 bg-gray-600 rounded-full dark:bg-neutral-300"></span>
                    <span className="size-2 bg-gray-600 rounded-full dark:bg-neutral-300"></span>
                  </div>
                  <div className="flex justify-center items-center size-full bg-gray-700 text-[.25rem] text-gray-400 rounded-sm sm:text-[.5rem] dark:bg-neutral-100 dark:text-neutral-600">
                    {project2.webLinks}
                  </div>
                </div>

                <div className="bg-gray-800 rounded-b-2xl">
                  <img
                    className="w-screen md:max-w-full h-auto rounded-b-2xl"
                    src={laravel}
                    alt="Image Description"
                  />
                </div>
              </figure>
            </div>
            <div className="max-w-[550px] my-auto px-4">
              <h3 className="text-2xl sm:text-3xl font-medium text-gray-600 dark:text-gray-300">
                {project2.name}
              </h3>
              <p className="text-md sm:text-lg text-gray-500 dark:text-gray-300 text-justify mt-4">
                {project2.details}
              </p>
              <a
                href={project2.githubLink}
                type="button"
                className="inline-flex items-center my-3 hover:bg-gray-800 text-gray-600 hover:text-gray-100 dark:text-gray-300 dark:hover:text-gray-600 duration-300 dark:hover:bg-gray-100 hover:rounded-full p-3"
              >
                View in Github <FaLongArrowAltRight className="ms-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Devices;
