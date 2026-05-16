"use client";

import Image from "next/image";
import "./Footer.css";
import Link from "next/link";
import { useWindowWidth } from "../../../../hooks/useWindowWidth";
import { useLanguage } from "@/lib/useLanguague";

const content = {
  uk: {
    logo: "/Footer/footer-logo.svg",
    intro:
      "І щоб ми могли краще підготуватися до розмови, допоможіть нам відчути ваш запит, заповнивши цю вступну форму",
    brief: "БРИФ",
    nav: {
      cases: "ПРОЄКТИ",
      team: "НЕПОВЕРХНЕВІ",
      about: "ПРО БРЕНД",
      method: "ПРАЙС&METОД",
    },
    country: "УКРАЇНА. ЄВРОПА",
    rights: "ВСІ ПРАВА ЗАХИЩЕНІ",
  },

  en: {
    logo: "/Footer/footer-logo-eng.svg",
    intro:
      "To better prepare for our conversation, help us understand your request by filling out this introduction form",
    brief: "BRIEF",
    nav: {
      cases: "PROJECTS",
      team: "NON-SUPERFICIALS",
      about: "ABOUT BRAND",
      method: "PRICE & METHOD",
    },
    country: "UKRAINE. EUROPE",
    rights: "ALL RIGHTS RESERVED",
  },
};

export function Footer() {
  const width = useWindowWidth();
  const { language } = useLanguage();

  const t = content[language];

  return (
    <div className="container">
      <footer className="footer">
        <div className="footer-top">
          <Image
            src={t.logo}
            alt="BOZABRAND"
            width={1000}
            height={65}
            className="footer-top-left-logo"
          />

          {width && width > 720 && (
            <div className="footer-top-right">
              <p className="footer-top-right-text">{t.intro}</p>

              <Link
                href={"https://forms.gle/CeaeWGDsjqcDKhTr6"}
                target="_blank"
                className="footer-top-right-brief"
              >
                <div className="footer-top-right-brief-circle">
                  <p>{t.brief}</p>
                </div>
              </Link>
            </div>
          )}
        </div>

        <div className="footer-undertop">
          <div className="footer-undertop-left">
            <Link href={"tel:+380666899857"} className="footer-phone-call">
              +38 (066) 689 98 57
            </Link>

            <Link
              href={"https://t.me/IrynaBoza"}
              className="footer-social-link"
              target="_blank"
            >
              TELEGRAM
            </Link>

            <Link
              href={"https://msng.link/o?380666899857=wa"}
              className="footer-social-link"
              target="_blank"
            >
              WHATSAPP
            </Link>
          </div>

          <div className="footer-undertop-right">
            <p>MON-SAT</p>
            <p>8:00 - 22:00</p>
          </div>
        </div>

        {width && width <= 720 && (
          <div className="footer-top-right">
            <p className="footer-top-right-text">{t.intro}</p>

            <Link
              href={"https://forms.gle/CeaeWGDsjqcDKhTr6"}
              target="_blank"
              className="footer-top-right-brief"
            >
              <div className="footer-top-right-brief-circle">
                <p>{t.brief}</p>
              </div>
            </Link>
          </div>
        )}

        <div className="footer-content">
          <div className="footer-content-left">
            <Image
              src={"/Footer/footer-bb.svg"}
              width={61}
              height={29}
              alt="Boza Brand"
            />
            <p>{t.country}</p>
          </div>

          <div className="footer-content-right">
            <div className="footer-content-right-column">
              <Link href={"/cases"} className="footer-content-nav-link">
                {t.nav.cases}
              </Link>
              <Link href={"/team"} className="footer-content-nav-link">
                {t.nav.team}
              </Link>
              <Link href={"/about"} className="footer-content-nav-link">
                {t.nav.about}
              </Link>
              <Link href={"/method"} className="footer-content-nav-link">
                {t.nav.method}
              </Link>
            </div>

            <div className="footer-content-right-column">
              <Link
                href={"https://www.instagram.com/bozabrand/"}
                target="_blank"
                className="footer-social-link"
              >
                INSTAGRAM
              </Link>

              <Link
                href={"https://www.linkedin.com/company/bozabrand"}
                target="_blank"
                className="footer-social-link"
              >
                LINKEDIN
              </Link>

              <Link
                href={
                  "https://www.facebook.com/share/16kXMLmhF8/?mibextid=wwXIfr"
                }
                target="_blank"
                className="footer-social-link"
              >
                FACEBOOK
              </Link>
            </div>

            <div className="footer-content-right-column">
              <Link
                href={"https://forms.gle/CeaeWGDsjqcDKhTr6"}
                target="_blank"
                className="footer-social-link"
              >
                {t.brief}
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-all-rights">
          <p>©2026 BOZABRAND</p>
          <p>{t.rights}</p>
        </div>
      </footer>
    </div>
  );
}
