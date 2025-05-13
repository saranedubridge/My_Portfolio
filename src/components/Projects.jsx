import React, { useState } from "react";
import Modal from "react-modal";
import fooddeliveryclient from "../assets/FoodDeliveryClient.png";
import fooddeliveryadmin from "../assets/FoodDeliveryAdmin.png";
import kanbanboard from "../assets/KanbanBoard.png";
import busbooking from "../assets/BusBooking.png";
import realestate from "../assets/RealEstate.png";

const projects = [
  {
    id: 1,
    name: "Bus Booking",
    technologies: [
      "MERN Stack",
      "React",
      "TailwindCSS",
      "Redux",
      "ReactRouter",
      "Node.js",
      "express.js",
      "MongoDB",
      "Stripe",
      "Axios",
    ],
    image: busbooking,
    shortDescription:
      "I created a bus booking application using a modern tech stack to ensure a seamless user experience. The project features a user-friendly interface with responsive design, secure authentication, and payment integration.",
    longDescription:
      "As a frontend developer, I designed and developed a comprehensive bus booking application. This project showcases my ability to build a full-fledged application with both frontend and backend technologies, ensuring a seamless and secure user experience.The application features a visually appealing design and a responsive layout, ensuring it looks great on various devices. It serves as a testament to my skills in creating user-friendly and secure web applications. In the future, I plan to enhance the application with additional features like real-time seat availability and user reviews.",
    github: "https://github.com/saranedubridge/Bus_Booking",
    liveApp: "https://saranbus.netlify.app",
  },
  {
    id: 2,
    name: "Food Delivery Client",
    technologies: [
      "MERN Stack",
      "React",
      "CSS",
      "Redux",
      "ReactRouter",
      "Node.js",
      "express.js",
      "MongoDB",
    ],
    image: fooddeliveryclient,
    shortDescription:
      "I developed a food delivery application using a modern tech stack to ensure a seamless user experience. The project features a user-friendly interface, secure authentication, and payment integration.",
    longDescription:
      "As a developer, I created a comprehensive food delivery application. This project showcases my ability to build a full-fledged application with both frontend and backend technologies, ensuring a smooth and secure user experience.The application features a visually appealing design and a responsive layout, ensuring it looks great on various devices. It serves as a testament to my skills in creating user-friendly and secure web applications. In the future, I plan to enhance the application with additional features like real-time order tracking and user reviews.",
    github: "https://github.com/saranedubridge/Food-Delivery-App",
    liveApp: "https://food-delivery-app-client-8jlz.onrender.com",
  },
  {
    id: 3,
    name: "Food Delivery Admin",
    technologies: [
      "MERN Stack",
      "React",
      "CSS",
      "Redux",
      "ReactRouter",
      "ReactTostify",
      "Node.js",
      "express.js",
      "MongoDB",
    ],
    image: fooddeliveryadmin,
    shortDescription:
      "I developed an admin panel for a food delivery application, using a modern tech stack to ensure efficient management of orders, users, and menu items. The project features a user-friendly interface, secure authentication, and comprehensive functionalities for administrators.",
    longDescription:
      "As a developer, I created a comprehensive admin panel for a food delivery application. This project showcases my ability to build a full-fledged administration interface with both frontend and backend technologies, ensuring smooth and efficient management of the food delivery service.The admin panel features a visually appealing design and a responsive layout, ensuring it looks great on various devices. It allows administrators to manage orders, users, and menu items efficiently. The integration of security measures ensures the protection of user data and transactions. This project serves as a testament to my skills in creating user-friendly and secure web applications. In the future, I plan to enhance the admin panel with additional features like real-time order tracking and advanced analytics.",
    github: "https://github.com/saranedubridge/Food-Delivery-App",
    liveApp: "https://food-delivery-app-admin-fja3.onrender.com",
  },
  {
    id: 4,
    name: "Kanbanboard",
    technologies: [
      "MERN Stack",
      "React",
      "TypeScript",
      "ReduxToolKit",
      "TailwindCSS",
      "Headless UI",
      "Lodash",
    ],
    image: kanbanboard,
    shortDescription:
      "I developed a Kanban board application using TypeScript and a modern tech stack, focusing on a seamless and intuitive user experience. This project showcases my frontend development skills and my ability to create dynamic and responsive web applications.",
    longDescription:
      "As a frontend developer, I created a comprehensive Kanban board application using TypeScript and a modern tech stack. This project demonstrates my ability to build a full-fledged frontend application that is both dynamic and user-friendly.The application features a visually appealing design and a responsive layout, ensuring it looks great on various devices. Users can create, update, and move tasks across different columns, following the Kanban methodology. This project serves as a testament to my skills in creating user-friendly and interactive web applications. In the future, I plan to enhance the application with additional features like real-time collaboration and advanced filtering options.",
    github: "https://github.com/saranedubridge/KanbanBoard",
    liveApp: "https://kanbanboarad-1.netlify.app",
  },
  {
    id: 5,
    name: "Real Estate",
    technologies: [
      "MERN Stack",
      "React",
      "TailwindCSS",
      "Redux",
      "Firebase",
      "ReactRouter",
      "Node.js",
      "express.js",
      "MongoDB",
    ],
    image: realestate,
    shortDescription:
      "I developed a real estate application using a modern tech stack to ensure a seamless user experience. The project features a user-friendly interface, secure authentication, and comprehensive functionalities for listing and searching properties.",
    longDescription:
      "As a developer, I created a comprehensive real estate application. This project showcases my ability to build a full-fledged application with both frontend and backend technologies, ensuring a smooth and secure user experience.The application features a visually appealing design and a responsive layout, ensuring it looks great on various devices. Users can list properties, search for properties, and view detailed information about each property. The integration of security measures ensures the protection of user data and transactions. This project serves as a testament to my skills in creating user-friendly and secure web applications. In the future, I plan to enhance the application with additional features like real-time chat between buyers and sellers, and advanced filtering options.",
    github: "https://github.com/saranedubridge/Real-Estate",
    liveApp: "https://real-estate-1ank.onrender.com",
  },
];

// Define a uniform solid border
const borderStyle = "border-2 border-purple-600"; // Simple solid border

// Highlighted colors for technology badges (muted but visible)
const techColors = {
  "MERN Stack": "bg-green-700",
  React: "bg-blue-700",
  TailwindCSS: "bg-cyan-700",
  Redux: "bg-purple-700",
  ReactRouter: "bg-orange-700",
  "Node.js": "bg-teal-700",
  "Express.js": "bg-gray-700",
  MongoDB: "bg-green-800",
  CSS: "bg-pink-700",
  Default: "bg-gray-700", // Default color for any tech not listed above
};

const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="bg-black text-white py-12" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-300">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`bg-gray-900 p-6 rounded-xl shadow-lg ${borderStyle} h-full flex flex-col`}
            >
              <div
                className="cursor-pointer transition-transform hover:scale-105"
                onClick={() => openModal(project)}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h3 className="text-2xl font-bold mb-2 text-center">
                  {project.name}
                </h3>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className={`inline-block ${
                        techColors[tech] || techColors.Default
                      } text-white px-3 py-1 rounded-full text-xs`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-400 text-center flex-grow">
                  {project.shortDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Project Details"
          className="bg-gray-900 p-8 rounded-lg border-2 border-gray-600 max-w-2xl w-full mx-auto text-white relative max-h-screen overflow-auto"
          overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center"
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
          >
            ✕
          </button>
          <img
            src={selectedProject.image}
            alt={selectedProject.name}
            className="rounded-lg mb-4 w-full h-64 object-cover"
          />
          <h3 className="text-3xl font-bold mb-2 text-center">
            {selectedProject.name}
          </h3>
          <p className="text-center mb-4">
            <strong>Technologies:</strong>
            <div className="flex flex-wrap justify-center mt-2">
              {selectedProject.technologies.map((tech, index) => (
                <span
                  key={index}
                  className={`inline-block ${
                    techColors[tech] || techColors.Default
                  } text-white px-3 py-1 rounded-full text-sm mr-2 mb-2`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </p>
          <p className="text-center mb-8">{selectedProject.longDescription}</p>
          <div className="text-center space-x-4">
          <a
  href={selectedProject.github}
  target="_blank"
  rel="noopener noreferrer"
   className="inline-block bg-gray-700 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:bg-indigo-600 hover:scale-105 hover:shadow-lg"
>
              View Code
            </a>
            <a
  href={selectedProject.liveApp}
  target="_blank"
  rel="noopener noreferrer"
 
className="inline-block bg-gray-700 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:bg-emerald-600 hover:scale-105 hover:shadow-lg"
>
              View Live App
            </a>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Projects;

