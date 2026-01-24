'use client';

import React from "react";

import ArchiveIcon from "../Icons/Archive";
import GitHubBlueIcon from "../Icons/GitHubBlue";
import LinkedInBlueIcon from "../Icons/LinkedinBlue";
import MailIcon from "../Icons/Mail";
import VinceLiniseSVG from "./VinceLinise";
import { useTranslations } from 'next-intl';

interface FooterProps {
  backgroundColor?: string;
}

export default function Footer({ backgroundColor = "var(--background)" }: FooterProps) {
  const t = useTranslations('footer');

  return (
    <footer className="w-full bg-[#26214D] text-white mh-12 min-w-0  w-full max-w-4xl rounded-2xl lg:rounded-3xl p-10 lg:p-20 gap-10 flex flex-col overflow-hidden">
      <p className="text-white text-4xl lg:text-5xl font-light">{t('title')} <span className="text-[#A3C7FF]">{t('titleHighlight')}</span> ?</p>

      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 max-w-160">
        <a href="mailto:contact@vincelinise.com" className="flex gap-3 items-center hover:text-[#A3C7FF]">
          <MailIcon />
          <p className="font-medium">{t('email')}</p>
        </a>

        <a href="/assets/cv_vince_linise.pdf" target="_blank" className="flex gap-3 items-center hover:text-[#A3C7FF]">
          <ArchiveIcon />
          <p className="font-medium">{t('downloadCV')}</p>
        </a>

        <a href="https://www.linkedin.com/in/vincelinise/" target="_blank" className="flex gap-3 items-center hover:text-[#A3C7FF]">
          <LinkedInBlueIcon />
          <p className="font-medium">{t('linkedin')}</p>
        </a>

        <a href="https://github.com/ecnivtwelve" target="_blank" className="flex gap-3 items-center hover:text-[#A3C7FF]">
          <GitHubBlueIcon />
          <p className="font-medium">{t('github')}</p>
        </a>
      </div>

      <p className="opacity-60 text-sm">{t('copyright')}</p>

      <div className="w-full flex justify-center -mb-30">
        <div className="w-[1136px]">
          <VinceLiniseSVG fill={backgroundColor} />
        </div>
      </div>
    </footer>
  );
}