export default function SearchInput({ type, placeholder, label }) {
  return (
    <>
      <div className="transition-colors px-2.5 py-4 rounded-button border border-blue-900/25 focus:border-blue-900 bg-white w-full flex cursor-pointer text-xs h-[50px]">
        <input type={type} placeholder={placeholder} />
      </div>
    </>
  )
}
