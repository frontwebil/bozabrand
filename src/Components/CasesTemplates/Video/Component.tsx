"use client";

import { useEffect, useRef } from "react";
import Hls from "hls.js";
import "./style.css";

type VideoBlockData = {
  src?: string;
  poster?: string;
  title?: string;
};

export function ComponentVideo({ data }: { data?: VideoBlockData }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  if (!data?.src) {
    return null;
  }

  const hlsUrl = data.src
    .replace("/upload/", "/upload/sp_auto/")
    .replace(".mp4", ".m3u8");

  useEffect(() => {
    if (!videoRef.current) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(hlsUrl);
      hls.attachMedia(videoRef.current);
    } else {
      // Safari
      videoRef.current.src = hlsUrl;
    }
  }, [hlsUrl]);

  return (
    <section className="video-block">
      <div className="video-block-container">
        {data.title && <h3 className="video-block-title">{data.title}</h3>}

        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="video-block-player"
          preload="none"
          poster={data.poster}
        >
          <source src={data.src} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
