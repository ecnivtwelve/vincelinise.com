'use client';

import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "motion/react";
import { useTranslations } from 'next-intl';

const Projects = () => {
  const t = useTranslations('projects');

  const initialAnimation = { scale: 0.9, opacity: 0, translateY: 40 }
  const finalAnimation = { scale: 1, opacity: 1, translateY: 0 }
  const transition = { type: 'spring', duration: 0.9, bounce: 0.5 }

  return (
    <div className="flex flex-col lg:flex-row gap-2 my-16 w-full lg:w-[130%]">
      <motion.div
        initial={initialAnimation}
        animate={finalAnimation}
        transition={{ ...transition, delay: 0.4 }}
        className="w-full"
      >
        <ProjectCard
          icon="/icon-papillon.png"
          banner="/banner-papillon.png"
          name={t('papillon.name')}
          title={t('papillon.title')}
          type={t('papillon.type')}
          info={t('papillon.info')}
          href="/projects/papillon"
        />
      </motion.div>
      <motion.div
        initial={initialAnimation}
        animate={finalAnimation}
        transition={{ ...transition, delay: 0.45 }}
        className="w-full"
      >
        <ProjectCard
          icon="/icon-ctl.png"
          banner="/banner-ctl.png"
          name={t('composeTonLogo.name')}
          title={t('composeTonLogo.title')}
          type={t('composeTonLogo.type')}
          info={t('composeTonLogo.info')}
          href="/projects/compose-ton-logo"
        />
      </motion.div>
      <motion.div
        initial={initialAnimation}
        animate={finalAnimation}
        transition={{ ...transition, delay: 0.5 }}
        className="w-full"
      >
        <ProjectCard
          icon="/icon-lpas.png"
          banner="/banner-lpas.png"
          name="Le Phare aux Spectacles"
          title="Design UI/UX d’une application de spectacles"
          type="Projet MMI"
          info="Design d’interface utilisateur"
        />
      </motion.div>
    </div>
  );
};

export default Projects;
