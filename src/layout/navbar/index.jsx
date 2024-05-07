import NavTop from './navTop';
import NavBottom from './navBottom';

export default function Navbar() {
  /*
  const [isHidden, setIsHidden] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  useEffect(() => {
    const scrollEvent = () => {
      const currentPos = window.scrollY;
      const isScrollingDown = currentPos > prevScrollPos;
      if (window.scrollY > 152) setIsHidden(isScrollingDown);
      setPrevScrollPos(currentPos);
    };

    window.addEventListener('scroll', scrollEvent);
    return () => {
      window.removeEventListener('scroll', scrollEvent);
    };
  }, [prevScrollPos]);
  'sticky top-0 z-[690] transition-transform duration-300 ${isHidden ? '-translate-y-full' : ''}'
  isHidden={isHidden}
   */
  return (
    <header className={`text-blue-900`}>
      <NavTop />
      <NavBottom />
    </header>
  );
}
