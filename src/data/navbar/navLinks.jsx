export const navLinks = [
  {
    to: '/',
    name: 'Ana Səhifə',
  },
  {
    to: '/estate',
    name: 'Əmlak',
    extendable: [
      { to: '/estate/forSale', name: 'Satılır' },
      { to: '/estate/forRent', name: 'İcarəyə verilir' },
    ],
  },
  {
    to: '/about',
    name: 'Şirkət haqqında',
  },
  {
    to: '/services',
    name: 'Xidmətlərimiz',
    extendable: [
      {
        to: '/services/freeSelection',
        name: 'Pulsuz əmlak seçimi',
      },
      {
        to: '/services/estateInvestments',
        name: 'Daşınmaz Əmlak İnvestisiyaları',
      },
      { to: '/services/studyTour', name: 'Tədris Turu' },
      {
        to: '/services/salesService',
        name: 'Satış sonrası xidmət',
      },
      {
        to: '/services/onlineTour',
        name: 'Onlayn tur',
      },
      {
        to: '/services/portfolioSelection',
        name: 'Portfolioların fərdi seçimi',
      },
      {
        to: '/services/supportPurchase',
        name: 'Satınalma zamanı dəstək',
      },
    ],
  },
  {
    to: '/contact',
    name: 'Əlaqə',
  },
  {
    to: '/comments',
    name: 'Şərhlər',
  },
  {
    to: '/blog',
    name: 'Bloq',
  },
]
