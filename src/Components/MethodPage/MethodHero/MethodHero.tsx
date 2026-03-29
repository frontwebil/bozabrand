import "./MethodHero.css";

export function MethodHero() {
  return (
    <section className="MethodHero">
      <div className="MethodHero-container">
        <video autoPlay muted loop playsInline className="MethodHero-video">
          <source src="/Method/cycle-video.webm" type="video/webm" />
        </video>
        <div className="MethodHero-video-text">
          BOZABRAND - це команда неповерхневих, яка створює проникливі бренди
          блакитної планети.{" "}
          <span style={{ color: "rgba(142, 142, 142, 1)" }}>
            Бренди, які знають, що роблять, готові до росту і які западають у
            душі людей. Це те, що працює в межах раціонального і при цьому діє
            на рівні сенсорної системи.
          </span>
        </div>
      </div>
      <div className="MethodHero-undervideo-text">
        <span className="line line-1">
          Щоб виграти гру, повинна бути стратегія.
        </span>
        <span className="line line-2">
          Ми маємо намір залишити слід у світовій історії, а нашої кваліфікації
          достатньо, щоб зробити це фантастично
        </span>
      </div>
    </section>
  );
}
