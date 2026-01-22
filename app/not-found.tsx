import AboutMe from "./components/AboutMe/AboutMe";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Map from "./components/Map/Map";
import Formation from "./components/Formation/Formation";
import Experience from "./components/Experience/Experience";
import Papillon from "./components/Papillon/Papillon";
import Skills from "./components/Skills/Skills";
import SoftSkills from "./SoftSkills/SoftSkills";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import Link from "next/link";

function Error() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center pt-3 md:pt-5 lg:pt-12 overflow-x-hidden gap-8 pb-4 px-3 md:px-6 lg:px-0">
      <Navigation />

      <main className="flex min-h-screen min-w-0 w-full max-w-4xl flex-col gap-4 p-3 md:p-6 lg:p-16 pb-12 lg:pb-16 bg-[#F9FBFF] rounded-2xl lg:rounded-3xl overflow-visible">
        <h1 className="text-6xl font-light w-full text-center">🔍</h1>
        <h1 className="text-4xl font-light w-full text-center">Page introuvable</h1>
        <p className="w-full text-md text-center">La page que vous recherchez n'existe pas ou n'est plus disponible.</p>
        <Link href="/" className="link w-full text-md text-center">Retour à l'accueil</Link>
      </main>

      <Footer />
    </div>
  );
}

export default Error