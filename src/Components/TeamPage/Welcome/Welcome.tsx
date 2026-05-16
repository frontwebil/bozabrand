import "./Welcome.css";
import { useLanguage } from "@/lib/useLanguague";

const content = {
  uk: {
    subTitle: "Вітаємо у спільноті неповерхневих!",
    title: (
      <>
        Тут створюють бренди, <br /> що змінюють правила.
      </>
    ),
    smallText: "Не студія. Не сервіс.",
    teamTitle: "Команда,",
    teamText: (
      <>
        яка разом з тобою заходить глибше - <br /> і виводить бренд на ринок, як
        ударну хвилю.
        <br />
        <br />
        Ми сенсорно інтегруємося, коли треба пробивати стіни, а не просто бути
        красивим на полиці.
      </>
    ),
    underTitle: (
      <>
        Хочеш бренд, <br />
        <span className="font-extralight">який запам’ятовують?</span>
      </>
    ),
    dive: "Пірнай.",
  },

  en: {
    subTitle: "Welcome to the Non-Superficial Community.",
    title: (
      <>
        Here, brands are created  that change the rules.
      </>
    ),
    smallText: "Not a studio. Not a service.",
    teamTitle: "A strike team",
    teamText: (
      <>
        for bold brands that dare to break in - <br /> and stand out.
        <br />
        <br />
        We go deeper. We go louder.
        <br />
        And we move with those who aren’t here to blend in.
      </>
    ),
    underTitle: (
      <>
        Want a brand that hits? <br /> 
      </>
    ),
    dive: "Dive in.",
  },
};

export function Welcome() {
  const { language } = useLanguage();

  const t = content[language];

  return (
    <section className="welcome">
      <div className="container">
        <h1 className="welcome-subTitle">{t.subTitle}</h1>

        <h2 className="welcome-title first">{t.title}</h2>

        <p className="welcome-title-text">{t.smallText}</p>

        <div className="welcome-team-text">
          <h2 className="welcome-title">{t.teamTitle}</h2>

          <p>{t.teamText}</p>
        </div>

        <div className="welcome-team-under-text">
          <h2 className="welcome-title">{t.underTitle}</h2>

          <h3>{t.dive}</h3>
        </div>
      </div>
    </section>
  );
}
