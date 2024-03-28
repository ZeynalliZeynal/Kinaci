export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, ...action.payload }
    case 'SET_VALUES':
      return { ...state, ...action.payload }
    case 'CLEAR_FILTER':
      return {
        ...state,
        estateTypeValue: [],
        roomValue: [],
        cityValue: [],
        placeValue: [],
        badgeValue: [],
      }
    case 'TOGGLE_EXPANDED':
      return { ...state, isExpanded: !state.isExpanded }
    default:
      return state
  }
}
