"use client";

import "./Projects.css";

const projects = [
  {
    id: 1,
    image: "/Projects/1.jpg",
    subtitle: "Інжиніринг",
    title: "Strong & Young",
    services: ["Ідея бренду", "Стратегія комунікації", "Айдентика"],
  },
  {
    id: 2,
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
    id: 3,
    image: "/Projects/3.jpg",
    subtitle: "Благодійність",
    title: "NEDL",
    services: ["Ребрендінг", "Неймінг", "Айдентика"],
  },
  {
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
    image: "/Projects/7.jpg",
    subtitle: "FMCG",
    title: "Шаничі",
    services: ["Стратегія комунікації", "Рекламні ролики", " Motion дизайн"],
  },
  {
    id: 8,
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

export function Projects() {
  return (
    <section className="projects">
      <div className="container">
        <div className="projects-container">
          {projects.map((project) => (
            <div
              className="project-card"
              key={project.id}
              style={{ backgroundImage: `url(${project.image})` }}
            >
              <h3 className="project-card-subtitle">{project.subtitle}</h3>
              <h2 className="project-card-title">{project.title}</h2>

              <div className="project-card-text">
                <span className="project-card-text-item">
                  {project.services[0]}
                </span>

                {project.services.slice(1).map((item, index) => (
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
