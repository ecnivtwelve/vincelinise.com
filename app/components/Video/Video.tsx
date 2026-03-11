"use client";

import React from "react";
import dynamic from "next/dynamic";
import "plyr-react/plyr.css";

const Plyr = dynamic(
  () => import("plyr-react").then((mod) => mod.Plyr),
  { ssr: false }
);

type VideoProps = {
  src: string;
  className?: string;
  controls?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  poster?: string;
};

const controlSet = [
  "play-large",
  "play",
  "progress",
  "current-time",
  "mute",
  "volume",
  "captions",
  "settings",
  "pip",
  "airplay",
  "fullscreen",
] as const;

function getVideoType(src: string) {
  if (src.endsWith(".webm")) return "video/webm";
  if (src.endsWith(".ogg")) return "video/ogg";
  return "video/mp4";
}

export default function Video({
  src,
  className,
  controls = false,
  autoPlay = false,
  muted = false,
  loop = false,
  poster,
}: VideoProps) {
  return (
    <div className={className + " overflow-hidden not-prose mb-4"}>
      <Plyr
        height={"100%"}
        source={{
          type: "video",
          sources: [
            {
              src,
              type: getVideoType(src),
              provider: "html5"
            },
          ],
          poster,
        }}
        options={{
          controls: controls ? [...controlSet] : [],
          autoplay: autoPlay,
          muted: muted ? true : false,
          volume: muted ? 0 : 1,
          loop: { active: loop },
          hideControls: !controls,
          clickToPlay: controls,
        }}
      />
    </div>
  );
}
