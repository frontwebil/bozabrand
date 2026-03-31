"use client";

import { useEffect, useRef } from "react";
import "./Tactic.css";

const cards = [
  "ЛОГОТИП",
  "СЛОГАН",
  "ПРЕЗЕНТАЦІЯ КОМПАНІЇ",
  "ПРЕЗЕНТАЦІЯ ПРОДУКТУ",
  "МОУШН-ДИЗАЙН",
  "СТРАТЕГІЯ ВЕДЕННЯ ТА КОНТЕНТ ДЛЯ СТОРІНОК INSTAGRAM, FACEBOOK, LINKEDIN",
  "САЙТ",
  "ДИЗАЙН УПАКУВАННЯ",
  "АНІМАЦІЯ 2D/3D",
  "ДИЗАЙН КОМЕРЦІЙНИХ ОБʼЄКТІВ",
  "КОРПОРАТИВНИЙ ПЕРСОНАЖ",
  "ІЛЮСТРАЦІЯ",
  "ІМІДЖЕВЕ ФОТО",
  "РЕКЛАМНЕ ФОТО",
];

export function Tactic() {
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
        <h2 className="tactic-title">Тактичні рішення</h2>
        <div className="tactic-cards" ref={containerRef}>
          {cards.map((cardText, i) => (
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
