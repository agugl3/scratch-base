const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'LIST_RECEIVED':
      return { ...state, listingData: action.jsonObj }
    default:
      return state;
  }
};

export default reducer;
