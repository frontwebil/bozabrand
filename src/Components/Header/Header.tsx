import Image from "next/image";
import Link from "next/link";
import "./Header.css";

export function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-logo">
          <Image
            src={"/logo.svg"}
            width={260}
            height={33}
            alt="BOZABRAND"
            loading="eager"
          />
        </div>
        <div className="header-right">
          <nav className="header-nav">
            <Link href={"/"} className="header-nav-link">
              ПРОЕКТИ
            </Link>
            <Link href={"/"} className="header-nav-link">
              НЕПОВЕРХНЕВІ
            </Link>
            <Link href={"/"} className="header-nav-link">
              ПРО БРЕНД
            </Link>
            <Link href={"/"} className="header-nav-link">
              ПРАЙС&METОД
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
        </div>
      </div>
    </header>
  );
}
