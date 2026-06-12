"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.play().catch(() => {
      // Autoplay blocked (Low Power Mode, etc.) - hide video, show static image
      setVideoFailed(true);
    });
  }, []);

  if (videoFailed) {
    return (
      <Image
        src="/hero.jpg"
        alt="G1 Fitness"
        fill
        className="object-cover"
        priority
      />
    );
  }

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className="w-full h-full object-cover"
      poster="/hero.jpg"
    >
      <source src="/hero-video.webm" type="video/webm" />
      <source src="/hero-video.mp4" type="video/mp4" />
    </video>
  );
}
