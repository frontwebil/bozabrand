import Image from "next/image";
import "./Footer.css";

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
      </footer>
    </div>
  );
}
