'use client';

import { useState } from "react";
import Image from "next/image";
import "./User.css";
import { motion } from "motion/react";
import Icons from "./Icons";

export default function User() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="items-center justify-center flex flex-col relative w-full overflow-visible">
      <div className="absolute icons-mask left-1/2 -translate-x-1/2 pointer-events-none">
        <Icons className="hero-icons max-w-none" />
      </div>

      <motion.div
        className="w-54 h-76 rounded-full relative overflow-hidden mb-6"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={isLoaded ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.3, 0, 0, 1] }}
      >
        <motion.div
          initial={{ y: 280 }}
          animate={isLoaded ? { y: 0 } : { y: 280 }}
          transition={{ duration: 0.8, delay: 0, type: "spring", bounce: 0.25 }}
          className="absolute top-[20px] transition-[top] hover:top-[10px] h-[120%] min-w-[155%] left-[-30%] z-1"
        >
          <Image
            src="/vince.png"
            alt=""
            width={354}
            height={360}
            priority
            onLoad={() => setIsLoaded(true)}
          />
        </motion.div>
        <motion.div
          className="pdp-gradient w-54 h-54 rounded-full absolute bottom-0 left-0 z-0"
        ></motion.div>
      </motion.div>

    </div>
  );
}
