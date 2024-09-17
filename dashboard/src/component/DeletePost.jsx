import React, { useState } from 'react';
import '../css/DeletePost.css'

function DeletePost() {
  const [selectedPost, setSelectedPost] = useState('');
  const [confirmation, setConfirmation] = useState(false);

  // Assume these are the posts you want to delete (this would normally be fetched from your backend)
  const posts = [
    { id: 1, title: 'First Post' },
    { id: 2, title: 'Second Post' },
    { id: 3, title: 'Third Post' },
  ];

  const handlePostChange = (e) => {
    setSelectedPost(e.target.value);
    setConfirmation(false); // Reset confirmation when selecting a new post
  };

  const handleDelete = (e) => {
    e.preventDefault();
    if (confirmation) {
      console.log(`Post deleted: ${selectedPost}`);
      // Add your delete logic here, such as sending the request to your backend.
    }
  };

  return (
    <div className="delete-post">
      <h2>Delete Post</h2>
      <form onSubmit={handleDelete}>
        {/* Row 1: Select Post */}
        <div className="form-group">
          <label htmlFor="post-select">Select Post to Delete:</label>
          <select id="post-select" value={selectedPost} onChange={handlePostChange} required>
            <option value="">-- Select a Post --</option>
            {posts.map((post) => (
              <option key={post.id} value={post.title}>
                {post.title}
              </option>
            ))}
          </select>
        </div>

        {/* Row 2: Confirmation */}
        <div className="form-group">
          <label className='checkbox-check'>
            <input
              type="checkbox"
              checked={confirmation}
              onChange={(e) => setConfirmation(e.target.checked)}
              required
            />
            Confirm you want to delete this post.
          </label>
        </div>

        {/* Submit Button */}
        <button type="submit" disabled={!confirmation}>
          Delete Post
        </button>
      </form>
    </div>
  );
}

export default DeletePost;

