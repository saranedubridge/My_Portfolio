import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
        <div className='container py-2 flex justify-center md:justify-between items-center'>
            <div className='text-2xl font-bold hidden md:inline'>Devfolio</div>
            <div className='space-x-6'>
              
                <a href="#about" className='hover:text-gray-400'>About Me</a>
                <a href="#skills" className='hover:text-gray-400'>Skills</a>
                <a href="#project" className='hover:text-gray-400'>Projects</a>
                <a href="#credentials" className='hover:text-gray-400'>Education</a>
                <a href="#contact" className='hover:text-gray-400'>Contact</a>
            </div>
            <a 
          href="https://github.com/saranedubridge" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline-block
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
        >
          Github
        </a>
        </div>
    </nav>
  )
}

export default Navbar