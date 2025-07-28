import { Link } from "react-router-dom"

/* Displaying each book per container in form of cards 
and when the book is clicked or desc-btn is clicked then we will 
display the individual book based on id */
export default function BookDisplay({book}){
    return(
        <Link to={`/book/${book.id}`}>
        <div className="display-container">
        <div className="display-detail">
        <h1 className="display-title">{book.title}</h1>
        <img src={`${book.cover_img}`} alt={`${book.id} book`} className="display-img" />
        <button className="desc-btn">See description</button>
        </div>
        </div>
        </Link>
        
    )
}