/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import "./Team.css";
import Link from "next/link";
import { useWindowWidth } from "../../../../hooks/useWindowWidth";
import { useLanguage } from "@/lib/useLanguague";

const content = {
  uk: {
    topTitle: "неповерхневі",
    topText:
      "Ми саме ті екстрасенсори, які здатні дихати, бачити, чути і відчувати на глибині 11 тисяч метрів. Ми занурюємось туди, щоб віднайти серце твого бренду",
    button: "ПОЗНАЙОМИТИСЬ ЗІ СПІЛЬНотОЮ НЕПОВЕРХНЕВИХ",
    members: [
      {
        id: 1,
        image: "/Team/1.png",
        name: "ірина",
        position: "Бренд-лідерка, стратегиня",
        departmentImage: "/Team/department/sensor4.gif",
        departmentAlt: "Rivnovaga",
        departmentTitle: "ВІДДІЛ РІВНОВАГИ",
        description: (
          <>
            Вона бачить на 10 кроків вперед. І ще на два вбік, якщо конкурент
            вирішив “а давайте й ми таке”. Іра знає, куди йти бізнесу, ще до
            того, як бізнес знає, хто він такий.
          </>
        ),
      },
      {
        id: 2,
        image: "/Team/2.png",
        name: "яна",
        position: "Проджект-менеджерка",
        departmentImage: "/Team/department/sensor6.gif",
        departmentAlt: "Dotyk",
        departmentTitle: "ВІДДІЛ  ДОТИКУ",
        description: (
          <>
            Тримає структуру, систему, а також файли на Google-диску в порядку.
            Хаос боїться Яну. Клієнти люблять. Команда обожнює.
          </>
        ),
      },
      {
        id: 3,
        image: "/Team/3.1.png",
        name: "Аксьон",
        position: "Арт-директор, бренд-дизайнер",
        departmentImage: "/Team/department/sensor3.gif",
        departmentAlt: "Poglyad",
        departmentTitle: "ВІДДІЛ  ПОГЛЯДУ",
        description: (
          <>
            Створює й оживляє. Нові продукти, логотипи, графіку, ваші
            маркетингові мрії. Коли він відкриває After Effects або Figma, десь
            у всесвіті запускається салют.
          </>
        ),
      },
      {
        id: 4,
        image: "/Team/4.1.png",
        name: "Аліна",
        position: "Бренд-дизайнер, ілюстраторка",
        departmentImage: "/Team/department/sensor3.gif",
        departmentAlt: "Poglyad",
        departmentTitle: "ВІДДІЛ  ПОГЛЯДУ",
        description: (
          <>
            У світі є дві константи: гравітація й Аліна, яка може зібрати
            айдентику, бренд, мудборд, тактичний план і ваші розкидані нерви в
            одну красиву систему.
          </>
        ),
      },
      {
        id: 5,
        image: "/Team/5.1.png",
        name: "Ярослав",
        position: "Бренд-дизайнер",
        departmentImage: "/Team/department/sensor3.gif",
        departmentAlt: "Poglyad",
        departmentTitle: "ВІДДІЛ  ПОГЛЯДУ",
        description: (
          <>
            Кропіткий до мікропікселя. Людина, яка вміє сидіти над однією
            деталлю так довго, що вона врешті здається і йде на компроміс.
            Ярослав постійно вчиться — курси, статті, нові інструменти, тренди —
            він усе пізнає, усе тестує, усе покращує.
          </>
        ),
      },
      {
        id: 6,
        image: "/Team/6.1.png",
        name: "Тетяна",
        position: "Веб-розробка / Бренд-дизайнерка",
        departmentImage: "/Team/department/sensor3.gif",
        departmentAlt: "Poglyad",
        departmentTitle: "ВІДДІЛ  ПОГЛЯДУ",
        description: (
          <>
            Суперсила Тані — з величезного обʼєму інфо про бізнес клієнта та
            аналітики ринку виділити головну родзинку і зробити з неї символ.
            Також створює сайти, що вантажаться швидше, ніж ви згадуєте пароль.
            Структура, UX, магія — це все до Тані.
          </>
        ),
      },
      {
        id: 7,
        image: "/Team/7.1.png",
        name: "Марина",
        position: "Фотографиня",
        departmentImage: "/Team/department/sensor3.gif",
        departmentAlt: "Poglyad",
        departmentTitle: "ВІДДІЛ  ПОГЛЯДУ",
        description: (
          <>
            Марина вміє ловити не просто кадр — вона ловить людину. Її очі
            бачать глибину, яку інші не помічають. Це не просто фото. Це
            “відчуй, хто ми”.
          </>
        ),
      },
      {
        id: 8,
        image: "/Team/8.1.png",
        name: "Ольга",
        position: "Копірайтерка",
        departmentImage: "/Team/department/sensor2.gif",
        departmentAlt: "Sound",
        departmentTitle: "ВІДДІЛ РЕГУЛЮВАННЯ ЗВУКУ",
        description: (
          <>
            Генерує ідеї швидше, ніж ми встигаємо записувати. Всередині неї —
            або маленький всесвіт, або великий портал.
          </>
        ),
      },
      {
        id: 9,
        image: "/Team/9.1.png",
        name: "Ангеліна",
        position: "Ілюстраторка",
        departmentImage: "/Team/department/sensor3.gif",
        departmentAlt: "Poglyad",
        departmentTitle: "ВІДДІЛ  ПОГЛЯДУ",
        description: (
          <>
            Створює стилі, картини від руки, персонажів і світи, які хочеться
            обіймати. Навіть якщо це дракон з поганим настроєм.
          </>
        ),
      },
    ],
  },

  en: {
    topTitle: "non-superficial",
    topText:
      "We are the extrasensors who are able to breathe, see, hear, and feel at the depth of 11,000 meters. We dive to such a depth to find the heart of your brand.",
    button: "GET TO KNOW THE NON-SUPERFICIAL COMMUNITY",
    members: [
      {
        id: 1,
        image: "/Team/1.png",
        name: "IRYNA",
        position: "Brand leader, Strategist",
        departmentImage: "/Team/department/sensor4.gif",
        departmentAlt: "Balance",
        description: (
          <>
            <span>DEPARTMENT OF BALANCE</span>
            <br />
            She sees people’s thoughts, their needs and pains, and can provide
            proper support and enthusiasm.
          </>
        ),
      },

      {
        id: 2,
        image: "/Team/2.png",
        name: "YANA",
        position: "Project Manager",
        departmentImage: "/Team/department/sensor6.gif",
        departmentAlt: "Touch",
        description: (
          <>
            <span>DEPARTMENT OF TOUCH</span>
            <br />
            She keeps structure, systems — and Google Drive files — in order.
            Chaos is afraid of Yana. Clients love her. The team adores her.
          </>
        ),
      },

      {
        id: 3,
        image: "/Team/3.1.png",
        name: "AKS'ON",
        position: "Art Director, Brand Designer",
        departmentImage: "/Team/department/sensor3.gif",
        departmentAlt: "Sight",
        description: (
          <>
            <span>DEPARTMENT OF SIGHT</span>
            <br />
            He creates and brings to life. New products, logos, graphics — your
            marketing dreams.
          </>
        ),
      },

      {
        id: 4,
        image: "/Team/4.1.png",
        name: "ALINA",
        position: "Brand Designer, Illustrator",
        departmentImage: "/Team/department/sensor3.gif",
        departmentAlt: "Sight",
        description: (
          <>
            <span>DEPARTMENT OF SIGHT</span>
            <br />
            There are two constants in this world: gravity and Alina, who can
            assemble identity, brand, moodboard, tactical plan, and your
            scattered nerves into one beautiful system.
          </>
        ),
      },

      {
        id: 5,
        image: "/Team/5.1.png",
        name: "Yaroslav",
        position: "Brand Designer",
        departmentImage: "/Team/department/sensor3.gif",
        departmentAlt: "Sight",
        description: (
          <>
            <span>DEPARTMENT OF SIGHT</span>
            <br />
            Meticulous to the micro-pixel. He explores everything, tests
            everything, improves everything.
          </>
        ),
      },

      {
        id: 6,
        image: "/Team/6.1.png",
        name: "Tetiana",
        position: "Web Developer / Brand Designer",
        departmentImage: "/Team/department/sensor3.gif",
        departmentAlt: "Sight",
        description: (
          <>
            <span>DEPARTMENT OF SIGHT</span>
            <br />
            Tanya’s superpower is extracting the core essence from a massive
            volume of client business information and market analytics.
          </>
        ),
      },

      {
        id: 7,
        image: "/Team/7.1.png",
        name: "Maryna",
        position: "Photographer",
        departmentImage: "/Team/department/sensor3.gif",
        departmentAlt: "Sight",
        description: (
          <>
            <span>DEPARTMENT OF SIGHT</span>
            <br />
            Maryna doesn’t just capture a shot — she captures a person.
          </>
        ),
      },

      {
        id: 8,
        image: "/Team/8.1.png",
        name: "OLGA",
        position: "Creative Copywriter",
        departmentImage: "/Team/department/sensor2.gif",
        departmentAlt: "Sound",
        description: (
          <>
            <span>DEPARTMENT OF SOUND</span>
            <br />
            She generates ideas faster than we can write them down.
          </>
        ),
      },

      {
        id: 9,
        image: "/Team/9.1.png",
        name: "Anhelina",
        position: "Illustrator",
        departmentImage: "/Team/department/sensor3.gif",
        departmentAlt: "Sight",
        description: (
          <>
            <span>DEPARTMENT OF SIGHT</span>
            <br />
            She creates styles and real hand-drawn artworks, as well as
            characters and worlds you want to hug.
          </>
        ),
      },
    ],
  },
};

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

        <p className="team-card-bottom-description">
          <span>{member.departmentTitle}</span>
          <br />
          {member.description}
        </p>
      </div>
    </div>
  );
}

export default function Team() {
  const width = useWindowWidth();
  const { language } = useLanguage();

  const data = content[language];

  const duplicatedMembers =
    width && width >= 500
      ? [...data.members, ...data.members]
      : [...data.members].slice(0, 5);

  return (
    <section className="team">
      <div className="container">
        <div className="team-top">
          <h2 className="team-top-title">{data.topTitle}</h2>
          <p className="team-top-text">{data.topText}</p>
        </div>

        <div className="team-slider">
          <div className="track">
            {duplicatedMembers.map((member, index) => (
              <TeamCard key={`${member.id}-${index}`} member={member} />
            ))}
          </div>
        </div>

        <Link href={"/team"} className="team-button">
          {data.button}
        </Link>
      </div>
    </section>
  );
}
