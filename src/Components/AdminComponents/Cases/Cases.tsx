"use client";

import { Case } from "@/generated/prisma/browser";
import "./Cases.css";
import { signOut } from "next-auth/react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

type EngCaseSummary = {
  id: number;
  slug: string;
  isPublished: boolean;
};

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

export function Cases({
  cases,
  engBySlug,
}: {
  cases: Case[];
  engBySlug: Record<string, EngCaseSummary>;
}) {
  const router = useRouter();
  const [busySlug, setBusySlug] = useState<string | null>(null);

  const handleCreateEng = async (ukrCaseId: number, slug: string) => {
    const confirmed = confirm(
      "Створити англ. версію з укр кейсу? Можна буде відредагувати тексти окремо.",
    );
    if (!confirmed) return;

    try {
      setBusySlug(slug);
      const { data } = await axios.post("/api/adminCasesEng/copy", {
        direction: "create-eng-from-ukr",
        ukrCaseId,
      });

      router.push(
        `/admin-boza/cases/eng/edit/${data.case.id}?ukrId=${ukrCaseId}`,
      );
      router.refresh();
    } catch (err) {
      if (axios.isAxiosError(err)) {
        alert(err.response?.data?.message || "Не вдалося створити EN версію");
      } else {
        alert("Не вдалося створити EN версію");
      }
    } finally {
      setBusySlug(null);
    }
  };

  return (
    <section className="cases-admin">
      <div className="cases-admin-container">
        <div className="cases-admin-top">
          <div>
            <h1 className="cases-admin-title">Кейси</h1>
          </div>

          <div className="cases-admin-actions">
            <Link
              href="/admin-boza/cases/create"
              className="cases-admin-create"
            >
              + Додати кейс
            </Link>

            <button className="cases-admin-logout" onClick={() => signOut()}>
              Вийти
            </button>
          </div>
        </div>

        {/* <div className="cases-admin-toolbar">
          <input
            type="text"
            placeholder="Пошук кейсу..."
            className="cases-admin-search"
          />
        </div> */}

        <div className="cases-admin-grid">
          {cases.map((item) => (
            <div className="cases-admin-card" key={item.id}>
              <div
                className="cases-admin-card-image"
                style={{ backgroundImage: `url(${item.imgUrl})` }}
              />

              <div className="cases-admin-card-content">
                <div className="cases-admin-card-head">
                  <h3>{item.title}</h3>
                  <p>{item.subTitle}</p>
                  <span
                    className="cases-admin-card-head-status"
                    style={{
                      color: item.isPublished ? "#047857" : "#b91c1c",
                      background: item.isPublished ? "#ecfdf5" : "#fef2f2",
                    }}
                  >
                    {item.isPublished ? "Опубліковано" : "Сховано"}
                  </span>
                </div>

                <div className="cases-admin-card-tags">
                  {item.categories.map((category, index) => (
                    <span key={index}>{category}</span>
                  ))}
                </div>

                <div className="cases-admin-card-bottom">
                  <Link
                    href={`/cases/${item.slug}`}
                    className="cases-admin-slug"
                  >
                    Link - /{item.slug}
                  </Link>
                  <span className="cases-admin-slug">index : {item.order}</span>

                  <div className="cases-admin-card-buttons">
                    <Link
                      href={`/admin-boza/cases/edit/${item.id}`}
                      className="cases-admin-card-btn edit"
                    >
                      Редагувати (UKR)
                    </Link>
                    <Link
                      href={`/admin-boza/cases/constructor/${item.id}`}
                      className="cases-admin-card-btn edit"
                    >
                      Конструктор (UKR)
                    </Link>

                    {engBySlug[item.slug] ? (
                      <>
                        <Link
                          href={`/admin-boza/cases/eng/edit/${engBySlug[item.slug].id}?ukrId=${item.id}`}
                          className="cases-admin-card-btn eng"
                        >
                          Редагувати (EN)
                        </Link>
                        <Link
                          href={`/admin-boza/cases/eng/constructor/${engBySlug[item.slug].id}?ukrId=${item.id}`}
                          className="cases-admin-card-btn eng"
                        >
                          Конструктор (EN)
                        </Link>
                        <span
                          className="cases-admin-eng-status"
                          style={{
                            color: engBySlug[item.slug].isPublished
                              ? "#047857"
                              : "#b91c1c",
                          }}
                        >
                          EN:{" "}
                          {engBySlug[item.slug].isPublished
                            ? "опубліковано"
                            : "сховано"}
                        </span>
                      </>
                    ) : (
                      <button
                        type="button"
                        className="cases-admin-card-btn eng"
                        disabled={busySlug === item.slug}
                        onClick={() => handleCreateEng(item.id, item.slug)}
                      >
                        {busySlug === item.slug
                          ? "Створюємо EN..."
                          : "Створити EN версію"}
                      </button>
                    )}
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
