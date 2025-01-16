import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({handleBookmark,handleReadingTime}) => {
    const [blogs,setBlogs] = useState([])

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div>
           
           {
                blogs.map(blog => <Blog handleBookmark={handleBookmark} blog={blog} handleReadingTime={handleReadingTime} key={blog?.id}></Blog>)
           }
        </div>
    );
};

Blogs.propTypes={
    handleBookmark:PropTypes.func.isRequired,
    handleReadingTime:PropTypes.func.isRequired
}

export default Blogs;