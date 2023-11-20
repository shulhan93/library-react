import * as a from "./actionTypes.js";

const initialState = [];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.ADD_BOOK:
      return [...state, action.payload];
    case a.DEL_BOOK:
      return state.filter((book) => book.id != action.payload);
    case a.TOGGLE_FAVORITE:
      return state.map((book) => (action.payload === book.id ? { ...book, isFavorite: !book.isFavorite } : book));
    default:
      return state;
  }
};

export default bookReducer;
