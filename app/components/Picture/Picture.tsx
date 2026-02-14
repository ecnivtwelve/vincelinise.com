'use client';

import React, { useRef } from "react";
import Image from "next/image";

import { motion, useScroll, useTransform } from "motion/react"

const Picture = ({ src, description, width = 18, rotate = 3, invert = false }: { src: string; description: string, width?: number, rotate?: number, invert?: boolean }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "60vh end"]
  })

  const x = useTransform(scrollYProgress, [0, 1], [invert ? -300 : 300, 0]);
  const rotateVal = useTransform(scrollYProgress, [0, 1], [invert ? -rotate : rotate * (invert ? -3 : 3), rotate]);
  const opacityVal = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        width: `${width}rem`,
        rotate: rotateVal,
        translateX: x,
        opacity: opacityVal
      }}
      className={`flex flex-col items-center justify-center gap-3 p-4 shadow-md rounded-2xl bg-white border border-neutral-300`}
    >
      <div className="relative w-full aspect-4/3 inset-shadow-sm rounded-sm overflow-hidden">
        <Image fill src={src} alt={""} />
      </div>
      <p className="opacity-80 text-sm">{description}</p>
    </motion.div>
  );
};

export default Picture;
