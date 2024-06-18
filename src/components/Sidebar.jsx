import React, { useState, useEffect } from "react";

import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

function Sidebar() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return (
      storedTheme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <button
        onClick={() => toggleDarkMode()}
        className="z-20 fixed bottom-20 right-4 text-xl text-center border border-gray-300 bg-white text-gray-600 p-3 shadow-md rounded-full hover:bg-gray-300 dark:bg-[#424242] dark:hover:bg-gray-700 dark:text-gray-300"
      >
        {isDarkMode ? <MdSunny /> : <FaMoon />}
      </button>
    </div>
  );
}

export default Sidebar;
