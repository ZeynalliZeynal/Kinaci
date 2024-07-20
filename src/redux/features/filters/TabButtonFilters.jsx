import TabBtns from '~/redux/features/filters/tabBtns';
import { useEstateFilters } from './useEstateFilters';
import SpinnerMini from '~/components/SpinnerMini';
import { toCamelCase } from '~/functions/convertToCamelCase';

const TabButtonFilters = ({ activeSellingType, setActiveSellingType }) => {
  const { filters, isPending } = useEstateFilters();

  if (isPending) return <SpinnerMini />;

  return (
    <div className="tab-btns flex py-2.5 gap-2.5">
      {filters?.estateStatuses.map(({ label, id }) => (
        <TabBtns
          key={id}
          text={label}
          sellingType={toCamelCase(label)}
          activeSellingType={activeSellingType}
          setActiveSellingType={setActiveSellingType}
        />
      ))}
    </div>
  );
};

export default TabButtonFilters;
