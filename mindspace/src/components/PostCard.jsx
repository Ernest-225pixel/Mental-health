import { Link } from "react-router-dom";

function PostCard({ post }) {
  return (
    <article className="post-card">
      <span className="post-category">{post.category}</span>

      <h2>{post.title}</h2>

      <p className="post-author">Posted by {post.author}</p>

      <p className="post-preview">{post.content}</p>

      <Link to={`/post/${post.id}`} className="view-post">
        View Problem & Ideas →
      </Link>
    </article>
  );
}

export default PostCard;
