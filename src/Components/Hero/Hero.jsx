import "./Hero.css";
import { HeroAccordeon } from "./HeroAccordeon/HeroAccordeon";

export function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <HeroAccordeon />
        <div className="hero-video-container">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/Hero/hero.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
}
