import React from 'react'
import { FaHome, FaUserCircle, FaPhone, FaBriefcase } from "react-icons/fa";
import { Link } from 'react-scroll';
function BottomNav() {
    return (
    

        <div className="fixed z-50 h-12 w-80 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full shadow-lg bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600 lg:hidden">
            <div className="grid h-full max-w-full grid-cols-4 mx-auto justify-center items-center">
                <Link to='nav' smooth={true} type="button" className="inline-flex flex-col items-center justify-center px-5 rounded-s-full group">
                    <FaHome className='text-xl hover:text-gray-500 text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 duration-300' />
                </Link>
                <Link to='about' smooth={true} type="button" className="inline-flex flex-col items-center justify-center px-5 group">
                    <FaUserCircle className='text-xl hover:text-gray-500 text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 duration-300' />
                </Link>
                <Link to='projects' smooth={true} type='buttom' className='inline-flex flex-col items-center justify-center px-5 group:'>
                    <FaBriefcase className='text-xl hover:text-gray-500 text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 duration-300'/>
                </Link>
                <Link to='contact' smooth={true} type="button" className="inline-flex flex-col items-center justify-center px-5 rounded-e-full group">
                    <FaPhone className='text-xl hover:text-gray-500 text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 duration-300' />
                </Link>
                        
            </div>
        </div>

    );
}

export default BottomNav