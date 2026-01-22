'use client';

import clsx from "clsx";
import React from "react";

import { motion, useScroll, useTransform } from "motion/react"

const Highlight = ({ children, className, delay }: { children: React.ReactNode, className?: string, delay?: number }) => {
  return (
    <motion.span
      initial={{ scale: 1.3, opacity: 0 }}
      viewport={{ amount: 0.5, margin: "-10%", once: true }}
      whileInView={{ scale: 1.07, rotate: -1, translateY: -2, opacity: 1 }}
      transition={{ duration: 0.9, type: "spring", bounce: 0.5, delay }}
      className={clsx("vl-highlight", className)}
    >
      {children}
    </motion.span>
  );
};

export default Highlight;
