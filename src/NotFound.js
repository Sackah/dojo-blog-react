import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>This page does not exist</h2>
            <Link to="/dojo-blog-react">
                <p>return to the homepage...</p>
            </Link>
        </div>
     );
}
 
export default NotFound;