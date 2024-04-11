export default function SearchInput({ type, placeholder }) {
  return (
    <>
      <div className="transition-colors px-2.5 py-4 rounded-button border border-blue-900/25 focus:border-blue-900 bg-white w-full flex text-xs h-[50px]">
        <input type={type} placeholder={placeholder} />
      </div>
    </>
  )
}
