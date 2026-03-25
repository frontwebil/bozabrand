import "./VideoInfoGraph.css";

export function VideoInfoGraph() {
  return (
    <section className="video-info-graph">
      <div className="container">
        <div className="video-info-graph-cards">
          <div className="video-info-graph-card">
            <div className="video-info-graph-card-top">
              <h2>Працюємо комплексно, занурюючись з головою у твій бізнес</h2>
              <h2>[01]</h2>
            </div>
            <video autoPlay muted loop playsInline>
              <source src="/Video/1.webm" type="video/webm" />
            </video>
          </div>
          <div className="video-info-graph-card">
            <div className="video-info-graph-card-top">
              <h2>Встановлюємо чіткі бізнес-цілі, управляємо та аналізуємо KPI</h2>
              <h2>[02]</h2>
            </div>
            <video autoPlay muted loop playsInline>
              <source src="/Video/2.webm" type="video/webm" />
            </video>
          </div>
          <div className="video-info-graph-card">
            <div className="video-info-graph-card-top">
              <h2>Вирощуємо усвідомлену лояльну аудиторію, створюючи фан-клуб бренду</h2>
              <h2>[03]</h2>
            </div>
            <video autoPlay muted loop playsInline>
              <source src="/Video/3.webm" type="video/webm" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
