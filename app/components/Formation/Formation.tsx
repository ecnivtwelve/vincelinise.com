'use client';

import React from "react";
import FormationItem from "./FormationItem";
import { useTranslations } from 'next-intl';

const Formation = () => {
  const t = useTranslations('formation');

  const formations = [
    {
      icon: "/form-iutlan.png",
      year: t('iutLannion.year'),
      establishment: t('iutLannion.establishment'),
      city: t('iutLannion.city'),
      title: t('iutLannion.title'),
      subtitle: t('iutLannion.subtitle'),
      specificity: t('iutLannion.specificity'),
      description: t('iutLannion.description')
    },
    {
      icon: "/form-lba.png",
      year: t('lycee.year'),
      establishment: t('lycee.establishment'),
      city: t('lycee.city'),
      title: t('lycee.title'),
      subtitle: t('lycee.subtitle'),
      specificity: t('lycee.specificity'),
      description: t('lycee.description')
    },
  ];

  return (
    <div className="w-full pt-24 flex flex-col gap-10 px-4 md:px-6 lg:px-0">
      <h2 className="text-4xl lg:text-5xl font-light">{t('title')}</h2>

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