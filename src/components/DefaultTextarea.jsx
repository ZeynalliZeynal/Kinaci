export function DefaultTextarea({ placeholder, name, value, handleChange }) {
  return (
    <span className="transition-colors my-2.5 px-2.5 py-4 rounded-xl border border-blue-900/25 focus-within:border-blue-900 bg-white w-full h-full flex text-xs cursor-default">
      <textarea
        placeholder={placeholder}
        id={name}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
    </span>
  )
}
