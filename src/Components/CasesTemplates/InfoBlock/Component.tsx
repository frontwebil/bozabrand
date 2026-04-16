import "./style.css";

type CaseInfoData = {
  category?: string;
  title?: string;
  description?: string;
  client?: string;
  time?: string;
  expertise?: string[];
  extrasensors?: string[];
  sensoryIntegration?: string[];
  driverTeam?: string[];
};

function renderTeamRow(item: string, key: string) {
  const [namePart, ...roleParts] = item.split("—");
  const name = namePart?.trim() || "";
  const role = roleParts.join("—").trim();

  return (
    <p key={key}>
      {name && <span className="case-info__name">{name}</span>}
      {role && <span className="case-info__role">— {role}</span>}
    </p>
  );
}

export function CaseInfo({ data }: { data?: CaseInfoData }) {
  const category = data?.category || "";
  const title = data?.title || "";
  const description =
    data?.description ||
    "";
  const client = data?.client || "";
  const time = data?.time || "";
  const expertise = data?.expertise ?? [];
  const extrasensors = data?.extrasensors ?? [];
  const sensoryIntegration = data?.sensoryIntegration ?? [];
  const driverTeam = data?.driverTeam ?? [];

  return (
    <section className="case-info">
      <div className="container">
        <div className="case-info__top">
          <div className="case-info__brand">
            <span className="case-info__category">{category}</span>
            <h2 className="case-info__title">{title}</h2>
          </div>

          <div className="case-info__description">
            <p>{description}</p>
          </div>
        </div>

        <div className="case-info__block">
          <h3 className="case-info__block-title">Інформація</h3>

          <div className="case-info__table case-info__table--info">
            <div className="case-info__columns">
              <div className="case-info__column">
                <span className="case-info__label">Дайвер</span>
                <p className="case-info__value">{client}</p>
              </div>

              <div className="case-info__column">
                <span className="case-info__label">Рік</span>
                <p className="case-info__value">{time}</p>
              </div>
            </div>
            <div className="case-info__columns">
              <div className="case-info__column">
                <span className="case-info__label">Неповерхневі роботи</span>
                <div className="case-info__list">
                  {expertise.map((item, index) => (
                    <p key={`expertise-${index}`}>{item}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="case-info__block">
          <h3 className="case-info__block-title">КОМАНДА ПРОЄКТУ</h3>

          <div className="case-info__table case-info__table--info">
            <div className="case-info__columns">
              <div className="case-info__column">
                <span className="case-info__label">ЕКСТРАСЕНСОРИ BOZABRAND</span>
                <div className="case-info__list">
                  {extrasensors.map((item, index) =>
                    renderTeamRow(item, `extrasensors-${index}`),
                  )}
                </div>
              </div>
            </div>
            <div className="case-info__columns">
              <div className="case-info__column-inner">
                {sensoryIntegration.length > 0 && (
                  <div className="case-info__column">
                    <span className="case-info__label">Sensory Integration</span>
                    <div className="case-info__list">
                      {sensoryIntegration.map((item, index) =>
                        renderTeamRow(item, `sensory-${index}`),
                      )}
                    </div>
                  </div>
                )}
                <div className="case-info__column">
                  <span className="case-info__label">Driver Team</span>
                  <div className="case-info__list">
                    {driverTeam.map((item, index) =>
                      renderTeamRow(item, `driver-${index}`),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
