import Link from "next/link";
import "./Best.css";

export function BestProducts() {
  const projects = [
    {
      category: "Машинобудування",
      title: "Hylen",
      image: "/Best/1.png",
      tags: [
        "Стратегія бренду",
        "Айдентика",
        "Фірмовий стиль",
        "Сайт",
        "Виставкові комунакації",
        "Фотозйомка",
      ],
    },
    {
      category: "Інжиніринг",
      title: "Techinn",
      image: "/Best/2.png",
      tags: [
        "Стратегія бренду",
        "Айдентика",
        "Фірмовий стиль",
        "Виставкові комунакації",
      ],
    },
    {
      category: "Інжиніринг",
      title: "Strong & Young",
      image: "/Best/3.png",
      tags: ["Ідея бренду", "Стратегія комунікації", "Айдентика"],
    },
  ];
  return (
    <section className="best-products"               style={{
                backgroundImage: `url(/Best/bg.png)`,
              }}>
      <div className="container">
        <div className="best-products-top">
          <h2>ТОП ПРОЄКТИ</h2>
          <Link href={"/"}>ПЕРЕГЛЯНУТИ УСІ</Link>
        </div>
        <div className="best-products-cards">
          {projects.map((project, i) => (
            <div
              className="best-products-card"
              key={i}
              style={{
                backgroundImage: `url(${project.image})`,
              }}
            >
              <div className="best-products-card-top">
                <p>{project.category}</p>
                <h3>{project.title}</h3>
              </div>
              <div className="best-products-card-bottom">
                {project.tags.map((tag, i) => (
                  <div className="best-products-card-bottom-item" key={i}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="best-products-team-text">
          <div className="best-products-team-text-top">
            <h2>команда неповерхневих</h2>
            <div className="best-products-team-text-top-box">
              <div className="best-products-team-line-blocks">
                <div className="best-products-team-line-block border-t border-l border-white"></div>
                <div className="best-products-team-line-block border-t border-r border-white"></div>
              </div>
              <div className="best-products-team-text-top-comands">
                ДИЗАЙНЕРІВ, КОПІРАЙТЕРІВ, МЕНЕДЖЕРІВ СТРАТЕГІВ, ХУДОЖНИКІВ,
                ІЛЮСТРАТОРІВ
              </div>
              <div className="best-products-team-line-blocks">
                <div className="best-products-team-line-block border-b border-l border-white"></div>
                <div className="best-products-team-line-block border-b border-r border-white"></div>
              </div>
            </div>
          </div>
          <h2>яка створює проникливі бренди блакитної планети</h2>
        </div>
      </div>
    </section>
  );
}
