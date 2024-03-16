import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./BlogPost.css";

function BlogPost() {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/posts/")
      .then((response) => {
        setPosts(response.data);
        const currentPost = response.data.find((p) => p.id === parseInt(id));
        setPost(currentPost);
      })
      .catch((error) => console.error(error));
  }, [id]);

  useEffect(() => {
    const page = document.querySelector(".page-fade-in-transition");
    // Reset the opacity to 0 every time a new post is loaded
    page.style.opacity = 0;
  
    const timer = setTimeout(() => {
      // Set the opacity to 1 to apply the fade-in effect
      page.style.opacity = 1;
    }, 200);
  
    return () => clearTimeout(timer);
  }, [post]);

  const currentIndex = posts.findIndex((p) => p.id === post?.id);
  const previousPost = posts[currentIndex - 1];
  const nextPost = posts[currentIndex + 1];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [previousPost, nextPost]);

  return (
    <div className="page-fade-in-transition">
      {post ? (
        <div className="blog-post shared-padding">
          <div className="shared-title">
            <h1>{post.title}</h1>
            <h2>{post.subtitle}</h2>
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
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
        <div>Loading...</div>
      )}
    </div>
  );
}

export default BlogPost;
