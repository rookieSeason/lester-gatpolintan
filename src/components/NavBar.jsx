import React, { useState, useEffect } from 'react';
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoSunnyOutline } from "react-icons/io5";
import { PiUserList } from "react-icons/pi";
import logo1 from "../assets/logo1.png"
function NavBar() {
    const[theme, setTheme] = useState(false);

    useEffect(()=>{
        if(theme === "light"){
            document.documentElement.classList.add("dark");
        }
        else{
            document.documentElement.classList.remove("dark");
        }
    });

    const darkModeSwitch = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }
    return (
        <div name='nav' className='w-full top-0 flex flex-wrap bg-white px-10 text-gray-700 dark:bg-[#243447] duration-300 z-20'>
            <nav className='top-0 py-3 w-full flex justify-between items-center'>
                <h1 className='text-3xl font-bold tracking-wider'>
                    <a href="/" className='text-gray-500 dark:text-gray-100'>
                        <img src={logo1} alt="logo" className='relative w-10 h-10' />
                    </a>
                </h1>
                <ul className='flex items-center'>
                    <li onClick={darkModeSwitch} className='text-2xl text-gray-500 dark:text-slate-50'>
                        <span>
                            {theme === "light" ? <IoSunnyOutline className='hover:text-cyan-500 duration-300' /> : <BsFillMoonStarsFill className='hover:text-cyan-500 duration-300' />}
                        </span>
                    </li>
                    <li>
                        <button className='flex group items-center bg-cyan-400 px-3 py-2 rounded-xl text-slate-50 hover:scale-105 duration-300 ml-8'>              
                            <span className='mr-2 text-xl'>
                                <PiUserList/>
                            </span>
                            Resume          
                        </button>
                    </li>
                </ul>
                
            </nav>
        </div>
    );
}

export default NavBar