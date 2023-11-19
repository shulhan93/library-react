import * as a from "./actionTypes.js";

const initialState = [];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.ADD_BOOK:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default bookReducer;
