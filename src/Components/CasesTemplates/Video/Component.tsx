"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Hls from "hls.js";
import "./style.css";

export type VideoPlaybackMode = "loop" | "click";

export type VideoBlockData = {
  src?: string;
  poster?: string;
  title?: string;
  playback?: VideoPlaybackMode;
};

export function ComponentVideo({ data }: { data?: VideoBlockData }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const src = data?.src?.trim() ?? "";

  const extension = useMemo(() => {
    return src.split("?")[0].split(".").pop()?.toLowerCase() ?? "";
  }, [src]);

  const isMp4 = extension === "mp4";
  const isWebm = extension === "webm";

  const hlsUrl = useMemo(() => {
    if (!src || !isMp4) return "";
    return src
      .replace("/upload/", "/upload/sp_auto/")
      .replace(/\.mp4(\?.*)?$/i, ".m3u8");
  }, [src, isMp4]);

  const mode: VideoPlaybackMode = data?.playback === "click" ? "click" : "loop";
  const isLoop = mode === "loop";

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return;

    let hls: Hls | null = null;

    if (isMp4 && hlsUrl) {
      if (Hls.isSupported()) {
        hls = new Hls();
        hls.loadSource(hlsUrl);
        hls.attachMedia(video);
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = hlsUrl;
      } else {
        video.src = src;
      }
    } else {
      video.src = src;
    }

    return () => {
      hls?.destroy();
    };
  }, [src, hlsUrl, isMp4]);

  useEffect(() => {
    if (isLoop) return;

    const video = videoRef.current;
    if (!video) return;

    const onPlay = () => {
      setIsPlaying(true);
      setShowControls(false);
    };

    const onPause = () => {
      setIsPlaying(false);
      setShowControls(false);
    };

    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);

    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
    };
  }, [isLoop]);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  }, []);

  if (!src) {
    return null;
  }

  return (
    <section className="video-block">
      <div className="video-block-container">
        {data?.title && <h3 className="video-block-title">{data.title}</h3>}

        <div
          className={
            isLoop ? "video-block-player-outer" : "video-block-player-wrap"
          }
        >
          <video
            ref={videoRef}
            autoPlay={isLoop}
            muted={isLoop}
            loop={isLoop}
            playsInline
            className="video-block-player"
            preload={isLoop ? "none" : "metadata"}
            poster={data?.poster}
          >
            {isMp4 && <source src={src} type="video/mp4" />}
            {isWebm && <source src={src} type="video/webm" />}
          </video>

          {!isLoop && (
            <>
              {isPlaying && !showControls && (
                <button
                  type="button"
                  className="video-block-tap-zone"
                  aria-label="Показати керування відтворенням"
                  onClick={() => setShowControls(true)}
                />
              )}

              {isPlaying && showControls && (
                <button
                  type="button"
                  className="video-block-backdrop"
                  aria-label="Сховати керування"
                  onClick={() => setShowControls(false)}
                />
              )}

              <div className="video-block-controls-slot">
                {(!isPlaying || showControls) && (
                  <button
                    type="button"
                    className="video-block-play-toggle"
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlay();
                    }}
                    aria-label={isPlaying ? "Пауза" : "Відтворити"}
                  >
                    {isPlaying ? (
                      <svg
                        viewBox="0 0 24 24"
                        width="48"
                        height="48"
                        aria-hidden
                      >
                        <rect
                          x="6"
                          y="5"
                          width="4"
                          height="14"
                          rx="1"
                          fill="currentColor"
                        />
                        <rect
                          x="14"
                          y="5"
                          width="4"
                          height="14"
                          rx="1"
                          fill="currentColor"
                        />
                      </svg>
                    ) : (
                      <svg
                        viewBox="0 0 24 24"
                        width="56"
                        height="56"
                        aria-hidden
                      >
                        <path fill="currentColor" d="M8 5v14l11-7L8 5z" />
                      </svg>
                    )}
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
