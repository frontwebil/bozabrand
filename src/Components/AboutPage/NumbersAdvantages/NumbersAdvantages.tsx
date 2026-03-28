import "./NumbersAdvantages.css";

export function NumbersAdvantages() {
  return (
    <section className="numbers-advantages">
      <div className="container">
        <div className="numbers-advantges-top">
          <h2>
            Цифри, <br />
            якими ми пишаємося
          </h2>
        </div>
        <div className="numbers-advantages-number f">
          <h2>13</h2>
          <div className="numbers-advantages-number-circles">
            <p className="numbers-advantages-number-circles-text">
              років{" "}
              <span style={{ color: "#412AB9" }}>
                експертизи <br /> у маркетингу
              </span>
            </p>
          </div>
        </div>
        <div className="numbers-advantages-number s">
          <h2>3</h2>
          <div className="numbers-advantages-number-circles">
            <div className="numbers-advantages-number-circles-row">
              <div className="numbers-advantages-number-circles-row-circle"></div>
              <div className="numbers-advantages-number-circles-row-circle"></div>
              <div className="numbers-advantages-number-circles-row-circle"></div>
            </div>

            <p className="numbers-advantages-number-circles-text">
              Роки{" "}
              <span style={{ color: "#412AB9" }}>
                злагодженої <br /> командної роботи
              </span>
            </p>
          </div>
        </div>
        <div className="numbers-advantages-number t">
          <h2>14</h2>
          <div className="numbers-advantages-number-circles">
            <div className="numbers-advantages-number-circles-row">
              <div className="numbers-advantages-number-circles-row-circle"></div>
              <div className="numbers-advantages-number-circles-row-circle"></div>
              <div className="numbers-advantages-number-circles-row-circle"></div>
              <div className="numbers-advantages-number-circles-row-circle"></div>
              <div className="numbers-advantages-number-circles-row-circle"></div>
            </div>
            <div className="numbers-advantages-number-circles-row">
              <div className="numbers-advantages-number-circles-row-circle"></div>
              <div className="numbers-advantages-number-circles-row-circle"></div>
              <div className="numbers-advantages-number-circles-row-circle"></div>
              <div className="numbers-advantages-number-circles-row-circle"></div>
              <div className="numbers-advantages-number-circles-row-circle"></div>
            </div>
            <div className="numbers-advantages-number-circles-row">
              <div className="numbers-advantages-number-circles-row-circle"></div>
              <div className="numbers-advantages-number-circles-row-circle"></div>
              <div className="numbers-advantages-number-circles-row-circle"></div>
              <div className="numbers-advantages-number-circles-row-circle"></div>
            </div>
            <p className="numbers-advantages-number-circles-text">
              <span style={{ color: "#412AB9" }}>створених нових</span> <br />
              брендів
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
