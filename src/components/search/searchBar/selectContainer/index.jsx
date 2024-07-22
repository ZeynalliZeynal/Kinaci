import Select from '~/components/search/searchBar/select/index.jsx';
import Skeleton from '~/components/Skeleton';

export default function SelectContainer({
  label,
  options,
  property,
  isLoading,
}) {
  return (
    <div className="w-full grid gap-6">
      <label className="cursor-default text-sm inline-block">{label}</label>
      {isLoading ? (
        <div className="h-[50px]">
          <Skeleton />
        </div>
      ) : (
        <Select multiple property={property} options={options} />
      )}
    </div>
  );
}
// onChange={(option) => setValue(option)}
