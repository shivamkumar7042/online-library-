import { useRouteError } from "react-router-dom"
import { Link } from "react-router-dom";
export default function Error(){
        const errorMessage = useRouteError();
     

    return(
        <div className="Error-Message">
            <h1 className="Error-title">Error Page</h1>
            <p className="Error-para">Hmmm...Cannot understand your request <i className="fa-solid fa-face-sad-tear icon-error"></i></p>
            <p className="Error-status">{errorMessage.status}</p>
            <p className="Error-data">{errorMessage.data}</p>
            <Link to="/"><button className="return-btn">Go Back</button></Link>
        </div>
        
    )
}