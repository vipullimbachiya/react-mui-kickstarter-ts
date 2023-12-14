import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import detector from 'i18next-browser-languagedetector'
import translationEN from './assets/locales/en/translation.json'
import translationJA from './assets/locales/ja/translation.json'

export const defaultNS = 'translationEN'
export const resources = {
  en: {
    translation: translationEN,
  },
  ja: { translation: translationJA },
} as const

i18n
  .use(initReactI18next)
  .use(detector)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'ja'],
  })
export default i18n
