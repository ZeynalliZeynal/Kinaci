export default function DefaultInput({
  placeholder,
  name,
  type,
  value,
  handleChange,
}) {
  return (
    <span className="transition-colors my-2.5 px-2.5 py-4 rounded-xl border border-blue-900/25 focus-within:border-blue-900 bg-white w-full flex text-xs h-[50px] cursor-default">
      <input
        className="placeholder:text-blue-900/50"
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholder}
        required
      />
    </span>
  )
}
