'use client';

import React from "react";
import { motion } from 'motion/react';
import { Papicons } from '@getpapillon/papicons';


const SoftSkills = () => {
  const softskills = [
    {
      icon: "grades",
      title: "Leadership et esprit d'initiative",
      description: "En tant que président de Papillon, j'ai appris à gérer une équipe et à mettre en commun différentes compétences pour mener à bien un projet dans le temps."
    },
    {
      icon: "palette",
      title: "Vision produit",
      description: "Je pense chaque projet comme un produit : des idées jusqu'à la mise en ligne, je garde en tête l'expérience utilisateur à tout moment, pour que chaque détail compte."
    },
    {
      icon: "gears",
      title: "Engagement open-source",
      description: "Je crois sincèrement que le code partagé va plus loin que le code gardé. Contribuer au monde de l'open-source est pour moi une manière d'apprendre en collaborant."
    },
    {
      icon: "pie",
      title: "Organisation agile",
      description: "Jongler entre le code et le design, ou s'adapter à de nouveaux environnements de travail est naturel pour moi. Je pivote rapidement selon les enjeux, les projets et les équipes."
    },
  ];

  return (
    <div className="w-full mt-24 flex-col flex gap-8 px-6 lg:px-0">
      <h2 className="text-4xl lg:text-5xl font-light tracking-tight">Soft-skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
        {softskills.map((skill, index) => (
          <motion.div
            key={index}
            className="w-full flex flex-col gap-2"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.1 + index * 0.05, duration: 0.5, type: 'spring' }}
          >
            <div className="flex items-center gap-2">
              <Papicons name={skill.icon} />
              <h3 className="text-xl font-semibold">{skill.title}</h3>
            </div>
            <p className="opacity-70 leading-relaxed">
              {skill.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
};

export default SoftSkills;