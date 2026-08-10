import { useState } from "react";

function CreatePost() {
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("Anonymous");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      category,
      author,
      title,
      content,
    });

    alert("Your post has been submitted!");

    setCategory("");
    setAuthor("Anonymous");
    setTitle("");
    setContent("");
  };

  return (
    <main className="create-page">
      <section className="create-header">
        <p className="hero-label">SHARE WITH MINDSPACE</p>

        <h1>What's on your mind?</h1>

        <p>
          Share your academic or personal problem and receive ideas
          from other students.
        </p>
      </section>

      <form className="post-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="category">Category</label>

          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select a category</option>
            <option value="Academic">Academic</option>
            <option value="Relationships">Relationships</option>
            <option value="Family">Family</option>
            <option value="Finance">Finance</option>
            <option value="Campus Life">Campus Life</option>
            <option value="Personal">Personal</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="author">How would you like to appear?</label>

          <select
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="Anonymous">Anonymous</option>
            <option value="Student">Student</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="title">Title</label>

          <input
            id="title"
            type="text"
            placeholder="Give your problem a short title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">
            Tell us what you're going through
          </label>

          <textarea
            id="content"
            rows="7"
            placeholder="Share your problem here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>

        <div className="form-note">
          <strong>Remember:</strong> Do not share passwords, phone numbers,
          addresses, or other private information.
        </div>

        <button type="submit" className="submit-button">
          Share My Problem
        </button>
      </form>
    </main>
  );
}

export default CreatePost;
