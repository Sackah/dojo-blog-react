import BlogList from "./BlogList";
import blogManager from "./BlogManager";
import { useEffect, useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState(null); 
    const [isPending, setIsPending] = useState(true);
    
    useEffect(()=>{
        setTimeout(()=>{
            setBlogs(blogManager.getall());
            setIsPending(false);
        },1000)
    },[blogs]) //simulate a fetch request
    
    /*const [blogs] = useState(blogManager.getall());*/

    return ( 
        <div className="home">
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs}/>}
        </div>
     );
}
 
export default Home;