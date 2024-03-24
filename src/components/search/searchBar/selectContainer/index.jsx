import Select from '~/components/search/searchBar/select/index.jsx'

export default function SelectContainer({ label, value, options, setValue }) {
  return (
    <div className="w-full">
      <label className="cursor-default text-sm mb-3 inline-block">
        {label}
      </label>
      <Select
        multiple
        value={value}
        options={options}
        onChange={(option) => setValue(option)}
      />
    </div>
  )
}
