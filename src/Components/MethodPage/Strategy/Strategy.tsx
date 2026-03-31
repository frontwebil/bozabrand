import "./Strategy.css";

export function Strategy() {
  return (
    <section className="strategy">
      <div className="container">
        <h2 className="strategy-title">Стратегічні рішення</h2>

        <div className="strategy-cards">
          <div className="strategy-card">
            <h2 className="strategy-card-title">На хвилі ідеї</h2>
            <p className="strategy-card-description">
              Ти ще не в дорозі, але вже дихаєш океаном мрій. Інтуїція - твій
              компас, а перші задуми - течія, що кличе. Ти шукаєш свою зграю,
              складаєш карту курсу й готуєшся вивести бізнес на поверхню.
            </p>
            <div className="strategy-card-row"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
