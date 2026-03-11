import Image from "next/image";
import React from "react";
import LightGalleryWrapper from "./LightGalleryWrapper";

const Gallery: React.FC = () => {
  return (
    <LightGalleryWrapper className="w-full lg:w-[136%] max-w-[calc(100vw-20px)] my-8 grid grid-cols-2 lg:grid-cols-3 gap-3">
      <GalleryImage className="h-full" src="/design-papillon-high.jpg" alt="Interface de l'application papillon" />
      <div className="w-full flex flex-col gap-3">
        <GalleryImage className="aspect-[4/3]" src="/design-oklou.jpg" alt="Lecteur de musique style Frutiger Aero" />
        <GalleryImage className="aspect-[4/3]" src="/design-psup.jpg" alt="Redesign de la tab bar de Parcoursup" />
      </div>
      <div className="w-full flex flex-row gap-3 lg:flex-col lg:col-span-1 col-span-full">
        <GalleryImage className="aspect-[4/3]" src="/design-flix.jpg" alt="Réimagination de l'expérience mobile FlixBus" />
        <GalleryImage className="aspect-[4/3]" src="/design-ctl.jpg" alt="Projet MMI — Interface de Compose ton Logo" />
      </div>
    </LightGalleryWrapper>
  );
};

const GalleryImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  return (
    <a
      href={src}
      data-lg-item
      className={`block w-full rounded-xl relative border border-neutral-300 shadow-lg overflow-hidden ${className || ""} hover:shadow-xl hover:-translate-y-1 hover:border-neutral-400 transition-all duration-130`}
    >
      <Image className="object-cover" fill src={src} alt={alt} />
    </a>
  );
};

export default Gallery;
