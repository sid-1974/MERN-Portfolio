import React, { useState } from 'react';
import '../css/AddPost.css'

function AddPost() {
  const [image, setImage] = useState(null);
  const [heading, setHeading] = useState('');
  const [content, setContent] = useState('');

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission, e.g., send data to backend
    console.log('Submitted:', { image, heading, content });
  };

  return (
    <div className="add-post">
      <h2>Add Post</h2>
      <form onSubmit={handleSubmit}>
        {/* Row 1: Picture */}
        <div className="form-group">
          <label htmlFor="image">Picture:</label>
          <input type="file" id="image" accept="image/*" onChange={handleImageChange} />
          {image && <img src={image} alt="Selected" className="preview-image" />}
        </div>

        {/* Row 2: Heading */}
        <div className="form-group">
          <label htmlFor="heading">Heading:</label>
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
          <label htmlFor="content">Content:</label>
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
        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
}

export default AddPost;
