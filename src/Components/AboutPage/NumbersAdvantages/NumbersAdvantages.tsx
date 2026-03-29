"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import "./NumbersAdvantages.css";

export function NumbersAdvantages() {
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    rowRefs.current.forEach((el) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add("visible");
            observer.disconnect();
          }
        },
        {
          threshold: 0,
          rootMargin: "0px 0px -50px 0px", // спрацьовує трохи раніше ніж елемент повністю видимий
        },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="numbers-advantages">
      <div className="container">
        <div className="numbers-advantges-top">
          <h2>
            Цифри, <br />
            якими ми пишаємося
          </h2>
        </div>

        <div
          ref={(el) => {
            rowRefs.current[0] = el;
          }}
          className="numbers-advantages-number f"
        >
          <h2>13</h2>
          <div className="numbers-advantages-number-circles">
            <Image
              className="numbers-advantages-number-circles-img"
              src={"/About/NumbersStars/13.svg"}
              width={150}
              height={50}
              alt="13 років експертизи у маркетингу"
            />
            <p className="numbers-advantages-number-circles-text">
              років{" "}
              <span style={{ color: "#412AB9" }}>
                експертизи <br /> у маркетингу
              </span>
            </p>
          </div>
        </div>

        <div
          ref={(el) => {
            rowRefs.current[1] = el;
          }}
          className="numbers-advantages-number s"
        >
          <h2>3</h2>
          <div className="numbers-advantages-number-circles">
            <Image
              className="numbers-advantages-number-circles-img-small"
              src={"/About/NumbersStars/3.svg"}
              width={150}
              height={50}
              alt="3 роки злагодженої командної роботи"
            />
            <p className="numbers-advantages-number-circles-text">
              Роки{" "}
              <span style={{ color: "#412AB9" }}>
                злагодженої <br /> командної роботи
              </span>
            </p>
          </div>
        </div>

        <div
          ref={(el) => {
            rowRefs.current[2] = el;
          }}
          className="numbers-advantages-number t"
        >
          <h2>14</h2>
          <div className="numbers-advantages-number-circles">
            <Image
              className="numbers-advantages-number-circles-img"
              src={"/About/NumbersStars/14.svg"}
              width={150}
              height={50}
              alt="14 років створених нових брендів"
            />
            <p className="numbers-advantages-number-circles-text">
              <span style={{ color: "#412AB9" }}>створених нових</span> <br />
              брендів
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
