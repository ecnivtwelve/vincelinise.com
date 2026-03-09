'use client'
import clsx from "clsx";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import LinkedInIcon from "../Icons/LinkedIn";
import HomeIcon from "../Icons/Home";
import GitHubIcon from "../Icons/GitHub";
import NewspaperIcon from "../Icons/Newspaper";
import GridIcon from "../Icons/Grid";
import { useMotionValueEvent, useScroll } from 'motion/react';

const Navigation = () => {
  const currentPath = usePathname();
  const { scrollY } = useScroll();
  const [hasScrolled, setHasScrolled] = React.useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setHasScrolled(latest > 10);
  });

  const nav = [
    {
      title: "Accueil",
      href: "/",
      icon: HomeIcon
    },
    {
      title: "Projets",
      href: "/projects",
      icon: GridIcon,
      sub: true
    },
    {
      title: "Articles",
      href: "/articles",
      icon: NewspaperIcon,
      sub: true
    }
  ]

  return (
    <div className="w-full flex items-center justify-center">
      <nav className={clsx("fixed top-1 md:top-2 flex flex-row md:gap-1 bg-white rounded-full px-1 py-1.5 h-12 -mb-12 md:-mb-14 z-10 transition-all ease-(--bezier-jiggle) duration-270", hasScrolled ? "shadow-xl/15 lg:top-3" : "shadow-lg lg:top-6 md:h-14 lg:px-1.5")}>
        <div className={clsx("transition-all ease-(--bezier-jiggle) duration-270 flex items-center gap-2 p-1", hasScrolled ? "lg:w-39" : "w-fit lg:w-42")}>
          <Link href="/" className="flex items-center gap-3">
            <Image src="/me.jpg" alt="" width={128} height={128} className="rounded-full min-w-9 w-9 aspect-square" />
            <p className="font-bold leading-tight text-md hidden lg:block">Vince Linise</p>
          </Link>
        </div>

        {nav.map((item) => (
          <Link key={item.title} href={item.href}
          onClick={(e) => {
            if(currentPath == item.href) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
            className={clsx("font-medium text-md leading-tight px-3.5 h-full flex items-center justify-center gap-1.5 rounded-full cursor-pointer transition-all active:scale-90 hover:scale-105",
              (item.sub ? currentPath.startsWith(item.href) : item.href === currentPath) ? "bg-[#26214D12]" : "hover:bg-[#26214D12] opacity-60", hasScrolled ? "" : "lg:px-5 lg:gap-2" 
            )}
          >
            <item.icon fill="var(--foreground)" className="w-6 h-6" />
            <p className="text-sm md:text-base"> {item.title}</p>
          </Link>
        ))}

        <div className={clsx("w-22 transition-all ease-(--bezier-jiggle) duration-270 items-center justify-end gap-4 p-1 px-4 hidden md:flex", hasScrolled ? "" : "lg:w-42")}>
          <a href="https://github.com/ecnivtwelve" target="_blank" className="opacity-60 hover:opacity-100 transition-all ease-(--bezier-jiggle) duration-270">
            <GitHubIcon fill="var(--foreground)" className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/vincelinise/" target="_blank" className="opacity-60 hover:opacity-100 transition-all ease-(--bezier-jiggle) duration-270">
            <LinkedInIcon fill="var(--foreground)" className="w-6 h-6" />
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
