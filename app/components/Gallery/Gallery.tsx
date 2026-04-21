'use client';
import Image from "next/image";
import React from "react";
import LightGalleryWrapper from "./LightGalleryWrapper";
import { motion } from "framer-motion";

const Gallery: React.FC = () => {
  return (
    <LightGalleryWrapper className="w-full lg:w-[136%] max-w-[calc(100vw-20px)] my-8 grid grid-cols-2 lg:grid-cols-3 gap-3">
      <GalleryImage index={0} className="h-full" src="/design-papillon-high.jpg" alt="Interface de l'application Papillon" />
      <div className="w-full flex flex-col gap-3">
        <GalleryImage index={1} className="aspect-[4/3]" src="/design-oklou.jpg" alt="Lecteur de musique style Frutiger Aero" />
        <GalleryImage index={4} className="aspect-[4/3]" src="/design-assignments.jpg" alt="Interface d'un projet de gestion de tâches" />
      </div>
      <div className="w-full flex flex-row gap-3 lg:flex-col lg:col-span-1 col-span-full">
        <GalleryImage index={3} className="aspect-[4/3]" src="/design-flix.jpg" alt="Réimagination de l'expérience mobile FlixBus" />
        <GalleryImage index={2} className="aspect-[4/3]" src="/design-metro.jpg" alt="Carte des transpports ferroviaires de Rennes" />
      </div>
    </LightGalleryWrapper>
  );
};

const GalleryImage = ({ src, alt, className, index }: { src: string; alt: string; className?: string; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.1 + index * 0.06, duration: 0.7, type: 'spring' }}
      className="block w-full"
    >
      <a
        href={src}
        data-lg-item
        className={`block w-full rounded-2xl relative border border-neutral-300 shadow-lg overflow-hidden ${className || ""} hover:shadow-xl hover:-translate-y-1 hover:border-neutral-400 transition-all duration-130`}
      >
        <Image className="object-cover hover:scale-102 transition-all duration-130" fill src={src} alt={alt} />
      </a>
    </motion.div>
  );
};

export default Gallery;
