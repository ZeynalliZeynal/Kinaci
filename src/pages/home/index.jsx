import Carousel from './Carousel';
import Search from '~/components/search';
import Loader from '~/components/loader';
import { useEstate } from '~/hooks/useEstate';
import EstateSection from '~/redux/features/estates/estateSection';
import { useScrollToTop } from '~/hooks/useScrollTo.js';
import OffersSection from '~/pages/home/OffersSection.jsx';
import { useEffect } from 'react';
import EstateSections from '~/redux/features/estates/EstateSections';

export default function Home() {
  const [estates, isLoading] = useEstate();
  const newEstates = estates.filter(
    (newEstates) => newEstates.feature === 'Yeni',
  );
  const promotionalEstates = estates.filter((newEstates) =>
    newEstates.feature.includes('endirim'),
  );
  const specialEstates = estates.filter(
    (newEstates) => newEstates.feature === 'Sərfəli',
  );

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
      <EstateSections />
      <OffersSection />
    </main>
  );
}
