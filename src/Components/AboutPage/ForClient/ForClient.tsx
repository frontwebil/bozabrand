"use client";

import Image from "next/image";
import "./ForClient.css";
import { useLanguage } from "@/lib/useLanguague";

export function ForClient() {
  const { language } = useLanguage();

  return (
    <section className="for-client">
      <div className="container">
        <div className="for-client-left-text">
          <p>{language == "en" ? "FOR DIVERS" : "Клієнту"}</p>
          <h2>
            {language == "en"
              ? "We are on the same track if you are ready to create brands together that fall in people's hearts"
              : "Тобі точно до нас, якщо ти готовий разом створювати бренди, які западають у серця людей"}
          </h2>
        </div>
        <div className="for-client-right-img">
          <Image
            src={"/About/ForClient/mainv3.png"}
            width={1000}
            height={1000}
            alt="ТОБІ ТОЧНО ДО НАС, ЯКЩО ТИ ГОТОВИЍ РАЗОМ СТВОРЮВАТИ БРЕНДИ, ЯКІ ЗАПАДАЮТЬ У CЕРЦЯ ЛЮДЕЍ"
          />
        </div>
      </div>
    </section>
  );
}
