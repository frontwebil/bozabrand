"use client";

import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { CaseEng } from "@/generated/prisma/browser";
import "../AddCaseForm/AddCaseForm.css";

type EditCaseFormEngProps = {
  caseItem: CaseEng;
  ukrCaseId: number;
};

export function EditCaseFormEng({ caseItem, ukrCaseId }: EditCaseFormEngProps) {
  const router = useRouter();

  const [title, setTitle] = useState(caseItem.title);
  const [subTitle, setSubTitle] = useState(caseItem.subTitle);
  const [slug, setSlug] = useState(caseItem.slug);
  const [categories, setCategories] = useState(caseItem.categories.join(", "));
  const [isPublished, setIsPublished] = useState(caseItem.isPublished);
  const [order, setOrder] = useState(caseItem.order);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState(caseItem.imgUrl);

  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const generatedSlug = useMemo(() => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[\s_]+/g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/--+/g, "-");
  }, [title]);

  const finalSlug = slug.trim() || generatedSlug;

  const applyCaseFields = (next: CaseEng) => {
    setTitle(next.title);
    setSubTitle(next.subTitle);
    setSlug(next.slug);
    setCategories(next.categories.join(", "));
    setIsPublished(next.isPublished);
    setOrder(next.order);
    setPreviewUrl(next.imgUrl);
    setSelectedFile(null);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    setSelectedFile(file);
    setError("");
    setSuccess("");

    if (file) {
      const localPreviewUrl = URL.createObjectURL(file);
      setPreviewUrl(localPreviewUrl);
    } else {
      setPreviewUrl(caseItem.imgUrl);
    }
  };

  const handleDelete = async () => {
    const confirmDelete = confirm("Ти точно хочеш видалити англ. кейс?");

    if (!confirmDelete) return;

    try {
      setIsLoading(true);
      setLoadingText("Видалення англ. кейсу...");

      await axios.delete(`/api/adminCasesEng/delete/${caseItem.id}`);

      router.push("/admin-boza/cases");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Помилка при видаленні");
      } else {
        setError("Помилка при видаленні");
      }
    } finally {
      setIsLoading(false);
      setLoadingText("");
    }
  };

  const handleCopyFromUkr = async () => {
    const confirmed = confirm(
      "Скопіювати поля та блоки з укр версії? Поточні англ. дані будуть перезаписані.",
    );
    if (!confirmed) return;

    try {
      setIsLoading(true);
      setLoadingText("Копіюємо з укр версії...");
      setError("");

      const { data } = await axios.post("/api/adminCasesEng/copy", {
        direction: "ukr-to-eng",
        ukrCaseId,
        engCaseId: caseItem.id,
      });

      if (data.case) {
        applyCaseFields(data.case as CaseEng);
      }

      setSuccess("Дані скопійовано з укр версії");
      router.refresh();
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Не вдалося скопіювати");
      } else {
        setError("Не вдалося скопіювати");
      }
    } finally {
      setIsLoading(false);
      setLoadingText("");
    }
  };

  const handleReloadFromEng = async () => {
    const confirmed = confirm(
      "Завантажити збережену англ. версію? Незбережені зміни зникнуть.",
    );
    if (!confirmed) return;

    applyCaseFields(caseItem);
    setSuccess("Завантажено збережену англ. версію");
    router.refresh();
  };

  async function uploadImage(file: File) {
    const formData = new FormData();
    formData.append("file", file);

    const { data } = await axios.post("/api/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return data;
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!title.trim() || !subTitle.trim() || !finalSlug.trim()) {
      setError("Заповни Заголовок, Підзаголовок і slug");
      return;
    }

    try {
      setIsLoading(true);

      let finalImageUrl = caseItem.imgUrl;

      if (selectedFile) {
        setLoadingText("Завантаження фото...");
        const uploadedImageUrl = await uploadImage(selectedFile);
        finalImageUrl = uploadedImageUrl.url;
      }

      setLoadingText("Оновлення англ. кейсу...");

      await axios.patch(`/api/adminCasesEng/edit/${caseItem.id}`, {
        title: title.trim(),
        subTitle: subTitle.trim(),
        slug: finalSlug.trim(),
        imgUrl: finalImageUrl,
        categories: categories
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),
        isPublished,
        order: Number(order) || 0,
      });

      setSuccess("Англ. кейс успішно оновлений");
      router.replace("/admin-boza/cases");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Щось пішло не так");
      } else {
        setError("Щось пішло не так");
      }
    } finally {
      setIsLoading(false);
      setLoadingText("");
    }
  };

  return (
    <>
      {isLoading && (
        <div className="add-case-loader-overlay">
          <div className="add-case-loader-box">
            <div className="add-case-loader-spinner" />
            <p>{loadingText || "Завантаження..."}</p>
          </div>
        </div>
      )}

      <section className="add-case">
        <div className="add-case-container">
          <div className="add-case-top">
            <div>
              <p className="add-case-label">Адмінка / Кейси / EN</p>
              <h1 className="add-case-title">Редагувати англ. кейс</h1>
            </div>

            <div className="add-case-actions">
              <button
                type="button"
                className="add-case-copy-btn"
                onClick={handleCopyFromUkr}
                disabled={isLoading}
              >
                Взяти з укр версії
              </button>
              <button
                type="button"
                className="add-case-copy-btn secondary"
                onClick={handleReloadFromEng}
                disabled={isLoading}
              >
                Взяти з англ версії
              </button>
              <Link
                href={`/admin-boza/cases/eng/constructor/${caseItem.id}?ukrId=${ukrCaseId}`}
                className="add-case-back"
              >
                Конструктор EN
              </Link>
              <Link href="/admin-boza/cases" className="add-case-back">
                ← Назад
              </Link>
            </div>
          </div>

          <form className="add-case-form" onSubmit={handleSubmit}>
            <div className="add-case-grid">
              <div className="add-case-field full">
                <label htmlFor="title">Назва кейсу (EN)</label>
                <input
                  id="title"
                  type="text"
                  placeholder="For example: Strong & Young"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="add-case-field full">
                <label htmlFor="subTitle">Підзаголовок (EN)</label>
                <input
                  id="subTitle"
                  type="text"
                  placeholder="For example: Engineering"
                  value={subTitle}
                  onChange={(e) => setSubTitle(e.target.value)}
                />
              </div>

              <div className="add-case-field full">
                <label htmlFor="order">Індекс</label>
                <input
                  id="order"
                  type="number"
                  value={order}
                  onChange={(e) => {
                    const value = e.target.value;
                    setOrder(value === "" ? 0 : Number(value));
                  }}
                />
              </div>

              <div className="add-case-field full">
                <label htmlFor="slug">Slug</label>
                <input
                  id="slug"
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                />
                {!slug.trim() && generatedSlug && (
                  <span className="add-case-hint">Авто: {generatedSlug}</span>
                )}
              </div>

              <div className="add-case-field full">
                <label htmlFor="imageFile">Фото кейсу</label>
                <input
                  id="imageFile"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>

              {previewUrl && (
                <div className="add-case-field full">
                  <label>Прев’ю</label>
                  <div className="add-case-preview">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={previewUrl} alt="preview" />
                  </div>
                </div>
              )}

              <div className="add-case-field full">
                <label htmlFor="categories">Категорії</label>
                <input
                  id="categories"
                  type="text"
                  value={categories}
                  onChange={(e) => setCategories(e.target.value)}
                />
                <span className="add-case-hint">Вводь через кому</span>
              </div>

              <div className="add-case-checkbox full">
                <label>
                  <input
                    type="checkbox"
                    checked={isPublished}
                    onChange={(e) => setIsPublished(e.target.checked)}
                  />
                  <span>Опублікувати (EN)</span>
                </label>
              </div>
            </div>

            {error && <div className="add-case-message error">{error}</div>}
            {success && (
              <div className="add-case-message success">{success}</div>
            )}

            <div className="add-case-submit-wrap">
              <button
                type="submit"
                className="add-case-submit"
                disabled={isLoading}
              >
                {isLoading ? "Обробка..." : "Оновити англ. кейс"}
              </button>
              <button
                type="button"
                className="add-case-delete"
                onClick={handleDelete}
                disabled={isLoading}
              >
                Видалити англ. кейс
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
