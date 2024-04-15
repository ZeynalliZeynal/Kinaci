export default function SearchInput({
  type,
  placeholder,
  initValue,
  dispatch,
  property,
  setSearchParams,
}) {
  return (
    <div className="transition-colors px-2.5 py-4 rounded-button border border-blue-900/25 focus:border-blue-900 bg-white w-full flex text-xs h-[50px]">
      <input
        type={type}
        placeholder={placeholder}
        value={initValue}
        onChange={(e) =>
          setSearchParams((prev) => {
            prev.set(property, e.target.value)
            return prev
          })
        }
      />
    </div>
  )
}
