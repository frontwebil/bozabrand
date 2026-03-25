import Image from "next/image";
import "./Footer.css";
import Link from "next/link";

export function Footer() {
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
        </div>
        <div className="footer-undertop">
          <div className="footer-undertop">
            <div className="footer-undertop-left">
              <Link href={"tel:+380666899857"} className="footer-phone-call">+38 (066) 689 98 57</Link>
              <Link href={"/"} className="footer-social-link">TELEGRAM</Link>
              <Link href={"/"} className="footer-social-link">WHATSAPP</Link>
            </div>
            <div className="footer-undertop-right">
              <p>ПН-СБ</p>
              <p>8:00 - 22:00</p>
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
