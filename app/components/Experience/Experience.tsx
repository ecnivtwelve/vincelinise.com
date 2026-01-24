'use client';

import React from "react";
import ExperienceItem from "./ExperienceItem";
import { useTranslations } from 'next-intl';

const Experience = () => {
  const t = useTranslations('experience');

  const experiences = [
    {
      logo: "/exp-lina.jpg",
      title: t('linagora.title'),
      company: t('linagora.company'),
      location: t('linagora.location'),
      date: t('linagora.date'),
      description: t('linagora.description'),
      remote: true
    },
    {
      logo: "/exp-papi.jpg",
      title: t('papillon.title'),
      company: t('papillon.company'),
      location: t('papillon.location'),
      date: t('papillon.date'),
      description: t('papillon.description'),
      remote: false
    },
    {
      logo: "/exp-stst.jpg",
      title: t('strella.title'),
      company: t('strella.company'),
      location: t('strella.location'),
      date: t('strella.date'),
      description: t('strella.description'),
      remote: true
    },
    {
      logo: "/exp-cozy.jpg",
      title: t('cozy.title'),
      company: t('cozy.company'),
      location: t('cozy.location'),
      date: t('cozy.date'),
      description: t('cozy.description'),
      remote: true
    },
  ];

  return (
    <div className="w-full pt-24 flex flex-col gap-10 px-4 md:px-6 lg:px-0">
      <h2 className="text-4xl lg:text-5xl font-light">{t('title')}</h2>

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