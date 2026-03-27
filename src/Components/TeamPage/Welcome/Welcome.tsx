import "./Welcome.css";

export function Welcome() {
  return (
    <section className="welcome">
      <div className="container">
        <h1 className="welcome-subTitle">
          Вітаємо у спільноті неповерхневих! 
        </h1>
        <h2 className="welcome-title first">
          Тут створюють бренди, <br /> що змінюють правила.
        </h2>
        <p className="welcome-title-text">Не студія. Не сервіс. </p>
        <div className="welcome-team-text">
          <h2 className="welcome-title">Команда,</h2>
          <p>
            яка разом з тобою заходить глибше - <br /> і виводить бренд на ринок, як
            ударну хвилю. <br />
            <br />
            Ми сенсорно інтегруємося, коли требапробивати стіни, а не просто
            бути красивимна полиці.
          </p>
        </div>
        <div className="welcome-team-under-text">
          <h2 className="welcome-title">
            Хочеш бренд, <br />{" "}
            <span className="font-extralight">який запам’ятовують?</span>
          </h2>
          <h3>Пірнай. </h3>
        </div>
      </div>
    </section>
  );
}
