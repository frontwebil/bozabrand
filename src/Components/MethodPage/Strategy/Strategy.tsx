import Image from "next/image";
import "./Strategy.css";
import Link from "next/link";

const strategyCards = [
  {
    title: "На хвилі ідеї",
    description:
      "Ти ще не в дорозі, але вже дихаєш океаном мрій. Інтуїція - твій компас, а перші задуми - течія, що кличе. Ти шукаєш свою зграю, складаєш карту курсу й готуєшся вивести бізнес на поверхню.",
    list: [
      "ГЛИБИННИЙ ІНСТРУКТАЖ",
      "КОМАНДНИЙ ІНСТРУКТАЖ",
      "ДРАЙВОВИЙ ІНСТРУКТАЖ",
    ],
    price: "€ 500+",
    image: "/Strategy/1.png",
  },
  {
    title: "Зграя зростає",
    description:
      "З'являються однодумці. Ви ще не одне ціле, але вже рухаєтесь в одному напрямку. Вчитесь плисти разом, зв'язки зміцнюються, але ще легко збитися з курсу. Настає момент закріпити маршрут і не розсипатись в хаосі.",
    list: [
      "ІДЕЯ БРЕНДУ",
      "НАЗВА",
      "МОВА БРЕНДУ",
      "ЛОГОТИП",
      "АЙДЕНТИКА",
      "ЗАПУСК",
    ],
    price: "€ 7 000+",
    image: "/Strategy/2.png",
  },
  {
    title: "Гра на випередження",
    description:
      "Бізнес масштабується. Команда - єдиний організм. Шліфуєш процеси, розтягуєшся в різні напрямки, але керуєш єдиним мозком. Працюєш, водночас, багатозадачність - це не просто пливете, ви маневруєте.",
    list: [
      "ДОСЛІДЖЕННЯ",
      "БРЕНД-ПЛАТФОРМА",
      "ФІРМОВИЙ СТИЛЬ",
      "РЕКЛАМНА КАМПАНІЯ",
      "МЕДІА ПРОСУВАННЯ",
      "КРЕАТИВНИЙ ПЛАН",
    ],
    price: "€ 10 000+",
    image: "/Strategy/3.png",
  },
  {
    title: "Океанічний масштаб",
    description:
      "Присутність компанії відчутна в глибинах і на поверхні. Бізнес - впливовий гравець, цін не боїться глибоких вод. Компетентність — твоя течія, мудрість — твій ритм. Ти не частина потоку - ти його творець.",
    list: [
      "БРЕНД ПРОДУКТІВ",
      "ДОСЛІДЖЕННЯ CRM",
      "HR БРЕНД",
      "ПРЕЗЕНТАЦІЯ ПАРТНЕРАМ",
      "ПАРТНЕРСТВО",
      "РЕКЛАМНА КАМПАНІЯ",
    ],
    price: "€ 12 000+",
    image: "/Strategy/4.png",
  },
];

export function Strategy() {
  return (
    <section className="strategy">
      <div className="container">
        <h2 className="strategy-title">Стратегічні рішення</h2>

        <div className="strategy-cards">
          {strategyCards.map((card, i) => (
            <div className="strategy-card" key={i}>
              <h2 className="strategy-card-title">{card.title}</h2>

              <p className="strategy-card-description">{card.description}</p>

              <div className="strategy-card-row">
                <div className="strategy-card-left-text">
                  <h3>Що ми пропонуємо</h3>

                  <ul className="strategy-card-left-text-list">
                    {card.list.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <Image
                  src={card.image}
                  width={200}
                  height={200}
                  alt={card.title}
                />
              </div>

              <div className="strategy-card-price">
                <div className="strategy-card-column">
                  <h3>Бюджет : {card.price}</h3>
                  <p>
                    Детальний розрахунок вартості формується після заповнення
                    брифу
                  </p>
                </div>

                <Link
                  href={"tel:+380666899857"}
                  target="_blank"
                  className="strategy-card-price-button"
                >
                  звʼязатися
                </Link>
              </div>
              <p className="hero-accordeon-card-text-gray-premitka">
                Ціни на сайті наведені в євро. Розрахунок здійснюється в гривнях
                за офіційним курсом Національного банку України на день
                здійснення платежу згідно з чинним законодавством України.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
