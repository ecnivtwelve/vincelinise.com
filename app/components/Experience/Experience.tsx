import React from "react";
import ExperienceItem from "./ExperienceItem";

const Experience = () => {
  const experiences = [
    {
      logo: "/exp-dc2.jpg",
      title: "Alternant designer créatif et Intégrateur Web",
      company: "dc2scale",
      location: "Vélizy-Villacoublay (78)",
      date: "juin 2026 à aujourd’hui",
      description:
        "Développeur front-end et UI/UX designer en alternance sur les plateformes numériques proposées aux clients de l'entreprise de datacenters dc2scale, qui conçoit, exploite et maintient des centres de données partout en France.",
      remote: false,
      link: "https://dc2scale.fr/"
    },
    {
      logo: "/exp-papi.jpg",
      title: "Président",
      company: "Papillon",
      location: "Rennes (35)",
      date: "septembre 2021 à aujourd’hui",
      description:
        "Papillon est aujourd'hui l'application de vie scolaire open-source la plus téléchargée de France. Elle permet à plus de 1 850 000+ élèves d'accéder à leurs données via une interface moderne, intuitive et entièrement personnalisable. En tant que président et développeur, j'ai placé l'expérience utilisateur au cœur de ce projet pour offrir aux étudiants un outil construit par eux et pour eux.",
      remote: false,
      link: "https://papillon.bzh/"
    },
    {
      logo: "/exp-lina.jpg",
      title: "Alternant développeur front-end",
      company: "Linagora",
      location: "Issy-Les-Moulineaux (92)",
      date: "septembre 2025 à mai 2026",
      description:
        "Développeur Front-end en alternance sur la solution Twake Workplace, une alternative souveraine et open-source aux environnements de travail collaboratifs. Je contribue majoritairement au développement de l'interface utilisateur en React.",
      remote: true,
      link: "https://linagora.com/"
    },
    {
      logo: "/exp-stst.jpg",
      title: "Développeur et UX designer",
      company: "StrellaStudio",
      location: "Dole (39)",
      date: "janvier 2024 à aujourd’hui",
      description:
        "Développeur et graphiste UI/UX pour les clients de l'association StrellaStudio, qui fournit des services numériques aux entreprises qui souhaitent se développer sur le Web.",
      remote: true,
      link: "https://strellastudio.fr/"
    },
    {
      logo: "/exp-cozy.jpg",
      title: "Développeur front-end",
      company: "Cozy Cloud",
      location: "Paris (75)",
      date: "Stage de juin 2024 à août 2024",
      description:
        "Développement et planification d'un client front-end et back-end d'aggrégation de données scolaires pour élèves du secondaire sur la plateforme de connecteurs de Cozy Cloud pour un déploiement auprès des académies.",
      remote: true,
      link: "https://cozy.io/"
    },
  ];

  return (
    <div className="w-full pt-24 flex flex-col gap-10 px-4 md:px-6 lg:px-0">
      <h2 className="text-4xl lg:text-5xl font-light tracking-tight">Expériences professionnelles</h2>

      {experiences.map((experience, index) => (
        <ExperienceItem
          key={experience.company}
          logo={experience.logo}
          title={experience.title}
          company={experience.company}
          location={experience.location}
          date={experience.date}
          description={experience.description}
          remote={experience.remote}
          delay={index * 0.05}
          link={experience.link}
        />
      ))}
    </div>
  )
}

export default Experience;