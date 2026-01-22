'use client'
import clsx from "clsx";
import { usePathname } from "next/navigation";
import React from "react";

const Navigation = () => {
  const nav = [
    {
      title: "Accueil",
      href: "/"
    },
    {
      title: "Projets",
      href: "/projects"
    }
  ]

  const currentPath = usePathname();

  return (
    <nav className="flex flex-row gap-1 bg-white shadow-lg rounded-full p-1 h-14 -mb-14 z-10">
      {nav.map((item) => (
        <a key={item.title} href={item.href}
          className={clsx("font-medium text-lg px-6 h-full flex items-center justify-center rounded-full transition-colors cursor-pointer",
            currentPath === item.href ? "bg-[#26214D12]" : "hover:bg-[#26214D12]"
          )}
        >
          {item.title}
        </a>
      ))}
    </nav>
  )
}

export default Navigation
