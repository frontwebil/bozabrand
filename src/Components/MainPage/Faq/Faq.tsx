"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/useLanguague";
import "./Faq.css";

const content = {
  uk: {
    close: "Закрити відповідь",
    open: "Відкрити відповідь",

    faqItems: [
      {
        id: 1,
        question: "Що потрібно для початку співпраці?",
        answer:
          "Звернутись за телефоном +38 (066) 68 998 57 і/або заповнити бриф нового клієнта для розуміння вашого бізнесу та цілей. Далі ми беремо процес на себе.",
      },
      {
        id: 2,
        question:
          "Я можу замовити тільки пакет послуг по контракту на 3/6/12 міс.?",
        answer:
          "Ні. Ми також працюємо з окремими задачами, якщо у вас є чітка бренд-стратегія або план маркетингових дій. Можемо реалізувати: логотип, айдентику та фірмовий стиль, брендбук і гайдлайни, слоган, презентації компанії чи продукту, дизайн упакування, Instagram-стратегію, 2D/3D анімацію, моушн-дизайн, сайт, ілюстрації, корпоративного персонажа, дизайн комерційних просторів, іміджеву та рекламну зйомку.",
      },
      {
        id: 3,
        question:
          "Ми можемо працювати, якщо у мене немає маркетингової команди?",
        answer:
          "Так. Ми можемо повністю закрити брендинг і стратегію або працювати як ваша зовнішня команда.",
      },
      {
        id: 4,
        question: "Чи можу я записатись на консультацію?",
        answer:
          "Так. Ми проводимо інструктажі з побудови бренду та стратегічні консультації для власників бізнесу й маркетингових команд. Наші фахівці можуть проконсультувати з бренд-стратегії, айдентики, фірмового стилю та комунікацій або провести бренд-сесію для вашого самостійного створення бренд-стратегії.",
      },
      {
        id: 5,
        question:
          "Якщо наразі тільки маю бізнес-ідею, а не працюючий бізнес, що ви можете запропонувати?",
        answer:
          "Ми дуже рекомендуємо почати з консультації та пройти бренд-інструктаж від нашої команди. Тоді одразу стане ясно, чи готові ми разом рухатися у бік створення бренд-системи чи варто ще підготуватися і повернутися до BOZABRAND пізніше.",
      },
      {
        id: 6,
        question: "Чи є категорії клієнтів, з якими ви не працюєте?",
        answer:
          "Так. Ми не беремо проєкти без чітких цілей, відкритості до змін і довгострокового мислення. Ми не співпрацюємо з компаніями, засновниками або бенефіціарами яких є резиденти країни-агресора, а також з нішами, що вводять споживачів в оману або порушують етичні норми: казино, беттинг, фінансові піраміди, псевдоінвестиційні проєкти, шахрайські сервіси, маніпулятивні інфобізнеси або продукти з недоведеною цінністю чи обіцянками гарантованого результату.",
      },
    ],
  },

  en: {
    close: "Close answer",
    open: "Open answer",

    faqItems: [
      {
        id: 1,
        question: "What is required to start cooperation?",
        answer:
          "Contact us by phone at +38 (066) 68 998 57 and/or complete the new client brief so we can understand your business and goals. After that, we take the process into our hands.",
      },
      {
        id: 2,
        question:
          "Can I order only a service package under a 3/6/12-month contract?",
        answer:
          "No. We also work with individual tasks if you already have a clear brand strategy or marketing action plan. We can deliver: logo, identity and corporate style, brand book and guidelines, tagline, company or product presentations, packaging design, Instagram strategy, 2D/3D animation, motion design, website, illustrations, corporate character, commercial space design, image and advertising photography.",
      },
      {
        id: 3,
        question: "Can we work together if I don’t have a marketing team?",
        answer:
          "Yes. We can fully cover branding and strategy or work as your external team.",
      },
      {
        id: 4,
        question: "Can I book a consultation?",
        answer:
          "Yes. We conduct brand-building briefings and strategic consultations for business owners and marketing teams. Our specialists can consult on brand strategy, identity, corporate style, and communications, or conduct a brand session to help you independently develop your brand strategy.",
      },
      {
        id: 5,
        question:
          "What if I only have a business idea and not an operating business yet?",
        answer:
          "We highly recommend starting with a consultation and going through a brand briefing with our team. This will immediately clarify whether we are ready to move together toward building a brand system or whether it’s better to prepare further and return to BOZABRAND later.",
      },
      {
        id: 6,
        question: "Are there categories of clients you do not work with?",
        answer:
          "Yes. We do not take on projects without clear goals, openness to change, and long-term thinking. We do not cooperate with companies whose founders or beneficiaries are residents of the aggressor country, nor with niches that mislead consumers or violate ethical standards: casinos, betting, financial pyramids, pseudo-investment projects, fraudulent services, manipulative infobusinesses, or products with unproven value and promises of guaranteed results.",
      },
    ],
  },
};

export function Faq() {
  const [openId, setOpenId] = useState(1);

  const { language } = useLanguage();

  const data = content[language];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toggleItem = (id: any) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faq">
      <div className="container">
        <div className="faq-top">
          <h2 className="faq-top-title">FAQ</h2>
        </div>

        <div className="faq-accordeon">
          {data.faqItems.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div className="faq-accordeon-item" key={item.id}>
                <div
                  className="faq-accordeon-item-top"
                  onClick={() => toggleItem(item.id)}
                >
                  <div className="faq-accordeon-item-top-left">
                    <p>[{String(item.id).padStart(2, "0")}]</p>
                    <h2>{item.question}</h2>
                  </div>

                  <button
                    type="button"
                    className={`faq-accordeon-icon ${isOpen ? "active" : ""}`}
                    aria-label={isOpen ? data.close : data.open}
                  />
                </div>

                <div
                  className={`faq-accordeon-item-content ${
                    isOpen ? "open" : ""
                  }`}
                >
                  <div className="faq-accordeon-item-content-inner">
                    <div className="faq-accordeon-item-content-body">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
