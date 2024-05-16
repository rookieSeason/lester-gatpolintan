import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
function Footer() {
  const name = "Lester John Gatpolintan";
  const socials = [
    { id: 1, icon: <FaFacebook />, name: "Facebook" },
    { id: 2, icon: <FaLinkedin />, name: "LinkedIn" },
    { id: 3, icon: <FaGithub />, name: "Github" },
    { id: 4, icon: <FaInstagram />, name: "Instagram" },
    { id: 5, icon: <FaXTwitter />, name: "X Twitter" },
  ];
  return (
    <footer className="bg-slate-50">
      <div className="mx-auto w-full max-w-screen-xl py-6 px-4">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © {new Date().getFullYear()}{" "}
            <a href="/" className="hover:underline">
              Lester John Gatpolintan™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            {socials.map((social) => {
              return (
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-600 text-xl px-1"
                  key={social.id}
                >
                  {social.icon}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
