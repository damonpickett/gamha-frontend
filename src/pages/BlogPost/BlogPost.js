import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./BlogPost.css";

const BlogPost = () => {
  const [post, setPost] = useState(null);
  const [posts, setPosts] = useState([]);
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
    const apiUrl = process.env.REACT_APP_API_URL;
    const fetchAllPosts = async () => {
      let allPosts = [];
      let page = 1;
      let hasMore = true;

      while (hasMore) {
        const response = await axios.get(`${apiUrl}/api/posts/?page=${page}`);
        allPosts = allPosts.concat(response.data.results);
        hasMore = response.data.next !== null;
        page += 1;
      }

      setPosts(allPosts);
    };

    fetchAllPosts();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  const currentIndex = posts.findIndex((p) => p.id === parseInt(id, 10));
  const previousPost = currentIndex >= 0 ? posts[currentIndex + 1] : null;
  const nextPost = currentIndex <= posts.length - 1 ? posts[currentIndex - 1] : null;


  return (
    <div
      className={`page-fade-in-transition shared-wrapping ${
        fadeIn ? "fade-in" : ""
      }`}
    >
      <div className={`blog-post`}>
        <div className="shared-title">
          <h1>{post.title}</h1>
          <h2>{post.subtitle}</h2>
        </div>
        <div className="blog-post-image">
          <img src={post.post_cover} alt={post.title} />
        </div>
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>
        <p className="date">
          Originally Published: {post.originally_published.split("T")[0]}
        </p>
        <p className="date">Last Updated: {post.last_updated.split("T")[0]}</p>
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
    </div>
  );
};

export default BlogPost;
