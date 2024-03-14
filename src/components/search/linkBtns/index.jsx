import LinkBtn from '~/components/search/linkBtns/linkBtn/index.jsx'
import { linkBtns } from '~/data/searchBar/linkBtns.jsx'

export default function LinkBtns() {
  return (
    <ul className="gap-2">
      {linkBtns.map((link, i) => (
        <LinkBtn bgColor={link.bgColor} key={i} to={link.to}>
          {link.text}
        </LinkBtn>
      ))}
    </ul>
  )
}
