import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full max-w-lg mx-auto ">
      {items.map((item, index) => (
        <div key={index}>
          <span className="text-gray-500">{item.date}</span>
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-xl mb-4">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex items-center justify-between p-4 focus:outline-none"
            >
              <span className="text-md font-medium text-gray-700">
                {item.position} &#x2022;{" "}
                <span className="text-gray-500 dark:text-gray-400">
                  {item.company}
                </span>
              </span>
              <span className="text-gray-700 text-sm sm:text-md">
                {item.employment}
              </span>
              <svg
                className={`w-6 h-6 transition-transform text-gray-400 ${
                  index === openIndex ? "transform rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              className={`p-4 border-t border-gray-400 ${
                index === openIndex ? "block" : "hidden"
              }`}
              style={{
                maxHeight: index === openIndex ? "1000px" : "0px",
                transition: "all 0.5s ease-in-out",
                overflow: "hidden",
              }}
            >
              <span className="text-gray-600 text-sm sm:text-md">
                {item.responsibilities}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
