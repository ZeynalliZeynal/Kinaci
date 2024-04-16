export default function SearchInput({
  type,
  placeholder,
  value,
  handleChange,
}) {
  return (
    <div className="transition-colors px-2.5 py-4 rounded-button border border-blue-900/25 focus-within:border-blue-900 bg-white w-full flex text-xs h-[50px]">
      <input
        type={type}
        name={type}
        id={type}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  )
}
