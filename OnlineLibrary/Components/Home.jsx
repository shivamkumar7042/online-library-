import BookDisplay from "./BookDisplay"
import { mockBooks } from "../utils/books-details"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"

// Displaying a welcome message and looping through mockBooks array and creating a book container for each book
export default function Home(){
    const [books, setbooks] = useState([]);
    const redux_books = useSelector((state)=>state.books.items);
    useEffect(()=> {setbooks([...mockBooks, ...redux_books]);
  }, [redux_books])
    return(
        <>
        <h1 className="Welcome-Header"> Online Library System</h1>
        <div className="Section-Book">
             {
            books.map(book=> <BookDisplay book={book}/>)
        }
      
        </div>
        </>
       
    )
}