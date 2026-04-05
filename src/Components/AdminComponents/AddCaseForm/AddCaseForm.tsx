"use client";

import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import axios from "axios";
import "./AddCaseForm.css";

export function AddCaseForm() {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [categories, setCategories] = useState("");
  const [isPublished, setIsPublished] = useState(false);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [order, setOrder] = useState(0);

  const generatedSlug = useMemo(() => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[\s_]+/g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/--+/g, "-");
  }, [title]);

  const finalSlug = slug.trim() || generatedSlug;

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    setSelectedFile(file);
    setError("");
    setSuccess("");

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl("");
    }

    if (file) {
      const localPreviewUrl = URL.createObjectURL(file);
      setPreviewUrl(localPreviewUrl);
    }
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

    if (!selectedFile) {
      setError("Завантаж фото кейсу");
      return;
    }

    if (!order) {
      setError("Вкажіть індекс");
      return;
    }

    try {
      setIsLoading(true);
      setLoadingText("Завантаження фото...");

      const uploadedImageUrl = await uploadImage(selectedFile);
      console.log(uploadedImageUrl);

      setLoadingText("Створення кейсу...");

      await axios.post("/api/adminCases/create", {
        title: title.trim(),
        subTitle: subTitle.trim(),
        slug: finalSlug.trim(),
        imgUrl: uploadedImageUrl,
        categories: categories
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),
        isPublished,
        order,
      });

      setSuccess("Кейс успішно створений");
      setTitle("");
      setSubTitle("");
      setSlug("");
      setCategories("");
      setIsPublished(false);
      setSelectedFile(null);

      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }

      setPreviewUrl("");
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
              <p className="add-case-label">Адмінка / Кейси</p>
              <h1 className="add-case-title">Додати кейс</h1>
            </div>

            <div className="add-case-actions">
              <Link href="/admin-boza/cases" className="add-case-back">
                ← Назад до кейсів
              </Link>
            </div>
          </div>

          <form className="add-case-form" onSubmit={handleSubmit}>
            <div className="add-case-grid">
              <div className="add-case-field full">
                <label htmlFor="title">Назва кейсу</label>
                <input
                  id="title"
                  type="text"
                  placeholder="Наприклад: Strong & Young"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="add-case-field full">
                <label htmlFor="subTitle">Підзаголовок</label>
                <input
                  id="subTitle"
                  type="text"
                  placeholder="Наприклад: Інжиніринг"
                  value={subTitle}
                  onChange={(e) => setSubTitle(e.target.value)}
                />
              </div>

              <div className="add-case-field full">
                <label htmlFor="subTitle">Індекс</label>
                <input
                  id="subTitle"
                  type="number"
                  placeholder="Наприклад: Інжиніринг"
                  value={order}
                  onChange={(e) => {
                    const value = e.target.value;
                    setOrder(value === "" ? 0 : Number(value));
                  }}
                />
                <span className="add-case-hint">
                  (В порядку зростання 1 , 2 , 3 , 4)
                </span>
              </div>

              <div className="add-case-field full">
                <label htmlFor="slug">Slug</label>
                <input
                  id="slug"
                  type="text"
                  placeholder="strong-young"
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
                <span className="add-case-hint">
                  Можна тільки завантажити файл
                </span>
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
                  placeholder="Айдентика, Стратегія бренду, SMM"
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
                  <span>Опублікувати одразу</span>
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
                {isLoading ? "Обробка..." : "Створити кейс"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
