import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";
import { getAllArticles } from "@/lib/articles";
import type { Metadata } from 'next'
import Image from "next/image";
import Link from "next/link";
import ArticlesSelector from "../components/ArticlesSelector/ArticlesSelector";

export const metadata: Metadata = {
  title: 'Vince Linise - Mes articles',
}

export default function Home() {
  const articles = getAllArticles();

  return (
    <div className="flex flex-col min-h-screen items-center justify-center pt-3 md:pt-5 lg:pt-12 overflow-x-hidden gap-8 pb-4 px-3 md:px-6 lg:px-0">
      <Navigation />

      <main className="flex min-h-screen min-w-0 w-full max-w-4xl flex-col gap-10 px-6 lg:px-10 pt-12 lg:pt-16 pb-12 lg:pb-16 bg-[#F9FBFF] rounded-2xl lg:rounded-3xl overflow-visible">
        <div className="flex flex-col gap-6 w-full">
          <ArticlesSelector selected="/articles" />

          <p>Si un jour j'ai envie d'écrire quelque chose, et bien je pourrais le faire juste ici. Cependant si vous, de vous côté, vous avez du temps à perdre, vous pouvez le perdre juste ici.</p>
        </div>

        <div className="flex flex-col gap-6 w-full">
          {articles.map((project) => (
            <Link key={project.slug} href={`/articles/${project.slug}`}>
              <div className="flex flex-row gap-4">
                <p className="opacity-60">{new Date(project.frontmatter.date).toLocaleDateString('fr-FR', {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}</p>
                <p className="font-semibold link-hidden">{project.frontmatter.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
