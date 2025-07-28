import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBooks } from "../features/bookSlice";
import { mockBooks } from "../utils/books-details";
import { useNavigate } from "react-router-dom";

export default function AddNew() {
    const [error, setError] = useState(null); // used for setting error
    const [book, setbook] = useState({
        title: "",
        author: "",
        genre: "",
        description: "",
        cover_img: "",
    }); // sets the values of the book to be added
    const navigate = useNavigate(); // Used for navigating to search page using react router

    const dispatch = useDispatch(); // Used for dispatching an action to the store when the user enters the details

    function handleChange(e) {
        setbook({
            ...book,
            id: mockBooks.length + 1,
            [e.target.name]: e.target.value,
        });
    } // whenever the textbox value changes (user types in any values), the new book details are updated (state gets updated).

    function handleAddBook(e) {
        e.preventDefault()
        if (!book.title || !book.author || !book.genre || !book.description) {
            setError("Please fill in all fields"); // Set error message if any field is empty
        } else if (book.cover_img && !book.cover_img.startsWith("http")) {
            setError("Please enter a valid URL for the image"); // Set error message if URL is invalid
        } else {
            setError(null); // Clear error message if all fields are valid
            dispatch(addBooks(book)); // Update Redux state with the new book
            setbook({ // Reset book state properly
                title: "",
                author: "",
                genre: "",
                description: "",
                cover_img: "",
            });
            navigate("/Search"); // Redirect **only after successful validation**

        }
    }

    return (
        <>
            <h1 className="Add-header">Add a New Book</h1>
            <p className="Error-text">{error !== null && error}</p>
            <form className="Add-Book">
                <div className="Add-Container">
                    <label className="Add-text">Book Title:</label>
                    <input type="text" name="title" className="Add-input" onChange={handleChange} placeholder="Enter the Book Name" />
                </div>
                <div className="Add-Container">
                    <label className="Add-text">Book Author:</label>
                    <input type="text" name="author" className="Add-input" onChange={handleChange} placeholder="Enter the Book Author" />
                </div>
                <div className="Add-Container">
                    <label className="Add-text">Book Description:</label>
                    <textarea name="description" className="Add-input max-h-20" onChange={handleChange} placeholder="Enter description"></textarea>
                </div>
                <div className="Add-Container">
                    <label className="Add-text">Book Genre:</label>
                    <input type="text" name="genre" className="Add-input" onChange={handleChange} placeholder="Enter Genre" />
                </div>
                <div className="Add-Container">
                    <label className="Add-text">Book Image:</label>
                    <input type="text" name="cover_img" className="Add-input" onChange={handleChange} placeholder="Enter Image URL" />
                </div>
                    <button className="Add-btn" onClick={handleAddBook}>Add Book</button>
            </form>
        </>
    );
}