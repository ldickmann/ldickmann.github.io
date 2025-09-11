import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Importação direta dos recursos de tradução
import ptTranslations from "./locales/pt.js";
import enTranslations from "./locales/en.js";

const resources = {
  pt: {
    translation: ptTranslations,
  },
  en: {
    translation: enTranslations,
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    supportedLngs: ["pt", "en"],
    fallbackLng: "pt",

    // Configurações de detecção de idioma
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      lookupLocalStorage: "i18nextLng",
      caches: ["localStorage"],
    },

    // Configurações do React
    react: {
      useSuspense: false,
      bindI18n: "languageChanged",
      bindI18nStore: "added removed",
      transEmptyNodeValue: "",
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ["br", "strong", "i"],
    },

    // Configurações de interpolação
    interpolation: {
      escapeValue: false,
    },

    // Debug apenas em desenvolvimento
    debug: import.meta.env.DEV,
  });

export default i18n;
