import { sortSelect } from '~/data/sortSelect.js'

export const initialState = {
  value: sortSelect[0],
  estates: [],
  isLoading: false,
  visibleItems: 6,
  totalItems: 0,
  loadMore: false,
  isListed: false,
}
export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_VALUE':
      return { ...state, value: action.payload }
    case 'SET_ESTATES':
      return { ...state, estates: action.payload }
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload }
    case 'SET_LOADING_MORE':
      return { ...state, loadMore: action.payload }
    case 'SET_VISIBLE_ITEMS':
      return { ...state, visibleItems: state.visibleItems + 6 }
    case 'SET_TOTAL_ITEMS':
      return { ...state, totalItems: action.payload }
    case 'SET_LISTED':
      return { ...state, isListed: action.payload }
  }
}
