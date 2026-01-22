import React from "react";
import FormationItem from "./FormationItem";

const Formation = () => {
  const formations = [
    {
      icon: "/form-iutlan.png",
      year: "2024-2027",
      establishment: "IUT de Lannion",
      city: "Lannion (22)",
      title: "Métiers du Multimédia et de l’Internet",
      subtitle: "Bachelor Universitaire de Technologie",
      specificity: "spécialité Développement Web et disp. interactifs",
      description:
        "Une formation super-polyvalente ou j’apprends à piloter des projets multimédias de A à Z, de l'intégration technique au marketing numérique, avec l'objectif de décrocher mon diplôme en 2027."
    },
    {
      icon: "/form-lba.png",
      year: "2021 — 2024",
      establishment: "Lycée Bertrand d’Argentré",
      city: "Vitré (35)",
      title: "Baccalauréat général",
      subtitle: "Enseignement secondaire",
      specificity: "spécialités Sciences informatiques et Anglais",
      description:
        "Obtention du baccalauréat général au lycée avec les spécialités Numérique & Sciences Informatiques, Anglais Monde Contemporain et Sciences économiques et sociales (que j'ai suivi en anglais)."
    },
  ];

  return (
    <div className="w-full pt-24 flex flex-col gap-10 px-4 md:px-6 lg:px-0">
      <h2 className="text-4xl lg:text-5xl font-light">Ma formation</h2>

      <div className="flex flex-col md:flex-row gap-8 px-1">
        {formations.map((formation, index) => (
          <React.Fragment key={formation.establishment}>
            {index > 0 && <div className="h-0.5 md:h-auto md:w-0.5 bg-neutral-300" />}
            <FormationItem
              icon={formation.icon}
              year={formation.year}
              establishment={formation.establishment}
              city={formation.city}
              title={formation.title}
              subtitle={formation.subtitle}
              specificity={formation.specificity}
              description={formation.description}
              delay={index * 0.1}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default Formation;