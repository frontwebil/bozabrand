"use client";

import Image from "next/image";
import Link from "next/link";
import "./Header.css";
import { useWindowWidth } from "../../../../hooks/useWindowWidth";
import { useEffect, useRef, useState } from "react";

export function Header() {
  const width = useWindowWidth();
  const ref = useRef<HTMLDivElement | null>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (ref.current) {
      setHeaderHeight(ref.current.offsetHeight);
    }
  }, [width]); // щоб при ресайзі теж оновлювалось
  return (
    <header className="header" ref={ref}>
      <div className="container">
        <Link href={"/"} className="header-logo">
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
            <Link href={"/cases"} className="header-nav-link">
              ПРОЄКТИ
            </Link>
            <Link href={"/"} className="header-nav-link">
              ПРАЙС&METОД
            </Link>
            <Link href={"/team"} className="header-nav-link">
              НЕПОВЕРХНЕВІ
            </Link>
            <Link href={"/"} className="header-nav-link">
              ПРО БРЕНД
            </Link>
          </nav>
          <div className="header-right-buttons">
            <Link href={"tel:+380666899857"} className="header-cta-button">
              ПОДЗВОНИТИ
            </Link>
            <Link
              target="_blank"
              href={"https://forms.gle/CeaeWGDsjqcDKhTr6"}
              className="header-cta-button"
            >
              ЗАПОВНИТИ БРИФ
            </Link>
          </div>
          {width && width <= 1240 && (
            <button onClick={() => setIsOpen(!isOpen)}>
              <div id="nav-icon3" className={`${isOpen && "open"}`}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          )}
        </div>
      </div>
      <div
        className={`header-menu ${isOpen && "active"}`}
        style={{
          top: `${headerHeight}px`,
          height: `calc(100vh - ${headerHeight}px)`,
        }}
      >
        <div className="header-menu-content">
          <nav className="header-nav-mobile">
            <Link
              onClick={() => {
                setIsOpen(false);
              }}
              href={"/cases"}
              className="header-nav-link"
            >
              ПРОЄКТИ
            </Link>
            <Link
              onClick={() => {
                setIsOpen(false);
              }}
              href={"/"}
              className="header-nav-link"
            >
              ПРАЙС&METОД
            </Link>
            <Link
              onClick={() => {
                setIsOpen(false);
              }}
              href={"/team"}
              className="header-nav-link"
            >
              НЕПОВЕРХНЕВІ
            </Link>
            <Link
              onClick={() => {
                setIsOpen(false);
              }}
              href={"/"}
              className="header-nav-link"
            >
              ПРО БРЕНД
            </Link>
          </nav>
          <div className="header-right-buttons-mobile">
            <Link
              onClick={() => {
                setIsOpen(false);
              }}
              href={"tel:+380666899857"}
              className="header-cta-button"
            >
              ПОДЗВОНИТИ
            </Link>
            <Link
              onClick={() => {
                setIsOpen(false);
              }}
              target="_blank"
              href={"https://forms.gle/CeaeWGDsjqcDKhTr6"}
              className="header-cta-button"
            >
              ЗАПОВНИТИ БРИФ
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
