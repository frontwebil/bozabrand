"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./ConstructorPage.css";
import { caseBlocksRegistry, CaseBlockType } from "@/Components/CasesTemplates/registry";


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

export function ConstructorPage({ caseItem }: { caseItem: CaseItem }) {
  const router = useRouter();

  const handleAddBlock = async (type: CaseBlockType) => {
    try {
      const config = caseBlocksRegistry[type];

      await axios.post("/api/admin-boza/cases/blocks/create", {
        caseId: caseItem.id,
        type,
        data: config.defaultData,
      });

      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="constructor-page">
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
