import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;
    axios
      .get(`${apiUrl}/api/posts/`)
      .then((response) => {
        const posts = response.data.results; // Use response.data.results
        console.log("RESPONSE DATA:", response.data);
        console.log("POSTS:", posts);
        if (posts && posts.length > 0) {
          const mostRecentPost = posts.reduce(
            (max, post) => (post.id > max.id ? post : max),
            posts[0]
          );
          setPost(mostRecentPost);
        }
      })
      .catch((error) => console.error(error));
  }, []);

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
          <h1 className="tagline">
            God, The Ancient Matriarch, and The Haunting Aliens
          </h1>
          <h2 className="author">The Blog of Damon Andrew</h2>
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
              <Link className="in-page-nav" to="/posts">
                See All
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
