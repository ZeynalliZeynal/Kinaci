export const navLinks = [
  {
    to: '/',
    pathName: 'home',
  },
  {
    to: '/estate',
    pathName: 'estate',
    extendable: [
      { to: '/estate/forSale', pathName: 'forSale' },
      { to: '/estate/forRent', pathName: 'forRent' },
      { to: '/estate/sold', pathName: 'sold' },
    ],
  },
  {
    to: '/about',
    pathName: 'about',
  },
  {
    to: '/services',
    pathName: 'services',
    extendable: [
      { to: '/services/freeSelection', pathName: 'freeSelection' },
      {
        to: '/services/estateInvestments',
        pathName: 'estateInvestments',
      },
      { to: '/services/studyTour', pathName: 'studyTour' },
      { to: '/services/salesService', pathName: 'salesService' },
      { to: '/services/onlineTour', pathName: 'onlineTour' },
      {
        to: '/services/portfolioSelection',
        pathName: 'portfolioSelection',
      },
      {
        to: '/services/supportPurchase',
        pathName: 'supportPurchase',
      },
    ],
  },
  {
    to: '/contact',
    pathName: 'contact',
  },
  {
    to: '/comments',
    pathName: 'comments',
  },
  {
    to: '/blog',
    pathName: 'blog',
  },
]
