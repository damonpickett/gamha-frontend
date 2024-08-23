import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./BlogPost.css";

function BlogPost() {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(null);
  const [fadeIn, setFadeIn] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setFadeIn(true);
    const timer = setTimeout(() => setFadeIn(false), 1000);
    return () => clearTimeout(timer);
  }, [id]);

  useEffect(() => {
    const page = document.querySelector(".page-fade-in-transition");
    // Reset the opacity to 0 every time a new post is loaded
    page.style.opacity = 0;

    // Clear the post state to prevent displaying the old content
    setPost(null);

    const apiUrl = process.env.REACT_APP_API_URL;

    axios
      .get(`${apiUrl}/api/posts/`)
      .then((response) => {
        setPosts(response.data);
        const currentPost = response.data.find((p) => p.id === parseInt(id));
        setPost(currentPost);

        // Apply the fade-in effect after the new post data has been fetched
        requestAnimationFrame(() => {
          page.style.opacity = 1;
        });
      })
      .catch((error) => console.error(error));
  }, [id]);

  const currentIndex = posts.findIndex((p) => p.id === post?.id);
  const previousPost = posts[currentIndex - 1];
  const nextPost = posts[currentIndex + 1];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [previousPost, nextPost]);

  return (
    <div className="page-fade-in-transition shared-wrapping">
      {post ? (
        <div className={`blog-post ${fadeIn ? "blog-post-fade-in" : ""}`}>
          <div className="shared-title">
            <h1>{post.title}</h1>
            <h2>{post.subtitle}</h2>
          </div>
          <div className="blog-post-image">
            <img src={post.post_cover} alt={post.title} />
          </div>
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }}></div>
          <p className="date">
            Originally Published: {post.originally_published.split("T")[0]}
          </p>
          <div className="blog-post-nav-section">
            {previousPost && (
              <Link className="in-page-nav" to={`/blogpost/${previousPost.id}`}>
                Prev
              </Link>
            )}
            {nextPost && (
              <Link className="in-page-nav" to={`/blogpost/${nextPost.id}`}>
                Next
              </Link>
            )}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default BlogPost;
