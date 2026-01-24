'use client';

import React from "react";
import Picture from "../Picture/Picture";
import Highlight from "../Highlight/Highlight";
import { useTranslations } from 'next-intl';

const AboutMe = () => {
  const t = useTranslations('aboutMe');

  const containerClass = "flex flex-col md:flex-row items-center justify-center gap-16 md:gap-6 lg:gap-12 px-6 md:px-0"
  const textContainerClass = "w-full flex flex-col items-start justify-start gap-6"

  return (
    <div className="w-full my-12 flex flex-col gap-12 md:gap-24 relative">
      <div className={containerClass}>
        <div className={textContainerClass}>
          <h2 className="text-3xl md:text-4xl font-semibold"><Highlight>{t('title1')}</Highlight> {t('title1Highlight')}</h2>
          <p className="opacity-80 text-md lg:text-lg">
            {t('description1')}<br />
            <br />
            {t('description1b')}
          </p>
        </div>

        <div className="lg:mr-[-120px] hidden md:block">
          <Picture
            src="/me-grass.jpg"
            description={t('picture1')}
            width={24}
          />
        </div>
      </div>

      <div className={containerClass}>
        <div className="lg:ml-[-120px]">
          <Picture
            src="/me-couch.jpg"
            description={t('picture2')}
            width={24}
            rotate={-3}
            invert
          />
        </div>

        <div className={textContainerClass}>
          <h2 className="text-3xl lg:text-4xl font-semibold"><Highlight>{t('title2')}</Highlight> {t('title2Highlight')}</h2>
          <p className="opacity-80 text-md lg:text-lg">
            {t('description2')}
            <br />
            <br />
            {t('description2b')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
