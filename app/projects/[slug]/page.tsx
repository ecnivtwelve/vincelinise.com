import React from "react";
import { notFound } from "next/navigation";
import { getProjectBySlug, getProjectSlugs } from "@/lib/projects";
import { MDXRemote } from "next-mdx-remote/rsc";
import ProjectClientWrapper from "@/app/components/Project/ProjectClientWrapper";

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
    const project = getProjectBySlug(slug, 'fr'); // Default to French for metadata
    return {
      title: `${project.frontmatter.title} - Portfolio de Vince Linise`,
      description: project.frontmatter.description,
    };
  } catch (_) {
    return {
      title: "Projet non trouvé",
    };
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  let frProject, enProject;

  try {
    // Fetch both versions on the server
    frProject = getProjectBySlug(slug, 'fr');
    enProject = getProjectBySlug(slug, 'en');
  } catch (_) {
    notFound();
  }

  // Pre-render MDX content on the server
  const frContent = <MDXRemote source={frProject.content} />;
  const enContent = <MDXRemote source={enProject.content} />;

  return (
    <ProjectClientWrapper
      fr={{
        frontmatter: frProject.frontmatter,
        content: frContent
      }}
      en={{
        frontmatter: enProject.frontmatter,
        content: enContent
      }}
    />
  );
}
