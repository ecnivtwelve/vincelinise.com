'use client';

import Image from "next/image";
import React from "react";
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';

const Skills = () => {
  const t = useTranslations('skills');

  const skills = [
    {
      icon: "/comp-react.svg",
      titleKey: 'items.react.title',
      typeKey: 'items.react.type'
    },
    {
      icon: "/comp-svelte.svg",
      titleKey: 'items.svelte.title',
      typeKey: 'items.svelte.type'
    },
    {
      icon: "/comp-figma.svg",
      titleKey: 'items.figma.title',
      typeKey: 'items.figma.type'
    },
    {
      icon: "/comp-ae.svg",
      titleKey: 'items.afterEffects.title',
      typeKey: 'items.afterEffects.type'
    },
    {
      icon: "/comp-py.svg",
      titleKey: 'items.python.title',
      typeKey: 'items.python.type'
    }
  ];

  return (
    <div className="w-full mt-2 mb-12 flex-col flex gap-8 px-4 lg:px-0">
      <h2 className="text-4xl lg:text-5xl font-light">{t('title')}</h2>

      <div className="w-full flex gap-2 flex-col lg:flex-row">
        {skills.map((skill, index) => (
          <motion.div
            key={index} f
            className="flex-1 flex p-4 flex-row lg:flex-col items-center justify-start lg:justify-center bg-white border border-neutral-300 shadow-md rounded-xl gap-4 lg:gap-0"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.1 + index * 0.05, duration: 0.5, type: 'spring' }}
          >
            <Image src={skill.icon} alt={t(skill.titleKey)} width={48} height={48} />
            <div className="lg:mt-3 gap-1 flex flex-col items-start lg:items-center">
              <p className="lg:text-center text-lg font-semibold leading-6">{t(skill.titleKey)}</p>
              <p className="font-sm lg:text-center opacity-60">{t(skill.typeKey)}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
};

export default Skills;