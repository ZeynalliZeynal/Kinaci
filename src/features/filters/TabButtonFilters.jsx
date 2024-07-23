import TabBtns from '~/features/filters/tabBtns/index.jsx';

const TabButtonFilters = ({ activeSellingType, setActiveSellingType }) => {
  return (
    <div className="tab-btns flex py-2.5 gap-2.5">
      <TabBtns
        text="Satılır"
        sellingType="For Sale"
        activeSellingType={activeSellingType}
        setActiveSellingType={setActiveSellingType}
      />
      <TabBtns
        text="İcarəyə verilir"
        sellingType="For Rent"
        activeSellingType={activeSellingType}
        setActiveSellingType={setActiveSellingType}
      />
    </div>
  );
};

export default TabButtonFilters;
