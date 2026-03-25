"use client";

import "./RunningLine.css";

export function RunningLine() {
  const items = [
    "Стратегія бренду",
    "Айдентика",
    "Фірмовий стиль",
    "Логотип",
    "Слоган",
    "Гайдлайн",
    "Брендбук",
    "Презентація компанії",
    "Презентація продукту",
    "Моушн-дизайн",
    "Стратегія ведення Instagram",
    "Дизайн упакування",
    "Анімація 2D/3D",
    "Дизайн комерційних об'єктів",
    "Корпоративний персонаж",
    "Ілюстрація",
    "Іміджеве фото",
    "Рекламне фото",
    "Сайт",
  ];

  return (
    <div className="container">
      <div className="running-line-blocks">
        <div className="running-line-block border-t border-l border-zinc-700"></div>
        <div className="running-line-block border-t border-r border-zinc-700"></div>
      </div>
      <div className="running-line">
        <div className="running-line-inner">
          {items.map((item, index) => (
            <span key={index} className="running-line-item">
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="running-line-blocks">
        <div className="running-line-block border-b border-l border-zinc-700"></div>
        <div className="running-line-block border-b border-r border-zinc-700"></div>
      </div>
    </div>
  );
}
