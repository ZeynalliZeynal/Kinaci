import { useSearchParams } from 'react-router-dom'

export default function SearchInput({ type, placeholder, property, name }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const handleChange = (value) => {
    setSearchParams(
      (prev) => {
        if (value === null || value === '') prev.delete(property)
        else prev.set(property, value)
        return prev
      },
      { replace: true },
    )
  }
  return (
    <div className="transition-colors px-2.5 py-4 rounded-button border border-blue-900/25 focus-within:border-blue-900 bg-white w-full flex text-xs h-[50px]">
      <input
        type={type}
        name={name}
        id={name}
        value={searchParams.get(property) || ''}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  )
}
