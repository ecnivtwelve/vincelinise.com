'use client';

import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "motion/react";

const Projects = () => {
  const initialAnimation = { scale: 0.9, opacity: 0, translateY: 40 }
  const finalAnimation = { scale: 1, opacity: 1, translateY: 0 }
  const transition = { type: 'spring', duration: 0.9, bounce: 0.5 }

  return (
    <div className="flex flex-col lg:flex-row gap-2 my-16 w-full lg:w-[136%] max-w-[calc(100vw-20px)]">
      <motion.div
        initial={initialAnimation}
        animate={finalAnimation}
        transition={{ ...transition, delay: 0.4 }}
        className="w-full"
      >
        <ProjectCard
          icon="/icon-papillon.png"
          banner="/banner-papillon.png"
          name="Papillon"
          title="Alternative open-source aux applications scolaires"
          type="Projet perso"
          info="Développement et design UI/UX"
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
          name="Compose ton Logo"
          title="Dispositif interactif pour la journée portes ouvertes"
          type="Projet MMI"
          info="Développement React"
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
          icon="/projects/strella-icon.png"
          banner="/projects/strella-banner.jpg"
          name="StrellaStudio"
          title="Identité visuelle d'un studio de développement Web"
          type="Freelance / Commission"
          info="Branding et identité visuelle"
          href="/projects/strellastudio"
        />
      </motion.div>
    </div>
  );
};

export default Projects;
