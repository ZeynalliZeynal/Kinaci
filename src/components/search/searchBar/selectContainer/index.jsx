import Select from '~/components/search/searchBar/select/index.jsx'

export default function SelectContainer({ label, options, property }) {
  return (
    <div className="w-full grid gap-6">
      <label className="cursor-default text-sm inline-block">{label}</label>
      <Select multiple property={property} options={options} />
    </div>
  )
}
// onChange={(option) => setValue(option)}
