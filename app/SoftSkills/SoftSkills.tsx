'use client';

import React from "react";
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';

const SoftSkills = () => {
  const t = useTranslations('softSkills');

  const softskills = [
    {
      titleKey: 'leadership.title',
      descriptionKey: 'leadership.description'
    },
    {
      titleKey: 'autonomy.title',
      descriptionKey: 'autonomy.description'
    },
    {
      titleKey: 'empathy.title',
      descriptionKey: 'empathy.description'
    },
    {
      titleKey: 'adaptation.title',
      descriptionKey: 'adaptation.description'
    },
  ];

  return (
    <div className="w-full mt-24 flex-col flex gap-8 px-6 lg:px-0">
      <h2 className="text-4xl lg:text-5xl font-light">{t('title')}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
        {softskills.map((skill, index) => (
          <motion.div
            key={index}
            className="w-full flex flex-col gap-2"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.1 + index * 0.05, duration: 0.5, type: 'spring' }}
          >
            <h3 className="text-xl font-semibold">{t(skill.titleKey)}</h3>
            <p className="opacity-70 leading-relaxed">
              {t(skill.descriptionKey)}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
};

export default SoftSkills;