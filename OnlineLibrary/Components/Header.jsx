import { Link } from "react-router-dom";

export default function Header(){
    return(
        <ul className="Nav">
            <Link to="/"><li className="Nav-link">Home</li></Link>
            <Link to="/Search"><li className="Nav-link">BrowseBooks</li></Link>
            <Link to="/AddNew"><li className="Nav-link">AddBook</li></Link>

        </ul>
    )
}