import { IoMailOutline } from 'react-icons/io5'
import { BsTelephone } from 'react-icons/bs'
import { LuCalendarClock } from 'react-icons/lu'
import UsaIcon from '~/assets/icon/english-64.png'
import AzeIcon from '~/assets/icon/azerbaijan-64.png'
import TrIcon from '~/assets/icon/turkey-64.png'

export const links = [
  {
    styles: 'primary-button text-white bg-blue-700',
    link: 'mailto:info@kinacigroup.com',
    icon: <IoMailOutline />,
    text: 'info@kinacigroup.com',
  },
  {
    styles: 'primary-button text-white bg-orange-500',
    link: 'tel:+90(544)1380707',
    icon: <BsTelephone />,
    text: '+90(544) 138 07 07',
  },
  {
    styles:
      'primary-button group text-orange-500 bg-white border-orange-500 border hover:bg-orange-500 hover:text-white',
    link: 'tel:+90(544)1380707',
    icon: <LuCalendarClock />,
    text: 'Randevu AL',
  },
]

export const langOptions = [
  {
    flag: `${AzeIcon}`,
    title: 'Azərbaycanca',
    availability: true,
  },
  {
    flag: `${UsaIcon}`,
    title: 'English',
    availability: true,
  },
  {
    flag: `${TrIcon}`,
    title: 'Türkçe',
    availability: false,
  },
]

export const valueOptions = [
  {
    title: 'AZN',
    availability: true,
  },
  {
    title: 'USD',
    availability: false,
  },
  {
    title: 'TRY',
    availability: false,
  },
]

export const navLinks = [
  {
    to: '/home',
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
