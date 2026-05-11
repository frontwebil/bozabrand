"use client";

import { useLanguage } from "@/lib/useLanguague";
import "./VideoInfoGraph.css";

const content = {
  uk: {
    title: "Топ - 3 причини обрати BOZABRAND",
    cards: [
      {
        title:
          "Працюємо комплексно, занурюючись з головою у твій бізнес",
        number: "[01]",
        video: "/Video/1.webm",
      },
      {
        title:
          "Встановлюємо чіткі бізнес-цілі, управляємо та аналізуємо KPI",
        number: "[02]",
        video: "/Video/2.webm",
      },
      {
        title:
          "Вирощуємо усвідомлену лояльну аудиторію, створюючи фан-клуб бренду",
        number: "[03]",
        video: "/Video/3.webm",
      },
    ],
  },

  en: {
    title: "3 reasons to choose BOZABRAND",
    cards: [
      {
        title:
          "We take a holistic approach, diving deep into your business",
        number: "[01]",
        video: "/Video/1.webm",
      },
      {
        title:
          "We set clear business goals, manage and analyze KPIs",
        number: "[02]",
        video: "/Video/2.webm",
      },
      {
        title:
          "We grow a conscious, loyal audience, building a brand fan club",
        number: "[03]",
        video: "/Video/3.webm",
      },
    ],
  },
};

export function VideoInfoGraph() {
  const { language } = useLanguage();

  const data = content[language];

  return (
    <section className="video-info-graph">
      <div className="container video-info-border-bottom">
        <h3 className="video-info-graph-title">{data.title}</h3>
      </div>

      <div className="container">
        <div className="video-info-graph-cards">
          {data.cards.map((card, index) => (
            <div className="video-info-graph-card" key={index}>
              <div className="video-info-graph-card-top">
                <h2>{card.title}</h2>
                <h2>{card.number}</h2>
              </div>

              <video autoPlay muted loop playsInline>
                <source src={card.video} type="video/webm" />
              </video>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}