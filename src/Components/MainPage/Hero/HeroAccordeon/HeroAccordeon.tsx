"use client";

import { useState } from "react";
import "./HeroAccordeon.css";
import { useWindowWidth } from "../../../../../hooks/useWindowWidth";
import { useLanguage } from "@/lib/useLanguague";

const content = {
  uk: {
    sectionTitle: "пакетні послуги",
    budgetTitle: "Бюджет",
    offersTitle: "Що ми пропонуємо",
    note:
      "Ціни на сайті наведені в євро. Розрахунок здійснюється в гривнях за офіційним курсом Національного банку України на день здійснення платежу згідно з чинним законодавством України.",
    items: [
      {
        title: "На хвилі ідеї",
        text:
          "Ти ще не в дорозі, але вже дихаєш океаном мрій. Інтуїція - твій компас, а перші задуми - течія, що кличе. Ти шукаєш свою зграю, складаєш карту курсу й готуєшся вивести бізнес на поверхню.",
        budget: "€500+",
        budgetText:
          "Детальний розрахунок вартості формується після заповнення брифу",
        offers: [
          "Глибинний інструктаж",
          "Командний інструктаж",
          "Драйвовий інструктаж",
        ],
      },
      {
        title: "Зграя зростає",
        text:
          "З'являються однодумці. Ви ще не одне ціле, але вже рухаєтесь в одному напрямку. Вчитесь плисти разом, зв'язки зміцнюються, але ще легко збитися з курсу. Настає момент закріпити маршрут і не розсипатись в хаосі.",
        budget: "€7 000+",
        budgetText:
          "Детальний розрахунок вартості формується після заповнення брифу",
        offers: [
          "Ідея бренду",
          "Назва",
          "Мова бренду",
          "Слогани",
          "Айдентика",
          "Запуск",
        ],
      },
      {
        title: "Гра на випередження",
        text:
          "Бізнес масштабується. Команда - єдиний організм. Штурвал у процесів розготується в різні напрями, але керуються єдиним мозком. Гнучкість, координація, багатозадачність - ви не просто пливете, ви маневруєте.",
        budget: "€10 000+",
        budgetText:
          "Детальний розрахунок вартості формується після заповнення брифу",
        offers: [
          "Дослідження",
          "Бренд-платформа",
          "Фірмовий стиль",
          "Рекламна кампанія",
          "План просування",
          "Креативний план",
        ],
      },
      {
        title: "Океанічний масштаб",
        text:
          "Присутність компанії відчутна в глибинах і на поверхні. Бізнес - впливовий гравець, що не боїться глибоких вод. Компетентність - твоя течія, мудрість - твій ритм. Ти не частина потоку - ти його творець.",
        budget: "€12 000+",
        budgetText:
          "Ціни на сайті наведені в євро. Розрахунок здійснюється в гривнях за офіційним курсом Національного банку України на день здійснення платежу згідно з чинним законодавством України.",
        offers: [
          "Бренд і продукти",
          "Дослідження ССО",
          "HR бренд",
          "Презентація партнерам",
          "Партнерство",
          "Рекламна кампанія",
        ],
      },
    ],
  },

  en: {
    sectionTitle: "package services",
    budgetTitle: "Budget",
    offersTitle: "What we offer",
    note: "Prices on the website are given in euros. Payment is made in hryvnias at the official exchange rate of the National Bank of Ukraine on the day of payment in accordance with the current legislation of Ukraine.",
    items: [
      {
        title: "Idea Stage",
        text:
          "You are not on the move yet, but you are already breathing the ocean of dreams. Intuition is your compass, and the first concepts are the current that calls you forward. You are searching for your pack, mapping the course, preparing to bring the business to the surface.",
        budget: "€500+",
        budgetText:
          "A detailed cost estimate is provided after the brief is completed",
        offers: ["Deep Briefing", "Team Briefing", "Drive Briefing"],
      },
      {
        title: "Growth stage",
        text:
          "Like-minded people appear. You are not one whole yet, but you are already moving in the same direction. You learn to swim together. Connections strengthen, yet it is still easy to lose the course. The moment has come to fix the route and not dissolve into chaos.",
        budget: "€7 000+",
        budgetText:
          "A detailed cost estimate is provided after the brief is completed",
        offers: [
          "Brand Idea",
          "Name",
          "Brand Language",
          "Tagline",
          "Identity",
          "Launch",
        ],
      },
      {
        title: "Business stage",
        text:
          "The business scales. The team becomes a single organism. The tentacles of processes stretch in different directions, yet are guided by one mind. Flexibility, coordination, multitasking - you are not just swimming, you are maneuvering.",
        budget: "€10 000+",
        budgetText:
          "A detailed cost estimate is provided after the brief is completed",
        offers: [
          "Research",
          "Brand Platform",
          "Visual Identity",
          "Advertising Campaign",
          "Promotion Plan",
          "Creative Plan",
        ],
      },
      {
        title: "Corporate-Level Stage",
        text:
          "The company’s presence is felt in the depths and on the surface. The business is an influential player, unafraid of deep waters. Expertise is your strongest advantage. Wisdom is your rhythm. You are not part of the flow - you create it.",
        budget: "€12 000+",
        budgetText: "Detailed price after filling the brief only",
        offers: [
          "Product Brands",
          "CGM Research",
          "Employer Branding",
          "Partner Presentation",
          "Partnership",
          "Advertising Campaign",
        ],
      },
    ],
  },
};

/** Пакети «стратегічні рішення» - спільне джерело для Method / Strategy */
export const heroAccordeonPackagesContent = content;

export function HeroAccordeon() {
  const { language } = useLanguage();
  const t = content[language];

  const [openIndex, setOpenIndex] = useState(0);
  const width = useWindowWidth();

  const handleOpen = (index: number) => {
    if (index === openIndex) return;
    setOpenIndex(index);
  };

  return (
    <div className="hero-accordeon">
      {t.items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.title}
            className={`hero-accordeon-card
              ${isOpen ? " active" : ""}
              ${index === t.items.length - 1 && openIndex !== 0 ? " rounded-last" : ""}
            `}
          >
            {index === 0 && (
              <h3 className="hero-accordeon-card-section-title">
                {t.sectionTitle}
              </h3>
            )}

            <div
              className="hero-accordeon-card-top"
              onClick={() => handleOpen(index)}
            >
              <h2 className="hero-accordeon-card-title">{item.title}</h2>

              <div className="flex">
                {width && width >= 920 && (
                  <p className="hero-accordeon-card-text">{item.text}</p>
                )}

                <button
                  type="button"
                  className={`hero-accordeon-icon${isOpen ? " active" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpen(index);
                  }}
                />
              </div>
            </div>

            <div
              className={`hero-accordeon-card-content${isOpen ? " open" : ""}`}
            >
              <div className="hero-accordeon-card-content-inner">
                <div className="hero-accordeon-card-content-body">
                  <div className="hero-accordeon-card-content-left">
                    <h3 className="hero-accordeon-card-content-left-title">
                      {t.budgetTitle} : {item.budget}
                    </h3>

                    <div className="hero-accordeon-card-content-left-text">
                      <p>{item.budgetText}</p>
                    </div>
                  </div>

                  <div className="hero-accordeon-card-content-right">
                    <h3 className="hero-accordeon-card-content-right-title">
                      {t.offersTitle}
                    </h3>

                    <div className="hero-accordeon-card-content-right-cards">
                      {item.offers.map((offer) => (
                        <div
                          key={offer}
                          className="hero-accordeon-card-content-right-card"
                        >
                          {offer}
                        </div>
                      ))}
                    </div>
                  </div>

                  {width && width < 920 && (
                    <p className="hero-accordeon-card-text">{item.text}</p>
                  )}
                </div>

                <p className="hero-accordeon-card-text-gray-premitka">
                  {t.note}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HeroAccordeon;