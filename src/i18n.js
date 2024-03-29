import i18n from 'i18next'
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: 'az',
    fallbackLng: 'az',
    resources: {
      az: {
        translation: {
          home: 'Ana Səhifə',
          estate: 'Əmlak',
          forSale: 'Satılır',
          forRent: 'İcarəyə verilir',
          sold: 'Satılmış əmlak',
          about: 'Şirkət haqqında',
          services: 'Xidmətlərimiz',
          freeSelection: 'Pulsuz əmlak seçimi',
          estateInvestments: 'Daşınmaz Əmlak İnvestisiyaları',
          studyTour: 'Tədris Turu',
          salesService: 'Satış sonrası xidmət',
          onlineTour: 'Onlayn tur',
          portfolioSelection: 'Portfolioların fərdi seçimi',
          supportPurchase: 'Satınalma zamanı dəstək',
          contact: 'Əlaqə',
          comments: 'Şərhlər',
          blog: 'Bloq',
          appointment: 'Randevu Al',
          favourites: 'Bəyəndiklərim',
          fullName: 'Ad & Soyad',
          phone: 'Telefon nömrəsi',
        },
      },
      en: {
        translation: {
          home: 'Home page',
          estate: 'Estate',
          forSale: 'For sale',
          forRent: 'For rent',
          sold: 'Sold estate',
          about: 'About company',
          services: 'Our services',
          freeSelection: 'Free selection',
          estateInvestments: 'Estate investments',
          studyTour: 'Study tour',
          salesService: 'Sales service',
          onlineTour: 'Online tour',
          portfolioSelection: 'Portfolio selection',
          supportPurchase: 'Support purchase',
          contact: 'Contact',
          comments: 'Comments',
          blog: 'Blog',
          appointment: 'Book an appointment',
          favourites: 'My Favourites',
          fullName: 'Name & Surname',
          phone: 'Phone number',
        },
      },
    },
  })
