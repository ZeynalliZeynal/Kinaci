import AzeIcon from '~/assets/icon/azerbaijan-64.png'
import UsaIcon from '~/assets/icon/english-64.png'
import TrIcon from '~/assets/icon/turkey-64.png'

export const langOptions = [
  {
    flag: `${AzeIcon}`,
    code: 'az',
    availability: true,
  },
  {
    flag: `${UsaIcon}`,
    code: 'en',
    availability: true,
  },
  {
    flag: `${TrIcon}`,
    code: 'tr',
    availability: false,
  },
]
