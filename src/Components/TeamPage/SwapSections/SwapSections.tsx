"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import "./SwapSections.css";

gsap.registerPlugin(Draggable);

const photos = [
  {
    id: 1,
    type: "image",
    src: "/Swap/Cube6 - Transparent 1.png",
    left: "10%",
    top: "50%",
    rotate: -8,
    width: "20vw",
  },
  {
    id: 2,
    type: "button",
    text: "BOZATEAM",
    left: "18%",
    top: "35%",
    rotate: 20,
    width: "12vw",
  },
  {
    id: 3,
    type: "button",
    text: "UNDERDOGS",
    left: "35%",
    top: "60%",
    rotate: -5,
    width: "12vw",
  },
  {
    id: 4,
    type: "button",
    text: "PARTNER",
    left: "70%",
    top: "40%",
    rotate: -10,
    width: "12vw",
  },
  {
    id: 5,
    type: "image",
    src: "/Swap/L23 1 1.png",
    left: "4%",
    top: "7%",
    rotate: -7,
    width: "20vw",
  },
  {
    id: 6,
    type: "image",
    src: "/Swap/Rectangle 34-2 1.png",
    left: "90%",
    top: "0%",
    rotate: 5,
    width: "20vw",
  },
  {
    id: 7,
    type: "image",
    src: "/Swap/Rectangle 48 1.png",
    left: "30%",
    top: "15%",
    rotate: 4,
    width: "25vw",
  },
  {
    id: 8,
    type: "image",
    src: "/Swap/Rectangle 48-2 1.png",
    left: "50%",
    top: "2%",
    rotate: -6,
    width: "20vw",
  },
  {
    id: 9,
    type: "image",
    src: "/Swap/chrome51 1.png",
    left: "72%",
    top: "48%",
    rotate: 8,
    width: "20vw",
  },
  {
    id: 10,
    type: "image",
    src: "/Swap/chrome8 1.png",
    left: "55%",
    top: "52%",
    rotate: -4,
    width: "15vw",
  },
];

const directions = [
  "Графічні дизайнери",
  "Ілюстратори",
  "Дизайнери шрифтів",
  "Архітектори",
  "Дизайнери інтер’єру",
  "Продакшн",
  "Моушн-дизайнери",
  "CGI-художники",
  "Діджитал-агенції",
  "Фотографи",
  "Стратеги",
  "SMM-агенції",
  "Проєктні менеджери",
  "Копірайтери",
];

export function SwapSections() {
  const stageRef = useRef(null);

  useEffect(() => {
    if (!stageRef.current) return;

    const cards = gsap.utils.toArray(".people-photos__item");

    const draggables = Draggable.create(cards, {
      bounds: stageRef.current,
      onPress() {
        gsap.set(this.target, { zIndex: Date.now() });
        gsap.to(this.target, {
          scale: 1.04,
          duration: 0.2,
        });
      },
      onRelease() {
        gsap.to(this.target, {
          scale: 1,
          duration: 0.2,
        });
      },
    });

    return () => {
      draggables.forEach((item) => item.kill());
    };
  }, []);

  return (
    <section className="people-photos">
      <div className="people-photos__stage" ref={stageRef}>
        {photos.map((photo) => (
          <div
            key={photo.id}
            className={`people-photos__item ${
              photo.type === "button" ? "is-button" : ""
            }`}
            style={{
              left: photo.left,
              top: photo.top,
              transform: `rotate(${photo.rotate}deg)`,
              width: photo.width,
            }}
          >
            {photo.type === "image" ? (
              <img src={photo.src} alt="" draggable="false" />
            ) : (
              <button type="button" className="people-photos__button">
                {photo.text}
              </button>
            )}
          </div>
        ))}
      </div>
      <div className="container">
        <div className="people-photos-people-text">(ЛЮДИ)</div>
        <div className="people-photos-people-row">
          {directions.map((direct, i) => (
            <p
              key={i}
              className="people-photos-people-row-item"
              style={{ color: i % 2 != 0 ? "#888888" : "#fff" }}
            >
              {direct}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
