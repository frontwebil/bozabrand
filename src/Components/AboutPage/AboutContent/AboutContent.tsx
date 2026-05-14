"use client";

import Image from "next/image";
import "./AboutContent.css";
import { useLanguage } from "@/lib/useLanguague";

const importants = [
  "завжди граємо по-чесному.",
  "Дисципліна",
  "Безперервне навчання",
  "Високі стандарти роботи і життя",
  "Людина - найбільша цінність.",
  "Взаємоповага і субординація",
];

const importantsEng = [
  "We always play fair.",
  "Discipline",
  "Continuous learning",
  "High standards of work and life",
  "People are the greatest value.",
  "Mutual respect and subordination",
];

export function AboutContent() {
  const content = {
    uk: {
      aboutContentRightTitle:
        "Ми існуємо для того, щоб робити клієнтський досвід унікальним",
      aboutContentRightTextH: (
        <p className="about-content-right-text-h">
          Ми працюємо над зміною фрейму мислення засновників бізнесів так, щоб
          вони створювали не просто продукт чи послугу, а цілу систему лавмарк,{" "}
          <span style={{ color: "#979595" }}>
            яка включає унікальні продукт, сервіс, талант-команду та
            комунікацію.  
          </span>
        </p>
      ),
      aboutContentRightTextCircle:
        "Ми - команда неповерхневих креаторів проникливих брендів блакитної планети",
    },
    en: {
      aboutContentRightTitle: "We exist to make the customer experience unique",
      aboutContentRightTextH: (
        <p className="about-content-right-text-h">
          We are working on changing the mindset of business founders so that
          they create not just a product or service but an entire lovemark
          system,{" "}
          <span style={{ color: "#979595" }}>
            which includes a unique product, service, talent team, and
            communication.
          </span>
        </p>
      ),
      aboutContentRightTextCircle:
        "WE ARE A TEAM OF NON-SUPERFICIAL CREATORS OF PROFOUND BRANDS OF THE BLUE PLANET",
    },
  };

  const { language } = useLanguage();
  const t = content[language];

  const importantsMain = language == "en" ? importantsEng : importants;

  return (
    <section className="about-content">
      <div className="container">
        <div className="about-content-left-video">
          <video autoPlay muted loop playsInline>
            <source src="/About/video.webm" type="video/webm" />
          </video>
          <div className="about-content-video-logo">
            <Image
              src={"/About/video-logo.svg"}
              width={500}
              height={200}
              alt="Bozobrand video logo"
            />
          </div>
        </div>
        <div className="about-content-right-text">
          <h3 className="about-content-right-text-subtitle">
            {language === "uk" ? "МІСІЯ" : "MISSION"}
          </h3>
          <h2 className="about-content-right-title">
            {t.aboutContentRightTitle}
          </h2>
          <div className="about-content-right-text-block">
            <h3 className="about-content-right-text-subtitle">
              {language === "uk" ? "ВІЗІЯ" : "VISION"}
            </h3>
            {t.aboutContentRightTextH}
          </div>
          <div className="about-content-right-text-circle">
            <div className="about-content-right-text-circle-container-text">
              <p>{language === "uk" ? "ПРОПОЗИЦІЯ" : "PROPOSAL"}</p>
              <h2>{t.aboutContentRightTextCircle}</h2>
            </div>
          </div>
          <div className="about-content-right-importants">
            <h3 className="about-content-right-text-subtitle">цінності</h3>
            <div className="about-content-right-importants-column">
              {importantsMain.map((el, i) => (
                <div className="about-content-right-important-card" key={i}>
                  <div className="about-content-right-important-card-circle"></div>
                  <div className="about-content-right-important-card-text">
                    {el}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
