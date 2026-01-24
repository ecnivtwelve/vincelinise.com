'use client';

import React from "react";
import Brittany from "./Brittany";
import Highlight from "../Highlight/Highlight";
import Picture from "../Picture/Picture";
import { useTranslations } from 'next-intl';

const Map = () => {
  const t = useTranslations('map');

  return (
    <div className="flex flex-col w-full -mt-12 relative overflow-hidden md:overflow-visible">
      <Brittany />

      <div className="absolute top-40 -left-45 hidden lg:block">
        <Picture
          src="/me-ter.jpg"
          description={t('picture')}
          invert
        />
      </div>

      <div className="w-[80%] lg:w-[57%] ml-8 lg:ml-0 -mt-16 md:-mt-32 lg:-mt-64 flex flex-col items-start justify-start gap-6">
        <h2 className="text-4xl lg:text-5xl font-semibold"><Highlight>{t('title')}</Highlight></h2>
        <p className="opacity-80 text-md lg:text-lg">
          {t.rich('description', {
            a: (chunks) => <a className="link" href="https://www.linkedin.com/in/vincelinise/" target="_blank" rel="noopener noreferrer">{chunks}</a>,
            linkedIn: () => t('linkedIn')
          })}<br />
          <br />
          {t('description2')}
        </p>
      </div>
    </div>
  );
};


export default Map;
