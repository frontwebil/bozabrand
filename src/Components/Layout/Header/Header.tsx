"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import "./Header.css";
import { useWindowWidth } from "../../../../hooks/useWindowWidth";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/useLanguague";

const content = {
  uk: {
    nav: {
      cases: "ПРОЄКТИ",
      method: "ПРАЙС&METОД",
      team: "НЕПОВЕРХНЕВІ",
      about: "ПРО БРЕНД",
    },
    cta: {
      call: "ПОДЗВОНИТИ",
      brief: "ЗАПОВНИТИ БРИФ",
    },
  },
  en: {
    nav: {
      cases: "PROJECTS",
      method: "PRICE & METHOD",
      team: "NON-SUPERFICIALS",
      about: "ABOUT BRAND",
    },
    cta: {
      call: "CALL US",
      brief: "FILL IN THE BRIEF",
    },
  },
};

export function Header() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  const width = useWindowWidth();
  const ref = useRef<HTMLDivElement | null>(null);

  const [headerHeight, setHeaderHeight] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const { language, setLanguage } = useLanguage();

  const t = content[language];

  useEffect(() => {
    if (ref.current) {
      setHeaderHeight(ref.current.offsetHeight);
    }
  }, [width]);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <header className="header" ref={ref}>
      <div className="container">
        <Link href={"/"} className="header-logo" onClick={scrollToTop}>
          <Image
            src={"/logo.svg"}
            width={260}
            height={33}
            alt="BOZABRAND"
            loading="eager"
          />
        </Link>

        <div className="header-right">
          <nav className="header-nav">
            <Link
              href={"/cases"}
              className={`header-nav-link ${isActive("/cases") ? "active" : ""}`}
            >
              {t.nav.cases}
            </Link>

            <Link
              href={"/method"}
              className={`header-nav-link ${isActive("/method") ? "active" : ""}`}
            >
              {t.nav.method}
            </Link>

            <Link
              href={"/team"}
              className={`header-nav-link ${isActive("/team") ? "active" : ""}`}
            >
              {t.nav.team}
            </Link>

            <Link
              href={"/about"}
              className={`header-nav-link ${isActive("/about") ? "active" : ""}`}
            >
              {t.nav.about}
            </Link>
          </nav>

          <div className="header-right-buttons">
            <Link href={"tel:+380666899857"} className="header-cta-button">
              {t.cta.call}
            </Link>

            <Link
              target="_blank"
              href={"https://forms.gle/CeaeWGDsjqcDKhTr6"}
              className="header-cta-button"
            >
              {t.cta.brief}
            </Link>
          </div>

          {width && width <= 1300 && (
            <button onClick={() => setIsOpen(!isOpen)}>
              <div id="nav-icon3" className={`${isOpen && "open"}`}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          )}

          <div className="header-right-languague">
            <p
              style={{ color: language === "uk" ? "#5919c1" : "#000000" }}
              onClick={() => setLanguage("uk")}
            >
              UA
            </p>

            <div className="header-right-languague-line"></div>

            <p
              style={{ color: language === "en" ? "#5919c1" : "#000000" }}
              onClick={() => setLanguage("en")}
            >
              EN
            </p>
          </div>
        </div>
      </div>

      <div
        className={`header-menu ${isOpen ? "active" : ""}`}
        style={{
          top: `${headerHeight}px`,
          height: `calc(100vh - ${headerHeight}px)`,
        }}
      >
        <div className="header-menu-content">
          <nav className="header-nav-mobile">
            <Link
              onClick={() => setIsOpen(false)}
              href={"/cases"}
              className={`header-nav-link ${isActive("/cases") ? "active" : ""}`}
            >
              {t.nav.cases}
            </Link>

            <Link
              onClick={() => setIsOpen(false)}
              href={"/method"}
              className={`header-nav-link ${isActive("/method") ? "active" : ""}`}
            >
              {t.nav.method}
            </Link>

            <Link
              onClick={() => setIsOpen(false)}
              href={"/team"}
              className={`header-nav-link ${isActive("/team") ? "active" : ""}`}
            >
              {t.nav.team}
            </Link>

            <Link
              onClick={() => setIsOpen(false)}
              href={"/about"}
              className={`header-nav-link ${isActive("/about") ? "active" : ""}`}
            >
              {t.nav.about}
            </Link>
          </nav>

          <div className="header-right-buttons-mobile">
            <Link
              onClick={() => setIsOpen(false)}
              href={"tel:+380666899857"}
              className="header-cta-button"
            >
              {t.cta.call}
            </Link>

            <Link
              onClick={() => setIsOpen(false)}
              target="_blank"
              href={"https://forms.gle/CeaeWGDsjqcDKhTr6"}
              className="header-cta-button"
            >
              {t.cta.brief}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
