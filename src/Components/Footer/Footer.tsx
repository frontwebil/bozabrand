"use client";

import Image from "next/image";
import "./Footer.css";
import Link from "next/link";
import { useWindowWidth } from "../../../hooks/useWindowWidth";

export function Footer() {
  const width = useWindowWidth();

  return (
    <div className="container">
      <footer className="footer">
        <div className="footer-top">
          <Image
            src={"/Footer/footer-logo.svg"}
            alt="Ми на відстані дотику"
            width={1000}
            height={65}
            className="footer-top-left-logo"
          />
          {width && width > 720 && (
            <div className="footer-top-right">
              <p className="footer-top-right-text">
                І щоб ми могли краще підготуватися до розмови, допоможіть нам
                відчути ваш запит, заповнивши цю вступну форму
              </p>
              <div className="footer-top-right-brief">
                <div className="footer-top-right-brief-circle">
                  <p>BRIEF</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="footer-undertop">
          <div className="footer-undertop-left">
            <Link href={"tel:+380666899857"} className="footer-phone-call">
              +38 (066) 689 98 57
            </Link>
            <Link href={"/"} className="footer-social-link">
              TELEGRAM
            </Link>
            <Link href={"/"} className="footer-social-link">
              WHATSAPP
            </Link>
          </div>
          <div className="footer-undertop-right">
            <p>ПН-СБ</p>
            <p>8:00 - 22:00</p>
          </div>
        </div>
        {width && width <= 720 && (
          <div className="footer-top-right">
            <p className="footer-top-right-text">
              І щоб ми могли краще підготуватися до розмови, допоможіть нам
              відчути ваш запит, заповнивши цю вступну форму
            </p>
            <div className="footer-top-right-brief">
              <div className="footer-top-right-brief-circle">
                <p>BRIEF</p>
              </div>
            </div>
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
            <p>UKRAINE. EUROPE</p>
          </div>
          <div className="footer-content-right">
            <div className="footer-content-right-column">
              <Link href={"/"} className="footer-content-nav-link">
                ПРОЕКТИ
              </Link>
              <Link href={"/"} className="footer-content-nav-link">
                НЕПОВЕРХНЕВІ
              </Link>
              <Link href={"/"} className="footer-content-nav-link">
                ПРО БРЕНД
              </Link>
              <Link href={"/"} className="footer-content-nav-link">
                ПРАЙС&METОД
              </Link>
            </div>
            <div className="footer-content-right-column">
              <Link
                href={"https://www.instagram.com/bozabrand/"}
                className="footer-social-link"
              >
                INSTAGRAM
              </Link>
              <Link
                href={"https://www.linkedin.com/company/bozabrand"}
                className="footer-social-link"
              >
                LINKEDIN
              </Link>
              <Link
                href={
                  "https://www.facebook.com/share/16kXMLmhF8/?mibextid=wwXIfr"
                }
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
                FILL IN THE BRIEF
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-all-rights">
          <p>©2026 BOZABRAND</p>
          <p>ALL right reserved</p>
        </div>
      </footer>
    </div>
  );
}
