import i18next from "i18next"
import { initReactI18next } from "react-i18next"
import en from "./locales/en"
import ko from "./locales/ko"
import ja from "./locales/ja"

i18next.use(initReactI18next).init({
  resources: {
    en,
    ko,
    ja,
  },
  lng: "en",
  // lng: navigator.language,
  interpolation: {
    escapeValue: false,
  },
})
