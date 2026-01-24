import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProjectBySlug, getProjectSlugs } from "@/lib/projects";
import { MDXRemote } from "next-mdx-remote/rsc";
import Footer from "@/app/components/Footer/Footer";
import Navigation from "@/app/components/Navigation/Navigation";
import ProjectHeader from "@/app/components/Project/ProjectHeader";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ""),
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  try {
    const project = getProjectBySlug(slug);
    return {
      title: `${project.frontmatter.project} - Portfolio de Vince Linise`,
      description: project.frontmatter.description,
    };
  } catch (e) {
    return {
      title: "Projet non trouvé",
    };
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  let project;
  try {
    project = getProjectBySlug(slug);
  } catch (e) {
    notFound();
  }

  const { title, description, date, tags, image, logo, accentColor, backgroundColor, paperColor } = project.frontmatter;

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
            {new Date(date).toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "long",
            })}
          </span>
          {tags.map((tag) => (
            <span key={tag} className="px-3 py-1.5 border border-neutral-300 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>

        <div className="prose prose-lg prose-blue max-w-none p-6 lg:p-12">
          <MDXRemote source={project.content} />
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
