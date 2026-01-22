import React from "react";
import Brittany from "./Brittany";
import Highlight from "../Highlight/Highlight";
import Picture from "../Picture/Picture";

const Map = () => {
  return (
    <div className="flex flex-col w-full -mt-12 relative overflow-hidden md:overflow-visible">
      <Brittany />

      <div className="absolute top-40 -left-45 hidden lg:block">
        <Picture
          src="/me-ter.jpg"
          description="Ça fait un bout de chemin tous les week-ends !"
          invert
        />
      </div>

      <div className="w-[80%] lg:w-[57%] ml-8 lg:ml-0 -mt-16 md:-mt-32 lg:-mt-64 flex flex-col items-start justify-start gap-6">
        <h2 className="text-4xl lg:text-5xl font-semibold"><Highlight>Kenavo !</Highlight></h2>
        <p className="opacity-80 text-md lg:text-lg">
          Pour être honnête, je ne parle pas un mot de breton, et on m’a raconté que ça ne veut pas dire “Bonjour” mais “au revoir” (et c’est dommage, car ça serait sympa de se revoir sur mon <a className="link" href="https://www.linkedin.com/in/vincelinise/" target="_blank" rel="noopener noreferrer">LinkedIn</a>).<br />
          <br />
          Bref, je suis breton et je vis ici depuis ma naissance !
        </p>
      </div>
    </div>
  );
};


export default Map;
