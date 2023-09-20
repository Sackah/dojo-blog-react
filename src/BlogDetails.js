import { useParams } from "react-router-dom";
import blogManager from "./BlogManager";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams(); //get id from url
    const blog = blogManager.get(parseFloat(id)); //fetch blog matching the id
    const history = useHistory();

    const handleClick = () => {
        blogManager.remove(parseFloat(id)); //remove the correct blog by converting the id to a number
        history.push('/dojo-blog-react');
    }

    return ( 
        <div className="blog-details">
            <article>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={handleClick}>Delete blog</button>
            </article>
        </div>
     );
}
 
export default BlogDetails;