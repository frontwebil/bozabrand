import Image from "next/image";
import "./Become.css";

export function Become() {
  return (
    <section className="become">
      <div className="container">
        <Image
          src={"/Become/globev2.png"}
          width={1000}
          height={1000}
          alt="Globe"
          className="become-globe-bg"
        />
        <h2 className="become-title">
          СТАТИ &nbsp;&nbsp; <span>ЛАВМАРКОМ</span>
        </h2>
        <div className="become-content">
          <div className="become-img">
            <Image
              src={"/Become/arrow.svg"}
              width={150}
              height={150}
              alt="Стати лавмарком"
            />
          </div>
          <div className="become-text">
            <p>
              Щось одне не спрацює. У побудові відносин між бізнесом і
              споживачем, тобто новим брендом, важливо бути послідовним,
              наполегливим і системним.
            </p>
            <p className="uppercase">
              Команда неповерхневих комплексно  супроводжує бренд на всіх стадіях
              його життя.
            </p>
            <Image
              src={"/Become/icons.svg"}
              width={500}
              height={100}
              className="become-text-icons"
              alt="become-text-icons"
            />
          </div>
        </div>
        <p className="become-undersection-content">
          <span>Ми пропонуємо</span> контрактне обслуговування зі стратегування та просування бренду на 3 /
          6 / 12 міс. <span>в залежності від бізнес-цілі.</span>
        </p>
      </div>
    </section>
  );
}
