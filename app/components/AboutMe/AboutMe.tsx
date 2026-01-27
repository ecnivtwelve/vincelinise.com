import React from "react";
import Picture from "../Picture/Picture";
import Highlight from "../Highlight/Highlight";

const AboutMe = () => {
  const containerClass = "flex flex-col md:flex-row items-center justify-center gap-16 md:gap-6 lg:gap-12 px-6 md:px-0"
  const textContainerClass = "w-full flex flex-col items-start justify-start gap-6"

  return (
    <div className="w-full my-12 flex flex-col gap-12 md:gap-24 relative">
      <div className={containerClass}>
        <div className={textContainerClass}>
          <h2 className="text-3xl md:text-4xl font-semibold"><Highlight>À propos</Highlight> de moi</h2>
          <p className="opacity-80 text-md lg:text-lg">
            Je m’appelle Vince Linise et j’ai 18 ans. Pour faire court, mon aventure a commencé le jour où j’ai reçu mon premier ordinateur.<br />
            <br />
            Ce qui n'était qu'un cadeau est devenu une révélation : j’adore tout ce que cet outil me permet d’explorer, de créer et de vivre, et je souhaite en faire mon métier. C’est pour ça que j’ai fait le choix d’étudier en BUT MMI à l'IUT de Lannion.
          </p>
        </div>

        <div className="lg:mr-[-120px] hidden md:block">
          <Picture
            src="/me-grass.jpg"
            description="C'est moi, ça ! Pendant le tournage du dernier Papillon Event, un webinaire vidéo annuel présentant les nouveautés de mon application"
            width={24}
          />
        </div>
      </div>

      <div className={containerClass}>
        <div className="lg:ml-[-120px]">
          <Picture
            src="/me-couch.jpg"
            description="Bon, c’est clairement une mise en scène, mais ça illustre plutôt bien quand j’étais en train de bosser sur Papillon v8 pendant l’été 2025"
            width={24}
            rotate={-3}
            invert
          />
        </div>

        <div className={textContainerClass}>
          <h2 className="text-3xl lg:text-4xl font-semibold"><Highlight>Mes projets</Highlight> et travaux</h2>
          <p className="opacity-80 text-md lg:text-lg">
            Passionné par l'open-source, je consacre une grande partie de mon énergie à l'association Papillon. En tant que président et développeur, je pilote depuis 4 ans une application mobile qui accompagne aujourd'hui des milliers d'étudiants dans leur quotidien.
            <br />
            <br />
            Côté technique, je jongle entre React, JavaScript, Figma et les double expresso (avec un sucre, de préférence) pour concevoir des expériences web et mobiles mémorables et agréables à utiliser.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
