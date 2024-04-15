import Select from '~/components/search/searchBar/select/index.jsx'

export default function SelectContainer({ label, value, options, setValue }) {
  return (
    <div className="w-full grid gap-6">
      <label className="cursor-default text-sm inline-block">{label}</label>
      <Select
        multiple
        value={value}
        options={options}
        onChange={(option) => setValue(option)}
      />
    </div>
  )
}
