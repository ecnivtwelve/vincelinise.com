import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";
import { getAllProjects } from "@/lib/projects";
import ProjectCard from "../components/Projects/ProjectCard";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vince Linise - Mes projets',
}

export default function Home() {
  const projects = getAllProjects();

  return (
    <div className="flex flex-col min-h-screen items-center justify-center pt-3 md:pt-5 lg:pt-12 overflow-x-hidden gap-8 pb-4 px-3 md:px-6 lg:px-0">
      <Navigation />

      <main className="flex min-h-screen min-w-0 w-full max-w-4xl flex-col gap-10 px-3 md:px-6 lg:px-10 pt-12 lg:pt-16 pb-12 lg:pb-16 bg-[#F9FBFF] rounded-2xl lg:rounded-3xl overflow-visible">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {projects.map((project) => (
            <div key={project.slug} className="group relative">
              <ProjectCard
                href={`/projects/${project.slug}`}
                icon={project.frontmatter.icon}
                banner={project.frontmatter.image}
                name={project.frontmatter.project} // ProjectCard uses name for the small title
                title={project.frontmatter.title} // Using description as the main title/info
                type={project.frontmatter.tags[0] || "Projet"}
                info={project.frontmatter.description}
              />
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
