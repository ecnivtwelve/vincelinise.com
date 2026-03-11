"use client";

import React from "react";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";

interface LightGalleryWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const LightGalleryWrapper: React.FC<LightGalleryWrapperProps> = ({ children, className }) => {
  return (
    <LightGallery elementClassNames={className} selector="a[data-lg-item]" speed={500} plugins={[lgThumbnail, lgZoom]}>
      {children}
    </LightGallery>
  );
};

export default LightGalleryWrapper;
