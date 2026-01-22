import React from "react";
import ExperienceItem from "./ExperienceItem";

const Experience = () => {
  const experiences = [
    {
      logo: "/exp-lina.jpg",
      title: "Alternant développeur front-end",
      company: "Linagora",
      location: "Issy-Les-Moulineaux (92)",
      date: "septembre 2025 à aujourd’hui",
      description:
        "Développeur Front-end en alternance sur la solution Twake Workplace, une alternative souveraine et open-source aux environnements de travail collaboratifs. Je contribue majoritairement au développement de l'interface utilisateur en React.",
      remote: true
    },
    {
      logo: "/exp-papi.jpg",
      title: "Président",
      company: "Papillon",
      location: "Rennes (35)",
      date: "septembre 2021 à aujourd’hui",
      description:
        "Papillon est aujourd'hui l'application de vie scolaire open-source la plus téléchargée de France. Elle permet à plus de 1 500 000 élèves d'accéder à leurs données via une interface moderne, intuitive et entièrement personnalisable. En tant que président et développeur, j'ai placé l'expérience utilisateur au cœur de ce projet pour offrir aux étudiants un outil construit par eux et pour eux.",
      remote: false
    },
    {
      logo: "/exp-stst.jpg",
      title: "Développeur et UX designer",
      company: "StrellaStudio",
      location: "à distance de Dole (39)",
      date: "janvier 2024 à aujourd’hui",
      description:
        "Développeur et graphiste UI/UX pour les clients de l'association StrellaStudio, qui fournit des services numériques aux entreprises qui souhaitent se développer sur le Web.",
      remote: true
    },
    {
      logo: "/exp-cozy.jpg",
      title: "Développeur front-end",
      company: "Cozy Cloud",
      location: "à distance de Paris (75)",
      date: "Stage de juin 2024 à août 2024",
      description:
        "Développement et planification d'un client front-end et back-end d'aggrégation de données scolaires pour élèves du secondaire sur la plateforme de connecteurs de Cozy Cloud pour un déploiement auprès des académies.",
      remote: true
    },
  ];

  return (
    <div className="w-full pt-24 flex flex-col gap-10 px-4 md:px-6 lg:px-0">
      <h2 className="text-4xl lg:text-5xl font-light">Expériences professionnelles</h2>

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
        />
      ))}
    </div>
  )
}

export default Experience;