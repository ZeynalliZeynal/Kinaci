import Search from '~/components/search/index.jsx';
import { useEffect } from 'react';
import Reviews from '~/features/reviews/Reviews.jsx';
import { useScrollToRef } from '~/hooks/useScrollTo.js';

export default function Comments() {
  const ref = useScrollToRef();

  useEffect(() => {
    document.title = 'Kinaci - Şərhlər';
  }, []);

  return (
    <main>
      <section className="bg-orange-50">
        <Search />
      </section>
      <section ref={ref} className="py-[50px]">
        <div className="container">
          <Reviews />
        </div>
      </section>
    </main>
  );
}
