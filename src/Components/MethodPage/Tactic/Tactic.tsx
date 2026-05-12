"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/lib/useLanguague";
import "./Tactic.css";

const content = {
  uk: {
    title: "Тактичні рішення",
    cards: [
      "ЛОГОТИП",
      "ПРЕЗЕНТАЦІЯ КОМПАНІЇ",
      "ПРЕЗЕНТАЦІЯ ПРОДУКТУ",
      "МОУШН-ДИЗАЙН",
      "СТРАТЕГІЯ ВЕДЕННЯ СОЦМЕРЕЖ",
      "СЛОГАН",
      "КОНТЕНТ ДЛЯ INSTAGRAM, FACEBOOK, LINKEDIN",
      "САЙТ",
      "ДИЗАЙН УПАКУВАННЯ",
      "АНІМАЦІЯ 2D/3D",
      "ДИЗАЙН КОМЕРЦІЙНИХ ОБʼЄКТІВ",
      "КОРПОРАТИВНИЙ ПЕРСОНАЖ",
      "ІЛЮСТРАЦІЯ",
      "ІМІДЖЕВЕ ФОТО",
      "РЕКЛАМНЕ ФОТО",
    ],
  },
  en: {
    title: "Tactical Solutions",
    cards: [
      "Logo",
      "Tagline",
      "Company presentation",
      "Product presentation",
      "Motion design",
      "Social Media Strategy and content for Instagram, Facebook, and LinkedIn",
      "Website",
      "Packaging design",
      "2D/3D Animation",
      "Commercial space design",
      "Corporate character",
      "Illustration",
      "Brand photography",
      "Advertising photography",
    ],
  },
};

export function Tactic() {
  const { language } = useLanguage();
  const t = content[language];
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
        }
      },
      {
        threshold: 0.5,
      },
    );

    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);
  return (
    <section className="tactic">
      <div className="container">
        <h2 className="tactic-title">{t.title}</h2>
        <div className="tactic-cards" ref={containerRef}>
          {t.cards.map((cardText, i) => (
            <div
              className="tactic-card"
              key={i}
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              {cardText}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
