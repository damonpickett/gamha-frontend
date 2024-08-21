import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ancientMatriarch from "../../assets/images/blog-posts/ancient-matriarch-750x552.jpg";
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

  const currentIndex = posts.findIndex((p) => p.id === post?.id);
  const nextPost = posts[currentIndex + 1];

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
          <h1 className="tagline">God, Dreams, Culture, and Psychedelics</h1>
          <h2 className="author">A Blog by Damon Andrew</h2>
        </div>
      </div>

      <div className="shared-wrapping">
        <div className="blog-preview">
          <div className="shared-title">
            <h1>What brought you here?</h1>
          </div>
          <div className="shared-content">
            <p>There are over 1 billion websites, but you find yourself here. How did that happen? Was it an accident? Are you in the wrong place? Or do we have an affinity? The world got so crazy I couldn’t maintain sanity believing that matter was all that mattered. I came to this place when I opened myself to the possibility that there was more to life than what my five senses were reporting. If that’s where you’re at, then I invite you to go a little deeper…</p>
          </div>
          <div className="in-page-nav-section">
            <Link className="in-page-nav" to="/bloglist">
              Enter
            </Link>
          </div>
        </div>
        <div className="page-break shared-padding">
          <h2>Or start here...</h2>
        </div>
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
