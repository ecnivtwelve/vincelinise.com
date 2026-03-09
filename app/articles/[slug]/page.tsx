import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProjectBySlug, getProjectSlugs } from "@/lib/projects";
import { MDXRemote } from "next-mdx-remote/rsc";
import Footer from "@/app/components/Footer/Footer";
import Navigation from "@/app/components/Navigation/Navigation";
import ProjectHeader from "@/app/components/Project/ProjectHeader";
import toolsList from "./tools.json";
import { getArticleBySlug, getArticlesSlugs } from "@/lib/articles";
import Link from "next/link";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getArticlesSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ""),
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  try {
    const project = getArticleBySlug(slug);
    return {
      title: `${project.frontmatter.title} - Portfolio de Vince Linise`,
      description: project.frontmatter.description,
    };
  } catch (e) {
    return {
      title: "Article non trouvé",
    };
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  let project;
  try {
    project = getArticleBySlug(slug);
  } catch (e) {
    notFound();
  }

  const { title, description, date, tags } = project.frontmatter;

  return (
    <div className="flex flex-col min-h-screen items-center justify-center pt-3 md:pt-5 lg:pt-12 overflow-x-hidden gap-8 pb-4 px-3 md:px-6 lg:px-0">
      <main className="flex min-h-screen min-w-0 w-full max-w-4xl flex-col gap-10 px-6 lg:px-10 pt-12 lg:pt-16 pb-12 lg:pb-16 bg-[#F9FBFF] rounded-2xl lg:rounded-3xl overflow-visible">
        <div className="flex flex-col gap-4 w-full">
          <Link href="/articles" className="link">← Retour aux articles</Link>
          <h1 className="text-4xl leading-tight font-bold">{title}</h1>

          <div className="flex flex-row w-full items-start justify-start gap-2 flex-wrap">
            <span className="px-3 py-1.5 bg-neutral-200 border border-neutral-200 rounded-full text-sm font-semibold">
              {new Date(date).toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
              })}
            </span>
            {tags && tags.map((tag) => (
              <span key={tag} className="px-3 py-1.5 border border-neutral-300 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="prose prose-lg prose-blue max-w-none">
          <MDXRemote source={project.content} />
        </div>

        <style>{`
        :root {
          --accent-color: ${'#3B82F6'};
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
        <Footer />
      </div>
    </div>
  );
}
