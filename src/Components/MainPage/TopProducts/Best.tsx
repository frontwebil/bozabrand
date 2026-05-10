"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/useLanguague";
import "./Best.css";

const content = {
  uk: {
    topProjects: "ТОП ПРОЄКТИ",
    viewAll: "ПЕРЕГЛЯНУТИ УСІ",

    team: {
      titleTop: "команда неповерхневих",
      titleBottom: "яка створює проникливі бренди блакитної планети",
      roles:
        "ДИЗАЙНЕРІВ, КОПІРАЙТЕРІВ, МЕНЕДЖЕРІВ СТРАТЕГІВ, ХУДОЖНИКІВ, ІЛЮСТРАТОРІВ",
    },
  },

  en: {
    topProjects: "TOP PROJECTS",
    viewAll: "VIEW ALL",

    team: {
      titleTop: "a team of non-superficials",
      titleBottom: "creating profound brands of the blue planet",
      roles:
        "DESIGNERS, COPYWRITERS, MANAGERS, STRATEGISTS, ARTISTS, ILLUSTRATORS",
    },
  },
};

export function BestProducts() {
  const { language } = useLanguage();

  const projects = [
    {
      category: {
        uk: "Машинобудування",
        en: "Industrial Machinery Manufacturing",
      },
      title: "Hylen",
      image: "/Best/1.png",
      tags: {
        uk: [
          "Стратегія бренду",
          "Айдентика",
          "Фірмовий стиль",
          "Сайт",
          "Виставкові комунікації",
          "Фотозйомка",
        ],
        en: [
          "Brand Strategy",
          "Brand Identity",
          "Corporate Identity",
          "Website",
          "Trade Show Communications",
          "Photography",
        ],
      },
      link: "/cases/hylen",
    },
    {
      category: {
        uk: "Інжиніринг",
        en: "Engineering",
      },
      title: "Techinn",
      image: "/Best/2.png",
      tags: {
        uk: [
          "Стратегія бренду",
          "Айдентика",
          "Фірмовий стиль",
          "Виставкові комунікації",
        ],
        en: [
          "Brand Strategy",
          "Brand Identity",
          "Corporate Identity",
          "Trade Show Communications",
        ],
      },
      link: "/cases/techinn",
    },
    {
      category: {
        uk: "Інжиніринг",
        en: "Engineering",
      },
      title: "Strong & Young",
      image: "/Best/3.png",
      tags: {
        uk: [
          "Бренд",
          "Платформа стратегія",
          "Комунікації",
          "Айдентика",
          "Фірмовий стиль",
        ],
        en: [
          "Brand",
          "Platform Strategy",
          "Communication Strategy",
          "Brand Identity",
          "Corporate style",
        ],
      },
      link: "/cases/strong-and-young",
    },
  ];

  const t = content[language];

  return (
    <section
      className="best-products"
      style={{
        backgroundImage: `url(/Best/bg.png)`,
      }}
    >
      <div className="container">
        <div className="best-products-top">
          <h2>{t.topProjects}</h2>
          <Link href={"/cases"}>{t.viewAll}</Link>
        </div>

        <div className="best-products-cards">
          {projects.map((project, i) => (
            <Link
              href={project.link}
              className="best-products-card"
              key={i}
              style={{
                backgroundImage: `url(${project.image})`,
              }}
            >
              <div className="best-products-card-top">
                <p>{project.category[language]}</p>
                <h3>{project.title}</h3>
              </div>

              <div className="best-products-card-bottom">
                {project.tags[language].map((tag, i) => (
                  <div className="best-products-card-bottom-item" key={i}>
                    {tag}
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>

        <Link href={"/cases"} className="best-products-button">
          {t.viewAll}
        </Link>

        <div className="best-products-team-text">
          <div className="best-products-team-text-top">
            <h2>{t.team.titleTop}</h2>

            <div className="best-products-team-text-top-box">
              <div className="best-products-team-line-blocks">
                <div className="best-products-team-line-block border-t border-l border-white"></div>
                <div className="best-products-team-line-block border-t border-r border-white"></div>
              </div>

              <div className="best-products-team-text-top-comands">
                {t.team.roles}
              </div>

              <div className="best-products-team-line-blocks">
                <div className="best-products-team-line-block border-b border-l border-white"></div>
                <div className="best-products-team-line-block border-b border-r border-white"></div>
              </div>
            </div>
          </div>

          <h2>{t.team.titleBottom}</h2>
        </div>
      </div>
    </section>
  );
}