import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>This page does not exist</h2>
            <Link to="/">
                <p>return to the homepage...</p>
            </Link>
        </div>
     );
}
 
export default NotFound;