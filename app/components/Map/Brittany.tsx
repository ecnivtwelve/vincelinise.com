'use client';

import React from "react";
import { motion } from "motion/react"

const Brittany = () => {
  return (
    <div className="aspect-square relative -mr-16">
      <img src={"/brittany.svg"} alt="" className="w-[full] h-full absolute" />

      <div
        className="absolute left-[37%] top-[24%] flex flex-col gap-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={55}
          height={93}
          fill="none"
          style={{ overflow: "visible" }}
        >
          <motion.rect
            width={20}
            height={20}
            x={4}
            y={4}
            stroke="#0054DB"
            strokeOpacity={0.2}
            strokeWidth={8}
            rx={10}
            animate={{
              scale: [0, 1.5],
              opacity: [1, 1, 0],
            }}
            transition={{ duration: 2, ease: "easeInOut", times: [0, 0.7, 1], repeat: Infinity }}
          />
          <motion.rect
            width={14}
            height={14}
            x={7}
            y={7}
            fill="#0054DB"
            stroke="#fff"
            strokeWidth={2}
            rx={7}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 2, ease: "easeInOut", times: [0, 0.5, 1], repeat: Infinity }}
          />
          <motion.path
            stroke="#26214D"
            strokeLinecap="round"
            strokeWidth={3}
            d="M18.308 38.886c.055.268.254.892.706 2.161.66 1.85 3.369 7.483 7.234 14.967 2.186 4.232 4.55 7.186 7.387 10.58 2.606 3.119 6.577 6.355 10.476 9.58 3.645 2.685 5.876 4.47 6.691 5.181.408.333.803.607 1.75 1.245"
            initial={{ pathOffset: 1, pathLength: 1, opacity: 0 }}
            whileInView={{ pathOffset: 0, opacity: 1 }}
            transition={{
              pathOffset: { duration: 0.3, delay: 0.1 },
              opacity: { duration: 0.01, delay: 0.1 }
            }}
          />
          <motion.path
            stroke="#26214D"
            strokeLinecap="round"
            strokeWidth={3}
            d="M13.592 55.154c.19-.633 1.563-3.663 2.591-6.814 2-6.123 1.918-7.943 2.406-9.162.64-1.595 3.281 2.387 5.744 4.808 1.641 1.613 3.615 2.736 5.034 3.766.78.516 1.627.98 2.425 1.36.369.187.665.363.97.544"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{
              pathLength: { duration: 0.5, delay: 0.5 },
              opacity: { duration: 0.01, delay: 0.5 }
            }}
          />
        </svg>

        <motion.p
          className="text-md font-semibold ml-10"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.6, type: "spring" }}
        >
          j’étudie ici 🎒
        </motion.p>

        <motion.p
          className="text-sm mt-[-3px] ml-10"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 0.6, x: 0 }}
          transition={{ duration: 0.7, delay: 0.7, type: "spring" }}
        >
          (à Lannion)
        </motion.p>
      </div>

      <div
        className="w-72 absolute right-[12%] top-[45%] flex flex-col items-end gap-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={68}
          height={57}
          fill="none"
          style={{ overflow: "visible" }}
        >
          <motion.path
            fill="#26214D"
            fillOpacity={0.1}
            d="M42 36c0-2.761 5.373-5 12-5s12 2.239 12 5-5.373 5-12 5-12-2.239-12-5"
            animate={{
              scale: [1, 1.4, 1],
            }}
            transition={{ duration: 4, ease: "easeInOut", times: [0, 0.5, 1], repeat: Infinity }}
          />
          <motion.path
            fill="#DB3A00"
            stroke="#fff"
            strokeWidth={2}
            d="M54 1c7.125 0 13 5.469 13 12.333 0 1.533-.604 3.461-1.454 5.453-.864 2.024-2.036 4.237-3.28 6.383-2.488 4.293-5.309 8.391-6.655 10.297a1.97 1.97 0 0 1-3.222 0c-1.346-1.906-4.167-6.004-6.656-10.297-1.243-2.146-2.415-4.359-3.279-6.383-.85-1.992-1.454-3.92-1.454-5.453C41 6.469 46.875 1 54 1Z"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{ duration: 4, ease: "easeInOut", times: [0, 0.5, 1], repeat: Infinity }}
          />
          <motion.rect width={10} height={10} x={48.769} y={9} fill="#fff" rx={5} animate={{
            y: [0, -10, 0],
          }} transition={{ duration: 4, ease: "easeInOut", times: [0, 0.5, 1], repeat: Infinity }} />
          <motion.path
            stroke="#26214D"
            strokeLinecap="round"
            strokeWidth={3}
            d="M4.907 54.612c1.472-6.332 2.038-8.767 8.119-15.053s15.96-5.52 18.234-5.28"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{
              pathLength: { duration: 0.5, delay: 1 },
              opacity: { duration: 0.01, delay: 1 }
            }}
          />
          <motion.path
            stroke="#26214D"
            strokeLinecap="round"
            strokeWidth={3}
            d="M24.246 42.485c.242-.258 1.1-1.1 1.938-1.96 1.855-1.905 3.742-3.767 4.447-4.642.63-.782 1.16-1.351 1.392-1.737.015-.48-4.226-4.78-8.07-8.473"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{
              pathLength: { duration: 0.5, delay: 1.5 },
              opacity: { duration: 0.01, delay: 1.5 }
            }}
          />
        </svg>

        <motion.p
          className="text-md font-semibold mr-3 mt-1"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 1.6, type: "spring" }}
        >
          je viens d’ici 🏠
        </motion.p>

        <motion.p
          className="text-sm mt-[-3px] mr-3"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 0.6, x: 0 }}
          transition={{ duration: 0.7, delay: 1.7, type: "spring" }}
        >
          (près de Rennes)
        </motion.p>
      </div>
    </div>
  );
};


export default Brittany;
