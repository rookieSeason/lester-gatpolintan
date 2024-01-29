

function Projects() {
    return (
        <section name='projects' className='flex flex-col bg-white dark:bg-[#243447] min-h-screen w-screen'>
            <h1 className='animate-float pl-8 font-bold text-left sm:pl-24 text-3xl sm:text-5xl text-gray-700 dark:text-gray-200 pt-8'>
                Portfolio
            </h1>
            <p className="pl-8 sm:pl-24 text-xl text-gray-600 dark:text-gray-300 my-4">Here are my projects that i worked before</p>
            <div className="w-full px-8 md:px-28 grid md:grid-cols-3 gap-x-8 gap-y-4 py-4">
                <div className="rounded-2xl shadow-md p-8 border border-gray-300 dark:border-gray-400">
                    <h4 className="font-semibold text-lg sm:text-xl text-gray-600 dark:text-gray-300">Online Relocation MIS</h4>
                    <p className="text-gray-600 dark:text-gray-300">Capstone Project</p>
                    <p className="text-sm sm:text-md text-gray-500 dark:text-gray-400">
                        PHP, My SQL, Bootstrap,
                    </p>
                </div>
                <div className="rounded-2xl shadow-md p-8 border border-gray-300 dark:border-gray-400">
                    <h4 className="font-semibold text-xl sm:text-xl text-gray-600 dark:text-gray-300">Basic Student System</h4>
                    <p className="text-gray-600 dark:text-gray-300">Basic CRUD practices</p>
                    <p className="text-sm sm:text-md text-gray-500 dark:text-gray-400">
                        Laravel, Tailwind, Alpine JS, My SQL
                    </p>
                </div>
                <div className="rounded-2xl shadow-md p-8 border border-gray-300 dark:border-gray-400">
                    <h4 className="font-semibold text-xl sm:text-xl text-gray-600 dark:text-gray-300">Personal Portfolio Native</h4>
                    <p className="text-gray-600 dark:text-gray-300">Personal Portfolio Website</p>
                    <p className="text-sm sm:text-md text-gray-500 dark:text-gray-400">
                        Bootstrap, HTML5, CSS3, JavaScript ES6
                    </p>
                </div>
                 <div className="rounded-2xl shadow-md p-8 border border-gray-300 dark:border-gray-400">
                    <h4 className="font-semibold text-xl sm:text-xl text-gray-600 dark:text-gray-300">Air Fibr Queueing System</h4>
                    <p className="text-gray-600 dark:text-gray-300">School Project</p>
                    <p className="text-sm sm:text-md text-gray-500 dark:text-gray-400">
                        ASP.NET, HTML5, CSS3, JQuery
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Projects