'use client';

import React from "react";
import Footer from "@/app/components/Footer/Footer";
import Navigation from "@/app/components/Navigation/Navigation";
import ProjectHeader from "@/app/components/Project/ProjectHeader";
import { useLocaleContext } from "@/app/components/LocaleProvider";

import type { ProjectData } from "@/lib/projects";

interface ProjectVersion {
  frontmatter: ProjectData['frontmatter'];
  content: React.ReactNode;
}

interface ProjectClientWrapperProps {
  fr: ProjectVersion;
  en: ProjectVersion;
}

export default function ProjectClientWrapper({ fr, en }: ProjectClientWrapperProps) {
  const { locale } = useLocaleContext();

  // Select the correct project version based on locale
  // Fallback to FR if EN is somehow missing (though server should handle this logic too)
  const activeProject = locale === 'en' ? en : fr;
  // If EN content is same as FR content (fallback happened on server), it just works.

  const { title, date, tags, image, logo, accentColor, backgroundColor, paperColor } = activeProject.frontmatter;

  return (
    <div className="flex flex-col min-h-screen items-center justify-center pt-3 md:pt-5 lg:pt-12 overflow-x-hidden gap-8 pb-4 px-3 md:px-6 lg:px-0" style={{ backgroundColor: backgroundColor }}>
      <Navigation />

      <div
        className="w-full h-full fixed top-0 left-0 z-0 opacity-50"
        style={{
          background: `linear-gradient(180deg, ${accentColor} 0%, ${backgroundColor} 40%)`,
        }}
      ></div>

      <main className="flex min-h-screen min-w-0 w-full max-w-4xl flex-col bg-[#F9FBFF] rounded-2xl lg:rounded-3xl overflow-hidden z-1" style={{ backgroundColor: paperColor }}>
        <ProjectHeader image={image} logo={logo} title={title} accentColor={accentColor} />

        <div className="flex flex-row w-full items-center justify-center gap-2 mt-6 flex-wrap">
          <span className="px-3 py-1.5 bg-neutral-200 border border-neutral-200 rounded-full text-sm font-semibold">
            {new Date(date).toLocaleDateString(locale === 'fr' ? "fr-FR" : "en-US", {
              year: "numeric",
              month: "long",
            })}
          </span>
          {tags.map((tag: string) => (
            <span key={tag} className="px-3 py-1.5 border border-neutral-300 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>

        <div className="prose prose-lg prose-blue max-w-none p-6 lg:p-12">
          {activeProject.content}
        </div>

        <style>{`
        :root {
          --accent-color: ${accentColor || '#3B82F6'};
        }
        .prose a {
          color: var(--accent-color);
          text-decoration: none;
          text-underline-offset: 3px;
        }
        .prose a:hover {
          text-decoration: underline;
        }
      `}</style>
      </main>

      <div className="z-2 w-full flex items-center justify-center">
        <Footer backgroundColor={backgroundColor} />
      </div>
    </div>
  );
}
