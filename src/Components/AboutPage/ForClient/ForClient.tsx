import Image from "next/image";
import "./ForClient.css";

export function ForClient() {
  return (
    <section className="for-client">
      <div className="container">
        <div className="for-client-left-text">
          <p>Клієнту</p>
          <h2>
            Тобі точно до нас, якщо ти готовий разом створювати бренди, які
            западають у серця людей
          </h2>
        </div>
        <div className="for-client-right-img">
          <Image
            src={"/About/ForClient/mainv3.png"}
            width={1000}
            height={1000}
            alt="ТОБІ ТОЧНО ДО НАС, ЯКЩО ТИ ГОТОВИЍ РАЗОМ СТВОРЮВАТИ БРЕНДИ, ЯКІ ЗАПАДАЮТЬ У CЕРЦЯ ЛЮДЕЍ"
          />
        </div>
      </div>
    </section>
  );
}
