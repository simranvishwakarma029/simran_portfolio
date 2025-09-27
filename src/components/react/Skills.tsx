import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaJava,
  FaGitAlt,

} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiGreensock,
  SiFramer,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiFigma,
  SiGithub,
  SiVercel,
  SiVite,
 
} from "react-icons/si";

// Skill type
type Skill = {
  name: string;
  icon: JSX.Element;
};

const skills: Skill[] = [
  { name: "HTML5", icon: <FaHtml5 size={50} color="#E44D26" /> },
  { name: "CSS3", icon: <FaCss3Alt size={50} color="#1572B6" /> },
  { name: "JavaScript", icon: <FaJs size={50} color="#F7DF1E" /> },
  { name: "React", icon: <FaReact size={50} color="#61DAFB" /> },
  { name: "Next.js", icon: <SiNextdotjs size={50} color="black" /> },
   { name: "Bootstrap", icon: <FaBootstrap size={50} color="#3776AB" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss size={50} color="#38B2AC" /> },
  { name: "Redux", icon: <SiRedux size={50} color="#764ABC" /> },
  { name: "GSAP", icon: <SiGreensock size={50} color="#88CE02" /> },
  { name: "Framer Motion", icon: <SiFramer size={50} color="#0055FF" /> },
  { name: "Node.js", icon: <FaNodeJs size={50} color="#68A063" /> },
  { name: "Express.js", icon: <SiExpress size={50} color="gray" /> },
  { name: "MongoDB", icon: <SiMongodb size={50} color="#47A248" /> },
  { name: "Firebase", icon: <SiFirebase size={50} color="#FFCA28" /> },
  { name: "Github", icon: <SiGithub size={50} color="black" /> },
    { name: "Vercel", icon: <SiVercel size={50} color="white" /> },
  { name: "Java", icon: <FaJava size={50} color="#007396" /> },
  { name: "Git", icon: <FaGitAlt size={50} color="#F05032" /> },
  { name: "Figma", icon: <SiFigma size={50} color="#F24E1E" /> },
 { name: "Vite", icon: <SiVite size={50} color="#646CFF" /> },
  
];

const Skills: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800 dark:text-gray-200">
          My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              {skill.icon}
              <p className="mt-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
