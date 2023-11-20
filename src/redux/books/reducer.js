import * as a from "./actionTypes.js";

const initialState = [];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.ADD_BOOK:
      return [...state, action.payload];
    case a.DEL_BOOK:
      return state.filter((book) => book.id != action.payload);
    default:
      return state;
  }
};

export default bookReducer;
