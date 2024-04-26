import CategorySectionContainer from '~/pages/blog/categories/CategorySectionContainer.jsx'
import { useSearchParams } from 'react-router-dom'

export default function CategoriesTags({ tags }) {
  const [searchParams, setSearchParams] = useSearchParams()

  const handleSelectTag = (tag) => {
    const paramsTags = searchParams.get('blogTags')
    let selectedTags = paramsTags
      ? paramsTags.includes(',')
        ? paramsTags.split(',')
        : [paramsTags]
      : []

    if (selectedTags.includes(tag))
      selectedTags = selectedTags.filter((t) => t !== tag)
    else selectedTags.push(tag)

    setSearchParams((prev) => {
      if (selectedTags.length === 0) prev.delete('blogTags')
      else
        prev.set(
          'blogTags',
          selectedTags.length === 1 ? selectedTags[0] : selectedTags.join(','),
        )
      return prev
    })
  }

  return (
    <CategorySectionContainer>
      <h4 className="font-semibold">Etiketlər</h4>
      <ul className="gap-8 text-sm mt-5 flex-wrap justify-start">
        {tags?.map((tag) => (
          <li key={tag}>
            <button
              className={`border border-blue-900/15 rounded-full px-5 leading-[270%] hover:-translate-y-1 ${searchParams.get('blogTags') && (searchParams.get('blogTags').includes(tag) ? 'bg-blue-900 text-white' : 'text-blue-900 bg-white')}`}
              data-tag={tag}
              onClick={() => handleSelectTag(tag)}
            >
              {tag}
            </button>
          </li>
        ))}
      </ul>
    </CategorySectionContainer>
  )
}
