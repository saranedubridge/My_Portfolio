import React from "react";

const WhatSetsMeApart = () => {
  return (
    <div className="bg-black text-white py-12" id="what-sets-me-apart">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-300">
          What Sets Me Apart
        </h2>
        <p className="text-lg text-center mt-4 text-gray-400">
          Launching My Career: A Fresh Perspective on MERN Stack Development Engineering
        </p>

        {/* Simple and Clean Card with Solid Border */}
        <div className="mt-8 mx-auto max-w-prose bg-gray-800 p-6 rounded-lg border border-purple-600 shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-4 text-gray-200">
            Reason to Hire Me
          </h3>
          <p className="text-lg text-center text-gray-300">
            Aspiring MERN Stack Developer passionate about building dynamic and scalable web applications. 
            I bring fresh perspectives, boundless ambition, and unconventional thinking to every project. 
            My goal is to create digital magic through energetic, innovative work with the MERN stack. 
            Let's connect and embark on a journey to bring unique, ambitious, and engaging experiences to life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatSetsMeApart;
