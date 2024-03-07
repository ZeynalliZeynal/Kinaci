export const navLinks = [
  {
    to: '/',
    pathName: 'Ana Səhifə',
  },
  {
    to: '/estate',
    pathName: 'Əmlak',
    extendable: [
      { to: '/estate/forSale', pathName: 'Satılır' },
      { to: '/estate/forRent', pathName: 'İcarəyə verilir' },
      { to: '/estate/sold', pathName: 'Satılmış əmlak' },
    ],
  },
  {
    to: '/about',
    pathName: 'Şirkət haqqında',
  },
  {
    to: '/services',
    pathName: 'Xidmətlərimiz',
    extendable: [
      { to: '/services/freeSelection', pathName: 'Pulsuz əmlak seçimi' },
      {
        to: '/services/estateInvestments',
        pathName: 'Daşınmaz Əmlak İnvestisiyaları',
      },
      { to: '/services/studyTour', pathName: 'Tədris Turu' },
      { to: '/services/salesService', pathName: 'Satış sonrası xidmət' },
      { to: '/services/onlineTour', pathName: 'Onlayn tur' },
      {
        to: '/services/portfolioSelection',
        pathName: 'Portfolioların fərdi seçimi',
      },
      {
        to: '/services/supportPurchase',
        pathName: 'Satınalma zamanı dəstək',
      },
    ],
  },
  {
    to: '/contact',
    pathName: 'Əlaqə',
  },
  {
    to: '/comments',
    pathName: 'Şərhlər',
  },
  {
    to: '/blog',
    pathName: 'Bloq',
  },
]
