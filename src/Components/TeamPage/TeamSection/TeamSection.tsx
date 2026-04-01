"use client";
import Image from "next/image";
import "./TeamSection.css";
import { useWindowWidth } from "../../../../hooks/useWindowWidth";

const teamMembers = [
  {
    id: 1,
    image: "/Team/1.png",
    name: "ірина",
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
    name: "яна ",
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
    image: "/Team/3.1.png",
    name: "Аксьон ",
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
    image: "/Team/4.1.png",
    name: "Аліна ",
    position: "Бренд-дизайнер, ілюстраторка",
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
    image: "/Team/5.1.png",
    name: "Ярослав ",
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
  {
    id: 6,
    image: "/Team/6.1.png",
    name: "Тетяна ",
    position: "Веб-розробка / Бренд-дизайнерка",
    departmentImage: "/Team/department/sensor3.gif",
    departmentAlt: "Poglyad",
    description: (
      <>
        <span>ВІДДІЛ  ПОГЛЯДУ</span>
        <br />
        Суперсила Тані - з величезного обʼєму інфо про бізнес клієнта, а також
        аналітики ринку, вибрати головну родзинку і зробити з нею символ, що
        дуже просто передасть усе те складне. А ще Таня створює сайти, що
        вантажаться швидше, ніж ви встигаєте згадати пароль. Структура, UX,
        магія - це все до Тані.
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
    description: (
      <>
        <span>ВІДДІЛ  ПОГЛЯДУ</span>
        <br />
        Марина вміє ловити не просто кадр, вона ловить людину. Її очі бачать
        глибину, яку інші не помічають: емоцію, що сховалась у погляді,
        тремтливий настрій, унікальний жест. А коли йдеться про зйомку компанії,
        вона передає історію бізнесу через ледь вловимі рухи, деталі, світло,
        атмосферу. Це не просто фото. Це “відчуй, хто ми”.
      </>
    ),
  },
  {
    id: 8,
    image: "/Team/8.1.png",
    name: "Ольга ",
    position: "Копірайтерка",
    departmentImage: "/Team/department/sensor2.gif",
    departmentAlt: "Poglyad",
    description: (
      <>
        <span style={{ textTransform: "uppercase" }}>
          Відділ регулювання звуку
        </span>
        <br />
        Генерує ідеї швидше, ніж ми встигаємо записувати. У неї всередині або
        маленький всесвіт, або великий портал. Ми досі уточнюємо.
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
    description: (
      <>
        <span>ВІДДІЛ  ПОГЛЯДУ</span>
        <br />
        Створює стилі і справжні картини від руки, а ще персонажів і світи, які
        хочеться обіймати. Навіть якщо це дракон з поганим настроєм.
      </>
    ),
  },
];

export function TeamSection() {
  const width = useWindowWidth();
  return (
    <section className="team-section">
      <div className="container">
        <div className="team-section-title">неповерхневі</div>
        {width && width < 600 && (
          <div className="team-section-grid-bottom-text">
            Ми саме ті екстрасенсори, які здатні дихати, бачити, чути і
            відчувати на глибині 11 тисяч метрів. Ми занурюємось туди, щоб
            віднайти серце твого бренду.
          </div>
        )}
        <div className="team-section-grid">
          {teamMembers.map((member, i) => (
            <div className="team-card-page" key={i}>
              <div className="team-img-page">
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
                  {member.description}
                </p>
              </div>
            </div>
          ))}
          {width && width >= 600 && (
            <div className="team-section-grid-bottom-text">
              <span
                style={{
                  display: "inline-block",
                  textAlign: "right",
                  width: "100%",
                }}
              >
                Ми саме ті екстрасенсори,{" "}
              </span>{" "}
              <br /> які здатні дихати, бачити, чути і відчувати на глибині 11
              тисяч метрів. Ми занурюємось туди, щоб віднайти серце твого
              бренду.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
