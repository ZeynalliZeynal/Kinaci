export const initialState = {
  values: {
    name: '',
    email: '',
    text: '',
  },
  countSymbols: 500,
  comments: [],
  isChecked: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_VALUES':
      return { ...state, values: { ...state.values, ...action.payload } };
    case 'IS_CHECKED':
      return { ...state, isChecked: action.payload };
    case 'SET_COMMENTS':
      return { ...state, comments: action.payload };
    case 'RESET_VALUES':
      return {
        ...initialState,
        isChecked: state.isChecked,
        comments: state.comments,
      };
    case 'SAVE_LOCAL_STORAGE':
      localStorage.setItem('commentValues', JSON.stringify(action.payload));
      return state;
    case 'REMOVE_LOCAL_STORAGE':
      localStorage.removeItem('commentValues');
      return state;
    case 'COUNT_SYMBOLS':
      return {
        ...state,
        countSymbols: initialState.countSymbols - action.payload,
      };
    default:
      return state;
  }
};
