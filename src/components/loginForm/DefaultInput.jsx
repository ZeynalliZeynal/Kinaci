export default function DefaultInput({
  placeholder,
  type,
  value,
  handleChange,
}) {
  return (
    <span className="transition-colors px-2.5 py-4 rounded-xl border border-blue-900/25 focus-within:border-blue-900 bg-white w-full flex text-xs h-[50px]">
      <input
        className="placeholder:text-blue-900/50"
        type={type}
        name={type}
        id={type}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholder}
        required
      />
    </span>
  )
}
