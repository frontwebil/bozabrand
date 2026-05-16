"use client";

import Image from "next/image";
import "./Strategy.css";
import Link from "next/link";
import { useLanguage } from "@/lib/useLanguague";
import { heroAccordeonPackagesContent } from "@/Components/MainPage/Hero/HeroAccordeon/HeroAccordeon";

const strategyImages = [
  "/Strategy/1.png",
  "/Strategy/2.png",
  "/Strategy/3.png",
  "/Strategy/4.png",
];

const sectionTitle = {
  uk: "Стратегічні рішення",
  en: "Strategic solutions",
};

const contactLabel = {
  uk: "звʼязатися",
  en: "Get in touch",
};

function formatStrategyPrice(budget: string) {
  if (budget.startsWith("€ ") || budget.startsWith("€\u00a0")) return budget;
  if (budget.startsWith("€")) return `€ ${budget.slice(1)}`;
  return budget;
}

export function Strategy() {
  const { language } = useLanguage();
  const pack = heroAccordeonPackagesContent[language];
  const tTitle = sectionTitle[language];
  const tContact = contactLabel[language];

  return (
    <section className="strategy">
      <div className="container">
        <h2 className="strategy-title">{tTitle}</h2>

        <div className="strategy-cards">
          {pack.items.map((item, i) => (
            <div className="strategy-card" key={item.title}>
              <h2 className="strategy-card-title">{item.title}</h2>

              <p className="strategy-card-description">{item.text}</p>

              <div className="strategy-card-row">
                <div className="strategy-card-left-text">
                  <h3>{pack.offersTitle}</h3>

                  <ul className="strategy-card-left-text-list">
                    {item.offers.map((offer) => (
                      <li key={offer}>{offer}</li>
                    ))}
                  </ul>
                </div>

                <Image
                  src={strategyImages[i]}
                  width={200}
                  height={200}
                  alt={item.title}
                />
              </div>

              <div className="strategy-card-price">
                <div className="strategy-card-column">
                  <h3>
                    {pack.budgetTitle} : {formatStrategyPrice(item.budget)}
                  </h3>
                  <p>{item.budgetText}</p>
                </div>

                <Link
                  href={"tel:+380666899857"}
                  target="_blank"
                  className="strategy-card-price-button"
                >
                  {tContact}
                </Link>
              </div>
              <p className="hero-accordeon-card-text-gray-premitka">
                {pack.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
