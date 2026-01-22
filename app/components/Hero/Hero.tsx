'use client';

import { Button } from "../Button/Button";
import GridIcon from "../Icons/Grid";
import LinkedInIcon from "../Icons/LinkedIn";
import NewspaperIcon from "../Icons/Newspaper";
import User from "./User";

import { motion } from "motion/react"

import CompanyPapillon from "../Icons/CompanyPapillon";
import CompanyStrella from "../Icons/CompanyStrella";
import CompanyLinagora from "../Icons/CompanyLinagora";
import Highlight from "../Highlight/Highlight";

export default function Hero() {
  const initialAnimation = { scale: 0.9, opacity: 0, translateY: 40 }
  const finalAnimation = { scale: 1, opacity: 1, translateY: 0 }
  const transition = { type: 'spring', duration: 0.9, bounce: 0.5 }

  return (
    <div className="w-full items-center justify-center flex flex-col gap-5 max-w-2xl">

      <User />

      <motion.h1
        initial={initialAnimation}
        animate={finalAnimation}
        transition={{ ...transition, delay: 0.1 }}
        className="text-3xl md:text-[2.5rem] tracking-[-0.01em] leading-[2.8rem] md:leading-[2.9rem] text-center mt-[-10px]">
        Enchanté, moi c&apos;est <Highlight delay={0.2}>Vince Linise</Highlight> ,<br />
        <Highlight delay={0.5} className="vl-light">designer</Highlight> d'interfaces & développeur
      </motion.h1>

      <motion.p
        className="text-center"
        initial={initialAnimation}
        animate={finalAnimation}
        transition={{ ...transition, delay: 0.2 }}
      >
        J&apos;étudie actuellement en seconde année de <a className="link" href="https://formations.univ-rennes.fr/mention/bachelor-universitaire-de-technologie-mention-metiers-du-multimedia-et-de-linternet" target="_blank">BUT MMI</a> (métiers du multimédia et de l&apos;Internet) à l&apos;<a className="link" href="https://iut-lannion.univ-rennes.fr/" target="_blank">IUT de Lannion</a> (en Bretagne) et je développe des applications Web et mobile en parallèle. Je fais également de la conception d&apos;interface et du motion design.
      </motion.p>

      <motion.div
        className="flex gap-2"
      >
        <motion.div
          initial={initialAnimation}
          animate={finalAnimation}
          transition={{ ...transition, delay: 0.35 }}
          className="hidden md:block"
        >
          <Button variant="outlined" leading={<GridIcon />}
            href="/projects">Projets</Button>
        </motion.div>

        <motion.div
          initial={initialAnimation}
          animate={finalAnimation}
          transition={{ ...transition, delay: 0.3 }}
        >
          <Button leading={<NewspaperIcon />}
            href="/assets/cv_vince_linise.pdf"
            target="_blank"
          >Voir mon CV</Button>
        </motion.div>

        <motion.div
          initial={initialAnimation}
          animate={finalAnimation}
          transition={{ ...transition, delay: 0.35 }}
        >
          <Button href="https://www.linkedin.com/in/vincelinise/" target="_blank" variant="outlined" leading={<LinkedInIcon />}>LinkedIn</Button>
        </motion.div>
      </motion.div>

      <div className="flex gap-4 flex-col items-center mt-2">
        <motion.div
          initial={initialAnimation}
          animate={finalAnimation}
          transition={{ ...transition, delay: 0.4 }}
        >
          <motion.p
            className="opacity-60"
          >
            Je travaille actuellement chez
          </motion.p>
        </motion.div>
        <motion.div
          className="flex gap-2 md:gap-6 items-center"
          initial={initialAnimation}
          animate={finalAnimation}
          transition={{ ...transition, delay: 0.5 }}
        >
          <a href="https://papillon.bzh/" target="_blank" className="opacity-60 hover:opacity-100 transition-opacity">
            <CompanyPapillon />
          </a>
          <a href="https://strellastudio.fr/" target="_blank" className="opacity-60 hover:opacity-100 transition-opacity">
            <CompanyStrella className="hidden md:block" />
          </a>
          <a href="https://www.linagora.com/" target="_blank" className="opacity-60 hover:opacity-100 transition-opacity">
            <CompanyLinagora />
          </a>
        </motion.div>
      </div>

    </div>
  );
}
