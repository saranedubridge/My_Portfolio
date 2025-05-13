import React from "react";
import { FaGraduationCap, FaBriefcase, FaChalkboardTeacher } from "react-icons/fa";

const Credentials = () => {
  return (
    <div className="bg-black text-white py-16" id="credentials">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 relative">
        <h2 className="text-4xl font-bold text-center mb-12">Credentials and Experience</h2>
        <div className="absolute left-1/2 transform -translate-x-1/2 border-l-2 border-gray-700" style={{ top: '0', bottom: '25%' }}></div>
        <div className="space-y-12">
          <div className="relative bg-gray-800 p-8 rounded-lg transform transition-transform duration-300 hover:scale-105 shadow-lg border-l-4 border-green-400">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-6 bg-green-400 rounded-full w-8 h-8 flex items-center justify-center">
              <FaChalkboardTeacher className="text-black" />
            </div>
            <div className="ml-12">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-2">Professional Training</h3>
              <p className="text-lg mb-1 font-semibold">
                Zen Class Full Stack Developer Program
                <span className="block text-gray-400">July 2024 - Present</span>
              </p>
              <p className="text-gray-300">
                Acquired a comprehensive skill set in both front-end and back-end development.
              </p>
            </div>
          </div>
          
          <div className="relative bg-gray-800 p-8 rounded-lg transform transition-transform duration-300 hover:scale-105 shadow-lg border-l-4 border-blue-500">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-6 bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center">
              <FaBriefcase className="text-black" />
            </div>
            <div className="ml-12">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-2">Experience</h3>
              <p className="text-lg mb-1 font-semibold">
                Intrapreneur - Senthamilan Private Limited
                <span className="block text-gray-400">Dec 2022 - July 2024</span>
              </p>
              <p className="text-gray-300">
                Improved company operations and growth by coordinating teams and analyzing dynamic market data, Hosur.
              </p>
            </div>
          </div>

          <div className="relative bg-gray-800 p-8 rounded-lg transform transition-transform duration-300 hover:scale-105 shadow-lg border-l-4 border-yellow-500">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-6 bg-yellow-500 rounded-full w-8 h-8 flex items-center justify-center">
              <FaGraduationCap className="text-black" />
            </div>
            <div className="ml-12">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-2">Education</h3>
              <p className="text-lg mb-1 font-semibold">
                Bachelor of Engineering in Electrical and Electronics
                <span className="block text-gray-400">June 2019 - May 2022</span>
              </p>
              <p className="text-gray-300">
                Sri Ramakrishna Engineering College, Coimbatore, TamilNadu.
              </p>
              <br />
              <p className="text-lg mb-1 font-semibold">
                Diploma in Electrical and Electronics Engineering
                <span className="block text-gray-400">June 2016 - May 2019</span>
              </p>
              <p className="text-gray-300">
                Sri Ramakrishna Polytechnic College, Coimbatore, TamilNadu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credentials;
