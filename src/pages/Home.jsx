import React from 'react'
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import avatar from "../assets/peeps-avatar-alpha.png";
import NavBar from '../components/NavBar';

function Home() {
    return (
        <section name='home' className='top-0 bg-white dark:bg-[#243447] duration-300 flex flex-col mx-auto justify-center items-center min-h-screen w-screen'>
            <p className='text-xl text-gray-700 dark:text-gray-200 sm:text-2xl font-bold'>Hi, My name is</p>
            <div className='text-center text-4xl sm:text-7xl font-extrabold animate-float'>
                <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-300'>
                    Lester John Gatpolintan
                </h1>
            </div>
            <h2 className='text-xl sm:text-4xl text-gray-700 dark:text-gray-200 font-bold my-2'>
                Full Stack Software Engineer
            </h2>
            <div className='mx-auto text-center font-bold'>
                <p className='max-w-[250px] text-lg sm:max-w-full sm:text-3xl text-gray-700 dark:text-gray-300'>
                    I build<span className='text-cyan-600 dark:text-cyan-400'> web application </span>
                    with <span className='text-cyan-600 dark:text-cyan-400'>innovative solution</span>
                </p>
            </div>
            {/* Social Media Icons */}
            <div className='text-gray-600 dark:text-gray-300 py-2'>
                <ul className='flex flex- items-center text-2xl sm:text-3xl'>
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
            <div className='hidden md:block w-72 h-72 relative bottom-0 mx-auto mt-2'>
                <img src={avatar} alt="avatar" className='bg-gradient-to-b from-cyan-400 to-teal-300 rounded-full' />
            </div>
        </section>
    );
}

export default Home;