import NavTop from './navTop'
import NavBottom from './navBottom'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [isHidden, setIsHidden] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY)
  useEffect(() => {
    const scrollEvent = () => {
      const currentPos = window.scrollY
      const isScrollingDown = currentPos > prevScrollPos
      setIsHidden(isScrollingDown)
      setPrevScrollPos(currentPos)
    }
    window.addEventListener('scroll', scrollEvent)
    return () => {
      window.removeEventListener('scroll', scrollEvent)
    }
  }, [prevScrollPos])
  return (
    <header
      className={`text-blue-900 sticky top-0 z-[990] transition-transform duration-300 ${isHidden ? '-translate-y-full' : ''}`}
    >
      <NavTop />
      <NavBottom isHidden={isHidden} />
    </header>
  )
}
