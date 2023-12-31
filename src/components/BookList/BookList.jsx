import { useDispatch, useSelector } from "react-redux";
import { delBook, toggleFavorite } from "../../redux/books/actionCreators";
import { BsBookmarkStar, BsBookmarkStarFill } from "react-icons/bs";

import "./BookList.css";

export default function BookList() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite(id));
  };

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No Books available</p>
      ) : (
        <ul>
          {books.map((book, i) => (
            <li key={book.id}>
              <div className="book-info">
                {++i}. {book.title} by <strong>{book.author}</strong>
              </div>
              <div className="book-actions">
                <span onClick={() => handleToggleFavorite(book.id)}>
                  {book.isFavorite ? (
                    <BsBookmarkStarFill className="star-icon" />
                  ) : (
                    <BsBookmarkStar className="star-icon" />
                  )}
                </span>
                <button onClick={() => dispatch(delBook(book.id))}>del</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
