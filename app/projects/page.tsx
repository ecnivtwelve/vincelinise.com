import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";
import { getAllProjects } from "@/lib/projects";
import type { Metadata } from 'next'
import Image from "next/image";
import Link from "next/link";
import GridIcon from "../components/Icons/Grid";

export const metadata: Metadata = {
  title: 'Vince Linise - Mes projets',
}

export default function Home() {
  const projects = getAllProjects();

  return (
    <div className="flex flex-col min-h-screen items-center justify-center pt-3 md:pt-5 lg:pt-12 overflow-x-hidden gap-8 pb-4 px-3 md:px-6 lg:px-0">
      <main className="flex min-h-screen min-w-0 w-full max-w-4xl flex-col gap-10 px-6 lg:px-10 pt-12 lg:pt-16 pb-12 lg:pb-16 bg-[#F9FBFF] rounded-2xl lg:rounded-3xl overflow-visible">
        <div className="flex flex-col gap-6 w-full mt-4 lg:mt-0">
          <div className="flex flex-row items-center gap-3 opacity-100">
            <GridIcon fill="var(--foreground)" className="w-8 h-8 md:w-10 md:h-10" />
            <h1 className="text-3xl md:text-4xl tracking-tight font-semibold">Projets</h1>
          </div>

          <p>Je crée beaucoup de choses. Tant de choses que je peux vous montrer aujourd'hui sur ma page de projets. Ici, vous retrouverez tout, du développement au design, en passant par l'expérience utilisateur et le montage vidéo.</p>
        </div>
        
        <div className="flex flex-col gap-6 w-full">
          {projects.map((project) => (
            <div key={project.slug} className="group relative">
              <Link href={`/projects/${project.slug}`} className="flex flex-col md:flex-row gap-6">
                <div className="rounded-xl overflow-hidden relative aspect-video h-31 group-hover:scale-108 transition-transform duration-200">
                  <Image src={project.frontmatter.image} alt="" fill objectFit="cover" className="scale-100 group-hover:scale-103 transition-transform duration-200" />
                </div>
                <div className="flex flex-col gap-2 flex-1 min-w-0 py-1">
                  <div className="flex gap-2 items-center w-full">
                    <Image src={project.frontmatter.icon} alt="" width={20} height={20} className="w-[20px] h-[20px]" />
                    <p className="font-semibold flex-1 truncate text-sm md:text-base">{project.frontmatter.project}</p>
                    <p className="font-regular opacity-60 truncate max-w-[50%] text-sm md:text-base">{new Date(project.frontmatter.date).toLocaleDateString('fr-FR', {
                      year: "numeric",
                      month: "long",
                    })}</p>
                  </div>
                  <h2 className="font-semibold text-md md:text-xl tracking-tight leading-tight">{project.frontmatter.title}</h2>
                  <p className="font-regular opacity-60 text-sm md:text-base">{project.frontmatter.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
