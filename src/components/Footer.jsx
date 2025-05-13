// import React from "react";
// import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white py-8">
//       <div className="container mx-auto px-8 md:px-16 lg:px-24">
//         <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
//           <div className="flex-1 mb-4 md:mb-0">
//             <h3 className="text-2xl font-bold mb-2">Yousaf</h3>
//             <p className="text-gray-400">
//               Full-Stack Developer based in the USA, specializing in web and
//               software development.
//             </p>
//           </div>
//           <div className="flex-1 w-full">
//             <form className="flex items-center justify-center">
//               <input
//                 type="email"
//                 placeholder="Your email"
//                 className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 
//                 focus:outline-none focus:border-green-400"
//               />
//               <button
//                 type="submit"
//                 className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 
//                 py-2 rounded-r-lg"
//               >
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div>

//         <div
//           className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
//           justify-between items-center"
//         >
//           <p className="text-gray-400">
//             &copy; {new Date().getFullYear()} Yousaf. All rights reserved.
//           </p>
//           <div className="flex space-x-4 my-4 md:my-0">
//             <a href="#" className="text-gray-400 hover:text-white">
//               <FaFacebook />
//             </a>
//             <a href="#" className="text-gray-400 hover:text-white">
//               <FaTwitter />
//             </a>
//             <a href="#" className="text-gray-400 hover:text-white">
//               <FaLinkedin />
//             </a>
//             <a href="#" className="text-gray-400 hover:text-white">
//               <FaGithub />
//             </a>
//           </div>
//           <div className="flex space-x-4">
//             <a href="#" className="text-gray-400 hover:text-white">
//               Privacy
//             </a>
//             <a href="#" className="text-gray-400 hover:text-white">
//               Terms of Service
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import { FaPhone, FaEnvelope, FaLinkedin, FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">SaranRaj M</h3>
            <p className="text-gray-400">
            I'm an Indian Full Stack Web Developer working on technologies like React JS, Javascript,Node JS, Express JS, etc.
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="tel:+917010910735" className="text-gray-400 hover:text-white transform rotate-90">
              <FaPhone />
            </a>
            <a href="saranraj.webdev@gmail.com" className="text-gray-400 hover:text-white">
              <FaEnvelope />
            </a>
            <a href="https://www.linkedin.com/in/saran-raj-m/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaLinkedin />
            </a>
            <a href="https://github.com/saranedubridge" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaGithub />
            </a>
            <a href="https://wa.me/7010910735" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaWhatsapp />
            </a>
           
          </div>
        </div>

        <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} SaranRaj. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="#" className="text-gray-400 hover:text-white">
              About
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Skills
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Experience
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Projects
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Education
            </a>
          </div>
        </div>

        <p className="text-center text-gray-400 mt-8">
          Elevating the Digital Experience!
        </p>
      </div>
    </footer>
  );
};

export default Footer;

