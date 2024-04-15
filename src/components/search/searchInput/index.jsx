export default function SearchInput({
  type,
  placeholder,
  initValue,
  dispatch,
  property,
}) {
  return (
    <div className="transition-colors px-2.5 py-4 rounded-button border border-blue-900/25 focus:border-blue-900 bg-white w-full flex text-xs h-[50px]">
      <input
        type={type}
        placeholder={placeholder}
        value={initValue}
        onChange={(e) => {
          dispatch({
            type: 'SET_VALUES',
            payload: { [property]: e.target.value },
          })
        }}
      />
    </div>
  )
}
