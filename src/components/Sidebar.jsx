import React from 'react'
import { FaHome, FaUserCircle, FaPhone, FaBriefcase } from "react-icons/fa";
import { Link } from 'react-scroll';
function Sidebar() {
    return (
    
        <aside class="hidden md:flex fixed shadow-lg translate-y-1/2 border border-gray-400 rounded-full flex-col w-16 h-72 left-2 px-5 py-6 bg-white dark:bg-gray-700 dark:border-gray-600 duration-300 z-20">
            
            <div className="flex flex-col justify-between flex-1 mt-6">
                <nav className="-mx-3">
                    <div className="space-y-3 ">
                        <Link to='nav' smooth={true} className="flex items-center px-3 py-2 text-gray-500 transition-colors duration-300 transform rounded-full dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                            <FaHome className='text-xl'/>
                        </Link>
                        <Link to='about' smooth={true} className="flex items-center px-3 py-2 text-gray-500 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                            <FaUserCircle className='text-xl'/>
                        </Link>
                        <Link to='projects' smooth={true} className="flex items-center px-3 py-2 text-gray-500 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                            <FaBriefcase className='text-xl'/>
                        </Link>
                        <Link to='contact' smooth={true} className="flex items-center px-3 py-2 text-gray-500 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                            <FaPhone className='text-xl'/>
                        </Link>
                    </div>
                </nav>
            </div>
        </aside>
    );
}

export default Sidebar