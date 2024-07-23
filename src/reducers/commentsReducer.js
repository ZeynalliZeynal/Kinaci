export const initialState = {
  countSymbols: 500,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'COUNT_SYMBOLS':
      return {
        ...state,
        countSymbols: initialState.countSymbols - action.payload,
      };
    default:
      return state;
  }
};
