'use client';
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

const ProjectHeader = ({ image, logo, title, accentColor }: { image: string; logo: string; title: string; accentColor: string }) => {
  const [bannerLoaded, setBannerLoaded] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);

  return (
    <>
      <div className="relative w-full h-64 md:h-96 overflow-hidden" style={{ backgroundColor: accentColor }}>
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={bannerLoaded ? { scale: 1, opacity: 1 } : undefined}
          transition={{ duration: 1.5, ease: [0, 0, 0, 1] }}
          className="relative w-full h-64 md:h-96"
        >
          <Image
            src={image}
            alt={""}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
            onLoad={() => setBannerLoaded(true)}
          />
        </motion.div>
      </div>

      <div className="relative w-full h-24 md:h-36 -mt-16 drop-shadow-lg">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={logoLoaded ? { scale: 1, opacity: 1 } : undefined}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="relative w-full h-24 md:h-36"
        >
          <Image
            src={logo}
            alt={title}
            fill
            className="object-contain"
            sizes="(max-width: 896px) 100vw, 896px"
            onLoad={() => setLogoLoaded(true)}
          />
        </motion.div>
      </div>
    </>
  );
};

export default ProjectHeader;
