'use client';

import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from 'motion/react';
import clsx from "clsx";
import { SkillsDetailAE, SkillsDetailFigma, SkillsDetailPython, SkillsDetailReact, SkillsDetailSvelte } from "./SkillsDetail";

const Skills = () => {
  const skills = [
    {
      slug: "react",
      icon: "/comp-react.svg",
      title: "React & React Native",
      type: "Développement front-end",
      component: SkillsDetailReact
    },
    {
      slug: "figma",
      icon: "/comp-figma.svg",
      title: "Figma",
      type: "Design d’expérience utilisateur",
      component: SkillsDetailFigma
    },
    {
      slug: "ae",
      icon: "/comp-ae.svg",
      title: "Adobe After Effects",
      type: "Animation et motion design",
      component: SkillsDetailAE
    },
    {
      slug: "python",
      icon: "/comp-py.svg",
      title: "Python",
      type: "Développement back-end, serveur et algo",
      component: SkillsDetailPython
    },
    {
      slug: "svelte",
      icon: "/comp-svelte.svg",
      title: "Svelte & SvelteKit",
      type: "Développement front-end",
      component: () => null
    },
  ];

  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  return (
    <div className="w-full mt-2 mb-12 flex-col flex gap-4 px-4 lg:px-0">
      <h2 className="text-4xl lg:text-5xl font-light">Compétences techniques</h2>

      <div className="w-full flex gap-2 flex-col lg:flex-row mt-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.slug}
            className="flex-1"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.1 + index * 0.05, duration: 0.5, type: 'spring' }}
          >
            <div
              className={clsx("flex-1 flex p-4 flex-row lg:flex-col items-center justify-start lg:justify-center bg-white border shadow-md rounded-xl gap-4 lg:gap-0 hover:shadow-lg hover:-translate-y-1  transition-all duration-150 cursor-pointer active:scale-95",
                selectedSkill === skill.slug ? "border-neutral-400 -translate-y-1" : "border-neutral-300 hover:border-neutral-400"
              )}
              onClick={() => {
                if (selectedSkill === skill.slug) {
                  setSelectedSkill(null);
                } else {
                  setSelectedSkill(skill.slug);
                }
              }}
            >
              <Image src={skill.icon} alt={skill.title} width={48} height={48} />
              <div className="lg:mt-3 gap-1 flex flex-col items-start lg:items-center">
                <p className="lg:text-center text-lg font-semibold leading-6">{skill.title}</p>
                <p className="font-sm lg:text-center opacity-60">{skill.type}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div
        className={clsx("transition-height duration-300", selectedSkill ? "h-112" : "h-1")}
      >
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1, transition: { delay: 0.1, duration: 0.5, type: 'spring' } }}
              exit={{ opacity: 0, y: -30, scale: 0.95, transition: { duration: 0.15, ease: 'easeIn' } }}
              className="h-112 w-full relative bg-white rounded-xl border border-neutral-300 shadow-md"
            >
              <AnimatePresence>
                <motion.div
                  key={selectedSkill}
                  className="w-full h-full absolute h-112"
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1, transition: { delay: 0.1, duration: 0.5, type: 'spring' } }}
                  exit={{ opacity: 0, y: -30, scale: 0.95, transition: { duration: 0.15, ease: 'easeIn' } }}
                >
                  {selectedSkill && (() => {
                    const skill = skills.find(s => s.slug === selectedSkill);
                    if (skill && skill.component) {
                      return <skill.component />;
                    }
                    return null;
                  })()}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
};

export default Skills;