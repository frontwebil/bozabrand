import Image from "next/image";
import "./OurDrivers.css";

export function OurDrivers() {
  const ourDriversImg = [
    "/OurDrivers/1.svg",
    "/OurDrivers/2.svg",
    "/OurDrivers/3.svg",
    "/OurDrivers/4.svg",
    "/OurDrivers/5.svg",
    "/OurDrivers/6.svg",
    "/OurDrivers/7.svg",
    "/OurDrivers/8.svg",
    "/OurDrivers/9.svg",
    "/OurDrivers/10.svg",
  ];

  const infinityCards = [...ourDriversImg, ...ourDriversImg];
  return (
    <section className="our-drivers">
      <div className="our-drivers-container">
        <h2 className="our-drivers-title">Наші дайвери</h2>
        <div className="our-drivers-carousel">
          {infinityCards.map((img, i) => (
            <div className="our-drivers-carousel-card" key={i}>
              <Image
                src={img}
                width={450}
                height={150}
                alt={`Our Partner ${i}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
