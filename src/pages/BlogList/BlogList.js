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

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      document.querySelector(".page-fade-in-transition").style.opacity = 1;
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="blog-list-page page-fade-in-transition">
      <div className="blog-list-banner">
        <div className="blog-list-overlay-text">
          <h1 className="blog-list-h1">Blog List</h1>
        </div>
      </div>
      {list.map((post) => (
        <div
          key={post.id}
          className="blog-preview shared-padding shared-wrapping"
        >
          <div className="shared-title">
            <h1>
              <Link className="inherit-style" to={`/blogpost/${post.id}`}>
                {post.title}
              </Link>
            </h1>
            <h2>{post.subtitle}</h2>
          </div>
          <div className="blog-post-image">
            <img src={post.post_cover} alt={post.title} />
          </div>
          <div className="blog-blurb">
            <p>{post.blurb}</p>
          </div>
          <Link to={`/blogpost/${post.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
