import * as a from "./actionTypes.js";

export const addBook = (newBook) => {
  return {
    type: a.ADD_BOOK,
    payload: newBook,
  };
};

export const delBook = (id) => {
  return {
    type: a.DEL_BOOK,
    payload: id,
  };
};

export const toggleFavorite = (id) => {
  return {
    type: a.TOGGLE_FAVORITE,
    payload: id,
  };
};
