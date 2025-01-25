import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./BlogList.css";

const BlogList = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

  const fetchPosts = (url) => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        console.log("RESPONSE DATA:", response.data);
        setList(response.data.results);
        setNextPage(response.data.next);
        setPrevPage(response.data.previous);
        setLoading(false);
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

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      document.querySelector(".page-fade-in-transition").style.opacity = 1;
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`blog-list-page page-fade-in-transition ${loading ? 'loading' : ''}`}>
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
            <p className="blurb">{post.blurb}</p>
          </div>
          <Link to={`/blogpost/${post.id}`}>Read More</Link>
        </div>
      ))}
      <div className="pagination">
        {prevPage && (
          <button onClick={() => fetchPosts(prevPage)} disabled={loading}>
            Previous
          </button>
        )}
        {nextPage && (
          <button onClick={() => fetchPosts(nextPage)} disabled={loading}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default BlogList;
