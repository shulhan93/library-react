import { useDispatch, useSelector } from "react-redux";
import { delBook } from "../../redux/books/actionCreators";
import "./BookList.css";

export default function BookList() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

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
                <button onClick={() => dispatch(delBook(book.id))}>del</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
