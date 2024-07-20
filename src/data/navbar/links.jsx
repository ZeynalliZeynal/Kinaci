import { IoMailOutline } from 'react-icons/io5';
import { BsTelephone } from 'react-icons/bs';
import { adminInfo } from '~/data/adminInfo/index.jsx';
import { FiLogIn } from 'react-icons/fi';

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
];
