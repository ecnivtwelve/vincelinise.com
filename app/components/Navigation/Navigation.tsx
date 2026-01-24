'use client'
import clsx from "clsx";
import { usePathname } from "next/navigation";
import React from "react";
import User from "../Hero/User";
import Image from "next/image";
import Link from "next/link";
import LinkedInIcon from "../Icons/LinkedIn";
import HomeIcon from "../Icons/Home";
import PenIcon from "../Icons/Pen";
import GitHubIcon from "../Icons/GitHub";

const Navigation = () => {
  const nav = [
    {
      title: "Accueil",
      href: "/",
      icon: HomeIcon
    },
    {
      title: "Projets",
      href: "/projects",
      icon: PenIcon
    }
  ]

  const currentPath = usePathname();
  const browsingProjects = currentPath.startsWith("/projects/");

  return (
    <nav className="flex flex-row gap-1 bg-white shadow-lg rounded-full p-1.5 h-12 md:h-14 -mb-12 md:-mb-14 z-10">
      <div className="w-fit lg:w-56 flex items-center gap-2 p-1">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/me.jpg" alt="" width={128} height={128} className="rounded-full min-w-9 w-9 aspect-square" />
          <p className="font-semibold text-md hidden lg:block">Vince Linise</p>
        </Link>
      </div>

      {nav.map((item) => (
        <Link key={item.title} href={item.href}
          className={clsx("font-medium text-md px-4 lg:px-6 h-full flex items-center justify-center gap-2 rounded-full cursor-pointer transition-all active:scale-90 hover:scale-105",
            currentPath === item.href || (item.href === "/projects" && browsingProjects) ? "bg-[#26214D12]" : "hover:bg-[#26214D12] opacity-60"
          )}
        >
          <item.icon className="w-6 h-6" />
          {item.title}
        </Link>
      ))}

      <div className="w-full lg:w-56 items-center justify-end gap-4 p-1 px-4 hidden md:flex">
        <a href="https://github.com/ecnivtwelve" target="_blank" className="opacity-60 hover:opacity-100 transition-all">
          <GitHubIcon className="w-6 h-6" />
        </a>
        <a href="https://www.linkedin.com/in/vincelinise/" target="_blank" className="opacity-60 hover:opacity-100 transition-all">
          <LinkedInIcon className="w-6 h-6" />
        </a>
      </div>
    </nav>
  )
}

export default Navigation
