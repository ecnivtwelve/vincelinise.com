import React from "react";

import ArchiveIcon from "../Icons/Archive";
import GitHubBlueIcon from "../Icons/GitHubBlue";
import LinkedInBlueIcon from "../Icons/LinkedinBlue";
import MailIcon from "../Icons/Mail";
import VinceLiniseSVG from "./VinceLinise";

interface FooterProps {
  backgroundColor?: string;
}

export default function Footer({ backgroundColor = "var(--background)" }: FooterProps) {
  return (
    <footer className="w-full bg-[#26214D] text-white mh-12 min-w-0  w-full max-w-4xl rounded-2xl lg:rounded-3xl p-10 lg:p-20 gap-10 flex flex-col overflow-hidden">
      <p className="text-white text-4xl lg:text-5xl font-light">Besoin d’échanger autour d’un café ou d’un <span className="text-[#A3C7FF]">kouign-amann</span> ?</p>

      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 max-w-160">
        <a href="mailto:contact@vincelinise.com" className="flex gap-3 items-center hover:text-[#A3C7FF]">
          <MailIcon />
          <p className="font-medium">contact@vincelinise.com</p>
        </a>

        <a href="/assets/cv_vince_linise.pdf" target="_blank" className="flex gap-3 items-center hover:text-[#A3C7FF]">
          <ArchiveIcon />
          <p className="font-medium">Télécharger mon CV</p>
        </a>

        <a href="https://www.linkedin.com/in/vincelinise/" target="_blank" className="flex gap-3 items-center hover:text-[#A3C7FF]">
          <LinkedInBlueIcon />
          <p className="font-medium">LinkedIn</p>
        </a>

        <a href="https://github.com/ecnivtwelve" target="_blank" className="flex gap-3 items-center hover:text-[#A3C7FF]">
          <GitHubBlueIcon />
          <p className="font-medium">GitHub</p>
        </a>
      </div>

      <p className="opacity-60 text-sm">© 2026 Vince Linise — Tous droits réservés</p>

      <div className="w-full flex justify-center -mb-30">
        <div className="w-[1136px]">
          <VinceLiniseSVG fill={backgroundColor} />
        </div>
      </div>
    </footer>
  );
}