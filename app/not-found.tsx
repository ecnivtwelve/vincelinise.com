import AboutMe from "./components/AboutMe/AboutMe";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Map from "./components/Map/Map";
import Formation from "./components/Formation/Formation";
import Experience from "./components/Experience/Experience";
import GhostIcon from "./components/Icons/Ghost";

import Skills from "./components/Skills/Skills";
import SoftSkills from "./components/SoftSkills/SoftSkills";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import Link from "next/link";

function Error() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-start pt-3 md:pt-5 lg:pt-12 overflow-x-hidden gap-8 pb-4 px-3 md:px-6 lg:px-0">
      <main className="flex min-w-0 w-full max-w-4xl flex-col gap-4 p-3 md:p-6 lg:p-16 pb-12 lg:pb-16 bg-white rounded-2xl lg:rounded-3xl overflow-visible">

        <div className="flex flex-col gap-2 items-center justify-center" >
          <GhostIcon fill="var(--foreground)" width={64} height={64} />
          <h1 className="text-4xl font-bold leading-tight w-full text-center">Impossible de trouver cette page</h1>
          <p className="w-full text-md text-center mt-2">La page que vous recherchez n'existe pas ou n'est plus disponible.</p>
          <Link href="/" className="link w-full text-md text-center">← Retour à l'accueil</Link>
        </div>

      </main>

      <Footer />
    </div>
  );
}

export default Error