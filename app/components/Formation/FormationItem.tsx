'use client';

import Image from "next/image";
import React from "react";
import { motion } from 'motion/react';

const FormationItem = ({
  icon,
  year,
  establishment,
  city,
  title,
  subtitle,
  specificity,
  description,
  delay
}: {
  icon: string,
  year: string,
  establishment: string,
  city: string,
  title: string,
  subtitle: string,
  specificity: string,
  description: string,
  delay?: number
}) => {
  return (
    <motion.div
      className="w-full flex flex-col gap-2"
      initial={{ scale: 0.95, y: 50, opacity: 0 }}
      whileInView={{ scale: 1, y: 0, opacity: 1 }}
      transition={{ type: 'spring', duration: 0.9, delay }}
    >
      <div className="px-2 py-0.5 border border-neutral-400 rounded-full w-fit mb-1">
        <p className="text-sm font-medium">{year}</p>
      </div>
      <div className="flex gap-2 items-center w-full">
        <Image src={icon} alt="" width={20} height={20} className="w-[20px] h-[20px]" />
        <p className="font-semibold flex-1 truncate">{establishment}</p>
        <p className="font-regular opacity-60 truncate">{city}</p>
      </div>
      <p className="text-lg font-semibold">
        {title}
      </p>
      <p className="text-sm opacity-60">
        {subtitle}<br />
        {specificity}
      </p>
      <p className="text-md">
        {description}
      </p>
    </motion.div>
  )
}

export default FormationItem;