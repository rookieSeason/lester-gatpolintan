import React from 'react'

function Contact() {
    return (
        <section name='contact' className='bg-white dark:bg-[#243447] flex justify-center items-center min-h-screen min-w-screen'>
            <div className='grid md:grid-cols-2 gap-x-8 p-8'>
                <div className='text-3xl md:text-6xl text-gray-700 dark:text-gray-100 animate-float'>
                    <h1 className='font-bold underline underline-offset-8'>Let's
                        <span className='text-cyan-600 dark:text-cyan-400'> work together!
                        </span>
                    </h1>
                </div>
                <div className='max-w-[550px] p-2'>
                    <p className='text-lg md:text-2xl text-gray-600 dark:text-gray-300'>
                        Even though I'm not looking for any other opportunities, I'm willing to collaborate with you.
                    </p>
                </div>
            </div>
            
            
        </section>
    );
}

export default Contact