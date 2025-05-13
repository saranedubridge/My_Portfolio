import React from "react";
import HtmlLogo from "../assets/html-logo.png";
import CssLogo from "../assets/css-logo.png";
import JsLogo from "../assets/js-logo.png";
import BootstrapLogo from "../assets/bootstrap-logo.png";
import ReactLogo from "../assets/react-logo.png";
import ReduxLogo from "../assets/redux-logo.png";
import NodeJsLogo from "../assets/nodejs-logo.png";
import MongoDBLogo from "../assets/mongodb-logo.png";
import GitLogo from "../assets/git-logo.png";
import GitHubLogo from "../assets/github-logo.png";
import VsCodeLogo from "../assets/vscode-logo.png";
import ViteLogo from "../assets/vite-logo.png";
import TailwindLogo from "../assets/tailwind-logo.png";
import TsLogo from "../assets/typescript-logo.png";
import ExpressJsLogo from "../assets/expressjs-logo.png";
import PostmanLogo from "../assets/postman-logo.png";
import VercelLogo from "../assets/vercel-logo.png";

const skillsFrontend = [
  { name: "HTML", logo: HtmlLogo },
  { name: "CSS", logo: CssLogo },
  { name: "Tailwind-CSS", logo: TailwindLogo },
  { name: "Bootstrap", logo: BootstrapLogo },
  { name: "JavaScript", logo: JsLogo },
  { name: "TypeScript", logo: TsLogo },
  { name: "React Js", logo: ReactLogo },
  { name: "Redux", logo: ReduxLogo },
  { name: "Redux-Toolkit", logo: ReduxLogo },
];

const skillsBackendDatabase = [
  { name: "Node.js", logo: NodeJsLogo },
  { name: "Express.js", logo: ExpressJsLogo },
  { name: "Git", logo: GitLogo },
  { name: "GitHub", logo: GitHubLogo },
  { name: "VS Code", logo: VsCodeLogo },
  { name: "Vite", logo: ViteLogo },
  { name: "MongoDB", logo: MongoDBLogo },
  { name: "PostMan", logo: PostmanLogo },
  { name: "Vercel", logo: VercelLogo },
];

const Skills = () => {
  return (
    <div className="bg-black text-white py-12" id="skills">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-extrabold text-center mb-8 tracking-wide text-gray-300">
          My Skills
        </h2>
        <p className="text-lg text-gray-400 text-center">
          Here are some of the skills I have mastered.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Frontend Skills */}
          <div className="bg-gray-900 p-8 rounded-xl border border-purple-600 shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-4 text-gray-200">
              Frontend Development
            </h3>
            <div className="grid grid-cols-3 gap-6">
              {skillsFrontend.map((skill, index) => (
                <div key={index} className="flex flex-col items-center space-y-2">
                  <img src={skill.logo} alt={skill.name} className="w-10 h-10" />
                  <span className="text-sm text-gray-300 font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend & Tools */}
          <div className="bg-gray-900 p-8 rounded-xl border border-purple-600 shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-4 text-gray-200">
              Backend & Tools
            </h3>
            <div className="grid grid-cols-3 gap-6">
              {skillsBackendDatabase.map((skill, index) => (
                <div key={index} className="flex flex-col items-center space-y-2">
                  <img src={skill.logo} alt={skill.name} className="w-10 h-10" />
                  <span className="text-sm text-gray-300 font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
