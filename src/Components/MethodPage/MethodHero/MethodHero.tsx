"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/lib/useLanguague";
import "./MethodHero.css";

const content = {
  uk: {
    videoLead:
      "BOZABRAND - це команда неповерхневих, яка створює проникливі бренди блакитної планети. ",
    videoGray:
      "Бренди, які знають, що роблять, готові до росту і які западають у душі людей. Це те, що працює в межах раціонального і при цьому діє на рівні сенсорної системи.",
    line1: "Щоб виграти гру, повинна бути стратегія.",
    line2:
      "Ми маємо намір залишити слід у світовій історії, а нашої кваліфікації достатньо, щоб зробити це фантастично",
    tags: {
      designers: "ДИЗАЙНЕРИ",
      strategists: "СТРАТЕГИ",
      copywriters: "КОПІРАЙТЕРИ",
      photographers: "ФОТОГРАФИ",
      illustrators: "ІЛЮСТРАТОРИ",
    },
  },
  en: {
    videoLead:
      "BOZABRAND is a team of non-superficial people who create profound brands of the blue planet. ",
    videoGray:
      "Brands that know what they do, ready for growth, and «get under the skin». It works within the rational and operates at the level of the sensory system simultaneously.",
    line1: "To win the game, there must be a strategy.",
    line2:
      "We intend to leave a mark on world history, and our qualifications are sufficient to make it fantastic.",
    tags: {
      designers: "DESIGNERS",
      strategists: "STRATEGISTS",
      copywriters: "COPYWRITERS",
      photographers: "PHOTOGRAPHERS",
      illustrators: "ILLUSTRATORS",
    },
  },
};

export function MethodHero() {
  const { language } = useLanguage();
  const t = content[language];
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
          {t.videoLead}
          <span style={{ color: "rgba(142, 142, 142, 1)" }}>{t.videoGray}</span>
        </div>
      </div>

      {/* Текст */}
      <div className="MethodHero-undervideo-text">
        <span className="line line-1">{t.line1}</span>
        <span className="line line-2">{t.line2}</span>
      </div>

      {/* Теги — окремий оверлей поверх секції */}
      <div className="MethodHero-tags-overlay">
        <span className="MethodHero-tag tag-designers" data-speed="0.4">
          {t.tags.designers}
        </span>
        <span className="MethodHero-tag tag-strategists" data-speed="0.3">
          {t.tags.strategists}
        </span>
        <span className="MethodHero-tag tag-copywriters" data-speed="0.45">
          {t.tags.copywriters}
        </span>
        <span className="MethodHero-tag tag-photographers" data-speed="0.35">
          {t.tags.photographers}
        </span>
        <span className="MethodHero-tag tag-illustrators" data-speed="0.25">
          {t.tags.illustrators}
        </span>
      </div>
    </section>
  );
}
