import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./BlogPost.css";

const BlogPost = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setFadeIn(true);
  }, [id]);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;
    axios
      .get(`${apiUrl}/api/posts/${id}/`)
      .then((response) => {
        setPost(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className={`page-fade-in-transition shared-wrapping ${fadeIn ? "fade-in" : ""}`}>
      <div className={`blog-post`}>
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
        <p className="date">
          Last Updated: {post.last_updated.split("T")[0]}
        </p>
        <div className="blog-post-nav-section">
          <Link className="in-page-nav" to="/posts">
            Back to Posts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
