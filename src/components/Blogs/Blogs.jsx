import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    const [blogs,setBlogs] = useState([])

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div>
           <h1 className="text-4xl"> Blogs: {blogs.length} </h1> 
        </div>
    );
};

export default Blogs;