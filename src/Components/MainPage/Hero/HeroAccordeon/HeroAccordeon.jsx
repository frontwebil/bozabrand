"use client";

import { useState } from "react";
import "./HeroAccordeon.css";
import { useWindowWidth } from "../../../../../hooks/useWindowWidth";

const accordionItems = [
  {
    title: "На хвилі ідеї",
    text: "Ти ще не в дорозі, але вже дихаєш океаном мрій. Інтуїція — твій компас, а перші задуми — течія, що кличе. Ти шукаєш свою зграю, складаєш карту курсу й готуєшся вивести бізнес на поверхню.",
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
    text: "З'являються однодумці. Ви ще не одне ціле, але вже рухаєтесь в одному напрямку. Вчитесь плисти разом, зв'язки зміцнюються, але ще легко збитися з курсу. Настав момент закріпити маршрут і не розсипатися в хаосі.",
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
    text: "Бізнес масштабується. Команда — єдиний організм. Штурвал у процесів розготується в різні напрями, але керуються єдиним мозком. Гнучкість, координація, багатозадачність — ви не просто пливете, ви маневруєте.",
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
    text: "Присутність компанії відчутна в глибинах і на поверхні. Бізнес — впливовий гравець, що не боїться глибоких вод. Компетентність — твоя течія, мудрість — твій ритм. Ти не частина потоку — ти його творець.",
    budget: "€12 000+",
    budgetText:
      "Детальний розрахунок вартості формується після заповнення брифу",
    offers: [
      "Бренд і продукти",
      "Дослідження ССО",
      "HR бренд",
      "Презентація партнерам",
      "Партнерство",
      "Рекламна кампанія",
    ],
  },
];

export function HeroAccordeon() {
  const [openIndex, setOpenIndex] = useState(0);
  // border-radius: 15px 0 0px 15px;
  const handleOpen = (index) => {
    // Якщо карточка вже відкрита — нічого не робимо (не закриваємо)
    if (index === openIndex) return;
    setOpenIndex(index);
  };
  const width = useWindowWidth();

  return (
    <div className="hero-accordeon">
      {accordionItems.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.title}
            className={`hero-accordeon-card
    ${isOpen ? " active" : ""}
    ${index === accordionItems.length - 1 && openIndex !== 0 ? " rounded-last" : ""}
  `}
          >
            {index === 0 && (
              <h3 className="hero-accordeon-card-section-title">
                пакетні послуги
              </h3>
            )}
            <div
              className="hero-accordeon-card-top"
              onClick={() => handleOpen(index)}
            >
              <h2 className="hero-accordeon-card-title">{item.title}</h2>
              <div className="flex">
                {width >= 920 && (
                  <p className="hero-accordeon-card-text">{item.text}</p>
                )}
                <button
                  type="button"
                  className={`hero-accordeon-icon${isOpen ? " active" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpen(index);
                  }}
                  aria-label={isOpen ? "Відкрито" : "Відкрити акордеон"}
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
                      Бюджет : {item.budget}
                    </h3>
                    <div className="hero-accordeon-card-content-left-text">
                      <p>{item.budgetText}</p>
                    </div>
                  </div>
                  <div className="hero-accordeon-card-content-right">
                    <h3 className="hero-accordeon-card-content-right-title">
                      Що ми пропонуємо
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
                  {width < 920 && (
                    <p className="hero-accordeon-card-text">{item.text}</p>
                  )}
                </div>
                  <p className="hero-accordeon-card-text-gray-premitka">
                    Ціни на сайті наведені в євро. Розрахунок здійснюється в
                    гривнях за офіційним курсом Національного банку України на
                    день здійснення платежу згідно з чинним законодавством
                    України.
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
