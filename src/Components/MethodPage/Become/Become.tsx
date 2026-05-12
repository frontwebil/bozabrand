"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/useLanguague";
import "./Become.css";

const content = {
  uk: {
    titleBefore: "Стати",
    titleSpan: "Лавмарком",
    arrowAlt: "Стати лавмарком",
    body: (
      <>
        <p>
          Щось одне не спрацює. У побудові відносин між бізнесом і споживачем,
          тобто новим брендом, важливо бути послідовним, наполегливим і
          системним.
        </p>
        <p className="uppercase">
          Команда неповерхневих комплексно супроводжує бренд на всіх стадіях
          його життя.
        </p>
      </>
    ),
    offerLead: "Ми пропонуємо",
    offerMiddle:
      "контрактне обслуговування зі стратегування та просування бренду на 3 / 6 / 12 міс. ",
    offerTail: "в залежності від бізнес-цілі.",
  },
  en: {
    titleBefore: "Become",
    titleSpan: "Lovemark",
    arrowAlt: "Become a Lovemark",
    body: (
      <>
        <p>
          Something alone will not work. It is important to be consistent,
          persistent and systematic in building a relationship between a
          business and a consumer, that is, creating a brand.
        </p>
        <p className="uppercase">
          The non-superficial team comprehensively accompanies the brand at all
          stages of its life.
        </p>
      </>
    ),
    offerLead: "We offer",
    offerMiddle:
      "contract service for brand strategy and promotion for 3 / 6 / 12 months, ",
    offerTail: "depending on the business objective.",
  },
};

export function Become() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="become">
      <div className="container">
        <Image
          src={"/Become/globev2.png"}
          width={1000}
          height={1000}
          alt="Globe"
          className="become-globe-bg"
        />
        <h2 className="become-title">
          {t.titleBefore} &nbsp;&nbsp; <span>{t.titleSpan}</span>
        </h2>
        <div className="become-content">
          <div className="become-img">
            <Image
              src={"/Become/arrow.svg"}
              width={150}
              height={150}
              alt={t.arrowAlt}
            />
          </div>
          <div className="become-text">
            {t.body}
            <Image
              src={"/Become/icons.svg"}
              width={500}
              height={100}
              className="become-text-icons"
              alt="become-text-icons"
            />
          </div>
        </div>
        <p className="become-undersection-content">
          <span>{t.offerLead}</span> {t.offerMiddle}
          <span>{t.offerTail}</span>
        </p>
      </div>
    </section>
  );
}
