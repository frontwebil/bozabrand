import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type Languages = "uk" | "en";

type LanguageStore = {
  language: Languages;
  setLanguage: (language: Languages) => void;
};

export const useLanguage = create<LanguageStore>()(
  persist(
    (set) => ({
      language: "uk",
      setLanguage: (language) => set({ language }),
    }),
    {
      name: "hylen.language",
      version: 1,
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ language: state.language }),
    },
  ),
);
