import Loader from '~/components/loader.jsx';
import LeftSection from '~/pages/estate/estateItem/estateInfo/leftSection';
import AsideSection from '~/pages/estate/estateItem/estateInfo/asideSection/index.jsx';
import { useEffect, useRef } from 'react';
import { useEstate } from '~/features/estates/useEstate.js';

export default function EstateInfo() {
  const { estate, isPending } = useEstate();
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current && !isPending)
      ref.current.scrollIntoView({ behavior: 'smooth' });
  }, [isPending]);

  return (
    <>
      {isPending ? (
        <Loader />
      ) : (
        <section ref={ref}>
          <div className="container">
            <div className="header mb-6 px-2">
              <h2 className="text-5xl">{estate?.title}</h2>
              <p className="text-md">
                {estate?.city} {estate?.place && `/${estate?.place}`}
              </p>
            </div>
            <div id="printed-section" className="grid md:grid-cols-[8fr_4fr]">
              <LeftSection estateItem={estate} />
              <AsideSection estateItem={estate} />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
