import { IoMailOutline } from 'react-icons/io5'
import { BsTelephone } from 'react-icons/bs'
import { LuCalendarClock } from 'react-icons/lu'
import { adminInfo } from '~/data/adminInfo/index.jsx'

export const links = [
  {
    styles: 'primary-button text-white bg-blue-700',
    link: `mailto:${adminInfo.email}`,
    icon: <IoMailOutline />,
    text: adminInfo.email,
  },
  {
    styles: 'primary-button text-white bg-orange-500',
    link: `tel:${adminInfo.tel}`,
    icon: <BsTelephone />,
    text: '+90(544) 138 07 07',
  },
  {
    styles:
      'primary-button group text-orange-500 bg-white border-orange-500 border hover:bg-orange-500 hover:text-white',
    icon: <LuCalendarClock />,
    text: 'Randevu AL',
    isBtn: true,
  },
]
