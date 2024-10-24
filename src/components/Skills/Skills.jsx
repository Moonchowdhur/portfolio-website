import React from "react";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import bootstrap from "../../assets/boots.png";
import tailwind from "../../assets/tailwind.png";
import js from "../../assets/jass.png";
import reat from "../../assets/react.png";
import nodej from "../../assets/node.png";
import mongod from "../../assets/mongo.png";
import fire from "../../assets/firee.png";
import { motion } from "framer-motion";
const Skills = () => {
  const tech = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: js,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reat,
      title: "ReactJs",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-white",
    },
    {
      id: 7,
      src: mongod,
      title: "MongoDB",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: nodej,
      title: "NodeJs",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: fire,
      title: "Firebase",
      style: "shadow-red-400",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b pt-12 pb-10 from-gray-800 to-black w-full "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl  rounded-2xl border-[#16FF00] font-bold border-b-4  p-2 inline">
            Skills
          </p>
          <p className="py-6 text-lg font-medium">
            These are the technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {tech.map(({ id, src, title, style }) => (
            <>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <div
                  key={id}
                  className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                >
                  <img src={src} alt="" className="w-20 mx-auto" />
                  <p className="mt-4">{title}</p>
                </div>
              </motion.div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
