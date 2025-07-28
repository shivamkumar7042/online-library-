import { useParams } from "react-router-dom"
import { mockBooks } from "../utils/books-details"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// Will use UseParams hook to get the id and display the book details based on the id of the clicked book

export default function Bookdesc(){
     const [books,setBooks] = useState([]);
     const user_books = useSelector((state)=>state.books.items);
      useEffect(() => {
    setBooks([...user_books, ...mockBooks]);
  }, [user_books]); // runs only when the state updates 

     const { id } = useParams(); // Get book ID from URL
     if (!books.length) return <h1>Loading...</h1>; // Prevents accessing undefined

    const book = books.find(b => b.id === parseInt(id)); // Find book by ID

    if (!book) return <h1>Book not found</h1>; // Handle invalid book ID

//     Displaying the entire container of book details
return(
     <div className="Book-container">
        <div className="Book-detail">
        <img src={`${book.cover_img}`} alt={`${book.id} book`} className="Book-img" />
        <div className="Detail-text">
        <h1 className="Book-title">{book.title}</h1>
        <h2 className="Book-author"> <span className="span-text">By:</span> {book.author}</h2>
        <p className="Book-description"><span className="span-text">Description: </span>{book.description}</p>
        <div className="mini-desc">
            <p className="end-desc"><span className="span-text">Rating: </span>{book.rating}</p>
             <p className="end-desc"><span className="span-text">Genre: </span>{book.genre}</p>
             </div>
             <Link to="/Search"><button className="desc-btn">Go to Book</button></Link>
        </div>
        
        </div>
        </div>
)
}