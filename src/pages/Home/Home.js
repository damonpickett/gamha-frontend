import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;
    axios
      .get(`${apiUrl}/api/posts/`)
      .then((response) => {
        setPosts(response.data);
        const currentPost = response.data.find((p) => p.id === 1);
        setPost(currentPost);
      })
      .catch((error) => console.error(error));
  }, []);

  let currentIndex = -1;
  let nextPost = null;
  
  if (posts.length > 0 && post) {
    currentIndex = posts.findIndex((p) => p.id === post.id);
    nextPost = posts[currentIndex - 1];
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector(".page-fade-in-transition").style.opacity = 1;
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-page page-fade-in-transition">
      <div className="jumbotron">
        <div className="overlay-text">
          <h1 className="tagline">God, Dreams, Consciousness, and Psychedelics</h1>
          <h2 className="author">A Blog by Damon Andrew</h2>
        </div>
      </div>

      <div className="shared-wrapping">
        {post ? (
          <div className="blog-post">
            <div className="shared-title">
              <h1>{post.title}</h1>
              <h2>{post.subtitle}</h2>
            </div>
            <div className="blog-post-image">
              <img src={post.post_cover} alt="Ancient Matriarch" />
            </div>
            <div
              className="shared-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>
            <p className="date">
              Originally Published: {post.originally_published.split("T")[0]}
            </p>
            <div className="blog-post-nav-section">
              {nextPost && (
                <Link className="in-page-nav" to={`/blogpost/${nextPost.id}`}>
                  Next
                </Link>
              )}
              <Link className="in-page-nav" to="/bloglist">
                All
              </Link>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default Home;
