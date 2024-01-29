import React from 'react';
import MyProfile from "../assets/profile.jpg"
import {
    FaReact,
    FaNodeJs,
    FaGraduationCap,
    FaDatabase,
    FaAws,
    FaBootstrap,
    FaGitAlt
} from "react-icons/fa";
import { DiLaravel } from "react-icons/di";
import { SiSequelize, SiPhp, SiExpress, SiTailwindcss } from "react-icons/si";

function About() {
    return (
        <section name='about' className='flex flex-col bg-white dark:bg-[#243447] min-h-screen min-w-screen px-4'>
            <h1 className='animate-float pl-8 text-3xl font-bold text-left md:pl-24 md:text-5xl text-gray-700 dark:text-gray-200 pt-8'>
                Hi I'm a <span className='text-cyan-600 dark:text-cyan-400'>Developer</span>
            </h1>
            <div className='grid md:grid-cols-2 md:px-8'>
                <div className='text-left flex flex-col justify-center items-center'>
                    <p className='mt-4 sm:text-md lg:text-lg text-gray-600 dark:text-gray-300 sm:ml-12 text-justify px-8'>
                        I'm a Full Stack Software Engineer with a focus on creating user-friendly interfaces using
                        React on the front end, and building strong, efficient back-end solutions with Node.js.
                    </p>
                </div>
                <div className='px-8 pt-4'>
                    <div className="max-w-[650px] lg:flex items-center py-4 border border-gray-300 dark:border-gray-500 rounded-xl shadow-lg">
                        <div className='grid lg:grid-cols-2 mr-4'>
                            <div className='mx-auto my-auto'>
                                <img className="hover:border-cyan-500  duration-300 dark:hover:border-cyan-400 sm:w-36 h-36 rounded-full border-4 border-gray-400 dark:border-gray-300 p-1 " src={MyProfile} alt="profile" />
                            </div>
                            <div className="pl-8 pt-4 sm:text-left font-medium dark:text-white">
                                <h5 className='text-gray-700 dark:text-gray-200 text-md font-bold'> Lester John Gatpolintan</h5>
                                <span className="text-sm text-gray-500 dark:text-gray-300"> Full Stack Software Engineer</span>
                                <br />
                                <span className='text-sm text-gray-500 dark:text-gray-300'> Molino 1, Bacoor Cavite, Philippines</span>
                                <div className='mt-3 text-sm italic text-gray-500 dark:text-gray-400'>
                                    <p>"Sometimes, stupid things are valuable things"</p>
                                    <p> - Lester John Gatpolintan</p>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
            <div className='grid sm:grid-cols-2 py-8'>
                <div className='pl-8 text-left sm:pl-28 mt-8 animate-float'>
                    <h3 className='font-bold text-3xl sm:text-4xl text-gray-700 dark:text-gray-200'>Technical Skills</h3>
                    <h4 className='max-w-[500px] font-semibold mt-4 text-2xl sm:text-3xl text-gray-600 dark:text-gray-300'>
                        Elevate <span className='text-cyan-600 dark:text-cyan-400'>Code</span>, Elevate <span className='text-cyan-600 dark:text-cyan-400'>Careers</span>:
                        <span className='text-cyan-600 dark:text-cyan-400'> Mastering</span> Tomorrow's Tech <span className='text-cyan-600 dark:text-cyan-400'>Today!</span>
                    </h4>
                </div>
                <div className='pt-4 mx-auto pr-4'>
                    <span className='mx-auto sm:flex flex-col items-center justify-center' >
                        <div className='max-w-[700px] justify-center items-center w-full grid grid-cols-3 text-gray-500 dark:text-gray-400'>
                            <div className="hover:scale-105 duration-300 flex items-center gap-4 rounded-lg border border-gray-300 dark:border-gray-500 p-4 m-2">
                                <FaReact className='mx-auto sm:text-gray-600 dark:text-gray-300 text-3xl block' />
                                <span className='hidden sm:block'>React</span>
                            </div>
                            <div className="hover:scale-105 duration-300 flex items-center gap-4 rounded-lg border border-gray-300 dark:border-gray-500 p-4 m-2">
                                <FaNodeJs className='mx-auto sm:text-gray-600 dark:text-gray-300 text-3xl block' />
                                <span className='hidden sm:block'>Node</span>
                            </div>
                            <div className="hover:scale-105 duration-300 flex items-center gap-4 rounded-lg border border-gray-300 dark:border-gray-500 p-4 m-2">
                                <SiExpress className='mx-auto sm:text-gray-600 dark:text-gray-300 text-3xl block' />
                                <span className='hidden sm:block'>Express</span>
                            </div>
                            <div className="hover:scale-105 duration-300 flex items-center gap-4 rounded-lg border border-gray-300 dark:border-gray-500 p-4 m-2">
                                <SiPhp className='mx-auto sm:text-gray-600 dark:text-gray-300 text-3xl block' />
                                <span className='hidden sm:block'>PHP</span>
                            </div>
                            <div className="hover:scale-105 duration-300 flex items-center gap-4 rounded-lg border border-gray-300 dark:border-gray-500 p-4 m-2">
                                <SiTailwindcss className='mx-auto sm:text-gray-600 dark:text-gray-300 text-3xl' />
                                <span className='hidden sm:block'>Tailwind</span>
                            </div>
                            <div className="hover:scale-105 duration-300 flex items-center gap-4 rounded-lg border border-gray-300 dark:border-gray-500 p-4 m-2">
                                <FaAws className='mx-auto sm:text-gray-600 dark:text-gray-300 text-3xl' />
                                <span className='hidden sm:block'>AWS</span>
                            </div>
                            <div className="hover:scale-105 duration-300 flex items-center gap-4 rounded-lg border border-gray-300 dark:border-gray-500 p-4 m-2">
                                <FaGitAlt className='mx-auto sm:text-gray-600 dark:text-gray-300 text-3xl' />
                                <span className='hidden sm:block'>Git</span>
                            </div>
                            <div className="hover:scale-105 duration-300 flex items-center gap-4 rounded-lg border border-gray-300 dark:border-gray-500 p-4 m-2">
                                <SiSequelize className='mx-auto sm:text-gray-600 dark:text-gray-300 text-3xl' />
                                <span className='hidden sm:block'>Sequelize</span>
                            </div>
                            <div className="hover:scale-105 duration-300 flex items-center gap-4 rounded-lg border border-gray-300 dark:border-gray-500 p-4 m-2">
                                <FaDatabase className='mx-auto sm:text-gray-600 dark:text-gray-300 text-3xl' />
                                <span className='hidden sm:block'>SQL</span>
                            </div>
                        </div>
                    </span>
                </div>
            </div>
            
            
            
        </section>
    );
  }
export default About;
  