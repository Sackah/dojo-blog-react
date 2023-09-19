import { useState } from "react";
import blogManager from "./BlogManager";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault(); //prevent default refresh page action
        setIsPending(true);

        setTimeout(()=>{
            blogManager.add(title, body, author);
            setIsPending(false);
            history.push('/');
        }, 1000)
    }

    return ( 
        <div className="create">
            <h2>Add new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text" required value={title} onChange={(e)=>(setTitle(e.target.value))} 
                />
                <label>Blog body:</label>
                <textarea
                    required value={body} onChange={(e)=>(setBody(e.target.value))}
                >
                </textarea>
                <label>Blog author:</label>
                <input 
                    type="text" required value={author} onChange={(e)=>(setAuthor(e.target.value))}
                />
                {!isPending && <button>Add blog</button>}
                {isPending && <button>Adding blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;