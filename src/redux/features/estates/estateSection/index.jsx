import { useEffect, useState } from 'react';
import EstateCards from '~/components/estateCards/index.jsx';
import { ShowMoreButton } from '~/pages/home/ShowMoreButton.jsx';
import NoProduct from '~/components/NoProduct.jsx';
import TabButtonFilters from '~/redux/features/filters/TabButtonFilters';
import { useEstates } from '../useEstates';
import Loader from '~/components/loader';

export default function EstateSection({
  filter,
  title,
  paragraph,
  bg,
  buttonLink,
}) {
  const [activeSellingType, setActiveSellingType] = useState('forSale');

  const { filteredEstates, isPending } = useEstates(
    {
      filter: { field: filter, value: activeSellingType },
    },
    activeSellingType,
  );

  if (isPending) return <Loader />;

  return (
    <section className={bg}>
      <div className="container">
        <div className="grid md:flex justify-between mb-8">
          <div className="header text-blue-900">
            <h2>{title}</h2>
            <p className="text-sm">{paragraph}</p>
          </div>
          <TabButtonFilters
            activeSellingType={activeSellingType}
            setActiveSellingType={setActiveSellingType}
          />
        </div>
        {filteredEstates?.length ? (
          <div className="grid grid-cols-1 items-stretch md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEstates.map((estate) => (
              <EstateCards estate={estate} key={estate.id} />
            ))}
          </div>
        ) : (
          <NoProduct />
        )}{' '}
        <ShowMoreButton buttonLink={buttonLink} />
      </div>
    </section>
  );
}
