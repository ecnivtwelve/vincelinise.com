'use client';

import React from "react";
import { motion } from 'motion/react';

const SoftSkills = () => {
  const softskills = [
    {
      title: "Leadership et Esprit d'Initiative",
      description: "En tant que président de Papillon, j'ai appris à gérer une équipe et à mettre en commun différentes compétences pour mener à bien un projet dans le temps."
    },
    {
      title: "Autonomie et Curiosité",
      description: "Passionné, je m'intéresse et me forme continuellement aux dernières technologies. Je cherche à comprendre comment les choses fonctionnent et comment les améliorer."
    },
    {
      title: "Empathie Utilisateur",
      description: "Mon approche du design est centrée sur l'humain. Je cherche avant tout à résoudre des problématiques identifiables avec une solution qui apporte une expérience agréable et intuitive."
    },
    {
      title: "Capacité d'Adaptation",
      description: "Jongler entre le code et le design, ou s'adapter à de nouveaux environnements de travail est naturel pour moi. Je pivote rapidement selon les enjeux, les projets et les équipes."
    },
  ];

  return (
    <div className="w-full mt-24 flex-col flex gap-8 px-6 lg:px-0">
      <h2 className="text-4xl lg:text-5xl font-light">Soft-skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
        {softskills.map((skill, index) => (
          <motion.div
            key={index}
            className="w-full flex flex-col gap-2"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.1 + index * 0.05, duration: 0.5, type: 'spring' }}
          >
            <h3 className="text-xl font-semibold">{skill.title}</h3>
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