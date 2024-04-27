import CategorySectionContainer from '~/pages/blog/categories/CategorySectionContainer.jsx'
import { useSearchParams } from 'react-router-dom'
import { searchParamsArray } from '~/functions/searchParamsArray.js'

export default function CategoriesTags({ tags }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const paramsTags = searchParams.get('blogTags')

  const handleSelectTag = (tag) => {
    searchParamsArray(paramsTags, setSearchParams, 'blogTags', tag)
  }

  return (
    <CategorySectionContainer>
      <h4 className="font-semibold">Etiketlər</h4>
      <ul className="gap-8 text-sm mt-5 flex-wrap justify-start">
        {tags?.map((tag) => (
          <li key={tag}>
            <button
              className={`border border-blue-900/15 rounded-full px-5 leading-[270%] hover:-translate-y-1 ${paramsTags && (paramsTags.includes(tag) ? 'bg-blue-900 text-white' : 'text-blue-900 bg-white')}`}
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
