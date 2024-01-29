import React from 'react'
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import avatar from "../assets/peeps-avatar-alpha.png";

function Home() {
    return (
        <section className='top-0 bg-white dark:bg-[#243447] duration-300 flex flex-col mx-auto justify-center items-center min-h-screen w-screen'>
            <div className='text-center text-5xl sm:text-6xl hover:css-selector duration-300'>
                <h1 className='text-cyan-600 dark:text-cyan-400 font-[900] mb-1'>
                    Lester John Gatpolintan
                </h1>
            </div>
            <h2 className='text-3xl sm:text-4xl text-gray-700 dark:text-gray-200 font-bold'>
                Full Stack Software Engineer
            </h2>
            <div className='mx-auto text-center font-bold'>
                <p className='max-w-[350px] sm:max-w-full text-2xl sm:text-3xl text-gray-700 dark:text-gray-300'>
                    I build<span className='text-cyan-600 dark:text-cyan-400'> web application </span>
                    with <span className='text-cyan-600 dark:text-cyan-400'>innovative solutions</span>
                </p>
            </div>
            {/* Social Media Icons */}
            <div className='text-gray-600 dark:text-gray-300 py-2'>
                <ul className='flex flex- items-center text-xl sm:text-3xl'>
                    <li className='mx-4 hover:scale-105 hover:text-cyan-600 dark:hover:text-cyan-400 duration-300'>
                        <FaGithub />
                    </li>
                    <li className='mx-4 hover:scale-105 hover:text-cyan-600 dark:hover:text-cyan-400 duration-300'>
                        <FaFacebook />
                    </li>
                    <li className='mx-4 hover:scale-105 hover:text-cyan-600 dark:hover:text-cyan-400 duration-300'>
                        <FaLinkedin />
                    </li>
                </ul>
            </div>
            <div className='max-w-80 max-h-80 sm:relative bottom-0 mx-auto mt-2'>
                <img src={avatar} className='bg-gradient-to-b from-cyan-500 to-teal-300 rounded-t-3xl'/>
            </div>    
        </section>
    );
}

export default Home