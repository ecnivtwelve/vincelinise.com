'use client';

import Image from "next/image";
import React from "react";
import { motion } from 'motion/react';

const Skills = () => {
  const skills = [
    {
      icon: "/comp-react.svg",
      title: "React & React Native",
      type: "Développement front-end"
    },
    {
      icon: "/comp-svelte.svg",
      title: "Svelte & SvelteKit",
      type: "Développement front-end"
    },
    {
      icon: "/comp-figma.svg",
      title: "Figma",
      type: "Design d’expérience utilisateur"
    },
    {
      icon: "/comp-ae.svg",
      title: "Adobe After Effects",
      type: "Animation et motion design"
    },
    {
      icon: "/comp-py.svg",
      title: "Python",
      type: "Développement back-end, serveur et algo"
    }
  ];

  return (
    <div className="w-full mt-24 flex-col flex gap-8 px-6 lg:px-0">
      <h2 className="text-4xl lg:text-5xl font-light">Compétences techniques</h2>

      <div className="w-full flex gap-2 flex-col lg:flex-row">
        {skills.map((skill, index) => (
          <motion.div
            key={index} f
            className="flex-1 flex p-4 flex-row lg:flex-col items-center justify-start lg:justify-center bg-white border border-neutral-300 shadow-md rounded-xl gap-4 lg:gap-0"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.1 + index * 0.05, duration: 0.5, type: 'spring' }}
          >
            <Image src={skill.icon} alt={skill.title} width={48} height={48} />
            <div className="lg:mt-3 gap-1 flex flex-col items-start lg:items-center">
              <p className="text-center text-lg font-semibold leading-6">{skill.title}</p>
              <p className="font-sm text-center opacity-60">{skill.type}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
};

export default Skills;