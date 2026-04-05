"use client";

import "./Cases.css";
import { signOut } from "next-auth/react";
import Link from "next/link";

const mockCases = [
  {
    id: 1,
    title: "Strong & Young",
    subTitle: "Інжиніринг ",
    slug: "strong-young",
    categories: ["Ідея бренду", "Стратегія комунікації", "Айдентика"],
    imgUrl: "",
  },
  {
    id: 2,
    title: "Vsesvit",
    subTitle: "Краса",
    slug: "strong-young",
    categories: [
      "Стратегія бренду",
      "Айдентика",
      "Слоган",
      "стратегія сторінки іnstagram",
    ],
    imgUrl: "",
  },
];

export function Cases() {
  return (
    <section className="cases-admin">
      <div className="cases-admin-container">
        <div className="cases-admin-top">
          <div>
            <h1 className="cases-admin-title">Кейси</h1>
          </div>

          <div className="cases-admin-actions">
            <Link href="/admin/cases/create" className="cases-admin-create">
              + Додати кейс
            </Link>

            <button className="cases-admin-logout" onClick={() => signOut()}>
              Вийти
            </button>
          </div>
        </div>

        <div className="cases-admin-toolbar">
          <input
            type="text"
            placeholder="Пошук кейсу..."
            className="cases-admin-search"
          />
        </div>

        <div className="cases-admin-grid">
          {mockCases.map((item) => (
            <div className="cases-admin-card" key={item.id}>
              <div
                className="cases-admin-card-image"
                style={{ backgroundImage: `url(${item.imgUrl})` }}
              />

              <div className="cases-admin-card-content">
                <div className="cases-admin-card-head">
                  <h3>{item.title}</h3>
                  <p>{item.subTitle}</p>
                </div>

                <div className="cases-admin-card-tags">
                  {item.categories.map((category, index) => (
                    <span key={index}>{category}</span>
                  ))}
                </div>

                <div className="cases-admin-card-bottom">
                  <span className="cases-admin-slug">/{item.slug}</span>

                  <div className="cases-admin-card-buttons">
                    <Link
                      href={`/admin/cases/${item.slug}`}
                      className="cases-admin-card-btn edit"
                    >
                      Редагувати
                    </Link>
                    <Link
                      href={`/admin/cases/${item.slug}`}
                      className="cases-admin-card-btn edit"
                    >
                      Конструктор сторінки
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
