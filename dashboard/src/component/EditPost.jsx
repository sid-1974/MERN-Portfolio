import React, { useState } from 'react';
import '../css/EditPost.css'

function EditPost() {
  // Assume these are the initial values fetched from the database for editing
  const [image, setImage] = useState(''); // Initial image URL (if any)
  const [heading, setHeading] = useState('Sample Heading');
  const [content, setContent] = useState('Sample content for the post.');

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send updated data to backend
    console.log('Updated Post:', { image, heading, content });
  };

  return (
    <div className="edit-post">
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        {/* Row 1: Picture */}
        <div className="form-group">
          <label htmlFor="image">Update Picture:</label>
          <input type="file" id="image" accept="image/*" onChange={handleImageChange} />
          {image && <img src={image} alt="Selected" className="preview-image" />}
        </div>

        {/* Row 2: Heading */}
        <div className="form-group">
          <label htmlFor="heading">Edit Heading:</label>
          <input
            type="text"
            id="heading"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            placeholder="Enter post heading"
            required
          />
        </div>

        {/* Row 3: Content */}
        <div className="form-group">
          <label htmlFor="content">Edit Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter post content"
            rows="5"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit">Update Post</button>
      </form>
    </div>
  );
}

export default EditPost;

