import Image from "next/image";
import "./AboutContent.css";

export function AboutContent() {
  const importants = [
    "завжди граємо по-чесному.",
    "Дисципліна",
    "Безперервне навчання",
    "Високі стандарти роботи і життя",
    "Людина - найбільша цінність.",
    "Взаємоповага і субординація",
  ];
  return (
    <section className="about-content">
      <div className="container">
        <div className="about-content-left-video">
          <video autoPlay muted loop playsInline>
            <source src="/About/video.webm" type="video/webm" />
          </video>
          <div className="about-content-video-logo">
            <Image
              src={"/About/video-logo.svg"}
              width={500}
              height={200}
              alt="Bozobrand video logo"
            />
          </div>
        </div>
        <div className="about-content-right-text">
          <h3 className="about-content-right-text-subtitle">МІСІЯ</h3>
          <h2 className="about-content-right-title">
            Ми існуємо для того, щоб робити клієнтський досвід унікальним
          </h2>
          <div className="about-content-right-text-block">
            <h3 className="about-content-right-text-subtitle">ВІЗІЯ</h3>
            <p className="about-content-right-text-h">
              Ми працюємо над зміною фрейму мислення засновників бізнесів так,
              щоб вони створювали не просто продукт чи послугу, а цілу систему
              лавмарк,{" "}
              <span style={{ color: "#979595" }}>
                яка включає унікальні продукт, сервіс, талант-команду та
                комунікацію.  
              </span>
            </p>
          </div>
          <div className="about-content-right-text-circle">
            <div className="about-content-right-text-circle-container-text">
              <p>Пропозиція </p>
              <h2>
                Ми - команда неповерхневих креаторів проникливих брендів
                блакитної планети
              </h2>
            </div>
          </div>
          <div className="about-content-right-importants">
            <h3 className="about-content-right-text-subtitle">цінності</h3>
            <div className="about-content-right-importants-column">
              {importants.map((el, i) => (
                <div className="about-content-right-important-card" key={i}>
                  <div className="about-content-right-important-card-circle"></div>
                  <div className="about-content-right-important-card-text">
                    {el}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
