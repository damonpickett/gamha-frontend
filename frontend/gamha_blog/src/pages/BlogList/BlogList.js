import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./BlogList.css";

const BlogList = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        axios
          .get("http://localhost:8000/api/posts/")
          .then((response) => setList(response.data))
          .catch((error) => console.error(error));
      }, []);

      

    return (
        <div className="blog-list-page">
            {list.map((post) => (
                <div key={post.id} className="blog-preview shared-padding">
                    <h1><Link className='inherit-style' to={`/blogpost/${post.id}`}>{post.title}</Link></h1>
                    <h2>{post.subtitle}</h2>
                    <p dangerouslySetInnerHTML={{ __html: post.content.substring(0, 150) + '...' }}></p>
                    <Link to={`/blogpost/${post.id}`}>Read More</Link>
                </div>
            ))}
        </div>
    );
};

export default BlogList;