"use client";

import React from "react";

type MdxLightboxImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src?: string;
};

const MdxLightboxImage: React.FC<MdxLightboxImageProps> = ({ src, alt = "", ...props }) => {
  if (!src) return null;

  return (
    <a href={src} data-lg-item>
      <img src={src} alt={alt} {...props} />
    </a>
  );
};

export default MdxLightboxImage;
