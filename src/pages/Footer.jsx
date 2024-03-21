import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

function Footer() {
  const name = "Lester John Gatpolintan";
  const socials = [
    { id: 1, icon: <FaFacebook />, name: "Facebook" },
    { id: 2, icon: <FaLinkedin />, name: "LinkedIn" },
    { id: 3, icon: <FaGithub />, name: "Github" },
  ];
  return (
    <footer className="bg-white dark:bg-[#243447]">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-lg text-gray-500 sm:text-center dark:text-gray-400">
            © {new Date().getFullYear()}{" "}
            <a href="/" className="hover:underline">
              {name}™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            {socials.map((social) => {
              return (
                <div key={social.id} className="px-2">
                  <span
                    className="text-gray-600 dark:text-gray-400 text-2xl"
                    title={social.name}
                  >
                    {social.icon}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
