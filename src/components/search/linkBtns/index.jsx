import LinkBtn from '~/components/search/linkBtns/linkBtn/index.jsx'
import { linkBtns } from '~/data/searchBar/linkBtns.jsx'
import { useTranslation } from 'react-i18next'

export default function LinkBtns() {
  const { t } = useTranslation()
  return (
    <ul className="gap-2 hidden md:flex">
      {linkBtns.map((link, i) => (
        <LinkBtn bgColor={link.bgColor} key={i} to={link.to}>
          {t(link.text)}
        </LinkBtn>
      ))}
    </ul>
  )
}
