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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center pt-3 md:pt-5 lg:pt-12 overflow-x-hidden gap-8 pb-4 px-3 md:px-6 lg:px-0">
      <Navigation />

      <main className="flex min-h-screen min-w-0 w-full max-w-4xl flex-col items-center justify-between p-3 md:p-6 lg:p-16 pb-12 lg:pb-16 bg-[#F9FBFF] rounded-2xl lg:rounded-3xl overflow-visible">
        <Hero />
        <Projects />
        <Skills />
        <AboutMe />
        <Map />
        <Formation />
        <Experience />
        <Papillon />
        <SoftSkills />
      </main>

      <Footer />
    </div>
  );
}
