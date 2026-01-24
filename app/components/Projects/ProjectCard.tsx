import React from "react";
import Image from "next/image";

const ProjectCard = ({
  icon,
  banner,
  name,
  title,
  type,
  info,
  href = "#",
}: {
  icon: string;
  banner: string;
  name: string;
  title: string;
  type: string;
  info: string;
  href: string;
}) => {
  return (
    <a href={href} className="card flex flex-row lg:flex-col  bg-white rounded-xl shadow-md w-full border border-neutral-300 hover:border-neutral-400 hover:shadow-lg hover:transform-[translateY(-5px)] transition-all active:scale-95">
      <div className="rounded-l-xl lg:rounded-bl-none lg:rounded-t-xl overflow-hidden min-w-24 md:min-w-0 md:w-full max-w-[30%] lg:max-w-full lg:w-full lg:h-38 relative">
        <Image src={banner} alt="" fill objectFit="cover" />
      </div>
      <div className="p-4 flex flex-col gap-2 flex-1 min-w-0">
        <div className="flex gap-2 items-center w-full">
          <Image src={icon} alt="" width={20} height={20} className="w-[20px] h-[20px]" />
          <p className="font-semibold flex-1 truncate text-sm md:text-base">{name}</p>
          <p className="font-regular opacity-60 truncate max-w-[50%] text-sm md:text-base">{type}</p>
        </div>
        <h3 className="font-semibold text-md md:text-[1.2rem] md:leading-[1.5rem]">{title}</h3>
        <p className="font-regular opacity-60 text-sm md:text-base">{info}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
