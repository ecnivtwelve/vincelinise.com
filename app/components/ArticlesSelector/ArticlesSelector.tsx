import React from "react";
import Link from "next/link";
import clsx from "clsx";
import GridIcon from "../Icons/Grid";
import NewspaperIcon from "../Icons/Newspaper";

const ArticlesSelector = ({ selected }) => {
  const selection = [
    {
      label: "Projets",
      href: "/projects",
      icon: GridIcon
    },
    {
      label: "Articles",
      href: "/articles",
      icon: NewspaperIcon
    }
  ]

  return (
    <div className="flex flex-row gap-6 items-center">
      {selection.map((item) => (
        <Link key={item.href} href={item.href} className={clsx("flex flex-row items-center gap-2 opacity-50 hover:opacity-100", item.href === selected && "opacity-100")}>
          <item.icon width={32} height={32} className="" />
          <h1 className={clsx("font-light text-3xl tracking-tight", item.href === selected && "font-semibold")}>{item.label}</h1>
        </Link>
      ))}
    </div>
  )
}

export default ArticlesSelector;