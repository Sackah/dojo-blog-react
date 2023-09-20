import { Link } from "react-router-dom";

const Navbar = () => {
    const style = {
        color: 'white',
        backgroundColor: '#f1356d',
        borderRadius: '8px'
    }

    return ( 
        <div className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to="/dojo-blog-react">Home</Link>
                <Link to="/dojo-blog-react/create"
                    style={style}
                >New Blog</Link>
            </div>
        </div>
     );
}
 
export default Navbar;