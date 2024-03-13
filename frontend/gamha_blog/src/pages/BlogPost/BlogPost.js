import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

function BlogPost() {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(null);
  const { id } = useParams();

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8000/api/posts/${id}/`)
  //     .then((response) => setPost(response.data))
  //     .catch((error) => console.error(error));
  // }, [id]);

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

  const currentIndex = posts.findIndex((p) => p.id === post?.id);
  const previousPost = posts[currentIndex + 1];
  const nextPost = posts[currentIndex - 1];

  return (
    <>
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
    </>
  );
}

export default BlogPost;
