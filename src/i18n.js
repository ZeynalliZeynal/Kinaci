import i18n from 'i18next'
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: 'az',
    resources: {
      az: {
        transition: {
          navigateLink: 'Ana Səhifə',
        },
      },
      en: {
        transition: {
          navigateLink: 'Home Page',
        },
      },
    },
  })
