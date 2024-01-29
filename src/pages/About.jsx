import React from 'react';
import MyProfile from "../assets/profile.jpg"
import { IoHome } from "react-icons/io5";
import {
    FaReact,
    FaNodeJs,
    FaGraduationCap,
    FaBriefcase,
    FaDatabase,
    FaAws,
    FaBootstrap,
    FaGitAlt
} from "react-icons/fa";
import { DiLaravel } from "react-icons/di";
import { SiSequelize, SiPhp, SiExpress } from "react-icons/si";

function About() {
    return (
        <section className='flex flex-col bg-white dark:bg-[#243447] min-h-screen min-w-screen '>
            <h1 className='font-semibold text-left pl-40 text-2xl sm:text-5xl text-gray-700 dark:text-gray-200 pt-8'>
                Hi I'm a Developer
            </h1>
            <div className='grid sm:grid-cols-2 px-8'>
                <div className='text-left flex flex-col justify-center items-center'>
                    <p className='text-lg text-gray-600 dark:text-gray-300 ml-20 text-justify px-12'>
                        I'm a Full Stack Software Engineer with a focus on creating user-friendly interfaces using
                        React on the front end, and building strong, efficient back-end solutions with Node.js.
                    </p>
                </div>
                <div className='px-12 pt-4'>
                    <div className="flex items-center gap-4 px-8 py-6 border border-gray-300 dark:border-gray-500 rounded-xl shadow-lg">
                        <img className="hover:border-cyan-500 duration-300 dark:hover:border-cyan-500 w-32 h-32 rounded-full border-4 border-gray-400 dark:border-gray-300 p-1 " src={MyProfile} alt="" />
                        <div className="font-medium dark:text-white ml-4">
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
            <div className='flex flex-row mt-12'>
                <div className='grid grid-col-2'>
                    <h2 className='pl-40 text-4xl mt-8 text-gray-700 dark:text-gray-200'>Technical Skills</h2>
                    <p className='text-2xl text-gray-600 dark:text-gray-300 px-40 max-w-[650px] mb-4'>Elevate Code, Elevate Careers: Mastering Tomorrow's Tech Today!</p>
                </div>
                <div className='max-w-[650px] justify-center items-center w-full grid grid-cols-3 text-gray-500 dark:text-gray-400 px-12 ml-4'>
                    <div className="flex items-center gap-4 rounded-lg border border-gray-300 dark:border-gray-500 p-4 m-2">
                        <FaReact className=' text-gray-600 dark:text-gray-300 text-3xl  '/>
                            <div className=" dark:text-white">
                                <div>React</div>
                            </div>
                    </div>
                    <div className="flex items-center gap-4 rounded-lg border border-gray-300 dark:border-gray-500 p-4 m-2">
                        <FaNodeJs className='text-gray-600 dark:text-gray-300 text-3xl'/>
                            <div className=" dark:text-white">
                                <div>Node</div>
                            </div>
                    </div>
                    <div className="flex items-center gap-4 rounded-lg border border-gray-300 dark:border-gray-500 p-4 m-2">
                        <SiExpress className='text-gray-600 dark:text-gray-300 text-3xl'/>
                            <div className=" dark:text-white">
                                <div>Express JS</div>
                            </div>
                    </div>
                    <div className="flex items-center gap-4 rounded-lg border border-gray-300 dark:border-gray-500 p-4 m-2">
                        <SiPhp className='text-gray-600 dark:text-gray-300 text-3xl'/>
                            <div className=" dark:text-white">
                                <div>Php</div>
                            </div>
                    </div>
                     <div className="flex items-center gap-4 rounded-lg border border-gray-300 dark:border-gray-500 p-4 m-2">
                        <FaBootstrap className='text-gray-600 dark:text-gray-300 text-3xl'/>
                            <div className=" dark:text-white">
                                <div>Bootstrap</div>
                            </div>
                    </div>
                    <div className="flex items-center gap-4 rounded-lg border border-gray-300 dark:border-gray-500 p-4 m-2">
                        <FaAws className='text-gray-600 dark:text-gray-300 text-3xl'/>
                            <div className=" dark:text-white">
                                <div className='tracking-wide'>AWS</div>
                            </div>
                    </div>
                    <div className="flex items-center gap-4 rounded-lg border border-gray-300 dark:border-gray-500 p-4 m-2">
                        <FaGitAlt className='text-gray-600 dark:text-gray-300 text-3xl'/>
                            <div className=" dark:text-white">
                                <div className='tracking-wide'>Git</div>
                            </div>
                    </div>
                    <div className="flex items-center gap-4 rounded-lg border border-gray-300 dark:border-gray-500 p-4 m-2">
                        <SiSequelize className='text-gray-600 dark:text-gray-300 text-3xl'/>
                            <div className=" dark:text-white">
                                <div className='tracking-wide'>Sequelize</div>
                            </div>
                    </div>
                    <div className="flex items-center gap-4 rounded-lg border border-gray-300 dark:border-gray-500 p-4 m-2">
                        <FaDatabase className='text-gray-600 dark:text-gray-300 text-3xl'/>
                            <div className=" dark:text-white">
                                <div className='tracking-wide'>SQL</div>
                            </div>
                    </div>
                </div>
                
                
            </div>
            
        </section>
    );
  }
export default About;
  