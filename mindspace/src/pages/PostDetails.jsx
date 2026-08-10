import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../supabaseClient";

function PostDetails() {
  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [replies, setReplies] = useState([]);
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPost();
    fetchReplies();
  }, [id]);

  const fetchPost = async () => {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error loading post:", error);
      setLoading(false);
      return;
    }

    setPost(data);
    setLoading(false);
  };

  const fetchReplies = async () => {
    const { data, error } = await supabase
      .from("replies")
      .select("*")
      .eq("post_id", id)
      .order("created_at", { ascending: true });

    if (error) {
      console.error("Error loading replies:", error);
      return;
    }

    setReplies(data || []);
  };

  const handleReport = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to report this post?"
    );

    if (!confirmed) {
      return;
    }

    const { error } = await supabase
      .from("reports")
      .insert([
        {
          post_id: id,
          reason: "Community report",
        },
      ]);

    if (error) {
      console.error("Error reporting post:", error);
      alert("Could not submit the report.");
      return;
    }

    alert("Thank you. The post has been reported for review.");
  };

  const handleReply = async (e) => {
    e.preventDefault();

    if (!reply.trim()) {
      return;
    }

    const { data, error } = await supabase
      .from("replies")
      .insert([
        {
          post_id: id,
          author: "Anonymous",
          content: reply,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Error adding reply:", error);
      alert("Could not submit your idea.");
      return;
    }

    setReplies((currentReplies) => [...currentReplies, data]);

    setReply("");
  };

  if (loading) {
    return (
      <main className="post-details-page">
        <p>Loading post...</p>
      </main>
    );
  }

  if (!post) {
    return (
      <main className="post-details-page">
        <h1>Post not found</h1>

        <Link to="/feed">Back to Community</Link>
      </main>
    );
  }

  return (
    <main className="post-details-page">
      <Link to="/feed" className="back-link">
        ← Back to Community
      </Link>

      <article className="post-details-card">
        <span className="post-category">{post.category}</span>

        <h1>{post.title}</h1>

        <p className="post-author">Posted by {post.author}</p>

        <p className="post-content">{post.content}</p>
        <button
  className="report-button"
  onClick={handleReport}
>
  Report this post
</button>
      </article>

      <section className="replies-section">
        <h2>Ideas from the Community</h2>

        {replies.length === 0 ? (
          <p className="no-replies">
            No ideas yet. Be the first to help this student.
          </p>
        ) : (
          <div className="replies-list">
            {replies.map((item) => (
              <div className="reply-card" key={item.id}>
                <strong>{item.author}</strong>

                <p>{item.content}</p>
              </div>
            ))}
          </div>
        )}

        <form className="reply-form" onSubmit={handleReply}>
          <label htmlFor="reply">Share your idea</label>

          <textarea
            id="reply"
            rows="5"
            placeholder="What advice or idea could help?"
            value={reply}
            onChange={(e) => setReply(e.target.value)}
          />

          <button type="submit">Share Idea</button>
        </form>
      </section>
    </main>
  );
}

export default PostDetails;
