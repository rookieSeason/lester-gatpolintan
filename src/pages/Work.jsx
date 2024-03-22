import React from "react";
import { FaBriefcase } from "react-icons/fa";

function Work() {
  const works = [
    {
      id: 1,
      position: "Junior Software Developer",
      company: "In1go Technologies Inc.",
      date: "Sep 2023 - Present",
      employment: "Full-Time",
    },
    {
      id: 2,
      position: "Graphic Designer",
      company: "Phosclay Chemical Mfg.",
      date: "Mar 2023 - Jun 2023",
      employment: "Internship",
    },
  ];
  return (
    <div className="w-screen h-screen bg-white dark:bg-[#243447]">
      <div className="grid md:grid-cols-2 py-12 gap-8">
        <div className="my-auto">
          <h1 className="animate-float pl-8 font-bold text-left sm:pl-24 text-3xl sm:text-5xl text-gray-700 dark:text-gray-200 pt-8">
            Career Journey
          </h1>
          <p className="pl-8 sm:pl-24 text-xl text-gray-600 dark:text-gray-300 my-4">
            Here are my milestone throughout my career.
          </p>
        </div>
        <div>
          <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-700 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h5 className="text-2xl font-bold leading-none text-gray-900 dark:text-white">
                Work History
              </h5>
            </div>
            <div className="flow-root">
              {works.map((work) => {
                return (
                  <ul
                    className="divide-y divide-gray-600 dark:divide-gray-400"
                    key={work.id}
                  >
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <FaBriefcase className="text-xl text-gray-600 dark:text-gray-400" />
                        </div>
                        <div className="flex-1 min-w-0 ms-4">
                          <p className="text-lg font-medium text-gray-800 truncate dark:text-white">
                            {work.position}
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {work.company}
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {work.date}
                          </p>
                        </div>
                        <div className="inline-flex items-center text-base text-gray-600 dark:text-white">
                          {work.employment}
                        </div>
                      </div>
                    </li>
                  </ul>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
