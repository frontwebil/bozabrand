import { ComponentText } from "./TextContent/Component";
import { TemplateText } from "./TextContent/Template";

export const caseBlocksRegistry = {
  textBlock: {
    label: "Text Block",
    component: ComponentText,
    template: TemplateText,
    defaultData: {
      label: "Beauty",
      title: "Майстерня Рефрешу",
      rightTitle: "Встановили баланс.",
      description:
        "Ми провели експрес та глибинні опитування клієнтів майстерні, і відчули хвилю вражень від місця як провідних експертів своєї справи у місті Суми.",
      icon: "/Projects/icon-test.svg",
    },
  },
} as const;

export type CaseBlockType = keyof typeof caseBlocksRegistry;
