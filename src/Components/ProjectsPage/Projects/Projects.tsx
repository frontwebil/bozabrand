"use client";

import { Case } from "@/generated/prisma/browser";
import "./Projects.css";

const projects = [
  {
    image: "/Projects/7.jpg",
    subtitle: "FMCG",
    title: "Шаничі",
    services: ["Стратегія комунікації", "Рекламні ролики", " Motion дизайн"],
  },
  {
    image: "/Projects/4.jpg",
    subtitle: "Краса",
    title: "Майстерня Рефрешу",
    services: [
      "Стратегія бренду",
      "Айдентика",
      "Фірмовий стиль",
      "Дизайн Інтер'єру",
      "стратегія сторінки іnstagram",
    ],
  },
  {
    image: "/Projects/1.jpg",
    subtitle: "Інжиніринг",
    title: "Strong & Young",
    services: ["Ідея бренду", "Стратегія комунікації", "Айдентика"],
  },
  {
    image: "/Projects/2.jpg",
    subtitle: "Краса",
    title: "Vsesvit",
    services: [
      "Стратегія бренду",
      "Айдентика",
      "Слоган",
      "стратегія сторінки іnstagram",
    ],
  },
  {
    image: "/Projects/3.jpg",
    subtitle: "Благодійність",
    title: "NEDL",
    services: ["Ребрендінг", "Неймінг", "Айдентика"],
  },

  {
    image: "/Projects/5.jpg",
    subtitle: "Косметологія",
    title: "Ostrishko Family",
    services: [
      "бренд платформа",
      "Стратегія бренду",
      "неймінг",
      "Айдентика",
      "комунікація",
      "стратегія сторінки іnstagram",
    ],
  },
  {
    image: "/Projects/6.jpg",
    subtitle: "Інжиніринг",
    title: "Techinn",
    services: [
      "Стратегія бренду",
      "Айдентика",
      "Фірмовий стиль",
      "Виставкові комунікації",
    ],
  },

  {
    image: "/Projects/8.jpg",
    subtitle: "Машинобудування",
    title: "Hylen",
    services: [
      "Стратегія бренду",
      "Айдентика",
      "Фірмовий стиль",
      "Сайт",
      "Фотозйомка",
      "Виставкові комунакації",
    ],
  },
];

export function Projects({ cases }: { cases: Case[] }) {
  return (
    <section className="projects">
      <div className="container">
        <div className="projects-container">
          {cases.map((project, i) => (
            <div
              className="project-card"
              key={i}
              style={{
                backgroundImage: `url(${project.imgUrl})`,
                backgroundPosition: `${i == 0 && "left center"}`,
              }}
            >
              <h3 className="project-card-subtitle">{project.subTitle}</h3>
              <h2 className="project-card-title">{project.title}</h2>

              <div className="project-card-text">
                <span className="project-card-text-item">
                  {project.categories[0]}
                </span>

                {project.categories.slice(1).map((item, index) => (
                  <span className="project-card-text-item" key={index}>
                    <span className="project-card-text-separator">\\</span>
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
