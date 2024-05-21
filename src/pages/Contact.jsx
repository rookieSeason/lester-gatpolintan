import React from "react";

function Contact() {
  return (
    <section
      name="contact"
      className="bg-slate-50 flex flex-col justify-center items-center min-h-screen w-screen scroll-smooth"
    >
      <div className="text-center text-5xl sm:text-7xl font-medium tracking-tight">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-400 animate-text py-2">
          Let's work together!
        </h1>
      </div>
      <div className="mx-auto text-center font-medium pb-4 tracking-tight">
        <p className="max-w-[250px] text-2xl sm:max-w-full sm:text-4xl text-gray-500 ">
          I may not looking for any other opportunities, <br />I am willing to
          collaborate with you.
        </p>
      </div>
    </section>
  );
}

export default Contact;
