import React from 'react'
import { FaHome, FaUserCircle, FaPhone } from "react-icons/fa";
function BottomNav() {
  return (
    

<div className="fixed z-50 h-12 w-[200px] max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full shadow-lg left-2 bottom-1/2 dark:bg-gray-700 dark:border-gray-600">
    <div className="grid h-full max-w-full grid-cols-3 mx-auto justify-center items-center">
        <button type="button" className="inline-flex flex-col items-center justify-center px-5 rounded-s-full group">
            <FaHome className='text-xl text-gray-600 dark:text-gray-400 dark:hover:text-gray-300'/>
        </button>
        <button type="button" className="inline-flex flex-col items-center justify-center px-5 group">
            <FaUserCircle className='text-xl text-gray-600 dark:text-gray-400 dark:hover:text-gray-300'/>
        </button>
        <button type="button" className="inline-flex flex-col items-center justify-center px-5 rounded-e-full group">
            <FaPhone className='text-xl text-gray-600 dark:text-gray-400 dark:hover:text-gray-300'/>
        </button>
    </div>
</div>

  )
}

export default BottomNav