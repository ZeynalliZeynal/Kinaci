export const initialState = {
  // * Select values
  estateTypeValue: [],
  roomValue: [],
  cityValue: [],
  placeValue: [],
  badgeValue: [],

  // * Input values
  minPrice: '',
  maxPrice: '',
  minSize: '',
  maxSize: '',
  minFloor: '',
  maxFloor: '',
  estateId: '',
  minConstructorDate: '',
  maxConstructorDate: '',
  minSeaDistance: '',
  maxSeaDistance: '',
  minAirportDistance: '',
  maxAirportDistance: '',

  isExpanded: false,
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, ...action.payload }
    case 'SET_VALUES':
      return { ...state, ...action.payload }
    case 'CLEAR_FILTER':
      return initialState
    case 'TOGGLE_EXPANDED':
      return { ...state, isExpanded: !state.isExpanded }
    default:
      return state
  }
}
