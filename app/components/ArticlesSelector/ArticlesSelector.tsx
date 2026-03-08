import React from "react";
import Link from "next/link";
import clsx from "clsx";

const ArticlesSelector = ({ selected }) => {
  const selection = [
    {
      label: "Projets",
      href: "/projects"
    },
    {
      label: "Articles",
      href: "/articles"
    }
  ]

  return (
    <div className="flex flex-row gap-6 items-center">
      {selection.map((item) => (
        <Link key={item.href} href={item.href}>
          <h1 className={clsx("font-light text-3xl opacity-50 tracking-tight hover:opacity-100", item.href === selected && "font-semibold opacity-100")}>{item.label}</h1>
        </Link>
      ))}
    </div>
  )
}

export default ArticlesSelector;