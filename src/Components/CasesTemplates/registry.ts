import { ComponentImage } from "./MainImg/Component";
import { TemplateImage } from "./MainImg/Template";
import { ComponentText } from "./TextContent/Component";
import { TemplateText } from "./TextContent/Template";
import { ComponentVideo } from "./Video/Component";
import { TemplateVideo } from "./Video/Template";

export const caseBlocksRegistry = {
  mainImage: {
    label: "Main Image",
    component: ComponentImage,
    template: TemplateImage,
    defaultData: {
      src: "/Projects/1.png",
      alt: "main-img",
    },
  },
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
      icon: "",
    },
  },
  videoBlock: {
    label: "Video Block",
    component: ComponentVideo,
    template: TemplateVideo,
    defaultData: {
      src: "",
      poster: "",
      title: "",
    },
  },
} as const;

export type CaseBlockType = keyof typeof caseBlocksRegistry;
