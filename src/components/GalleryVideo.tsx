"use client";

import { useRef, useState } from "react";
import styles from "./GalleryVideo.module.css";

export default function GalleryVideo({
  src,
  poster,
  className,
  autoplayLoop = false,
}: {
  src: string;
  poster?: string;
  className?: string;
  autoplayLoop?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  if (autoplayLoop) {
    return (
      <video
        className={className}
        src={src}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
    );
  }

  return (
    <div className={styles.wrapper}>
      <video
        ref={ref}
        className={className}
        src={src}
        poster={poster}
        controls
        playsInline
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />
      <button
        type="button"
        className={`${styles.play} ${playing ? styles.hidden : ""}`}
        aria-label="Play"
        onClick={() => ref.current?.play()}
      >
        <svg viewBox="0 0 72 72" aria-hidden="true" focusable="false">
          <path d="M24.2842 54.7435V17.2559L55.5238 36.0025L24.2842 54.7435Z" />
        </svg>
      </button>
    </div>
  );
}
