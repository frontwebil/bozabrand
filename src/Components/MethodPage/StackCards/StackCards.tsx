"use client";

import Image from "next/image";
import "./StackCards.css";
import { useWindowWidth } from "../../../../hooks/useWindowWidth";
import { useLanguage } from "@/lib/useLanguague";
import {
  stackCardsEnglishDesktop,
  stackCardsEnglishMobile,
  stackCardsEnglishTitle,
} from "./stackCardsEnglish";

const ImgCards = [
  {
    bgImage: "/Method/StackCards/bg0.png",
    image: "/Method/StackCards/img0v2.png",
  },
  {
    bgImage: "/Method/StackCards/bg1.png",
    image: "/Method/StackCards/img1v2.png",
  },
  {
    bgImage: "/Method/StackCards/bg2.png",
    image: "/Method/StackCards/img2v2.png",
  },
  {
    bgImage: "/Method/StackCards/bg3.png",
    image: "/Method/StackCards/img3v2.png",
  },
  {
    bgImage: "/Method/StackCards/bg4.png",
    image: "/Method/StackCards/img4v2.png",
  },
  {
    bgImage: "/Method/StackCards/bg5.png",
    image: "/Method/StackCards/img5v2.png",
  },
  {
    bgImage: "/Method/StackCards/bg6.png",
    image: "/Method/StackCards/img6v2.png",
  },
];

const SCALE_STEP = 100;
const SCALE_MAX = 11000;
const CARD_COUNT = ImgCards.length;
const FULL_SCALE = Array.from(
  { length: SCALE_MAX / SCALE_STEP + 1 },
  (_, i) => i * SCALE_STEP,
);

const textCards = [
  {
    title: "ВСТАНОВЛЮЄМО КОНТАКТ",
    sideTitle: "проводимо інструктажі СЕО і команд",
    sections: [
      {
        title: "ГЛИБИННИЙ ІНСТРУКТАЖ:",
        list: ["навчання «Мисли як бренд»"],
      },
      {
        title: "КОМАНДНИЙ ІНСТРУКТАЖ:",
        list: ["фасилітація роботи бренд- та маркетинг-команд"],
      },
      {
        title: "ДРАЙВОВИЙ ІНСТРУКТАЖ:",
        list: [
          "побудова майнд-мепу, діагностика бізнесу, генерація ідей, перезбірка бізнес-моделі",
        ],
      },
    ],
  },
  {
    title: "РЕГУЛЮЄМО ЗВУК",
    sections: [
      {
        title: "РОЗРОБКА РЕКЛАМНОЇ КАМПАНІЇ",
        list: [
          "Розробляємо центральну ідею",
          "Масштабуємо ідею на обрані формати комунікації",
          "Запускаємо таргетовану рекламу",
          "Працюємо з лідерами думок",
          "Контролюємо хід проведення рекламної кампанії",
          "Аналізуємо KPI",
        ],
      },
      {
        title: "РЕЗУЛЬТАТ",
        list: [
          "Креативи у необхідних форматах",
          "Сценарії роликів",
          "Центральний візуал, активації",
          "Банери",
          "Презентація компанії",
          "Презентація продукту",
          "Анімація 2d/3d",
          "Ілюстрація",
          "Аналітичний звіт за результатами рекламної кампанії",
        ],
      },
    ],
  },
  {
    title: "ДАЄМО ДИХАННЯ",
    sections: [
      {
        title: "РОЗРОБКА ПЛАНУ ТА СУПРОВІД ЗАПУСКУ",
        list: [
          "Розробляємо ідею кампанії",
          "Проводимо інструктаж усіх підрядників проєкту",
          "Створюємо контент з новою ідеєю бренду",
          "Розробляємо сайт",
          "Розробляємо стратегію ведення та контент для сторінок Instagram, Facebook, LinkedIn",
          "Запускаємо таргетовану рекламу",
          "Працюємо з лідерами думок",
          "Аналізуємо KPI",
        ],
      },
      {
        title: "РЕЗУЛЬТАТ",
        list: [
          "Контент-план знайомства аудиторії з брендом",
          "Креативи для обраних каналів комунікації — первинне знайомство потенційних споживачів з брендом",
          "Макети рекламної продукції та мерчу, готові до запуску",
          "Іміджеве фото",
          "Фото та відео, креативи для обраних каналів комунікації",
          "Сайт",
          "Презентація компанії",
          "Презентація продукту",
          "Анімація 2d/3d",
          "Ілюстрація",
          "Аналітичний звіт за результатами запуску",
        ],
      },
    ],
  },
  {
    title: "НАЛАШТОВУЄМО ЗВУК",
    sections: [
      {
        title: "РОЗРОБКА СТРАТЕГІЇ КОМУНІКАЦІЇ",
        list: [
          "Проводимо дослідження споживацьких настроїв для різних сегментів споживачів",
          "Розробляємо креативну ідею комунікації в обраних каналах",
          "Формуємо медіа-план",
          "Контролюємо хід проведення комунікаційної кампанії",
          "Аналізуємо KPI",
        ],
      },
      {
        title: "РЕЗУЛЬТАТ",
        list: [
          "Медіа-план з вимірюванням метрик та конкретними креативами",
          "Готовий контент для обраних каналів комунікації",
          "Макети рекламної продукції та мерчу, готові до запуску",
          "Креативи для обраних каналів комунікації",
          "Іміджева фотозйомка",
          "Рекламні відеоролики",
          "Презентація компанії",
          "Презентація продукту",
          "Анімація 2d/3d",
          "Ілюстрація",
        ],
      },
    ],
  },
  {
    title: "ДЕТАЛІЗУЄМО ПОГЛЯД",
    sections: [
      {
        title: "РОЗРОБКА ФІРМОВОГО СТИЛЮ",
        list: [
          "Розробляємо макети конкретної фірмової продукції, сувенірів, мерчу",
          "Залишаємося на зв’язку з підрядниками-виробниками",
          "Готуємо файли до виробництва",
          "Контролюємо процес виробництва",
        ],
      },
      {
        title: "РЕЗУЛЬТАТ",
        list: [
          "Макети рекламної продукції, мерчу, підготовлені до виробництва",
          "Гайдлайн",
          "Брендбук",
        ],
      },
    ],
  },
  {
    title: "ФОРМУЄМО ПОГЛЯД",
    sections: [
      {
        title: "РОЗРОБКА АЙДЕНТИКИ",
        list: [
          "Проводимо дизайн-сесію",
          "Створюємо персоналізовану карту настрою",
          "Розробляємо варіанти концепт-дизайну",
          "Створюємо фінальну презентацію айдентики",
        ],
      },
      {
        title: "РЕЗУЛЬТАТ",
        list: [
          "Метафоричний центральний візуальний образ бренду",
          "Логотип і всі можливі версії",
          "Шрифти, кольори, графіка",
          "Візуальні прийоми, композиція",
          "Приклади реалізації на носіях",
          "Ідеї ексклюзивного мерчу",
        ],
      },
    ],
  },
  {
    title: "ВСТАНОВЛЮЄМО РІВНОВАГУ",
    sections: [
      {
        title: "РОЗРОБКА СТРАТЕГІЇ БРЕНДУ",
        list: [
          "Проводимо освітній день для команди",
          "Знаходимо “серце” бренду на бренд-сесії",
          "Досліджуємо цільову аудиторію",
          "Проводимо глибинні опитування",
          "Вивчаємо категорію та конкурентів",
          "Формуємо центральну ідею бренду",
          "Створюємо корпоративного персонажа",
          "Створюємо цілісну бренд-платформу",
        ],
      },
      {
        title: "РЕЗУЛЬТАТ",
        list: [
          "Місія",
          "Цінності",
          "Позиціонування",
          "Цільова людина",
          "Повідомлення",
          "Унікальність",
          "Характер: мова, вайб, музика, образ",
        ],
      },
    ],
  },
];

const textCardsMobile = [
  {
    title: "РЕГУЛЮЄМО ЗВУК",
    sections: [
      {
        title: "РОЗРОБКА РЕКЛАМНОЇ КАМПАНІЇ",
        list: [
          "Розробляємо центральну ідею",
          "Масштабуємо ідею на обрані формати комунікації",
          "Запускаємо таргетовану рекламу",
          "Працюємо з лідерами думок",
          "Контролюємо хід проведення рекламної кампанії",
          "Аналізуємо KPI",
        ],
      },
      {
        title: "РЕЗУЛЬТАТ",
        list: [
          "Креативи у необхідних форматах",
          "Сценарії роликів",
          "Центральний візуал, активації",
          "Банери",
          "Презентація компанії",
          "Презентація продукту",
          "Анімація 2d/3d",
          "Ілюстрація",
          "Аналітичний звіт за результатами рекламної кампанії",
        ],
      },
    ],
  },
  {
    title: "ДАЄМО ДИХАННЯ",
    sections: [
      {
        title: "РОЗРОБКА ПЛАНУ ТА СУПРОВІД ЗАПУСКУ",
        list: [
          "Розробляємо ідею кампанії",
          "Проводимо інструктаж усіх підрядників проєкту",
          "Створюємо контент з новою ідеєю бренду",
          "Розробляємо сайт",
          "Розробляємо стратегію ведення та контент для сторінок Instagram, Facebook, LinkedIn",
          "Запускаємо таргетовану рекламу",
          "Працюємо з лідерами думок",
          "Аналізуємо KPI",
        ],
      },
      {
        title: "РЕЗУЛЬТАТ",
        list: [
          "Контент-план знайомства аудиторії з брендом",
          "Креативи для обраних каналів комунікації",
          "Макети рекламної продукції та мерчу, готові до запуску",
          "Іміджеве фото",
          "Фото та відео, креативи для каналів комунікації",
          "Сайт",
          "Презентація компанії",
          "Презентація продукту",
          "Анімація 2d/3d",
          "Ілюстрація",
          "Аналітичний звіт за результатами запуску",
        ],
      },
    ],
  },
  {
    title: "НАЛАШТОВУЄМО ЗВУК",
    sections: [
      {
        title: "РОЗРОБКА СТРАТЕГІЇ КОМУНІКАЦІЇ",
        list: [
          "Проводимо дослідження споживацьких настроїв для різних сегментів споживачів",
          "Розробляємо креативну ідею комунікації в обраних каналах",
          "Формуємо медіа-план",
          "Контролюємо хід проведення комунікаційної кампанії",
          "Аналізуємо KPI",
        ],
      },
      {
        title: "РЕЗУЛЬТАТ",
        list: [
          "Медіа-план з вимірюванням метрик та конкретними креативами",
          "Готовий контент для обраних каналів комунікації",
          "Макети рекламної продукції та мерчу, готові до запуску",
          "Креативи для обраних каналів комунікації",
          "Іміджева фотозйомка",
          "Рекламні відеоролики",
          "Презентація компанії",
          "Презентація продукту",
          "Анімація 2d/3d",
          "Ілюстрація",
        ],
      },
    ],
  },
  {
    title: "ДЕТАЛІЗУЄМО ПОГЛЯД",
    sections: [
      {
        title: "РОЗРОБКА ФІРМОВОГО СТИЛЮ",
        list: [
          "Розробляємо макети конкретної фірмової продукції, сувенірів, мерчу",
          "Залишаємося на зв’язку з підрядниками-виробниками",
          "Готуємо файли до виробництва",
          "Контролюємо процес виробництва",
        ],
      },
      {
        title: "РЕЗУЛЬТАТ",
        list: [
          "Макети рекламної продукції, мерчу, підготовлені до виробництва",
          "Гайдлайн",
          "Брендбук",
        ],
      },
    ],
  },
  {
    title: "ФОРМУЄМО ПОГЛЯД",
    sections: [
      {
        title: "РОЗРОБКА АЙДЕНТИКИ",
        list: [
          "Проводимо дизайн-сесію",
          "Створюємо персоналізовану карту настрою",
          "Розробляємо варіанти концепт-дизайну",
          "Створюємо фінальну презентацію айдентики",
        ],
      },
      {
        title: "РЕЗУЛЬТАТ",
        list: [
          "Метафоричний центральний візуальний образ бренду",
          "Логотип і всі можливі версії",
          "Шрифти, кольори, графіка",
          "Візуальні прийоми, композиція",
          "Приклади реалізації на носіях",
          "Ідеї ексклюзивного мерчу",
        ],
      },
    ],
  },
  {
    title: "ВСТАНОВЛЮЄМО РІВНОВАГУ",
    sections: [
      {
        title: "РОЗРОБКА СТРАТЕГІЇ БРЕНДУ",
        list: [
          "Проводимо освітній день для команди",
          "Знаходимо “серце” бренду на бренд-сесії",
          "Досліджуємо цільову аудиторію",
          "Проводимо глибинні опитування",
          "Вивчаємо категорію та конкурентів",
          "Формуємо центральну ідею бренду",
          "Створюємо корпоративного персонажа",
          "Створюємо цілісну бренд-платформу",
        ],
      },
      {
        title: "РЕЗУЛЬТАТ",
        list: [
          "Місія",
          "Цінності",
          "Позиціонування",
          "Цільова людина",
          "Повідомлення",
          "Унікальність",
          "Характер: мова, вайб, музика, образ",
        ],
      },
    ],
  },
];

const generateScale = (index: number, totalCards: number = CARD_COUNT) => {
  const itemsPerCard = Math.ceil(FULL_SCALE.length / totalCards);
  const start = index * itemsPerCard;
  const end = Math.min(start + itemsPerCard, FULL_SCALE.length);

  return FULL_SCALE.slice(start, end);
};

const stackCardsUkTitle = "проводимо інструктажі СЕО і команд";

export function StackCards() {
  const width = useWindowWidth();
  const { language } = useLanguage();
  const sectionTitle =
    language === "en" ? stackCardsEnglishTitle : stackCardsUkTitle;
  const desktopCards =
    language === "en" ? stackCardsEnglishDesktop : textCards;
  const mobileCards =
    language === "en" ? stackCardsEnglishMobile : textCardsMobile;

  return (
    <section className="stack-cards-section">
      <div className="container">
        <h2 className="stack-cards-title">{sectionTitle}</h2>

        <div className="stack-cards">
          {width && width >= 700 ? (
            desktopCards.map((card, i) => {
              const isFirstCard = i === 0;
              const sideTitle =
                "sideTitle" in card
                  ? (card as { sideTitle?: string }).sideTitle
                  : undefined;

              return (
                <div
                  className={`stack-card${isFirstCard ? " stack-card--first" : ""}`}
                  key={i}
                >
                  <div
                    className={`stack-cards-text-block${isFirstCard ? " stack-cards-text-block--first" : ""}`}
                  >
                    <h2>{card.title}</h2>

                    <div className="stack-cards-text-block-content">
                      {isFirstCard && sideTitle ? (
                        <>
                          <p className="stack-cards-side-title">{sideTitle}</p>
                          <div className="stack-cards-text-block-content-main">
                            {card.sections.map((section, index) => (
                              <div
                                className="stack-cards-text-block-content-card"
                                key={index}
                              >
                                <h3>{section.title}</h3>

                                <ul className="stack-cards-text-block-content-card-list">
                                  {section.list.map((item, itemIndex) => (
                                    <li key={itemIndex}>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </>
                      ) : (
                        card.sections.map((section, index) => (
                          <div
                            className="stack-cards-text-block-content-card"
                            key={index}
                          >
                            <h3>{section.title}</h3>

                            <ul className="stack-cards-text-block-content-card-list">
                              {section.list.map((item, itemIndex) => (
                                <li key={itemIndex}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                  <div
                    className={`stack-cards-img-block${isFirstCard ? " stack-cards-img-block--first" : ""}`}
                    style={{ backgroundImage: `url(${ImgCards[i].bgImage})` }}
                  >
                    <div className="bottom-scale left">
                      <div className="bottom-scale-track">
                        {generateScale(i, desktopCards.length).map((num, index) => (
                          <div className="bottom-scale-item" key={index}>
                            <span className="bottom-scale-dot"></span>
                            <span className="bottom-scale-number">
                              - {num}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Image
                      src={ImgCards[i].image}
                      width={500}
                      height={500}
                      alt={`card-${i + 1}`}
                    />
                  </div>
                </div>
              );
            })
          ) : (
            <div className="stack-mobile">
              <div className="stack-mobile-text-blocks">
                {mobileCards.map((card, i) => (
                  <div className="stack-cards-text-block" key={i}>
                    <h2>{card.title}</h2>

                    <div className="stack-cards-text-block-content">
                      {card.sections.map((section, index) => (
                        <div
                          className="stack-cards-text-block-content-card"
                          key={index}
                        >
                          <h3>{section.title}</h3>

                          <ul className="stack-cards-text-block-content-card-list">
                            {section.list.map((item, itemIndex) => (
                              <li key={itemIndex}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="stack-mobile-imgs">
                {ImgCards.map((el, i) => (
                  <div
                    className="stack-cards-img-block"
                    style={{ backgroundImage: `url(${el.bgImage})` }}
                    key={i}
                  >
                    <div className="bottom-scale left">
                      <div className="bottom-scale-track">
                        {generateScale(i, ImgCards.length).map((num, index) => (
                          <div className="bottom-scale-item" key={index}>
                            <span className="bottom-scale-dot"></span>
                            <span className="bottom-scale-number">- {num}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Image
                      src={el.image}
                      width={500}
                      height={500}
                      alt={`card-${i + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
