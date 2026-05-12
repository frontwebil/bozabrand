"use client";

import { useLanguage } from "@/lib/useLanguague";
import "./MethodUnderHeroText.css";

const content = {
  uk: {
    lead: (
      <>
        Ми відчули, що здатні творити на іншому рівні. Об{"'"}єднали найсильніші
        сенсори та досвід кожного таланта команди. <br /> І створили власну
        неповерхневу методику.
      </>
    ),
    rest: "Разом ми створюємо бренди, у які закохуються.",
  },
  en: {
    lead: (
      <>
        We felt that we are able to create at the sensory system level.
        Combined the strongest sensors with the experience of each team
        member&apos;s talent. <br /> And created our own non-superficial
        methodology. <br/>
      </>
    ),
    rest: "Together, we create brands people fall in love with.",
  },
};

export function MethodUnderHeroText() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="MethodUnderHeroText">
      <div className="container">
        <div className="MethodUnderHeroText-text">
          <span style={{ color: "rgba(142, 142, 142, 1)" }}>{t.lead}</span>{" "}
          {t.rest}{" "}
        </div>
      </div>
    </section>
  );
}
