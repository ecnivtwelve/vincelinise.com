import User from "./User";


export default function Hero() {
  return (
    <div className="items-center justify-center flex flex-col gap-5 max-w-2xl">

      <User />

      <h1 className="text-3xl md:text-[2.5rem] tracking-[-0.01em] leading-[2.5rem] md:leading-[2.9rem] text-center mt-[-10px]">
        Enchanté, moi c&apos;est <span className="vl-highlight">Vince Linise</span> ,<br />
        étudiant <span className="vl-highlight vl-light">MMI</span> & développeur
      </h1>

      <p className="text-center">
        J&apos;étudie actuellement en seconde année de <a href="https://formations.univ-rennes.fr/mention/bachelor-universitaire-de-technologie-mention-metiers-du-multimedia-et-de-linternet">BUT MMI</a> (métiers du multimédia et de l&apos;Internet) à l&apos;<a href="https://iut-lannion.univ-rennes.fr/">IUT de Lannion</a> (en Bretagne) et je développe des applications Web et mobile en parallèle. Je fais également de la conception d&apos;interface et du motion design.
      </p>

    </div>
  );
}
