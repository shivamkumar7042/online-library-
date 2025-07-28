import { useParams } from "react-router-dom";
import BookDisplay from "./BookDisplay";
import { mockBooks } from "../utils/books-details";
import { useEffect,useState } from "react";
import { useSelector } from "react-redux";
// UseParams to store the category. Filters the books based on category
export default function CategoryPage() {
  // UseState to set the state of the book based on the book store.
  const [books, setBooks] = useState([]);
 const user_books = useSelector((state) => state.books.items);

  useEffect(() => {
    setBooks([...user_books, ...mockBooks]);
  }, [user_books]);

  const { category } = useParams();
  const filteredBooks = books.filter((book) => book.genre === category);

//   Maps the books based on the category selected and sends the data to BookDisplay in order to render it
  return (
    <div className="Category">
      <h1 className="Category-title">Books in {category}</h1>
      <div className="Section-Book">
        {filteredBooks.map((book) => (
          <BookDisplay key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}