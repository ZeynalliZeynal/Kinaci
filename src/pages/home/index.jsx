import Carousel from './Carousel';
import Search from '~/components/search';
import { useScrollToTop } from '~/hooks/useScrollTo.js';
import OffersSection from '~/pages/home/OffersSection.jsx';
import { useEffect } from 'react';
import NewEstatesSection from '~/features/estates/NewEstatesSection.jsx';
import AffordableEstatesSection from '~/features/estates/AffordableEstatesSection.jsx';

export default function Home() {
  useScrollToTop();

  useEffect(() => {
    document.title = 'Kinaci - Ana Səhifə';
  }, []);

  return (
    <main>
      <Carousel />
      <section className="-mt-[122px] relative">
        <Search />
      </section>
      <NewEstatesSection />
      <AffordableEstatesSection />
      <OffersSection />
    </main>
  );
}
