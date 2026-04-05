"use client";

import { useEffect, useRef } from "react";
import { useWindowWidth } from "../../../../hooks/useWindowWidth";
import "./MethodHero.css";

export function MethodHero() {
  const screenWidth = useWindowWidth();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const tags = section.querySelectorAll<HTMLElement>(".MethodHero-tag");

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const scrolled = -rect.top;

      tags.forEach((tag) => {
        const speed = parseFloat(tag.dataset.speed || "0.35");
        const offset = scrolled * speed;
        tag.style.transform = `translateY(${offset}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="MethodHero" ref={sectionRef}>
      <div className="MethodHero-container">
        <video autoPlay muted loop playsInline className="MethodHero-video">
          <source src="/Method/cycle-video.webm" type="video/webm" />
        </video>
        <div className="MethodHero-video-text">
          BOZABRAND - це команда неповерхневих, яка створює проникливі бренди
          блакитної планети.{" "}
          <span style={{ color: "rgba(142, 142, 142, 1)" }}>
            Бренди, які знають, що роблять, готові до росту і які западають у
            душі людей. Це те, що працює в межах раціонального і при цьому діє
            на рівні сенсорної системи.
          </span>
        </div>
      </div>

      {/* Текст */}
      <div className="MethodHero-undervideo-text">
        <span className="line line-1">
          Щоб виграти гру, повинна бути стратегія.
        </span>
        <span className="line line-2">
          Ми маємо намір залишити слід у світовій історії, а нашої кваліфікації
          достатньо, щоб зробити це фантастично
        </span>
      </div>

      {/* Теги — окремий оверлей поверх секції */}
      <div className="MethodHero-tags-overlay">
        <span className="MethodHero-tag tag-designers" data-speed="0.4">
          ДИЗАЙНЕРИ
        </span>
        <span className="MethodHero-tag tag-strategists" data-speed="0.3">
          СТРАТЕГИ
        </span>
        <span className="MethodHero-tag tag-copywriters" data-speed="0.45">
          КОПІРАЙТЕРИ
        </span>
        <span className="MethodHero-tag tag-photographers" data-speed="0.35">
          ФОТОГРАФИ
        </span>
        <span className="MethodHero-tag tag-illustrators" data-speed="0.25">
          ІЛЮСТРАТОРИ
        </span>
      </div>
    </section>
  );
}
