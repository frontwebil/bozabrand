"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import "./ConstructorPage.css";
import {
  caseBlocksRegistry,
  CaseBlockType,
} from "@/Components/CasesTemplates/registry";

type BlockItem = {
  id: number;
  caseId: number;
  type: string;
  order: number;
  data: unknown;
};

type CaseItem = {
  id: number;
  title: string;
  slug: string;
  blocks: BlockItem[];
};

type TextBlockData = {
  label?: string;
  title?: string;
  rightTitle?: string;
  description?: string;
  icon?: string;
};

type MainImageData = {
  src?: string;
  alt?: string;
};

type VideoBlockData = {
  src?: string;
  poster?: string;
  title?: string;
};

type CaseInfoData = {
  category?: string;
  title?: string;
  description?: string;
  client?: string;
  time?: string;
  expertise?: string[];
  extrasensors?: string[];
  sensoryIntegration?: string[];
  driverTeam?: string[];
};

const ICON_OPTIONS = [
  "/Projects/icons/1.svg",
  "/Projects/icons/2.svg",
  "/Projects/icons/3.svg",
  "/Projects/icons/4.svg",
  "/Projects/icons/5.svg",
  "/Projects/icons/6.svg",
];

export function ConstructorPage({ caseItem }: { caseItem: CaseItem }) {
  const router = useRouter();

  const [editingBlockId, setEditingBlockId] = useState<number | null>(null);
  const [editingType, setEditingType] = useState<string>("");

  const [textForm, setTextForm] = useState<TextBlockData>({});
  const [mainImageForm, setMainImageForm] = useState<MainImageData>({});
  const [mainImageFile, setMainImageFile] = useState<File | null>(null);
  const [mainImagePreview, setMainImagePreview] = useState<string>("");

  const [videoForm, setVideoForm] = useState<VideoBlockData>({});
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoPreview, setVideoPreview] = useState<string>("");

  const [caseInfoForm, setCaseInfoForm] = useState<CaseInfoData>({});

  const [expertiseText, setExpertiseText] = useState("");
  const [extrasensorsText, setExtrasensorsText] = useState("");
  const [sensoryIntegrationText, setSensoryIntegrationText] = useState("");
  const [driverTeamText, setDriverTeamText] = useState("");

  const [error, setError] = useState<string>("");
  const [notice, setNotice] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const [isBusy, setIsBusy] = useState(false);
  const [busyText, setBusyText] = useState("");

  useEffect(() => {
    if (!notice) return;

    const timeoutId = window.setTimeout(() => setNotice(null), 2800);
    return () => window.clearTimeout(timeoutId);
  }, [notice]);

  const normalizeDash = (value: string) =>
    value
      .replace(/\s*[-—]\s*/g, " — ")
      .replace(/[ \t]+/g, " ")
      .replace(/\n{3,}/g, "\n\n")
      .trim();

  const toList = (value: string) =>
    value
      .split("\n")
      .map((item) => normalizeDash(item))
      .filter(Boolean);

  const runAction = async (
    loadingTitle: string,
    successText: string,
    errorText: string,
    action: () => Promise<void>,
  ) => {
    try {
      setError("");
      setBusyText(loadingTitle);
      setIsBusy(true);
      await action();
      setNotice({ type: "success", text: successText });
    } catch (err) {
      setNotice({ type: "error", text: errorText });
      console.error(err);
    } finally {
      setIsBusy(false);
      setBusyText("");
    }
  };

  const handleAddBlock = async (type: CaseBlockType) => {
    await runAction(
      "Додаємо блок...",
      "Блок успішно додано",
      "Не вдалося додати блок",
      async () => {
        const config = caseBlocksRegistry[type];

        await axios.post("/api/admin-boza/cases/blocks/create", {
          caseId: caseItem.id,
          type,
          data: config.defaultData,
        });

        router.refresh();
      },
    );
  };

  const handleDeleteBlock = async (blockId: number) => {
    await runAction(
      "Видаляємо блок...",
      "Блок видалено",
      "Не вдалося видалити блок",
      async () => {
        await axios.delete(`/api/admin-boza/cases/blocks/delete/${blockId}`);
        router.refresh();
      },
    );
  };

  const handleMove = async (blockId: number, direction: "up" | "down") => {
    const currentIndex = caseItem.blocks.findIndex(
      (block) => block.id === blockId,
    );

    if (currentIndex === -1) {
      return;
    }

    const targetIndex =
      direction === "up" ? currentIndex - 1 : currentIndex + 1;

    if (targetIndex < 0 || targetIndex >= caseItem.blocks.length) {
      return;
    }

    const reordered = [...caseItem.blocks];

    [reordered[currentIndex], reordered[targetIndex]] = [
      reordered[targetIndex],
      reordered[currentIndex],
    ];

    await runAction(
      "Оновлюємо порядок блоків...",
      "Порядок блоків оновлено",
      "Не вдалося змінити порядок блоків",
      async () => {
        await axios.patch("/api/admin-boza/cases/blocks/reorder", {
          caseId: caseItem.id,
          orderedBlockIds: reordered.map((block) => block.id),
        });

        router.refresh();
      },
    );
  };

  const startEdit = (block: BlockItem) => {
    setEditingBlockId(block.id);
    setEditingType(block.type);
    setError("");
    setNotice(null);

    if (block.type === "textBlock") {
      const blockData = (block.data ?? {}) as TextBlockData;

      setTextForm({
        label: String(blockData.label ?? ""),
        title: String(blockData.title ?? ""),
        rightTitle: String(blockData.rightTitle ?? ""),
        description: String(blockData.description ?? ""),
        icon: String(blockData.icon ?? ""),
      });
    }

    if (block.type === "mainImage") {
      const blockData = (block.data ?? {}) as MainImageData;

      setMainImageForm({
        src: String(blockData.src ?? ""),
        alt: String(blockData.alt ?? ""),
      });

      setMainImageFile(null);
      setMainImagePreview(String(blockData.src ?? ""));
    }

    if (block.type === "videoBlock") {
      const blockData = (block.data ?? {}) as VideoBlockData;

      setVideoForm({
        src: String(blockData.src ?? ""),
        poster: String(blockData.poster ?? ""),
        title: String(blockData.title ?? ""),
      });

      setVideoFile(null);
      setVideoPreview(String(blockData.src ?? ""));
    }

    if (block.type === "caseInfo") {
      const blockData = (block.data ?? {}) as CaseInfoData;

      setCaseInfoForm({
        category: String(blockData.category ?? ""),
        title: String(blockData.title ?? ""),
        description: String(blockData.description ?? ""),
        client: String(blockData.client ?? ""),
        time: String(blockData.time ?? ""),
        expertise: blockData.expertise ?? [],
        extrasensors: blockData.extrasensors ?? [],
        sensoryIntegration: blockData.sensoryIntegration ?? [],
        driverTeam: blockData.driverTeam ?? [],
      });

      setExpertiseText((blockData.expertise ?? []).join("\n"));
      setExtrasensorsText((blockData.extrasensors ?? []).join("\n"));
      setSensoryIntegrationText(
        (blockData.sensoryIntegration ?? []).join("\n"),
      );
      setDriverTeamText((blockData.driverTeam ?? []).join("\n"));
    }
  };

  const cancelEdit = () => {
    setEditingBlockId(null);
    setEditingType("");

    setTextForm({});
    setMainImageForm({});
    setMainImageFile(null);
    setMainImagePreview("");

    setVideoForm({});
    setVideoFile(null);
    setVideoPreview("");

    setCaseInfoForm({});
    setExpertiseText("");
    setExtrasensorsText("");
    setSensoryIntegrationText("");
    setDriverTeamText("");

    setError("");
  };

  const handleMainImageFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setMainImageFile(file);

    if (file) {
      const preview = URL.createObjectURL(file);
      setMainImagePreview(preview);
    } else {
      setMainImagePreview(mainImageForm.src || "");
    }
  };

  const handleVideoFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setVideoFile(file);

    if (file) {
      const preview = URL.createObjectURL(file);
      setVideoPreview(preview);
    } else {
      setVideoPreview(videoForm.src || "");
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

  const saveEdit = async (blockId: number) => {
    await runAction(
      "Зберігаємо зміни...",
      "Дані блоку збережено",
      "Не вдалося зберегти зміни",
      async () => {
        let payloadData: unknown = {};

        if (editingType === "textBlock") {
          payloadData = {
            label: textForm.label?.trim() ?? "",
            title: textForm.title?.trim() ?? "",
            rightTitle: textForm.rightTitle?.trim() ?? "",
            description: textForm.description?.trim() ?? "",
            icon: textForm.icon?.trim() ?? "",
          };
        } else if (editingType === "mainImage") {
          let src = mainImageForm.src?.trim() ?? "";

          if (mainImageFile) {
            const uploaded = await uploadImage(mainImageFile);
            src = uploaded.url || "";
          }

          payloadData = {
            src,
            alt: mainImageForm.alt?.trim() ?? "",
          };
        } else if (editingType === "videoBlock") {
          let src = videoForm.src?.trim() ?? "";

          if (videoFile) {
            const uploaded = await uploadImage(videoFile);
            src = uploaded.url || "";
          }

          payloadData = {
            src,
            poster: videoForm.poster?.trim() ?? "",
            title: videoForm.title?.trim() ?? "",
          };
        } else if (editingType === "caseInfo") {
          payloadData = {
            category: caseInfoForm.category?.trim() ?? "",
            title: caseInfoForm.title?.trim() ?? "",
            description: caseInfoForm.description?.trim() ?? "",
            client: caseInfoForm.client?.trim() ?? "",
            time: caseInfoForm.time?.trim() ?? "",
            expertise: toList(expertiseText),
            extrasensors: toList(extrasensorsText),
            sensoryIntegration: toList(sensoryIntegrationText),
            driverTeam: toList(driverTeamText),
          };
        }

        await axios.patch(`/api/admin-boza/cases/blocks/update/${blockId}`, {
          data: payloadData,
        });

        cancelEdit();
        router.refresh();
      },
    );
  };

  return (
    <section className="constructor-page">
      {notice && (
        <div className={`constructor-toast ${notice.type}`}>
          <span>{notice.text}</span>
        </div>
      )}

      {isBusy && (
        <div className="constructor-loader-overlay">
          <div className="constructor-loader-box">
            <div className="constructor-loader-spinner" />
            <p>{busyText || "Зачекай, виконуємо дію..."}</p>
          </div>
        </div>
      )}

      <div className="constructor-page-container">
        <div className="constructor-page-top">
          <div>
            <p className="constructor-page-label">Конструктор кейсу</p>
            <h1 className="constructor-page-title">{caseItem.title}</h1>
            <span className="constructor-page-slug">/{caseItem.slug}</span>
          </div>

          <Link href="/admin-boza/cases" className="constructor-page-back">
            ← Назад до кейсів
          </Link>
        </div>

        <div className="constructor-layout">
          <aside className="constructor-sidebar">
            <h2>Шаблони блоків</h2>

            <div className="constructor-template-list">
              {(Object.keys(caseBlocksRegistry) as CaseBlockType[]).map(
                (key) => {
                  const Template = caseBlocksRegistry[key].template;

                  return (
                    <div className="constructor-template-item" key={key}>
                      <Template />

                      <button
                        className="constructor-add-btn"
                        onClick={() => handleAddBlock(key)}
                      >
                        Додати блок
                      </button>
                    </div>
                  );
                },
              )}
            </div>
          </aside>

          <div className="constructor-content">
            <h2>Поточні блоки</h2>

            {caseItem.blocks.length === 0 && (
              <div className="constructor-empty">
                Тут ще немає блоків. Додай перший шаблон зліва.
              </div>
            )}

            <div className="constructor-blocks">
              {caseItem.blocks.map((block) => {
                const registryItem =
                  caseBlocksRegistry[block.type as CaseBlockType];

                if (!registryItem) {
                  return (
                    <div className="constructor-block-card" key={block.id}>
                      Невідомий тип блоку: {block.type}
                    </div>
                  );
                }

                const BlockComponent = registryItem.component;

                return (
                  <div className="constructor-block-card" key={block.id}>
                    <div className="constructor-block-card-top">
                      <strong>{registryItem.label}</strong>
                      <span>order: {block.order}</span>
                    </div>

                    <div className="constructor-block-actions">
                      <button
                        className="constructor-action-btn"
                        onClick={() => handleMove(block.id, "up")}
                        disabled={block.order === 0}
                      >
                        Вгору
                      </button>

                      <button
                        className="constructor-action-btn"
                        onClick={() => handleMove(block.id, "down")}
                        disabled={block.order === caseItem.blocks.length - 1}
                      >
                        Вниз
                      </button>

                      <button
                        className="constructor-action-btn"
                        onClick={() => startEdit(block)}
                      >
                        Редагувати
                      </button>

                      <button
                        className="constructor-action-btn danger"
                        onClick={() => handleDeleteBlock(block.id)}
                      >
                        Видалити
                      </button>
                    </div>

                    {editingBlockId === block.id && (
                      <div className="constructor-edit-panel">
                        {block.type === "textBlock" && (
                          <div className="constructor-form-grid">
                            <div className="constructor-form-field">
                              <label htmlFor={`label-${block.id}`}>Лейбл</label>
                              <input
                                id={`label-${block.id}`}
                                type="text"
                                value={textForm.label || ""}
                                onChange={(e) =>
                                  setTextForm((prev) => ({
                                    ...prev,
                                    label: e.target.value,
                                  }))
                                }
                              />
                            </div>

                            <div className="constructor-form-field">
                              <label htmlFor={`title-${block.id}`}>
                                Заголовок
                              </label>
                              <input
                                id={`title-${block.id}`}
                                type="text"
                                value={textForm.title || ""}
                                onChange={(e) =>
                                  setTextForm((prev) => ({
                                    ...prev,
                                    title: e.target.value,
                                  }))
                                }
                              />
                            </div>

                            <div className="constructor-form-field">
                              <label htmlFor={`rightTitle-${block.id}`}>
                                Заголовок справа
                              </label>
                              <input
                                id={`rightTitle-${block.id}`}
                                type="text"
                                value={textForm.rightTitle || ""}
                                onChange={(e) =>
                                  setTextForm((prev) => ({
                                    ...prev,
                                    rightTitle: e.target.value,
                                  }))
                                }
                              />
                            </div>

                            <div className="constructor-form-field full">
                              <label htmlFor={`description-${block.id}`}>
                                Опис
                              </label>
                              <textarea
                                id={`description-${block.id}`}
                                value={textForm.description || ""}
                                onChange={(e) =>
                                  setTextForm((prev) => ({
                                    ...prev,
                                    description: e.target.value,
                                  }))
                                }
                              />
                            </div>

                            <div className="constructor-form-field full">
                              <label>Іконка (можна залишити пусто)</label>

                              <div className="constructor-icons-grid">
                                <button
                                  type="button"
                                  className={`constructor-icon-choice ${
                                    !textForm.icon ? "active" : ""
                                  }`}
                                  onClick={() =>
                                    setTextForm((prev) => ({
                                      ...prev,
                                      icon: "",
                                    }))
                                  }
                                >
                                  Без іконки
                                </button>

                                {ICON_OPTIONS.map((iconPath) => (
                                  <button
                                    type="button"
                                    key={iconPath}
                                    className={`constructor-icon-choice ${
                                      textForm.icon === iconPath ? "active" : ""
                                    }`}
                                    onClick={() =>
                                      setTextForm((prev) => ({
                                        ...prev,
                                        icon: iconPath,
                                      }))
                                    }
                                  >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={iconPath} alt="icon option" />
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        {block.type === "mainImage" && (
                          <div className="constructor-form-grid">
                            <div className="constructor-form-field full">
                              <label htmlFor={`imageFile-${block.id}`}>
                                Фото (Cloudinary)
                              </label>
                              <input
                                id={`imageFile-${block.id}`}
                                type="file"
                                accept="image/*"
                                onChange={handleMainImageFileChange}
                              />
                              <span className="constructor-form-hint">
                                Якщо не вибирати файл, залишиться поточне фото
                              </span>
                            </div>

                            <div className="constructor-form-field">
                              <label htmlFor={`alt-${block.id}`}>
                                Alt текст
                              </label>
                              <input
                                id={`alt-${block.id}`}
                                type="text"
                                value={mainImageForm.alt || ""}
                                onChange={(e) =>
                                  setMainImageForm((prev) => ({
                                    ...prev,
                                    alt: e.target.value,
                                  }))
                                }
                              />
                            </div>

                            {mainImagePreview && (
                              <div className="constructor-form-field full">
                                <label>Прев`ю</label>
                                <div className="constructor-upload-preview">
                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                  <img
                                    src={mainImagePreview}
                                    alt="main preview"
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        )}

                        {block.type === "videoBlock" && (
                          <div className="constructor-form-grid">
                            <div className="constructor-form-field full">
                              <label htmlFor={`videoFile-${block.id}`}>
                                Відео файл (Cloudinary)
                              </label>
                              <input
                                id={`videoFile-${block.id}`}
                                type="file"
                                accept="video/mp4,video/webm,video/quicktime"
                                onChange={handleVideoFileChange}
                              />
                              <span className="constructor-form-hint">
                                Підтримка: mp4, webm, mov. Якщо не вибирати файл
                                - залишиться поточне відео.
                              </span>
                            </div>

                            <div className="constructor-form-field">
                              <label htmlFor={`videoTitle-${block.id}`}>
                                Заголовок
                              </label>
                              <input
                                id={`videoTitle-${block.id}`}
                                type="text"
                                value={videoForm.title || ""}
                                onChange={(e) =>
                                  setVideoForm((prev) => ({
                                    ...prev,
                                    title: e.target.value,
                                  }))
                                }
                              />
                            </div>

                            <div className="constructor-form-field">
                              <label htmlFor={`videoPoster-${block.id}`}>
                                Poster URL (опціонально)
                              </label>
                              <input
                                id={`videoPoster-${block.id}`}
                                type="text"
                                value={videoForm.poster || ""}
                                onChange={(e) =>
                                  setVideoForm((prev) => ({
                                    ...prev,
                                    poster: e.target.value,
                                  }))
                                }
                              />
                            </div>

                            {videoPreview && (
                              <div className="constructor-form-field full">
                                <label>Прев`ю відео</label>
                                <div className="constructor-upload-preview">
                                  <video
                                    src={videoPreview}
                                    controls
                                    playsInline
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        )}

                        {block.type === "caseInfo" && (
                          <div className="constructor-form-grid">
                            <div className="constructor-form-field">
                              <label htmlFor={`ci-category-${block.id}`}>
                                Категорія
                              </label>
                              <input
                                id={`ci-category-${block.id}`}
                                type="text"
                                value={caseInfoForm.category || ""}
                                onChange={(e) =>
                                  setCaseInfoForm((prev) => ({
                                    ...prev,
                                    category: e.target.value,
                                  }))
                                }
                              />
                            </div>

                            <div className="constructor-form-field">
                              <label htmlFor={`ci-title-${block.id}`}>
                                Назва бренду
                              </label>
                              <input
                                id={`ci-title-${block.id}`}
                                type="text"
                                value={caseInfoForm.title || ""}
                                onChange={(e) =>
                                  setCaseInfoForm((prev) => ({
                                    ...prev,
                                    title: e.target.value,
                                  }))
                                }
                              />
                            </div>

                            <div className="constructor-form-field full">
                              <label htmlFor={`ci-desc-${block.id}`}>
                                Опис
                              </label>
                              <textarea
                                id={`ci-desc-${block.id}`}
                                value={caseInfoForm.description || ""}
                                onChange={(e) =>
                                  setCaseInfoForm((prev) => ({
                                    ...prev,
                                    description: e.target.value,
                                  }))
                                }
                              />
                            </div>

                            <div className="constructor-form-field">
                              <label htmlFor={`ci-client-${block.id}`}>
                                Client
                              </label>
                              <input
                                id={`ci-client-${block.id}`}
                                type="text"
                                value={caseInfoForm.client || ""}
                                onChange={(e) =>
                                  setCaseInfoForm((prev) => ({
                                    ...prev,
                                    client: e.target.value,
                                  }))
                                }
                              />
                            </div>

                            <div className="constructor-form-field">
                              <label htmlFor={`ci-time-${block.id}`}>
                                Time
                              </label>
                              <input
                                id={`ci-time-${block.id}`}
                                type="text"
                                value={caseInfoForm.time || ""}
                                onChange={(e) =>
                                  setCaseInfoForm((prev) => ({
                                    ...prev,
                                    time: e.target.value,
                                  }))
                                }
                              />
                            </div>

                            <div className="constructor-form-field full">
                              <label htmlFor={`ci-expertise-${block.id}`}>
                                Expertise (1 рядок = 1 пункт)
                              </label>
                              <textarea
                                id={`ci-expertise-${block.id}`}
                                value={expertiseText}
                                onChange={(e) =>
                                  setExpertiseText(e.target.value)
                                }
                              />
                            </div>

                            <div className="constructor-form-field full">
                              <label htmlFor={`ci-extra-${block.id}`}>
                                Bozabrand Extrasensors (формат: Name — Role)
                              </label>
                              <textarea
                                id={`ci-extra-${block.id}`}
                                value={extrasensorsText}
                                onChange={(e) =>
                                  setExtrasensorsText(e.target.value)
                                }
                              />
                            </div>

                            <div className="constructor-form-field full">
                              <label htmlFor={`ci-sensory-${block.id}`}>
                                Sensory Integration (формат: Name — Role)
                              </label>
                              <textarea
                                id={`ci-sensory-${block.id}`}
                                value={sensoryIntegrationText}
                                onChange={(e) =>
                                  setSensoryIntegrationText(e.target.value)
                                }
                              />
                              <span className="constructor-form-hint">
                                Якщо залишити пусто, блок Sensory Integration не
                                відображається.
                              </span>
                            </div>

                            <div className="constructor-form-field full">
                              <label htmlFor={`ci-driver-${block.id}`}>
                                Driver Team (формат: Name — Role)
                              </label>
                              <textarea
                                id={`ci-driver-${block.id}`}
                                value={driverTeamText}
                                onChange={(e) =>
                                  setDriverTeamText(e.target.value)
                                }
                              />
                            </div>
                          </div>
                        )}

                        {block.type !== "textBlock" &&
                          block.type !== "mainImage" &&
                          block.type !== "videoBlock" &&
                          block.type !== "caseInfo" && (
                            <p>
                              Для цього блоку поки немає окремої форми
                              редагування.
                            </p>
                          )}

                        {error && <p className="constructor-error">{error}</p>}

                        <div className="constructor-edit-actions">
                          <button
                            className="constructor-action-btn"
                            onClick={() => saveEdit(block.id)}
                          >
                            Зберегти
                          </button>

                          <button
                            className="constructor-action-btn"
                            onClick={cancelEdit}
                          >
                            Скасувати
                          </button>
                        </div>
                      </div>
                    )}

                    <div className="constructor-block-preview">
                      <BlockComponent data={block.data as never} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
