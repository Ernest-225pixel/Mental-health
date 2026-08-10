import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import PostCard from "../components/PostCard";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error loading posts:", error);
      setLoading(false);
      return;
    }

    setPosts(data || []);
    setLoading(false);
  };

  if (loading) {
    return (
      <main className="feed-page">
        <p>Loading community posts...</p>
      </main>
    );
  }

  return (
    <main className="feed-page">
      <section className="feed-header">
        <p className="hero-label">MINDSPACE COMMUNITY</p>

        <h1>Community Feed</h1>

        <p>
          Explore problems shared by students and offer helpful ideas.
        </p>
      </section>

      <section className="posts-container">
        {posts.length === 0 ? (
          <div className="empty-feed">
            <h2>No posts yet</h2>
            <p>
              Be the first student to share a problem with the community.
            </p>
          </div>
        ) : (
          posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))
        )}
      </section>
    </main>
  );
}

export default Feed;
