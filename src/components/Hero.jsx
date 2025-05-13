import React, { useState, useEffect } from 'react';
import HeroImage from '../assets/saran1.jpg';


const titles = [
  "Full-Stack Developer",
  "Web Developer",
  "React Developer",
  "Backend Developer"
];

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [cursor, setCursor] = useState(true);

  // Typing effect
  useEffect(() => {
    const fullTitle = titles[titleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const updated = fullTitle.substring(0, currentTitle.length + 1);
        setCurrentTitle(updated);

        if (updated === fullTitle) {
          setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
        }
      } else {
        const updated = fullTitle.substring(0, currentTitle.length - 1);
        setCurrentTitle(updated);

        if (updated === '') {
          setIsDeleting(false);
          setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }
      }
    }, isDeleting ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [currentTitle, isDeleting, titleIndex]);

  // Cursor blinking
  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorBlink);
  }, []);

  return (
    <div className='bg-black text-white text-center py-16 '>
      <img  src={HeroImage} alt="Hero"
        className='mx-auto mb-6 w-48 h-48 rounded-full object-cover transform
        transition-transform duration-300 hover:scale-105' />
      <h1 className='text-4xl font-bold'>
        Hi, I am {" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>SaranRaj</span>
        , I am a {" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500'>
          {currentTitle}
        </span>
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500'>
          {cursor ? '|' : ' '}
        </span>
      </h1>
      <p className='mt-4 text-xl text-gray-300 max-w-prose mx-auto'>
        I recently transitioned into web development, focusing on both front-end and back-end development. I've worked on various projects, from basic websites to complex web applications, always prioritizing clean code and user-friendly design.
      </p>
      <p className='mt-4 text-xl text-gray-300 max-w-prose mx-auto'>
        I'm proficient in React, MongoDB, Express.js, and Node.js, and I'm eager to join a dynamic team to contribute to innovative projects. I'm looking for opportunities to collaborate with professionals who value quality and performance.
      </p>
      <p className='mt-4 text-xl text-gray-300 max-w-prose mx-auto'>
        Being part of a team that supports continuous learning and growth will help me achieve my goals and add value with my dedication and fresh perspectives.
      </p>
      <div className='mt-8 space-x-4'>
        <a href ="/Saranraj_Resume.pdf" target='_blank' rel="noopener noreferrer"
          className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full text-lg'>Resume</a>
        <a href="#contact"
          className='bg-gradient-to-r from-green-400 to-blue-500 text-white
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full text-lg'>Contact With Me</a>
      </div>
    </div>
  );
};

export default Hero;
