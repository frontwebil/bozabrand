"use client";

import Image from "next/image";
import "./Team.css";

const teamMembers = [
  {
    id: 1,
    image: "/Team/1.png",
    name: "іра бозаджиева",
    position: "Бренд-лідерка, стратегиня",
    departmentImage: "/Team/department/sensor4.gif",
    departmentAlt: "Rivnovaga",
    description: (
      <>
        <span>ВІДДІЛ РІВНОВАГИ</span>
        <br />
        Вона бачить на 10 кроків вперед. І ще на два вбік, якщо конкурент
        вирішив “а давайте й ми таке”. Іра знає, куди йти бізнесу, ще до того,
        як бізнес знає, хто він такий.
      </>
    ),
  },
  {
    id: 2,
    image: "/Team/2.png",
    name: "яна романченко",
    position: "Проджект-менеджерка",
    departmentImage: "/Team/department/sensor6.gif",
    departmentAlt: "Dotyk",
    description: (
      <>
        <span>ВІДДІЛ  ДОТИКУ</span>
        <br />
        Тримає структуру, систему , а також файли на Google-диску в порядку.
        Хаос боїться Яну. Клієнти люблять. Команда обожнює
      </>
    ),
  },
  {
    id: 3,
    image: "/Team/3.png",
    name: "Аксен Іванков",
    position: "Арт-директор, бренд-дизайнер",
    departmentImage: "/Team/department/sensor3.gif",
    departmentAlt: "Poglyad",
    description: (
      <>
        <span>ВІДДІЛ  ПОГЛЯДУ</span>
        <br />
        Створює й оживляє. Нові продукти, логотипи, графіку, ваші маркетингові
        мрії. Коли він відкриває After Effects або Figma, десь у всесвіті
        запускається салют.
      </>
    ),
  },
  {
    id: 4,
    image: "/Team/4.png",
    name: "Аліна маленко",
    position: "Бренд-дизайнерка, ілюстраторка",
    departmentImage: "/Team/department/sensor3.gif",
    departmentAlt: "Poglyad",
    description: (
      <>
        <span>ВІДДІЛ  ПОГЛЯДУ</span>
        <br />У світі є дві константи: гравітація й Аліна, яка може зібрати
        айдентику, бренд, мудборд, тактичний план і ваші розкидані нерви в одну
        красиву систему
      </>
    ),
  },
  {
    id: 5,
    image: "/Team/5.png",
    name: "Ярослав Грінько",
    position: "Бренд-дизайнер",
    departmentImage: "/Team/department/sensor3.gif",
    departmentAlt: "Poglyad",
    description: (
      <>
        <span>ВІДДІЛ  ПОГЛЯДУ</span>
        <br />
        Кропіткий до мікропікселя. Людина, яка вміє сидіти над однією деталлю
        так довго, що вона врешті здається і йде на компроміс. Ярослав постійно
        вчиться - курси, статті, нові інструменти, тренди, - він усе пізнає, усе
        тестує, усе покращує.
      </>
    ),
  },
];

function TeamCard({ member }: { member: any }) {
  return (
    <div className="team-card">
      <div className="team-img">
        <Image
          src={member.image}
          width={1000}
          height={1000}
          alt={member.name}
        />
      </div>

      <div className="team-card-top">
        <h2 className="team-card-top-title">{member.name}</h2>
        <p className="team-card-top-position">{member.position}</p>
      </div>

      <div className="team-card-bottom">
        <div className="team-card-bottom-img">
          <Image
            src={member.departmentImage}
            width={100}
            height={100}
            alt={member.departmentAlt}
          />
        </div>

        <p className="team-card-bottom-description">{member.description}</p>
      </div>
    </div>
  );
}

export default function Team() {
  const duplicatedMembers = [...teamMembers, ...teamMembers];

  return (
    <section className="team">
      <div className="container">
        <div className="team-top">
          <h2 className="team-top-title">неповерхневі</h2>
          <p className="team-top-text">
            Ми саме ті екстрасенсори, які здатні дихати, бачити, чути і
            відчувати на глибині 11 тисяч метрів. Ми занурюємось туди, щоб
            віднайти серце твого бренду
          </p>
        </div>

        <div className="team-slider">
          <div className="track">
            {duplicatedMembers.map((member, index) => (
              <TeamCard key={`${member.id}-${index}`} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
