'use client';

import Image from "next/image";
import React from "react";
import { motion } from 'motion/react';

const ExperienceItem = ({
  logo,
  title,
  company,
  location,
  date,
  description,
  remote,
  delay
}: {
  logo?: string;
  title?: string;
  company?: string;
  location?: string;
  date?: string;
  description?: string;
  remote?: boolean;
  delay?: number;
}) => {
  return (
    <motion.div
      className="flex flex-row gap-4"
      initial={{ scale: 0.95, y: 50, opacity: 0 }}
      whileInView={{ scale: 1, y: 0, opacity: 1 }}
      transition={{ type: 'spring', duration: 0.9, delay }}
    >
      {logo &&
        <Image src={logo} alt="" width={56} height={56} className="w-[56px] h-[56px] rounded-lg border border-neutral-300 shadow-sm" />
      }

      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-md">{company}<span className="opacity-60">{remote ? ", à distance de " : ", "}</span>{location}</p>
        <p className="opacity-60">{date}</p>
        <p className="mt-3">
          {description}
        </p>
      </div>
    </motion.div>
  )
}

export default ExperienceItem;