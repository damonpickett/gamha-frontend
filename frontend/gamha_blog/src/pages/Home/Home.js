import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import "./Home.css";

const Home = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/posts/3/')
      .then(response => setPost(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="home-page">
      <div className="jumbotron">
        <h1 className="tagline">God, Dreams, Intuition, and Psychedelics</h1>
        <h2 className="author">A Blog by Damon Pickett</h2>
      </div>
      <div className="blog-preview shared-padding">
        <div className="shared-title">
          <h1>What brought you here?</h1>
        </div>
        <div className="shared-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="in-page-nav-section">
          <Link className="in-page-nav" to="/bloglist">
            Enter
          </Link>
        </div>
      </div>
      <div className="page-break shared-padding">
        <h2>Latest Post...</h2>
      </div>
      {post ? (
      <div className="blog-post shared-padding">
        <div className="shared-title">
          <h1>{post.title}</h1>
          <h2>{post.subtitle}</h2>
          <p className="date">{post.originally_published}</p>
        </div>
        <div className="shared-content">
          <p>{post.content}</p>
        </div>
      </div>
    ) : (
      <div>Loading...</div>
    )}
    </div>
  );
};

export default Home;
