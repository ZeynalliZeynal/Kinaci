export const initialState = {
  blogs: [],
  tags: [],
  values: {
    title: '',
    selectedTags: [],
  },

  totalItems: 'Loading...',
  isLoading: false,
  currentPage: 1,
}
export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_BLOGS':
      return { ...state, blogs: action.payload }
    case 'SET_TAGS':
      return { ...state, tags: action.payload }
    case 'SET_VALUES':
      return { ...state, values: action.payload }
    case 'SET_LOADING':
      return { ...state, isLoading: !state.isLoading }
    case 'SET_TOTAL_ITEMS':
      return { ...state, totalItems: action.payload }
  }
}
