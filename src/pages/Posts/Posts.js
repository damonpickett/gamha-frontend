import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Posts.css";

const Posts = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10; // Adjust this value based on your pagination settings
  const firstPostRef = useRef(null);

  const fetchPosts = (url) => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setList(response.data.results);
        setCount(response.data.count);
        setLoading(false);
        console.log("Response Data:", response.data);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;
    fetchPosts(`${apiUrl}/api/posts/`);
  }, []);

  const handlePageClick = (pageNumber) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    fetchPosts(`${apiUrl}/api/posts/?page=${pageNumber}`);
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(count / postsPerPage);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (firstPostRef.current) {
      firstPostRef.current.scrollIntoView({ behavior: "smooth" });
    }
    const timer = setTimeout(() => {
      document.querySelector(".page-fade-in-transition").style.opacity = 1;
    }, 200);
    return () => clearTimeout(timer);
  }, [currentPage]);

  return (
    <div
      className={`page-fade-in-transition ${
        loading ? "loading" : ""
      }`}
    >
      <div className="blog-list-banner">
        <div className="blog-list-overlay-text">
          <h1 className="blog-list-h1">Posts</h1>
        </div>
      </div>
      {list.map((post, index) => (
        <div
          key={post.id}
          className="blog-preview shared-padding shared-wrapping"
          ref={index === 0 ? firstPostRef : null}
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
            <p className="blurb">{post.blurb}</p>
          </div>
          <Link to={`/blogpost/${post.id}`}>Read More</Link>
        </div>
      ))}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`page-number ${currentPage === index + 1 ? "active" : ""}`}
            onClick={() => handlePageClick(index + 1)}
            disabled={loading}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Posts;